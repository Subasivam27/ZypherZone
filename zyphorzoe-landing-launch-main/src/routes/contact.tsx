import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "./about";
import { Mail, Instagram, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ZyphorZone" },
      { name: "description", content: "Get in touch with the ZyphorZone team. Email, Instagram or our enquiry form." },
      { property: "og:title", content: "Contact Us — ZyphorZone" },
      { property: "og:description", content: "Reach out to ZyphorZone — we reply within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell title="Contact Us" subtitle="Get in touch. We respond within 24 hours with a free consultation and project scope mapping.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <a
          href="mailto:Zypherzone07@gmail.com"
          className="card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow"
        >
          <div className="icon-3d h-10 w-10 flex items-center justify-center mb-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-bold text-foreground">Email</div>
            <div className="text-xs text-muted-foreground break-all mt-1">Zypherzone07@gmail.com</div>
          </div>
        </a>

        <a
          href="tel:+916385235131"
          className="card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow"
        >
          <div className="icon-3d h-10 w-10 flex items-center justify-center mb-4">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-bold text-foreground">Phone</div>
            <div className="text-xs text-muted-foreground mt-1">+91 63852 35131</div>
          </div>
        </a>

        <a
          href="https://instagram.com/zyphorzone"
          target="_blank"
          rel="noreferrer"
          className="card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow"
        >
          <div className="icon-3d h-10 w-10 flex items-center justify-center mb-4">
            <Instagram className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-bold text-foreground">Instagram</div>
            <div className="text-xs text-muted-foreground mt-1">@zyphorzone</div>
          </div>
        </a>

        <div className="card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow">
          <div className="icon-3d h-10 w-10 flex items-center justify-center mb-4">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-bold text-foreground">Location</div>
            <div className="text-xs text-muted-foreground mt-1">Coimbatore, India</div>
          </div>
        </div>
      </div>

      <div className="card-3d rounded-2xl p-8 text-center bg-gradient-to-br from-surface to-background border-primary/10">
        <h3 className="text-lg font-bold font-display mb-2 text-foreground">Have a detailed project scope in mind?</h3>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          We recommend using our interactive calculator on the home page to estimate custom costs, then submitting an enquiry directly.
        </p>
        <div className="mt-5">
          <Link to="/" hash="estimator" className="btn-primary text-xs !py-2.5 !px-5">
            Open Cost Calculator
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
