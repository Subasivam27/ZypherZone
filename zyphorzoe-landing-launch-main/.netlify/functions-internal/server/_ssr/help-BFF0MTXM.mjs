import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as CircleQuestionMark, _ as Mail, b as LifeBuoy, k as ArrowRight, m as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./about-DEp-hESG.mjs";
import { n as saveHelpRequest } from "./mongodb-exFH-zlx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/help-BFF0MTXM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "How do I start a project?",
		a: "Scroll down to our contact form, fill out your project needs (or use the interactive calculator), and we'll reply within 24 hours to map out a development scope."
	},
	{
		q: "What services does ZyphorZone offer?",
		a: "We offer full-stack web engineering, custom mobile apps (iOS & Android), UI/UX product prototyping, branding/identity guidelines, performance campaigns, and technical SEO audits."
	},
	{
		q: "How is billing structured?",
		a: "We work on structured milestone payments agreed upfront in a project agreement. You pay for delivery phases (e.g. Wireframes approved, Alpha launch, Final code handover) — no surprise hourly invoices."
	},
	{
		q: "Do you sign NDAs?",
		a: "Yes. All engagements start with a Mutual NDA, and we hand over complete intellectual property and source code ownership upon milestone project completion."
	},
	{
		q: "What is your core tech stack?",
		a: "We specialize in modern engineering: Next.js, React, Node.js, Supabase, PostgreSQL, React Native, and Tailwind CSS. We tailor frameworks to fit your performance needs."
	},
	{
		q: "How long does a typical build take?",
		a: "Custom responsive websites take 3–5 weeks. SaaS products, cross-platform mobile apps, and custom web portals typically take 6–12 weeks from scope to launch."
	}
];
function Help() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const onSubmitHelp = async (e) => {
		e.preventDefault();
		setError(null);
		const trimmedName = name.trim();
		const trimmedEmail = email.trim();
		const trimmedMessage = message.trim();
		if (!trimmedName) return setError("Please enter your name.");
		if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return setError("Please enter a valid email address.");
		if (!topic) return setError("Please select a topic.");
		if (!trimmedMessage) return setError("Please enter details of your request.");
		setSubmitting(true);
		try {
			await saveHelpRequest({ data: {
				name: trimmedName,
				email: trimmedEmail,
				topic,
				message: trimmedMessage
			} });
			setSubmitted(true);
			setName("");
			setEmail("");
			setTopic("");
			setMessage("");
		} catch (err) {
			console.error(err);
			setError(err?.message || "Failed to submit help ticket to database.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "Help Center",
		subtitle: "Answers, guides and resources. Our designated leads respond within 24 hours.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-3 gap-6 mb-16",
				children: [
					{
						icon: Mail,
						title: "Email Us",
						desc: "Zypherzone07@gmail.com",
						href: "mailto:Zypherzone07@gmail.com"
					},
					{
						icon: MessageCircle,
						title: "Instagram DM",
						desc: "@zyphorzone",
						href: "https://instagram.com/zyphorzone"
					},
					{
						icon: LifeBuoy,
						title: "Contact Form",
						desc: "Open inquiry form",
						href: "/#contact"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.href,
					className: "card-3d rounded-2xl p-6 hover-card-glow block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "icon-3d h-10 w-10 flex items-center justify-center mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-foreground",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-1",
							children: c.desc
						})
					]
				}, c.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-bold font-display tracking-tight text-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-5 w-5 text-primary" }), "Frequently Asked Questions"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "card-3d rounded-2xl p-6 group transition-all duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "cursor-pointer font-bold font-display list-none flex justify-between items-center text-foreground hover:text-primary transition-colors",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-light text-2xl group-open:rotate-45 transition-transform duration-300 select-none",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/10 pt-4",
							children: f.a
						})]
					}, f.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 border-t border-border/20 pt-16 max-w-xl mx-auto space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold font-display tracking-tight text-foreground",
						children: "Still need help? Submit a Ticket"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Describe your issue and our technical support lead will connect with you."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onSubmitHelp,
					className: "card-3d p-6 md:p-8 space-y-4",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase font-extrabold tracking-wider text-primary mb-2",
							children: "Support Request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								maxLength: 100,
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Jane Doe",
								className: "form-input"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2",
								children: "Email Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								maxLength: 255,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "jane@example.com",
								className: "form-input"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2",
								children: "Topic / Inquiry Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								required: true,
								value: topic,
								onChange: (e) => setTopic(e.target.value),
								className: "form-input text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select support topic..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Technical Support",
										children: "Technical Support"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Billing / Payment",
										children: "Billing & Payments"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Project Update",
										children: "Active Project Enquiry"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "General Feedback",
										children: "General Feedback & Suggestions"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2",
								children: "Issue / Message Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								value: message,
								onChange: (e) => setMessage(e.target.value),
								placeholder: "Describe your issue or feedback in detail...",
								className: "form-input min-h-[110px] resize-y"
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 font-medium",
							children: error
						}),
						submitted && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-primary bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 font-semibold text-center",
							children: "✨ Support ticket saved successfully to local MongoDB database!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: submitting,
							className: "btn-primary w-full !py-3.5 text-center flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed",
							children: [submitting ? "Submitting Ticket..." : "Submit Support Ticket", !submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Help as component };
