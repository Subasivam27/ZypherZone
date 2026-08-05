import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Briefcase, S as Instagram, T as CircleQuestionMark, _ as Mail, g as MapPin, k as ArrowRight, n as Users, v as LogOut } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-DiAF-Bnx.mjs";
import { t as logo_default } from "./wordmark-BDJ6uTzz.mjs";
import { n as Route$7 } from "./about-DEp-hESG.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BxAhEEIS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CnQATJCs.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function Logo({ className = "h-9 w-9" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_default,
		alt: "ZyphorZone logo",
		width: 512,
		height: 512,
		loading: "lazy",
		className: `${className} object-contain transition-transform duration-300 hover:rotate-6`
	});
}
function Layout({ children }) {
	const location = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = (0, import_react.useState)(null);
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const isAuthPage = location.pathname === "/auth";
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
		const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
			setUser(session?.user ?? null);
		});
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			sub.subscription.unsubscribe();
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const signOut = async () => {
		await supabase.auth.signOut();
		navigate({ to: "/" });
	};
	const navLinks = [
		{
			name: "Why Us",
			href: "/#why"
		},
		{
			name: "How It Works",
			href: "/#how"
		},
		{
			name: "About Us",
			href: "/about"
		},
		{
			name: "Contact",
			href: "/#contact"
		},
		{
			name: "Help Center",
			href: "/help"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen flex flex-col antialiased selection:bg-primary selection:text-primary-foreground",
		children: [
			!isAuthPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none overflow-hidden z-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] soft-glow" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-accent/800 rounded-full blur-[140px] soft-glow opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[110px] soft-glow" })
				]
			}),
			!isAuthPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `sticky top-0 z-50 transition-all duration-300 w-full ${isScrolled ? "backdrop-blur-lg bg-background/80 border-b border-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3" : "backdrop-blur-md bg-background/30 border-b border-border/20 py-4"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-8 w-8 md:h-9 md:w-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/wordmark-CMp0wKFI.png",
								alt: "ZyphorZone wordmark",
								className: "h-5 md:h-[22px] object-contain transition-transform duration-300 group-hover:scale-102"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground",
							children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "relative py-1 hover:text-foreground transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
								children: link.name
							}, link.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden lg:flex flex-col text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Logged in as"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-foreground truncate max-w-[140px]",
										children: user.user_metadata?.full_name || user.email
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: signOut,
									className: "btn-ghost flex items-center gap-2 text-xs !py-2 !px-4 hover:border-destructive/40 hover:text-destructive hover:bg-destructive/10",
									"aria-label": "Sign out",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Sign out"
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/auth",
								className: "btn-primary flex items-center gap-1.5 text-xs md:text-sm !py-2 !px-4 md:!py-2.5 md:!px-5",
								children: ["Join / Login", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setMobileMenuOpen(!mobileMenuOpen),
								className: "flex md:hidden flex-col gap-1.5 p-1 text-muted-foreground hover:text-foreground focus:outline-none",
								"aria-label": "Toggle menu",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-6 h-[2px] bg-current transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-6 h-[2px] bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-6 h-[2px] bg-current transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}` })
								]
							})]
						})
					]
				}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:hidden absolute top-full left-0 right-0 glass-card mx-4 my-2 p-5 rounded-2xl border border-border/80 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 z-50",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						onClick: () => setMobileMenuOpen(false),
						className: "text-sm font-medium py-1.5 hover:text-primary transition-colors border-b border-border/30 last:border-b-0",
						children: link.name
					}, link.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-grow relative z-10 w-full",
				children
			}),
			!isAuthPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 border-t border-border/40 bg-surface backdrop-blur-md pt-20 pb-8 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none opacity-20 dot-matrix" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-border/20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										className: "flex items-center gap-2 group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-8 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/assets/wordmark-CMp0wKFI.png",
											alt: "ZyphorZone wordmark",
											className: "h-[18px] md:h-5 object-contain"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed max-w-xs",
										children: "A premium freelance startup crafting agency-grade websites, mobile apps, identities, and performance marketing campaigns for ambitious brands worldwide."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://instagram.com/zyphorzone",
											target: "_blank",
											rel: "noreferrer",
											"aria-label": "Instagram",
											className: "h-10 w-10 grid place-items-center rounded-xl border border-border/80 hover:border-primary/50 hover:text-primary transition-all duration-300 bg-background/40 hover:scale-105",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:Zypherzone07@gmail.com",
											"aria-label": "Email",
											className: "h-10 w-10 grid place-items-center rounded-xl border border-border/80 hover:border-primary/50 hover:text-primary transition-all duration-300 bg-background/40 hover:scale-105",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-sm font-semibold uppercase tracking-wider text-foreground/90 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4 text-primary" }), "Services"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3.5 text-sm text-muted-foreground",
								children: [
									"Web Development",
									"App Development",
									"UI / UX Design",
									"Brand Identity",
									"Digital Marketing"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/#about",
									className: "hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-border group-hover:bg-primary transition-colors duration-200" }), s]
								}) }, s))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-sm font-semibold uppercase tracking-wider text-foreground/90 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" }), "Company"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-5 space-y-3.5 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "hover:text-primary transition-colors duration-200",
										children: "About Us"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/#how",
										className: "hover:text-primary transition-colors duration-200",
										children: "How We Build"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/#contact",
										className: "hover:text-primary transition-colors duration-200",
										children: "Consultation"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com/zyphorzone",
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-primary transition-colors duration-200",
										children: "Instagram Profile"
									}) })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-sm font-semibold uppercase tracking-wider text-foreground/90 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4 text-primary" }), "Resources"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-5 space-y-3.5 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/help",
										className: "hover:text-primary transition-colors duration-200",
										children: "Help & FAQs"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/terms",
										className: "hover:text-primary transition-colors duration-200",
										children: "Terms of Service"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/privacy",
										className: "hover:text-primary transition-colors duration-200",
										children: "Privacy Policy"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2 mt-2 pt-2 border-t border-border/20 text-xs text-foreground/75",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), "Coimbatore, India"]
									})
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ZyphorZone. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "hover:text-primary transition-colors duration-200",
									children: "Privacy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "hover:text-primary transition-colors duration-200",
									children: "Terms"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline border-l border-border/60 pl-6",
									children: "Crafted with care by a vetted freelance collective."
								})
							]
						})]
					})
				]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$5 = () => import("./routes-D_xh5LjO.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ZyphorZone — Premium Freelance Solutions for Ambitious Brands" },
		{
			name: "description",
			content: "ZyphorZone delivers high-end web development, custom applications, modern branding, and data-driven marketing managed by a senior freelance collective."
		},
		{
			property: "og:title",
			content: "ZyphorZone — Premium Freelance Solutions"
		},
		{
			property: "og:description",
			content: "Web, mobile app, branding and marketing services by a trusted freelance collective. Ship faster, look sharper, grow further."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./auth-BSryOpL1.mjs");
var Route$4 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Login or Register — ZyphorZone" },
		{
			name: "description",
			content: "Sign in or create your ZyphorZone account to manage projects and enquiries."
		},
		{
			property: "og:title",
			content: "Login or Register — ZyphorZone"
		},
		{
			property: "og:description",
			content: "Sign in or create your ZyphorZone account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-5uAMhCm4.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — ZyphorZone" },
		{
			name: "description",
			content: "Get in touch with the ZyphorZone team. Email, Instagram or our enquiry form."
		},
		{
			property: "og:title",
			content: "Contact Us — ZyphorZone"
		},
		{
			property: "og:description",
			content: "Reach out to ZyphorZone — we reply within 24 hours."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./help-BFF0MTXM.mjs");
var Route$2 = createFileRoute("/help")({
	head: () => ({ meta: [
		{ title: "Help Center — ZyphorZone" },
		{
			name: "description",
			content: "Find answers to common questions or reach the ZyphorZone team for support."
		},
		{
			property: "og:title",
			content: "Help Center — ZyphorZone"
		},
		{
			property: "og:description",
			content: "Support and FAQs for ZyphorZone clients."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./privacy-BbdUiT2X.mjs");
var Route$1 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — ZyphorZone" },
		{
			name: "description",
			content: "How ZyphorZone collects, uses and protects your personal information."
		},
		{
			property: "og:title",
			content: "Privacy Policy — ZyphorZone"
		},
		{
			property: "og:description",
			content: "ZyphorZone privacy policy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-B6eoI_Ef.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms of Service — ZyphorZone" },
		{
			name: "description",
			content: "The terms that govern use of ZyphorZone's website and services."
		},
		{
			property: "og:title",
			content: "Terms of Service — ZyphorZone"
		},
		{
			property: "og:description",
			content: "ZyphorZone terms of service."
		},
		{
			name: "robots",
			content: "index,follow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	AuthRoute: Route$4.update({
		id: "/auth",
		path: "/auth",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	HelpRoute: Route$2.update({
		id: "/help",
		path: "/help",
		getParentRoute: () => Route$6
	}),
	PrivacyRoute: Route$1.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$6
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
