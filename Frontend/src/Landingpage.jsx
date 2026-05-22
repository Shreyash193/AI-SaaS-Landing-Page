import heroImg from "./assets/hero.png";

const features = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive workflows with intelligent routing, prompts, and integrations.",
    icon: "A",
  },
  {
    title: "Real-time Analytics",
    description:
      "Track engagement, revenue, and AI performance with live operational dashboards.",
    icon: "R",
  },
  {
    title: "Secure Cloud",
    description:
      "Scale with access controls, monitoring, and infrastructure built for SaaS teams.",
    icon: "S",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$19",
    features: ["5 Projects", "Basic Analytics", "Email Support"],
  },
  {
    name: "Pro",
    price: "$49",
    features: ["Unlimited Projects", "Advanced AI Tools", "Priority Support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Custom Workflows", "Dedicated Manager", "24/7 Support"],
  },
];

export default function AISaaSLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_14%,rgba(32,201,151,0.22),transparent_30rem),radial-gradient(circle_at_82%_10%,rgba(250,204,21,0.16),transparent_28rem),linear-gradient(135deg,#08110f_0%,#10231d_52%,#182014_100%)] text-slate-50">
      <header className="relative z-10 mx-auto flex w-[min(1120px,calc(100%-40px))] items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-3 text-xl font-extrabold">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-lime-300 text-xs font-black text-emerald-950">
            AI
          </span>
          AIFlow
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-lime-300" href="#features">
            Features
          </a>
          <a className="transition hover:text-lime-300" href="#pricing">
            Pricing
          </a>
          <a className="transition hover:text-lime-300" href="#contact">
            Contact
          </a>
        </nav>

        <a
          className="hidden min-h-11 items-center rounded-lg bg-lime-300 px-5 font-bold text-emerald-950 transition hover:-translate-y-0.5 sm:inline-flex"
          href="#pricing"
        >
          Get Started
        </a>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-94px)] w-[min(1120px,calc(100%-40px))] items-center gap-14 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:py-20"
      >
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.12em] text-lime-300">
            AI-powered SaaS platform
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-8xl">
            Build smarter products with AI automation.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Launch AI workflows, monitor performance, and scale your SaaS
            product from a focused platform built for modern teams.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-lime-300 px-6 font-extrabold text-emerald-950 transition hover:-translate-y-0.5"
              href="#pricing"
            >
              Start Free Trial
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/10 px-6 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              href="#features"
            >
              Explore Features
            </a>
          </div>

          <dl className="mt-11 flex flex-wrap gap-9">
            {[
              ["10K+", "Active users"],
              ["99.9%", "Uptime"],
              ["24/7", "Support"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-3xl font-black">{value}</dt>
                <dd className="mt-1 text-slate-400">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[560px] max-lg:min-h-0">
          <img
            src={heroImg}
            alt=""
            className="absolute left-1/2 top-0 h-[470px] w-[min(470px,92%)] -translate-x-1/2 rotate-3 rounded-lg object-cover opacity-25 saturate-125 max-lg:hidden"
          />

          <div className="relative mt-14 rounded-lg border border-white/15 bg-emerald-950/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl max-lg:mt-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="mb-1 text-sm text-slate-400">AI Dashboard</p>
                <strong className="text-lg">Live automation health</strong>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-200">
                Live
              </span>
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/10 p-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-slate-300">Workflow performance</span>
                <strong>84%</strong>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <span className="block h-full w-[84%] rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <div className="rounded-lg border border-white/10 bg-white/10 p-5">
                <p className="text-sm text-slate-400">Revenue</p>
                <strong className="mt-2 block text-3xl">$24K</strong>
                <span className="mt-2 block text-sm text-emerald-200">+18% growth</span>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/10 p-5">
                <p className="text-sm text-slate-400">AI Tasks</p>
                <strong className="mt-2 block text-3xl">1.2M</strong>
                <span className="mt-2 block text-sm text-emerald-200">Processed</span>
              </div>
            </div>

            <div className="mt-4 flex h-40 items-end gap-3 rounded-lg border border-white/10 bg-white/10 p-5">
              {[44, 68, 52, 82, 61, 74].map((height) => (
                <span
                  key={height}
                  className="min-w-4 flex-1 rounded-t-lg bg-gradient-to-t from-emerald-400 to-lime-300"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto w-[min(1120px,calc(100%-40px))] py-20"
      >
        <div className="mb-9 max-w-2xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.12em] text-lime-300">
            Features
          </p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Everything you need to move faster
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              className="rounded-lg border border-white/10 bg-white/10 p-7"
              key={feature.title}
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-lime-300 text-xs font-black text-emerald-950">
                {feature.icon}
              </span>
              <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="mx-auto w-[min(1120px,calc(100%-40px))] py-16"
      >
        <div className="mb-9 max-w-2xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.12em] text-lime-300">
            Pricing
          </p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Simple, transparent plans
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pricing.map((plan) => (
            <article
              className={`flex min-h-[390px] flex-col rounded-lg border p-7 ${
                plan.popular
                  ? "border-lime-300/70 bg-lime-300/10"
                  : "border-white/10 bg-white/10"
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <span className="mb-3 self-start rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-200">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-slate-400">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                /month
              </p>
              <ul className="mt-7 grid gap-4 text-slate-200">
                {plan.features.map((item) => (
                  <li key={item} className="before:mr-3 before:font-black before:text-lime-300 before:content-['✓']">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className="mt-auto inline-flex min-h-12 items-center justify-center rounded-lg bg-lime-300 px-6 font-extrabold text-emerald-950 transition hover:-translate-y-0.5"
                href="#contact"
              >
                Choose Plan
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto my-20 flex w-[min(1120px,calc(100%-40px))] items-center justify-between gap-7 rounded-lg border border-white/15 bg-white/10 p-8 max-md:flex-col max-md:items-start">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-lime-300">
            Ready to scale?
          </p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Start building your AI SaaS workflow today.
          </h2>
        </div>
        <a
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-lime-300 px-6 font-extrabold text-emerald-950 transition hover:-translate-y-0.5"
          href="#pricing"
        >
          Start Building
        </a>
      </section>

      <footer
        id="contact"
        className="mx-auto flex w-[min(1120px,calc(100%-40px))] items-center justify-between gap-4 border-t border-white/10 py-7 text-slate-400 max-sm:flex-col max-sm:items-start"
      >
        <p>© 2026 AIFlow. All rights reserved.</p>
        <a className="transition hover:text-lime-300" href="mailto:hello@aiflow.com">
          hello@aiflow.com
        </a>
      </footer>
    </main>
  );
}
