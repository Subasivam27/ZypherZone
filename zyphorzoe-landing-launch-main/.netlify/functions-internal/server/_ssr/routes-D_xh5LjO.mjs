import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as CodeXml, D as Briefcase, E as Check, O as ArrowUpRight, S as Instagram, T as CircleQuestionMark, _ as Mail, c as ShieldCheck, d as Phone, f as PenTool, g as MapPin, h as Megaphone, i as TrendingUp, j as Activity, k as ArrowRight, l as Settings, n as Users, o as Sparkles, p as Palette, r as User, s as Smartphone, t as Zap, u as Search, w as Clock, x as Layers } from "../_libs/lucide-react.mjs";
import { t as saveEnquiry } from "./mongodb-exFH-zlx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_xh5LjO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var whyChoose = [
	{
		icon: Sparkles,
		title: "Vetted Senior Talent",
		desc: "Your project is hand-assigned to top-tier senior freelancers with proven industry track records."
	},
	{
		icon: ShieldCheck,
		title: "100% Transparent Build",
		desc: "Track every step inside your client portal with real-time dashboard progress and weekly live builds."
	},
	{
		icon: Users,
		title: "Managed Collaboration",
		desc: "A dedicated product manager handles client communication, timeline tracking, and final delivery."
	},
	{
		icon: Clock,
		title: "Efficient Capital Allocation",
		desc: "Get agency-grade engineering and design without the overhead, retainer fees, or unexpected billable hours."
	}
];
var steps = [
	{
		step: "01",
		title: "Consult & Scope",
		desc: "Share your business goals. We reply within 24 hours with a comprehensive technical scope and transparent pricing options."
	},
	{
		step: "02",
		title: "Track in Real-Time",
		desc: "Monitor design systems, codebase commits, and feature branches dynamically inside your custom client dashboard."
	},
	{
		step: "03",
		title: "Launch & Own",
		desc: "We deploy on modern infrastructure, hand over complete intellectual property, and help scale campaigns to acquire users."
	}
];
var services = [
	{
		icon: CodeXml,
		title: "Web Engineering",
		desc: "Scalable SaaS dashboards, e-commerce storefronts, and full-stack solutions built with Next.js, React, and Supabase."
	},
	{
		icon: Smartphone,
		title: "App Development",
		desc: "Native cross-platform mobile apps for iOS and Android built on React Native or Flutter."
	},
	{
		icon: Palette,
		title: "UI / UX Design",
		desc: "Sleek, obvious, high-converting product interfaces, interactive prototypes, and design systems."
	},
	{
		icon: PenTool,
		title: "Brand Strategy",
		desc: "Logos, type scales, brand guidelines, and visual assets designed to set your business apart."
	},
	{
		icon: Megaphone,
		title: "Performance Marketing",
		desc: "Data-focused search engine marketing, social campaigns, and high-ROI conversion rate optimization."
	},
	{
		icon: Search,
		title: "SEO & Content",
		desc: "Technical site Audits, editorial content strategy, and page-speed optimizations to index high on Google."
	}
];
var serviceTypes = [
	"Web Development",
	"App Development",
	"UI / UX Design",
	"Brand Identity",
	"Digital Marketing",
	"SEO & Content",
	"Other"
];
var portfolio = [
	{
		title: "Aether SaaS Analytics",
		category: "Web Engineering",
		desc: "A custom real-time monitoring dashboard featuring multi-tenant database partitioning, automated invoicing, and low-latency graphs.",
		tech: [
			"Next.js",
			"Supabase",
			"Recharts",
			"TailwindCSS"
		],
		stat: "140ms Load Speed"
	},
	{
		title: "Apex Fitness Native",
		category: "App Development",
		desc: "Cross-platform wellness app integrating real-time telemetry, location-based routing, social leaderboards, and offline syncing.",
		tech: [
			"React Native",
			"Node.js",
			"Redis",
			"WebSockets"
		],
		stat: "4.8★ App Store"
	},
	{
		title: "Vortex Digital Rebrand",
		category: "UI/UX & Identity",
		desc: "Full conceptual branding, identity guidelines, and high-conversion landing page design for an enterprise digital infrastructure brand.",
		tech: [
			"Figma",
			"Branding Guidelines",
			"Vite",
			"GSAP Animations"
		],
		stat: "+84% Signups"
	}
];
function Landing() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		serviceType: "",
		phone: "",
		email: "",
		location: "",
		details: ""
	});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [estService, setEstService] = (0, import_react.useState)("Web Development");
	const [estScale, setEstScale] = (0, import_react.useState)("Standard");
	const [estFeatures, setEstFeatures] = (0, import_react.useState)(["Authentication", "Database"]);
	const featureOptions = [
		{
			id: "Authentication",
			label: "User Auth",
			price: 300
		},
		{
			id: "Database",
			label: "DB Integration",
			price: 500
		},
		{
			id: "Admin Panel",
			label: "Admin Panel / CMS",
			price: 800
		},
		{
			id: "Payment Gateway",
			label: "Payment Gateway",
			price: 400
		},
		{
			id: "SEO Optimization",
			label: "Advanced SEO Setup",
			price: 250
		}
	];
	const toggleFeature = (fid) => {
		if (estFeatures.includes(fid)) setEstFeatures(estFeatures.filter((id) => id !== fid));
		else setEstFeatures([...estFeatures, fid]);
	};
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
		if (estScale === "Simple") {
			basePrice *= .75;
			baseWeeks = Math.max(1, Math.round(baseWeeks * .75));
		} else if (estScale === "Advanced") {
			basePrice *= 1.5;
			baseWeeks = Math.round(baseWeeks * 1.4);
		}
		estFeatures.forEach((featId) => {
			const option = featureOptions.find((o) => o.id === featId);
			if (option) basePrice += option.price;
		});
		const minPrice = Math.round(basePrice * .9);
		const maxPrice = Math.round(basePrice * 1.15);
		return {
			range: `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`,
			timeline: `${baseWeeks}-${baseWeeks + 2} Weeks`
		};
	};
	const applyEstimateToForm = () => {
		const est = getEstimate();
		setForm((prev) => ({
			...prev,
			serviceType: estService,
			details: `Project Scale: ${estScale}\nSelected Features: ${estFeatures.join(", ")}\nCalculated Budget Range: ${est.range}\nEstimated Timeline: ${est.timeline}`
		}));
		const contactElem = document.getElementById("contact");
		if (contactElem) contactElem.scrollIntoView({ behavior: "smooth" });
	};
	const update = (k) => (e) => {
		setForm({
			...form,
			[k]: e.target.value
		});
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		const name = form.name.trim();
		const email = form.email.trim();
		const phone = form.phone.trim();
		const location = form.location.trim();
		if (!name || name.length > 100) return setError("Please enter your name.");
		if (!form.serviceType) return setError("Please select a service type.");
		if (!/^[+\d][\d\s\-()]{6,20}$/.test(phone)) return setError("Please enter a valid phone number.");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return setError("Please enter a valid email address.");
		if (!location || location.length > 120) return setError("Please enter your location.");
		setSubmitting(true);
		try {
			await saveEnquiry({ data: {
				name,
				email,
				phone,
				location,
				serviceType: form.serviceType,
				details: form.details
			} });
			setSubmitted(true);
			setForm({
				name: "",
				serviceType: "",
				phone: "",
				email: "",
				location: "",
				details: ""
			});
		} catch (err) {
			console.error(err);
			setError(err?.message || "Failed to save project enquiry to database.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-border/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none opacity-45 tech-grid" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "var(--gradient-hero)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 text-left space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary font-semibold tracking-wide animate-pulse",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Next-Gen Managed Freelance Startup"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground font-display",
									children: [
										"Your software idea ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "gradient-text",
											children: "engineered to scale"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										" while you sleep."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl",
									children: "We connect your vision with vetted senior developers and designers, managing everything end-to-end. Get full code ownership, total transparency, and launch-ready code."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-4 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#estimator",
										className: "btn-primary flex items-center gap-1.5 group",
										children: ["Try Cost Estimator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: "btn-ghost flex items-center gap-1",
										children: "Book Consultation"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-sm text-muted-foreground border-t border-border/10",
									children: [
										"Full Code Ownership",
										"Zero Lock-In Contracts",
										"Direct Repo Access"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4.5 w-4.5 text-accent shrink-0" }), item]
									}, item))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 relative w-full lg:max-w-md xl:max-w-lg mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-primary to-accent opacity-20 blur-xl soft-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroProductVisual, {})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative bg-surface/30 border-b border-border/20 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
					children: [
						{
							value: "45+",
							label: "Projects Shipped"
						},
						{
							value: "12+",
							label: "Vetted Senior Specialists"
						},
						{
							value: "100%",
							label: "Client Satisfaction"
						},
						{
							value: "24h",
							label: "Guaranteed Scope turnaround"
						}
					].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl md:text-4xl font-extrabold text-foreground font-display tracking-tight bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
							children: stat.label
						})]
					}, stat.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "why",
				className: "relative py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto space-y-4 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight",
							children: ["Why founders trust ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "ZyphorZone"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base sm:text-lg",
							children: "We bridge the gap between expensive agency bloat and unpredictable freelance platforms."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: whyChoose.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-3d p-7 flex flex-col justify-between hover-card-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-3d h-12 w-12 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5 text-primary" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-foreground font-display",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: item.desc
									})
								]
							})
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "how",
				className: "relative py-24 md:py-32 border-y border-border/20 bg-surface/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none opacity-10 dot-matrix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto space-y-4 mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight",
							children: ["Three Steps. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Frictionless Launch."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base",
							children: "A transparent, streamlined development system designed for busy product owners."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-8 relative",
						children: steps.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-3d p-8 relative flex flex-col justify-between group overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-0 right-0 text-7xl font-black font-display text-primary/5 select-none -translate-y-4 translate-x-2 transition-transform duration-300 group-hover:scale-110",
								children: item.step
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs uppercase font-extrabold tracking-wider text-primary",
										children: ["Phase ", item.step]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold font-display",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: item.desc
									})
								]
							})]
						}, item.step))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "relative py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto space-y-4 mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight",
							children: ["Vetted Freelance ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Capabilities"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base",
							children: "Whatever your technical needs, we hand-assign the optimal stack experts."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: services.map((svc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-3d p-8 flex flex-col justify-between hover-card-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-3d h-11 w-11 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(svc.icon, { className: "h-5 w-5 text-primary" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold font-display",
										children: svc.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: svc.desc
									})
								]
							})
						}, svc.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "estimator",
				className: "relative py-24 md:py-32 border-y border-border/20 bg-surface/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none opacity-20 tech-grid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto space-y-4 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight",
							children: ["Interactive Scope & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Cost Estimator"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base",
							children: "Configure your requirements, calculate real-time rates, and apply them directly to a custom quote."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 card-3d p-6 md:p-8 space-y-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs uppercase font-extrabold tracking-wider text-muted-foreground mb-3",
										children: "1. Select Service Type"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm",
										children: [
											"Web Development",
											"App Development",
											"UI / UX Design",
											"Brand Identity",
											"Digital Marketing"
										].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setEstService(t),
											className: `py-3 px-4 rounded-xl border text-left font-medium transition ${estService === t ? "border-primary bg-primary/10 text-primary" : "border-border/60 bg-background/30 text-muted-foreground hover:border-border hover:text-foreground"}`,
											children: t
										}, t))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs uppercase font-extrabold tracking-wider text-muted-foreground mb-3",
										children: "2. Choose Complexity Scale"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
										children: [
											"Simple",
											"Standard",
											"Advanced"
										].map((scale) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setEstScale(scale),
											className: `py-2.5 px-4 rounded-xl border font-medium text-center transition ${estScale === scale ? "border-primary bg-primary/10 text-primary" : "border-border/60 bg-background/30 text-muted-foreground hover:border-border hover:text-foreground"}`,
											children: scale
										}, scale))
									})] }),
									(estService === "Web Development" || estService === "App Development") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs uppercase font-extrabold tracking-wider text-muted-foreground mb-3",
										children: "3. Select Features Needed"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2.5",
										children: featureOptions.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => toggleFeature(feat.id),
											className: `py-2 px-3.5 rounded-lg border text-xs font-semibold transition ${estFeatures.includes(feat.id) ? "border-primary bg-primary/15 text-primary" : "border-border/60 bg-background/20 text-muted-foreground hover:border-border hover:text-foreground"}`,
											children: feat.label
										}, feat.id))
									})] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground/75 pt-6 border-t border-border/20 flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }), "This calculator provides an automated baseline estimate. Our team verifies final scopes during your initial 24h consultation."]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 card-3d p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-surface-elevated/90 to-surface/90 border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pb-4 border-b border-border/20",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase font-extrabold tracking-wider text-primary",
											children: "Calculated Scope Details"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xl font-bold font-display mt-2 text-foreground",
											children: estService
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm text-muted-foreground mt-1",
											children: ["Scale: ", estScale]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold text-muted-foreground uppercase tracking-widest",
										children: "Estimated Cost Range"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-3xl md:text-4xl font-extrabold text-foreground font-display mt-1 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent",
										children: getEstimate().range
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold text-muted-foreground uppercase tracking-widest",
										children: "Estimated Timeline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-bold text-foreground mt-1",
										children: getEstimate().timeline
									})] })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: applyEstimateToForm,
									className: "btn-primary w-full flex items-center justify-center gap-2 group !py-3.5",
									children: ["Apply to Enquiry Form", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								})
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto space-y-4 mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight",
							children: ["Recent Shipped ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Releases"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base",
							children: "A review of complex digital projects deployed on behalf of our client partners."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-8",
						children: portfolio.map((proj) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-3d p-7 flex flex-col justify-between group overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-wider text-primary font-bold",
											children: proj.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent",
											children: proj.stat
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xl font-bold font-display flex items-center justify-between group-hover:text-primary transition-colors",
										children: [proj.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: proj.desc
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5 pt-6 border-t border-border/10 mt-6",
								children: proj.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xxs px-2 py-1 rounded bg-background/50 border border-border/40 text-muted-foreground font-semibold",
									children: t
								}, t))
							})]
						}, proj.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "relative py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight",
								children: [
									"Have an idea? ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Let's ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text",
										children: "build it."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-base max-w-md",
								children: "Send us your initial project requirements. We respond within 24 hours to schedule a free technical consultation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-6 pt-6 text-sm text-muted-foreground border-t border-border/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4.5 w-4.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xxs uppercase tracking-widest text-muted-foreground font-bold",
											children: "Email Direct"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:Zypherzone07@gmail.com",
											className: "font-semibold text-foreground hover:text-primary transition-colors",
											children: "Zypherzone07@gmail.com"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4.5 w-4.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xxs uppercase tracking-widest text-muted-foreground font-bold",
											children: "Instagram"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://instagram.com/zyphorzone",
											target: "_blank",
											rel: "noreferrer",
											className: "font-semibold text-foreground hover:text-primary transition-colors",
											children: "@zyphorzone"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4.5 w-4.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xxs uppercase tracking-widest text-muted-foreground font-bold",
											children: "Direct Call / WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+916385235131",
											className: "font-semibold text-foreground hover:text-primary transition-colors",
											children: "+91 63852 35131"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4.5 w-4.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xxs uppercase tracking-widest text-muted-foreground font-bold",
											children: "HQ Office"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: "Coimbatore, Tamil Nadu"
										})] })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "card-3d p-6 md:p-8 space-y-4",
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase font-extrabold tracking-wider text-primary mb-2",
									children: "Project Scope Inquiry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full Name",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										maxLength: 100,
										value: form.name,
										onChange: update("name"),
										placeholder: "Jane Doe",
										className: "form-input"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Service Type Required",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4" }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										value: form.serviceType,
										onChange: update("serviceType"),
										className: "form-input",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select project domain..."
										}), serviceTypes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s,
											children: s
										}, s))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone / WhatsApp",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											required: true,
											maxLength: 20,
											value: form.phone,
											onChange: update("phone"),
											placeholder: "+91 98765 43210",
											className: "form-input"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Business Email",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											required: true,
											maxLength: 255,
											value: form.email,
											onChange: update("email"),
											placeholder: "you@company.com",
											className: "form-input"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Your Location",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										maxLength: 120,
										value: form.location,
										onChange: update("location"),
										placeholder: "City, Country",
										className: "form-input"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Project Scope / Estimate Details",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: form.details,
										onChange: update("details"),
										placeholder: "Briefly describe what you're building (pages, features, or paste calculation details here)...",
										className: "form-input min-h-[110px] resize-y"
									})
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 font-medium",
									children: error
								}),
								submitted && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-primary bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 font-semibold text-center",
									children: "✨ Inquiry saved successfully to local MongoDB database! We will contact you soon."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: submitting,
									className: "btn-primary w-full !py-3.5 text-center flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed",
									children: [submitting ? "Submitting Inquiry..." : "Launch Project Request", !submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xxs text-muted-foreground text-center pt-2",
									children: "By sending, you agree to follow up with our designated engineering lead."
								})
							]
						})
					})]
				})
			})
		]
	});
}
function HeroProductVisual() {
	const [logIndex, setLogIndex] = (0, import_react.useState)(0);
	const [metricValue, setMetricValue] = (0, import_react.useState)(12480);
	const logs = [
		"➜  Next.js: Initializing build optimizer...",
		"➜  Supabase: Connecting PostgreSQL cluster...",
		"➜  Tailwind: Compiling utility utilities...",
		"➜  API: Fetching active telemetry database...",
		"✔  Build: Production bundle compiled (138 kB)",
		"➜  System: Server state operational. Latency 22ms"
	];
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full glass-card border border-border/80 rounded-3xl overflow-hidden shadow-2xl relative select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-background/80 border-b border-border/40 px-4 py-3 flex items-center justify-between font-mono",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-destructive/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-accent/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-primary/60" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xxs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-display",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-3.5 w-3.5 text-primary animate-spin" }), "ZyphorCore Engine v2.4"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 space-y-6 bg-gradient-to-b from-background/30 to-background/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-surface/50 border border-border/30 p-4 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-0 right-0 p-3 opacity-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-10 w-10 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xxs font-extrabold uppercase tracking-wider text-muted-foreground block",
								children: "Direct Traffic"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-bold text-foreground font-display block mt-1",
								children: metricValue.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xxs text-accent font-semibold flex items-center gap-1 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-accent" }), "+14.2% Growth"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-surface/50 border border-border/30 p-4 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-0 right-0 p-3 opacity-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-10 w-10 text-accent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xxs font-extrabold uppercase tracking-wider text-muted-foreground block",
								children: "Server Latency"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-bold text-foreground font-display block mt-1",
								children: "22ms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xxs text-primary font-semibold flex items-center gap-1 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-primary" }), "99.98% Uptime"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-black/40 border border-border/30 rounded-2xl p-4 font-mono text-xs space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xxs text-muted-foreground border-b border-border/20 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-accent animate-ping" }), "Live Console Output"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "UTF-8" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5 min-h-[90px] flex flex-col justify-center",
						children: logs.slice(0, logIndex + 1).map((log, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `transition-all duration-300 ${i === logIndex ? "text-primary font-semibold translate-x-1" : log.startsWith("✔") ? "text-accent" : "text-muted-foreground/80"}`,
							children: log
						}, log))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-surface/30 border border-border/20 p-3 rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center text-xxs font-black text-primary-foreground",
							children: "Z"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xxs font-extrabold uppercase tracking-wider text-muted-foreground",
							children: "Engine Mode"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold text-foreground font-display",
							children: "MERN + Next.js Serverless"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xxs font-semibold px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary",
						children: "Active"
					})]
				})
			]
		})]
	});
}
function Field({ label, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2 text-xxs font-bold text-muted-foreground uppercase tracking-wider mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: icon
			}), label]
		}), children]
	});
}
//#endregion
export { Landing as component };
