import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Instagram, _ as Mail, d as Phone, g as MapPin } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./about-DEp-hESG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-5uAMhCm4.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "Contact Us",
		subtitle: "Get in touch. We respond within 24 hours with a free consultation and project scope mapping.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:Zypherzone07@gmail.com",
					className: "card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "icon-3d h-10 w-10 flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-foreground",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground break-all mt-1",
						children: "Zypherzone07@gmail.com"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+916385235131",
					className: "card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "icon-3d h-10 w-10 flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-foreground",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground mt-1",
						children: "+91 63852 35131"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://instagram.com/zyphorzone",
					target: "_blank",
					rel: "noreferrer",
					className: "card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "icon-3d h-10 w-10 flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-foreground",
						children: "Instagram"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground mt-1",
						children: "@zyphorzone"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-3d rounded-2xl p-6 flex flex-col justify-between hover-card-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "icon-3d h-10 w-10 flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-foreground",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground mt-1",
						children: "Coimbatore, India"
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-3d rounded-2xl p-8 text-center bg-gradient-to-br from-surface to-background border-primary/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold font-display mb-2 text-foreground",
					children: "Have a detailed project scope in mind?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground max-w-xl mx-auto",
					children: "We recommend using our interactive calculator on the home page to estimate custom costs, then submitting an enquiry directly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "estimator",
						className: "btn-primary text-xs !py-2.5 !px-5",
						children: "Open Cost Calculator"
					})
				})
			]
		})]
	});
}
//#endregion
export { Contact as component };
