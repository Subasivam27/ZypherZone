import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, a as Target, n as Users, o as Sparkles, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CsMjpfwW.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "About ZyphorZone",
		subtitle: "A premium freelance-based startup building high-fidelity digital experiences for ambitious brands.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-none space-y-6 text-muted-foreground text-base leading-relaxed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ZyphorZone was established to challenge the traditional digital agency model. We believe that top-tier development, design, and branding should be accessible without bloated management layers, slow turnaround times, or corporate markups." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are a managed collective of senior independent engineers, UI/UX strategists, and performance marketers. When you work with us, you receive a dedicated product lead and direct access to the designers and developers writing your code." })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 gap-6 mt-12",
			children: [
				{
					icon: Target,
					title: "Our Mission",
					desc: "Empower ambitious founders with world-class digital craft and scalable infrastructure."
				},
				{
					icon: Sparkles,
					title: "Our Vision",
					desc: "Redefine freelance execution — trusted, hyper-transparent, and managed."
				},
				{
					icon: Users,
					title: "Our Collective",
					desc: "A network of vetted, senior professionals spanning design, engineering, and marketing."
				},
				{
					icon: Zap,
					title: "Our Edge",
					desc: "Agency quality, startup velocity, direct code repository access, and full IP transfer."
				}
			].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-3d rounded-2xl p-6 hover-card-glow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "icon-3d h-10 w-10 flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-lg font-display text-foreground",
						children: v.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: v.desc
					})
				]
			}, v.title))
		})]
	});
}
function PageShell({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none opacity-15 dot-matrix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4 transition-transform group-hover:-translate-x-1" }), "Back to home"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl font-bold font-display tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed",
					children: subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 border-t border-border/15 pt-10",
					children
				})
			]
		})]
	});
}
//#endregion
export { PageShell, About as component };
