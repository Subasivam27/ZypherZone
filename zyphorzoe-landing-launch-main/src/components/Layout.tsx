import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupaUser } from "@supabase/supabase-js";
import logo from "@/assets/logo.png";
import wordmark from "@/assets/wordmark.png";
import {
  ArrowRight,
  LogOut,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  Users,
  HelpCircle,
  ShieldAlert,
} from "lucide-react";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="ZyphorZone logo"
      width={512}
      height={512}
      loading="lazy"
      className={`${className} object-contain transition-transform duration-300 hover:rotate-6`}
    />
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<SupaUser | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide headers & footers on the auth page
  const isAuthPage = location.pathname === "/auth";

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      sub.subscription.unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  };

  const navLinks = [
    { name: "Why Us", href: "/#why" },
    { name: "How It Works", href: "/#how" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/#contact" },
    { name: "Help Center", href: "/help" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Decorative background mesh blobs */}
      {!isAuthPage && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] soft-glow" />
          <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-accent/800 rounded-full blur-[140px] soft-glow opacity-30" />
          <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[110px] soft-glow" />
        </div>
      )}

      {/* HEADER */}
      {!isAuthPage && (
        <header
          className={`sticky top-0 z-50 transition-all duration-300 w-full ${
            isScrolled
              ? "backdrop-blur-lg bg-background/80 border-b border-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
              : "backdrop-blur-md bg-background/30 border-b border-border/20 py-4"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 group">
              <Logo className="h-8 w-8 md:h-9 md:w-9" />
              <img src={wordmark} alt="ZyphorZone wordmark" className="h-5 md:h-[22px] object-contain transition-transform duration-300 group-hover:scale-102" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative py-1 hover:text-foreground transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* User Account Area / Call to Action */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="hidden lg:flex flex-col text-right">
                    <span className="text-xs text-muted-foreground">Logged in as</span>
                    <span className="text-sm font-semibold text-foreground truncate max-w-[140px]">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </div>
                  <button
                    onClick={signOut}
                    className="btn-ghost flex items-center gap-2 text-xs !py-2 !px-4 hover:border-destructive/40 hover:text-destructive hover:bg-destructive/10"
                    aria-label="Sign out"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Sign out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="btn-primary flex items-center gap-1.5 text-xs md:text-sm !py-2 !px-4 md:!py-2.5 md:!px-5"
                >
                  Join / Login
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex md:hidden flex-col gap-1.5 p-1 text-muted-foreground hover:text-foreground focus:outline-none"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-[2px] bg-current transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
                <span className={`w-6 h-[2px] bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-6 h-[2px] bg-current transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 glass-card mx-4 my-2 p-5 rounded-2xl border border-border/80 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 z-50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium py-1.5 hover:text-primary transition-colors border-b border-border/30 last:border-b-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </header>
      )}

      {/* MAIN WRAPPER */}
      <main className="flex-grow relative z-10 w-full">
        {children}
      </main>

      {/* FOOTER */}
      {!isAuthPage && (
        <footer className="relative z-10 border-t border-border/40 bg-surface backdrop-blur-md pt-20 pb-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 dot-matrix" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-border/20">
            {/* Branding Column */}
            <div className="space-y-5">
              <Link to="/" className="flex items-center gap-2 group">
                <Logo className="h-8 w-8" />
                <img src={wordmark} alt="ZyphorZone wordmark" className="h-[18px] md:h-5 object-contain" />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                A premium freelance startup crafting agency-grade websites, mobile apps, identities, and performance marketing campaigns for ambitious brands worldwide.
              </p>
              <div className="flex items-center gap-3.5">
                <a
                  href="https://instagram.com/zyphorzone"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 grid place-items-center rounded-xl border border-border/80 hover:border-primary/50 hover:text-primary transition-all duration-300 bg-background/40 hover:scale-105"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="mailto:Zypherzone07@gmail.com"
                  aria-label="Email"
                  className="h-10 w-10 grid place-items-center rounded-xl border border-border/80 hover:border-primary/50 hover:text-primary transition-all duration-300 bg-background/40 hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                Services
              </h4>
              <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
                {[
                  "Web Development",
                  "App Development",
                  "UI / UX Design",
                  "Brand Identity",
                  "Digital Marketing",
                ].map((s) => (
                  <li key={s}>
                    <a href="/#about" className="hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-primary transition-colors duration-200" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Company
              </h4>
              <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors duration-200">About Us</Link></li>
                <li><a href="/#how" className="hover:text-primary transition-colors duration-200">How We Build</a></li>
                <li><a href="/#contact" className="hover:text-primary transition-colors duration-200">Consultation</a></li>
                <li><a href="https://instagram.com/zyphorzone" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-200">Instagram Profile</a></li>
              </ul>
            </div>

            {/* Support / Legal Column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                Resources
              </h4>
              <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-colors duration-200">Help & FAQs</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link></li>
                <li className="flex items-center gap-2 mt-2 pt-2 border-t border-border/20 text-xs text-foreground/75">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Coimbatore, India
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>
              © {new Date().getFullYear()} ZyphorZone. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-200">Privacy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-200">Terms</Link>
              <span className="hidden sm:inline border-l border-border/60 pl-6">
                Crafted with care by a vetted freelance collective.
              </span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
