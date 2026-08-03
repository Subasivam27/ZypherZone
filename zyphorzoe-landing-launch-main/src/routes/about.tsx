import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Users, Target, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ZyphorZone" },
      { name: "description", content: "ZyphorZone is a freelance-based startup crafting websites, apps, brands and marketing for ambitious founders." },
      { property: "og:title", content: "About Us — ZyphorZone" },
      { property: "og:description", content: "Learn about our story, mission and the freelance collective behind ZyphorZone." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell title="About ZyphorZone" subtitle="A premium freelance-based startup building high-fidelity digital experiences for ambitious brands.">
      <div className="max-w-none space-y-6 text-muted-foreground text-base leading-relaxed">
        <p>
          ZyphorZone was established to challenge the traditional digital agency model. We believe that top-tier development, design, and branding should be accessible without bloated management layers, slow turnaround times, or corporate markups.
        </p>
        <p>
          We are a managed collective of senior independent engineers, UI/UX strategists, and performance marketers. When you work with us, you receive a dedicated product lead and direct access to the designers and developers writing your code.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {[
          { icon: Target, title: "Our Mission", desc: "Empower ambitious founders with world-class digital craft and scalable infrastructure." },
          { icon: Sparkles, title: "Our Vision", desc: "Redefine freelance execution — trusted, hyper-transparent, and managed." },
          { icon: Users, title: "Our Collective", desc: "A network of vetted, senior professionals spanning design, engineering, and marketing." },
          { icon: Zap, title: "Our Edge", desc: "Agency quality, startup velocity, direct code repository access, and full IP transfer." },
        ].map((v) => (
          <div key={v.title} className="card-3d rounded-2xl p-6 hover-card-glow">
            <div className="icon-3d h-10 w-10 flex items-center justify-center mb-4">
              <v.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg font-display text-foreground">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 pointer-events-none opacity-15 dot-matrix" />
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
        <div className="mt-12 border-t border-border/15 pt-10">{children}</div>
      </div>
    </div>
  );
}
