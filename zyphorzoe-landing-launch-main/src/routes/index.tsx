import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupaUser } from "@supabase/supabase-js";
import heroImg from "@/assets/hero.jpg";
import { saveEnquiry } from "@/lib/mongodb";
import {
  ArrowRight,
  Code2,
  Palette,
  Megaphone,
  PenTool,
  Smartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  User,
  Briefcase,
  Check,
  CheckCircle2,
  Activity,
  Layers,
  Settings,
  CheckSquare,
  ArrowUpRight,
  TrendingUp,
  MessageSquare,
  Star,
  Zap,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZyphorZone — Premium Freelance Solutions for Ambitious Brands" },
      {
        name: "description",
        content:
          "ZyphorZone delivers high-end web development, custom applications, modern branding, and data-driven marketing managed by a senior freelance collective.",
      },
      { property: "og:title", content: "ZyphorZone — Premium Freelance Solutions" },
      {
        property: "og:description",
        content:
          "Web, mobile app, branding and marketing services by a trusted freelance collective. Ship faster, look sharper, grow further.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const whyChoose = [
  {
    icon: Sparkles,
    title: "Vetted Senior Talent",
    desc: "Your project is hand-assigned to top-tier senior freelancers with proven industry track records.",
  },
  {
    icon: ShieldCheck,
    title: "100% Transparent Build",
    desc: "Track every step inside your client portal with real-time dashboard progress and weekly live builds.",
  },
  {
    icon: Users,
    title: "Managed Collaboration",
    desc: "A dedicated product manager handles client communication, timeline tracking, and final delivery.",
  },
  {
    icon: Clock,
    title: "Efficient Capital Allocation",
    desc: "Get agency-grade engineering and design without the overhead, retainer fees, or unexpected billable hours.",
  },
];

const steps = [
  {
    step: "01",
    title: "Consult & Scope",
    desc: "Share your business goals. We reply within 24 hours with a comprehensive technical scope and transparent pricing options.",
  },
  {
    step: "02",
    title: "Track in Real-Time",
    desc: "Monitor design systems, codebase commits, and feature branches dynamically inside your custom client dashboard.",
  },
  {
    step: "03",
    title: "Launch & Own",
    desc: "We deploy on modern infrastructure, hand over complete intellectual property, and help scale campaigns to acquire users.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Web Engineering",
    desc: "Scalable SaaS dashboards, e-commerce storefronts, and full-stack solutions built with Next.js, React, and Supabase.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native cross-platform mobile apps for iOS and Android built on React Native or Flutter.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Sleek, obvious, high-converting product interfaces, interactive prototypes, and design systems.",
  },
  {
    icon: PenTool,
    title: "Brand Strategy",
    desc: "Logos, type scales, brand guidelines, and visual assets designed to set your business apart.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    desc: "Data-focused search engine marketing, social campaigns, and high-ROI conversion rate optimization.",
  },
  {
    icon: Search,
    title: "SEO & Content",
    desc: "Technical site Audits, editorial content strategy, and page-speed optimizations to index high on Google.",
  },
];

const serviceTypes = [
  "Web Development",
  "App Development",
  "UI / UX Design",
  "Brand Identity",
  "Digital Marketing",
  "SEO & Content",
  "Other",
];

const portfolio = [
  {
    title: "Aether SaaS Analytics",
    category: "Web Engineering",
    desc: "A custom real-time monitoring dashboard featuring multi-tenant database partitioning, automated invoicing, and low-latency graphs.",
    tech: ["Next.js", "Supabase", "Recharts", "TailwindCSS"],
    stat: "140ms Load Speed",
  },
  {
    title: "Apex Fitness Native",
    category: "App Development",
    desc: "Cross-platform wellness app integrating real-time telemetry, location-based routing, social leaderboards, and offline syncing.",
    tech: ["React Native", "Node.js", "Redis", "WebSockets"],
    stat: "4.8★ App Store",
  },
  {
    title: "Vortex Digital Rebrand",
    category: "UI/UX & Identity",
    desc: "Full conceptual branding, identity guidelines, and high-conversion landing page design for an enterprise digital infrastructure brand.",
    tech: ["Figma", "Branding Guidelines", "Vite", "GSAP Animations"],
    stat: "+84% Signups",
  },
];



function Landing() {
  const [form, setForm] = useState({
    name: "",
    serviceType: "",
    phone: "",
    email: "",
    location: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estimator State
  const [estService, setEstService] = useState("Web Development");
  const [estScale, setEstScale] = useState("Standard");
  const [estFeatures, setEstFeatures] = useState<string[]>(["Authentication", "Database"]);

  const featureOptions = [
    { id: "Authentication", label: "User Auth", price: 300 },
    { id: "Database", label: "DB Integration", price: 500 },
    { id: "Admin Panel", label: "Admin Panel / CMS", price: 800 },
    { id: "Payment Gateway", label: "Payment Gateway", price: 400 },
    { id: "SEO Optimization", label: "Advanced SEO Setup", price: 250 },
  ];

  const toggleFeature = (fid: string) => {
    if (estFeatures.includes(fid)) {
      setEstFeatures(estFeatures.filter((id) => id !== fid));
    } else {
      setEstFeatures([...estFeatures, fid]);
    }
  };

  // Live Pricing Calculation Logic
  const getEstimate = () => {
    let basePrice = 800;
    let baseWeeks = 2;

    if (estService === "App Development") {
      basePrice = 1800;
      baseWeeks = 5;
    } else if (estService === "UI / UX Design") {
      basePrice = 600;
      baseWeeks = 2;
    } else if (estService === "Brand Identity") {
      basePrice = 500;
      baseWeeks = 1.5;
    } else if (estService === "Digital Marketing" || estService === "SEO & Content") {
      basePrice = 400;
      baseWeeks = 1;
    }

    // Scale multiplier
    if (estScale === "Simple") {
      basePrice *= 0.75;
      baseWeeks = Math.max(1, Math.round(baseWeeks * 0.75));
    } else if (estScale === "Advanced") {
      basePrice *= 1.5;
      baseWeeks = Math.round(baseWeeks * 1.4);
    }

    // Features additions
    estFeatures.forEach((featId) => {
      const option = featureOptions.find((o) => o.id === featId);
      if (option) {
        basePrice += option.price;
      }
    });

    const minPrice = Math.round(basePrice * 0.9);
    const maxPrice = Math.round(basePrice * 1.15);

    return {
      range: `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`,
      timeline: `${baseWeeks}-${baseWeeks + 2} Weeks`,
    };
  };

  const applyEstimateToForm = () => {
    const est = getEstimate();
    setForm((prev) => ({
      ...prev,
      serviceType: estService,
      details: `Project Scale: ${estScale}\nSelected Features: ${estFeatures.join(", ")}\nCalculated Budget Range: ${est.range}\nEstimated Timeline: ${est.timeline}`,
    }));

    // Scroll to contact form smoothly
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const location = form.location.trim();

    if (!name || name.length > 100) return setError("Please enter your name.");
    if (!form.serviceType) return setError("Please select a service type.");
    if (!/^[+\d][\d\s\-()]{6,20}$/.test(phone)) return setError("Please enter a valid phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return setError("Please enter a valid email address.");
    if (!location || location.length > 120) return setError("Please enter your location.");

    setSubmitting(true);
    try {
      await saveEnquiry({
        data: {
          name,
          email,
          phone,
          location,
          serviceType: form.serviceType,
          details: form.details,
        }
      });
      
      setSubmitted(true);
      setForm({
        name: "",
        serviceType: "",
        phone: "",
        email: "",
        location: "",
        details: "",
      });
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to save project enquiry to database.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative z-10">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-border/20">
        <div className="absolute inset-0 pointer-events-none opacity-45 tech-grid" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary font-semibold tracking-wide animate-pulse">
              <Sparkles className="h-3.5 w-3.5" />
              Next-Gen Managed Freelance Startup
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground font-display">
              Your software idea <br />
              <span className="gradient-text">engineered to scale</span>
              <br /> while you sleep.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We connect your vision with vetted senior developers and designers, managing everything end-to-end. Get full code ownership, total transparency, and launch-ready code.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#estimator" className="btn-primary flex items-center gap-1.5 group">
                Try Cost Estimator
                <Zap className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-ghost flex items-center gap-1">
                Book Consultation
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-sm text-muted-foreground border-t border-border/10">
              {["Full Code Ownership", "Zero Lock-In Contracts", "Direct Repo Access"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 font-medium">
                  <Check className="h-4.5 w-4.5 text-accent shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* DYNAMIC REACT DASHBOARD MOCKUP */}
          <div className="lg:col-span-5 relative w-full lg:max-w-md xl:max-w-lg mx-auto">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-primary to-accent opacity-20 blur-xl soft-glow" />
            <HeroProductVisual />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative bg-surface/30 border-b border-border/20 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "45+", label: "Projects Shipped" },
            { value: "12+", label: "Vetted Senior Specialists" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24h", label: "Guaranteed Scope turnaround" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-foreground font-display tracking-tight bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Why founders trust <span className="gradient-text">ZyphorZone</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              We bridge the gap between expensive agency bloat and unpredictable freelance platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="card-3d p-7 flex flex-col justify-between hover-card-glow"
              >
                <div className="space-y-5">
                  <div className="icon-3d h-12 w-12 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-display">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section id="how" className="relative py-24 md:py-32 border-y border-border/20 bg-surface/30">
        <div className="absolute inset-0 pointer-events-none opacity-10 dot-matrix" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Three Steps. <span className="gradient-text">Frictionless Launch.</span>
            </h2>
            <p className="text-muted-foreground text-base">
              A transparent, streamlined development system designed for busy product owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((item, idx) => (
              <div key={item.step} className="card-3d p-8 relative flex flex-col justify-between group overflow-hidden">
                <div className="absolute top-0 right-0 text-7xl font-black font-display text-primary/5 select-none -translate-y-4 translate-x-2 transition-transform duration-300 group-hover:scale-110">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-primary">
                    Phase {item.step}
                  </div>
                  <h3 className="text-xl font-bold font-display">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="about" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Vetted Freelance <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Whatever your technical needs, we hand-assign the optimal stack experts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="card-3d p-8 flex flex-col justify-between hover-card-glow">
                <div className="space-y-5">
                  <div className="icon-3d h-11 w-11 flex items-center justify-center">
                    <svc.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-display">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR */}
      <section id="estimator" className="relative py-24 md:py-32 border-y border-border/20 bg-surface/30">
        <div className="absolute inset-0 pointer-events-none opacity-20 tech-grid" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Interactive Scope & <span className="gradient-text">Cost Estimator</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Configure your requirements, calculate real-time rates, and apply them directly to a custom quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Options Panel */}
            <div className="lg:col-span-7 card-3d p-6 md:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-wider text-muted-foreground mb-3">
                    1. Select Service Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {["Web Development", "App Development", "UI / UX Design", "Brand Identity", "Digital Marketing"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setEstService(t)}
                        className={`py-3 px-4 rounded-xl border text-left font-medium transition ${
                          estService === t
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border/60 bg-background/30 text-muted-foreground hover:border-border hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-wider text-muted-foreground mb-3">
                    2. Choose Complexity Scale
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    {["Simple", "Standard", "Advanced"].map((scale) => (
                      <button
                        key={scale}
                        onClick={() => setEstScale(scale)}
                        className={`py-2.5 px-4 rounded-xl border font-medium text-center transition ${
                          estScale === scale
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border/60 bg-background/30 text-muted-foreground hover:border-border hover:text-foreground"
                        }`}
                      >
                        {scale}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional features for Web/App */}
                {(estService === "Web Development" || estService === "App Development") && (
                  <div>
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-muted-foreground mb-3">
                      3. Select Features Needed
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {featureOptions.map((feat) => (
                        <button
                          key={feat.id}
                          onClick={() => toggleFeature(feat.id)}
                          className={`py-2 px-3.5 rounded-lg border text-xs font-semibold transition ${
                            estFeatures.includes(feat.id)
                              ? "border-primary bg-primary/15 text-primary"
                              : "border-border/60 bg-background/20 text-muted-foreground hover:border-border hover:text-foreground"
                          }`}
                        >
                          {feat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="text-xs text-muted-foreground/75 pt-6 border-t border-border/20 flex items-start gap-2">
                <HelpCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                This calculator provides an automated baseline estimate. Our team verifies final scopes during your initial 24h consultation.
              </div>
            </div>

            {/* Calculations Result */}
            <div className="lg:col-span-5 card-3d p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-surface-elevated/90 to-surface/90 border-primary/20">
              <div className="space-y-6">
                <div className="pb-4 border-b border-border/20">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-primary">
                    Calculated Scope Details
                  </div>
                  <h4 className="text-xl font-bold font-display mt-2 text-foreground">
                    {estService}
                  </h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    Scale: {estScale}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      Estimated Cost Range
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-foreground font-display mt-1 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {getEstimate().range}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      Estimated Timeline
                    </div>
                    <div className="text-lg font-bold text-foreground mt-1">
                      {getEstimate().timeline}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={applyEstimateToForm}
                  className="btn-primary w-full flex items-center justify-center gap-2 group !py-3.5"
                >
                  Apply to Enquiry Form
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Recent Shipped <span className="gradient-text">Releases</span>
            </h2>
            <p className="text-muted-foreground text-base">
              A review of complex digital projects deployed on behalf of our client partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((proj) => (
              <div key={proj.title} className="card-3d p-7 flex flex-col justify-between group overflow-hidden">
                <div className="space-y-5">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">
                      {proj.category}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent">
                      {proj.stat}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display flex items-center justify-between group-hover:text-primary transition-colors">
                    {proj.title}
                    <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 pt-6 border-t border-border/10 mt-6">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xxs px-2 py-1 rounded bg-background/50 border border-border/40 text-muted-foreground font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CONTACT FORM */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight">
              Have an idea? <br />
              Let's <span className="gradient-text">build it.</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-md">
              Send us your initial project requirements. We respond within 24 hours to schedule a free technical consultation.
            </p>

            <ul className="space-y-6 pt-6 text-sm text-muted-foreground border-t border-border/10">
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xxs uppercase tracking-widest text-muted-foreground font-bold">Email Direct</div>
                  <a href="mailto:Zypherzone07@gmail.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                    Zypherzone07@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0">
                  <Instagram className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xxs uppercase tracking-widest text-muted-foreground font-bold">Instagram</div>
                  <a
                    href="https://instagram.com/zyphorzone"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    @zyphorzone
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xxs uppercase tracking-widest text-muted-foreground font-bold">Direct Call / WhatsApp</div>
                  <a href="tel:+916385235131" className="font-semibold text-foreground hover:text-primary transition-colors">
                    +91 63852 35131
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xxs uppercase tracking-widest text-muted-foreground font-bold">HQ Office</div>
                  <span className="font-semibold text-foreground">Coimbatore, Tamil Nadu</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="card-3d p-6 md:p-8 space-y-4" noValidate>
              <div className="text-xs uppercase font-extrabold tracking-wider text-primary mb-2">
                Project Scope Inquiry
              </div>
              
              <Field label="Full Name" icon={<User className="h-4 w-4" />}>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className="form-input"
                />
              </Field>

              <Field label="Service Type Required" icon={<Briefcase className="h-4 w-4" />}>
                <select required value={form.serviceType} onChange={update("serviceType")} className="form-input">
                  <option value="" disabled>Select project domain...</option>
                  {serviceTypes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone / WhatsApp" icon={<Phone className="h-4 w-4" />}>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </Field>
                <Field label="Business Email" icon={<Mail className="h-4 w-4" />}>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    className="form-input"
                  />
                </Field>
              </div>

              <Field label="Your Location" icon={<MapPin className="h-4 w-4" />}>
                <input
                  type="text"
                  required
                  maxLength={120}
                  value={form.location}
                  onChange={update("location")}
                  placeholder="City, Country"
                  className="form-input"
                />
              </Field>

              <Field label="Project Scope / Estimate Details" icon={<Layers className="h-4 w-4" />}>
                <textarea
                  value={form.details}
                  onChange={update("details")}
                  placeholder="Briefly describe what you're building (pages, features, or paste calculation details here)..."
                  className="form-input min-h-[110px] resize-y"
                />
              </Field>

              {error && (
                <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 font-medium">
                  {error}
                </div>
              )}
              {submitted && !error && (
                <div className="text-sm text-primary bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 font-semibold text-center">
                  ✨ Inquiry saved successfully to local MongoDB database! We will contact you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full !py-3.5 text-center flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting Inquiry..." : "Launch Project Request"}
                {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </button>

              <p className="text-xxs text-muted-foreground text-center pt-2">
                By sending, you agree to follow up with our designated engineering lead.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------- DYNAMIC HERO PORTAL MOCKUP ----------------
function HeroProductVisual() {
  const [logIndex, setLogIndex] = useState(0);
  const [metricValue, setMetricValue] = useState(12480);

  const logs = [
    "➜  Next.js: Initializing build optimizer...",
    "➜  Supabase: Connecting PostgreSQL cluster...",
    "➜  Tailwind: Compiling utility utilities...",
    "➜  API: Fetching active telemetry database...",
    "✔  Build: Production bundle compiled (138 kB)",
    "➜  System: Server state operational. Latency 22ms",
  ];

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2500);

    const metricInterval = setInterval(() => {
      setMetricValue((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 1500);

    return () => {
      clearInterval(logInterval);
      clearInterval(metricInterval);
    };
  }, []);

  return (
    <div className="w-full glass-card border border-border/80 rounded-3xl overflow-hidden shadow-2xl relative select-none">
      {/* Top window controls */}
      <div className="bg-background/80 border-b border-border/40 px-4 py-3 flex items-center justify-between font-mono">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-destructive/60" />
          <div className="h-3 w-3 rounded-full bg-accent/60" />
          <div className="h-3 w-3 rounded-full bg-primary/60" />
        </div>
        <div className="text-xxs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-display">
          <Settings className="h-3.5 w-3.5 text-primary animate-spin" />
          ZyphorCore Engine v2.4
        </div>
        <div className="w-6" />
      </div>

      {/* Main Graphic Content */}
      <div className="p-6 space-y-6 bg-gradient-to-b from-background/30 to-background/60">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface/50 border border-border/30 p-4 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <span className="text-xxs font-extrabold uppercase tracking-wider text-muted-foreground block">
              Direct Traffic
            </span>
            <span className="text-xl font-bold text-foreground font-display block mt-1">
              {metricValue.toLocaleString()}
            </span>
            <span className="text-xxs text-accent font-semibold flex items-center gap-1 mt-1">
              <Sparkles className="h-3 w-3 text-accent" />
              +14.2% Growth
            </span>
          </div>

          <div className="bg-surface/50 border border-border/30 p-4 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Activity className="h-10 w-10 text-accent" />
            </div>
            <span className="text-xxs font-extrabold uppercase tracking-wider text-muted-foreground block">
              Server Latency
            </span>
            <span className="text-xl font-bold text-foreground font-display block mt-1">
              22ms
            </span>
            <span className="text-xxs text-primary font-semibold flex items-center gap-1 mt-1">
              <Check className="h-3 w-3 text-primary" />
              99.98% Uptime
            </span>
          </div>
        </div>

        {/* Console / Terminal Section */}
        <div className="bg-black/40 border border-border/30 rounded-2xl p-4 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-xxs text-muted-foreground border-b border-border/20 pb-2">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              Live Console Output
            </span>
            <span>UTF-8</span>
          </div>
          
          <div className="space-y-1.5 min-h-[90px] flex flex-col justify-center">
            {logs.slice(0, logIndex + 1).map((log, i) => (
              <div
                key={log}
                className={`transition-all duration-300 ${
                  i === logIndex 
                    ? "text-primary font-semibold translate-x-1" 
                    : log.startsWith("✔") 
                      ? "text-accent" 
                      : "text-muted-foreground/80"
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Developer Badge */}
        <div className="flex items-center justify-between bg-surface/30 border border-border/20 p-3 rounded-xl">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center text-xxs font-black text-primary-foreground">
              Z
            </div>
            <div>
              <div className="text-xxs font-extrabold uppercase tracking-wider text-muted-foreground">Engine Mode</div>
              <div className="text-xs font-bold text-foreground font-display">MERN + Next.js Serverless</div>
            </div>
          </div>
          <span className="text-xxs font-semibold px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">
            Active
          </span>
        </div>
      </div>
    </div>
  );
}

// ---------------- FIELD HELPERS ----------------
function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}
