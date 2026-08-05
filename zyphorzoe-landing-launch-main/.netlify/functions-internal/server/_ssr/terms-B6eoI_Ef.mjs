import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageShell } from "./about-DEp-hESG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-B6eoI_Ef.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		title: "Terms of Service",
		subtitle: "Last updated: July 2026",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8 text-muted-foreground text-sm leading-relaxed max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "1. Agreement to Terms",
					children: "By browsing zyphorzone.com or requesting development services, you confirm acceptance of these Terms of Service. If you do not agree to these guidelines, please stop using this website."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "2. Freelance Delivery Model",
					children: "ZyphorZone acts as a managed freelance startup. Deliverables, technical scope, milestones, timelines, and costs are defined in project-specific Statements of Work signed by both parties."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "3. Financial Milestones",
					children: "Project payments, scheduling milestones, deposits, and delivery sign-offs are detailed in project proposals. Milestones are invoiced upon phase completion and are due within 7 days of delivery."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "4. Intellectual Property",
					children: "Upon final payment settlement, complete ownership, code repositories, design files, and intellectual property rights transfer to the client partner. ZyphorZone retains showcasing rights in its public portfolios unless restricted by a Mutual NDA."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "5. Non-Disclosure & Confidentiality",
					children: "We treat client project specifications, wireframes, codebases, and database schemas as confidential. Mutual Non-Disclosure Agreements (NDAs) are signed prior to deep discovery phases."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "6. Liability Limits",
					children: "Our total liability for claim outcomes arising from any project is limited to the exact project fee amount received by ZyphorZone for that specific engagement."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "7. Agreement Revisions",
					children: "We reserve the right to revise these Terms of Service. Your continued interaction with our client hub or website confirms acceptance of terms revisions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "8. Inquiries",
					children: [
						"Please contact our legal representative for questions regarding service guidelines at",
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
export { Terms as component };
