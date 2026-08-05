import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageShell } from "./about-DEp-hESG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-BbdUiT2X.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		title: "Privacy Policy",
		subtitle: "Last updated: July 2026",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8 text-muted-foreground text-sm leading-relaxed max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "1. Information We Collect",
					children: "When you submit project requirements or register an account, we collect your name, email address, phone number, and location details. Authentication via Google provides us with your profile name, email, and avatar picture as authorized in your account permission settings."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "2. How We Use Data",
					children: "We use collected details solely to respond to project enquiries, deliver contracted digital services, provide milestone progress notifications in your client hub, and resolve technical issues. We will never sell, trade, or distribute your personal details to outside parties."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "3. Security & Storage",
					children: "Project records, message feeds, and account structures are saved securely using modern encryption. Database access is strictly restricted to assigned technical project leads under non-disclosure obligations."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "4. Third-Party Services",
					children: "We utilize trusted third-party providers for authentication services (Google) and analytics. These platforms manage details under their designated privacy systems."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "5. Your Control & Access",
					children: "You maintain full access to request modifications to, exports of, or deletion of your personal records and past project enquiries. Contact us direct via email to request updates."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "6. Contact Details",
					children: [
						"For general data protection enquiries, please email our lead administrator at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:Zypherzone07@gmail.com",
							className: "text-primary hover:underline font-semibold transition-all",
							children: "Zypherzone07@gmail.com"
						}),
						"."
					]
				})
			]
		})
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 border-b border-border/10 pb-6 last:border-0 last:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-bold font-display text-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground leading-relaxed text-sm",
			children
		})]
	});
}
//#endregion
export { Privacy as component };
