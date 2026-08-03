import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/zz";
import logo from "@/assets/logo.png";
import wordmark from "@/assets/wordmark.png";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Login or Register — ZyphorZone" },
      { name: "description", content: "Sign in or create your ZyphorZone account to manage projects and enquiries." },
      { property: "og:title", content: "Login or Register — ZyphorZone" },
      { property: "og:description", content: "Sign in or create your ZyphorZone account." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/" });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate({ to: "/" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const onGoogle = async () => {
    setError(null);
    const res = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    const msg = res.error?.message ?? "";
    // Ignore user-cancelled popups — nothing went wrong.
    if (res.error && !/cancel/i.test(msg)) setError(msg || "Google sign-in failed");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      if (mode === "register") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: name.trim() },
          },
        });
        if (error) throw error;
        setInfo("Account created! Check your email to confirm, then sign in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="card-3d rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="ZyphorZone" className="h-10 w-10 object-contain" />
            <div>
              <img src={wordmark} alt="ZyphorZone wordmark" className="h-5 object-contain" />
              <div className="text-xs text-muted-foreground">
                {mode === "login" ? "Welcome back" : "Create your account"}
              </div>
            </div>
          </div>

          <div className="flex bg-surface/60 border border-border/60 rounded-full p-1 mb-6 text-sm">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 rounded-full transition ${mode === "login" ? "bg-[image:var(--gradient-brand)] text-primary-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 py-2 rounded-full transition ${mode === "register" ? "bg-[image:var(--gradient-brand)] text-primary-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Register
            </button>
          </div>

          <button
            type="button"
            onClick={onGoogle}
            className="w-full flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/60 hover:bg-background/80 px-4 py-3 text-sm font-medium transition"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1 bg-border/60" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest">or</span>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            {mode === "register" && (
              <LabeledInput icon={<User className="h-4 w-4" />} label="Full Name">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  placeholder="Jane Doe"
                  className="form-input"
                />
              </LabeledInput>
            )}
            <LabeledInput icon={<Mail className="h-4 w-4" />} label="Email">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                placeholder="you@company.com"
                className="form-input"
              />
            </LabeledInput>
            <LabeledInput icon={<Lock className="h-4 w-4" />} label="Password">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                maxLength={72}
                placeholder="At least 6 characters"
                className="form-input"
              />
            </LabeledInput>

            {error && (
              <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
            {info && (
              <div className="text-sm text-primary bg-primary/10 border border-primary/30 rounded-lg px-3 py-2">
                {info}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full !py-3 disabled:opacity-60">
              {loading ? "Please wait…" : mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-5">
            By continuing you agree to our{" "}
            <Link to="/terms" className="underline hover:text-primary">Terms</Link> and{" "}
            <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

function LabeledInput({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.4 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.3 0-9.7-3.4-11.3-8L6.2 33C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.6l6.2 5.2c-.4.4 6.5-4.7 6.5-14.8 0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}
