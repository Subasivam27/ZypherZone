import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./about";
import { LifeBuoy, Mail, MessageCircle, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { saveHelpRequest } from "@/lib/mongodb";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — ZyphorZone" },
      { name: "description", content: "Find answers to common questions or reach the ZyphorZone team for support." },
      { property: "og:title", content: "Help Center — ZyphorZone" },
      { property: "og:description", content: "Support and FAQs for ZyphorZone clients." },
    ],
  }),
  component: Help,
});

const faqs = [
  { q: "How do I start a project?", a: "Scroll down to our contact form, fill out your project needs (or use the interactive calculator), and we'll reply within 24 hours to map out a development scope." },
  { q: "What services does ZyphorZone offer?", a: "We offer full-stack web engineering, custom mobile apps (iOS & Android), UI/UX product prototyping, branding/identity guidelines, performance campaigns, and technical SEO audits." },
  { q: "How is billing structured?", a: "We work on structured milestone payments agreed upfront in a project agreement. You pay for delivery phases (e.g. Wireframes approved, Alpha launch, Final code handover) — no surprise hourly invoices." },
  { q: "Do you sign NDAs?", a: "Yes. All engagements start with a Mutual NDA, and we hand over complete intellectual property and source code ownership upon milestone project completion." },
  { q: "What is your core tech stack?", a: "We specialize in modern engineering: Next.js, React, Node.js, Supabase, PostgreSQL, React Native, and Tailwind CSS. We tailor frameworks to fit your performance needs." },
  { q: "How long does a typical build take?", a: "Custom responsive websites take 3–5 weeks. SaaS products, cross-platform mobile apps, and custom web portals typically take 6–12 weeks from scope to launch." },
];

function Help() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmitHelp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) return setError("Please enter your name.");
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return setError("Please enter a valid email address.");
    }
    if (!topic) return setError("Please select a topic.");
    if (!trimmedMessage) return setError("Please enter details of your request.");

    setSubmitting(true);
    try {
      await saveHelpRequest({
        data: {
          name: trimmedName,
          email: trimmedEmail,
          topic,
          message: trimmedMessage,
        }
      });
      setSubmitted(true);
      setName("");
      setEmail("");
      setTopic("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to submit help ticket to database.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell title="Help Center" subtitle="Answers, guides and resources. Our designated leads respond within 24 hours.">
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Mail, title: "Email Us", desc: "Zypherzone07@gmail.com", href: "mailto:Zypherzone07@gmail.com" },
          { icon: MessageCircle, title: "Instagram DM", desc: "@zyphorzone", href: "https://instagram.com/zyphorzone" },
          { icon: LifeBuoy, title: "Contact Form", desc: "Open inquiry form", href: "/#contact" },
        ].map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="card-3d rounded-2xl p-6 hover-card-glow block"
          >
            <div className="icon-3d h-10 w-10 flex items-center justify-center mb-4">
              <c.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">{c.title}</h3>
            <div className="text-xs text-muted-foreground mt-1">{c.desc}</div>
          </a>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-display tracking-tight text-foreground flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="card-3d rounded-2xl p-6 group transition-all duration-300"
            >
              <summary className="cursor-pointer font-bold font-display list-none flex justify-between items-center text-foreground hover:text-primary transition-colors">
                {f.q}
                <span className="text-primary font-light text-2xl group-open:rotate-45 transition-transform duration-300 select-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/10 pt-4">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* HELP FORM */}
      <div className="mt-20 border-t border-border/20 pt-16 max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold font-display tracking-tight text-foreground">
            Still need help? Submit a Ticket
          </h2>
          <p className="text-xs text-muted-foreground">
            Describe your issue and our technical support lead will connect with you.
          </p>
        </div>

        <form onSubmit={onSubmitHelp} className="card-3d p-6 md:p-8 space-y-4" noValidate>
          <div className="text-xs uppercase font-extrabold tracking-wider text-primary mb-2">
            Support Request
          </div>

          <label className="block">
            <span className="block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Full Name
            </span>
            <input
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="form-input"
            />
          </label>

          <label className="block">
            <span className="block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Email Address
            </span>
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="form-input"
            />
          </label>

          <label className="block">
            <span className="block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Topic / Inquiry Category
            </span>
            <select
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="form-input text-foreground"
            >
              <option value="" disabled>Select support topic...</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Billing / Payment">Billing & Payments</option>
              <option value="Project Update">Active Project Enquiry</option>
              <option value="General Feedback">General Feedback & Suggestions</option>
            </select>
          </label>

          <label className="block">
            <span className="block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Issue / Message Details
            </span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your issue or feedback in detail..."
              className="form-input min-h-[110px] resize-y"
            />
          </label>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 font-medium">
              {error}
            </div>
          )}
          {submitted && !error && (
            <div className="text-sm text-primary bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 font-semibold text-center">
              ✨ Support ticket saved successfully to local MongoDB database!
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full !py-3.5 text-center flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting Ticket..." : "Submit Support Ticket"}
            {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
          </button>
        </form>
      </div>
    </PageShell>
  );
}
