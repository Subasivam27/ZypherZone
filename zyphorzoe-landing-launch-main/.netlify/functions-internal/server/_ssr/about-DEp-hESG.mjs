import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DEp-hESG.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./about-CsMjpfwW.mjs");
var Route = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — ZyphorZone" },
		{
			name: "description",
			content: "ZyphorZone is a freelance-based startup crafting websites, apps, brands and marketing for ambitious founders."
		},
		{
			property: "og:title",
			content: "About Us — ZyphorZone"
		},
		{
			property: "og:description",
			content: "Learn about our story, mission and the freelance collective behind ZyphorZone."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
export { Route as n, PageShell as t };
