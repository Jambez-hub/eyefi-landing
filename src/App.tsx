import { useState } from "react";
import {
  Wifi,
  Zap,
  ShieldCheck,
  Headphones,
  Gauge,
  Globe,
  MapPin,
  Phone,
  Mail,
  Check,
  ChevronDown,
  Building2,
  Home,
  ArrowRight,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body text-[#374151]">
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <Plans />
      <Coverage />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-isp-500 text-white shadow-card">
        <Wifi className="h-5 w-5" />
      </span>
      <span className="text-lg font-extrabold text-isp-900">
        Eye<span className="text-isp-600">cell</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Plans", "#plans"],
    ["Features", "#features"],
    ["Coverage", "#coverage"],
    ["Support", "#faq"],
  ];
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-isp-100 bg-white/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[#6b7280] transition-colors hover:text-isp-600"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#plans"
            className="hidden rounded-lg bg-isp-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Get Connected
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-isp-100 text-isp-700 md:hidden"
            aria-label="Menu"
          >
            <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-isp-100 bg-white px-5 py-3 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-[#374151]"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <img
        src={heroImg}
        alt="Aerial view of Eldoret connected by fiber optic network"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white">
            <MapPin className="h-3.5 w-3.5" /> Eldoret · Kitale · Nyahururu · Thika
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Internet that <span className="text-isp-200">actually</span> keeps up with you.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-isp-100">
            Blazing-fast fiber broadband for homes and businesses across Eldoret, Kitale, Nyahururu
            and Thika. Unlimited data, 99.9% uptime, and a local support team that picks up the phone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-isp-700 shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Plans <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#coverage"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Check Coverage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["1,000+", "Connected homes"],
    ["99.9%", "Network uptime"],
    ["24/7", "Local support"],
    ["15 min", "Avg. install time"],
  ];
  return (
    <section className="mx-auto -mt-12 max-w-6xl px-5 relative z-10">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-isp-100 bg-isp-100 md:grid-cols-4"
           style={{ boxShadow: '0 20px 40px rgba(15,45,92,0.2)' }}>
        {stats.map(([n, l]) => (
          <div key={l} className="bg-white px-6 py-7 text-center">
            <div className="text-2xl font-extrabold text-isp-900 sm:text-3xl">{n}</div>
            <div className="mt-1 text-sm text-[#6b7280]">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items: [typeof Wifi, string, string][] = [
    [Zap, "Pure Fiber Speed", "Symmetrical upload and download speeds up to 100 Mbps so streaming, calls and uploads never lag."],
    [Gauge, "Unlimited Data", "No caps, no throttling, no fair-use surprises. Stream and work as much as you want."],
    [ShieldCheck, "Rock-Solid Uptime", "Redundant routing and a monitored core network deliver 99.9% reliability."],
    [Headphones, "Local Support", "A real local team available 24/7 by phone, WhatsApp and on-site visits."],
    [Wifi, "Hotspot Solutions", "Managed Wi-Fi hotspots with voucher billing for cafés, hostels, estates and public spaces."],
    [Globe, "Free Router & Setup", "Professional installation and a dual-band Wi-Fi router included on every plan."],
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        tag="Why Eyecell"
        title="Built for the way you connect"
        sub="Everything you need for fast, dependable internet — backed by a team that lives here too."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([Icon, title, desc]) => (
          <div
            key={title}
            className="group rounded-2xl border border-isp-100 bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-isp-50 text-isp-600 transition-colors group-hover:bg-isp-600 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-isp-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  speed: string;
  home: number;
  business: number;
  features: string[];
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    speed: "15 Mbps",
    home: 2500,
    business: 4500,
    features: ["Unlimited data", "Free Wi-Fi router", "1–2 devices", "Email support"],
  },
  {
    name: "Family",
    speed: "30 Mbps",
    home: 3500,
    business: 6500,
    features: ["Unlimited data", "Free Wi-Fi router", "Up to 10 devices", "Priority support", "HD streaming"],
    popular: true,
  },
  {
    name: "Pro",
    speed: "100 Mbps",
    home: 6500,
    business: 11500,
    features: ["Unlimited data", "Mesh router included", "Unlimited devices", "24/7 dedicated support", "Static IP option"],
  },
];

function Plans() {
  const [type, setType] = useState<"home" | "business">("home");
  return (
    <section id="plans" className="bg-isp-50/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          tag="Simple Pricing"
          title="Pick a plan that fits"
          sub="No contracts, no hidden fees. All prices in KSh per month, taxes included."
        />
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-xl border border-isp-200 bg-white p-1">
            {(["home", "business"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                  type === t ? "bg-isp-600 text-white" : "text-[#6b7280] hover:text-isp-700"
                }`}
              >
                {t === "home" ? <Home className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 transition-transform hover:-translate-y-1 ${
                p.popular
                  ? "border-isp-600 shadow-glow lg:-mt-4 lg:mb-4"
                  : "border-isp-100 shadow-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-isp-600 px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-isp-900">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-isp-600">{p.speed}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-sm font-semibold text-[#6b7280]">KSh</span>
                <span className="text-4xl font-extrabold text-isp-900">
                  {(type === "home" ? p.home : p.business).toLocaleString()}
                </span>
                <span className="mb-1 text-sm text-[#9ca3af]">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-isp-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-transform hover:scale-[1.02] ${
                  p.popular
                    ? "bg-isp-600 text-white shadow-card"
                    : "border border-isp-200 text-isp-700 hover:bg-isp-50"
                }`}
              >
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AREAS = [
  "Eldoret CBD",
  "Pioneer",
  "Kapsoya",
  "Langas",
  "Elgon View",
  "Annex",
  "Kimumu",
  "Kitale",
  "Nyahururu",
  "Thika",
];

const TOWNS = [
  ["Eldoret", "Uasin Gishu — HQ & widest coverage"],
  ["Kitale", "Trans Nzoia — town & estates"],
  ["Nyahururu", "Laikipia — CBD & surrounding"],
  ["Thika", "Kiambu — town & industrial area"],
];

function Coverage() {
  const [query, setQuery] = useState("");
  const match = query
    ? AREAS.find((a) => a.toLowerCase().includes(query.trim().toLowerCase()))
    : null;
  return (
    <section id="coverage" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            align="left"
            tag="Coverage"
            title="Is Eyecell in your neighbourhood?"
            sub="We're expanding fast across Eldoret, Kitale, Nyahururu and Thika. Type your area to check availability."
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Kapsoya"
              className="w-full rounded-xl border border-isp-200 bg-white px-4 py-3 text-sm text-[#374151] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-isp-600"
            />
          </div>
          {query && (
            <div
              className={`mt-4 rounded-xl border px-4 py-3 text-sm font-medium ${
                match
                  ? "border-[#bbf7d0] bg-[#dcfce7] text-[#166534]"
                  : "border-[#fde68a] bg-[#fef3c7] text-[#92400e]"
              }`}
            >
              {match
                ? `Great news — ${match} is live on our network! Request an install below.`
                : "Not live there yet, but we're expanding. Leave your details and we'll notify you."}
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span
                key={a}
                className="rounded-full bg-isp-50 px-3 py-1.5 text-xs font-medium text-isp-700"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-isp-100 bg-isp-50/60 p-6 shadow-card sm:p-8">
          <div className="flex items-center gap-2 text-sm font-bold text-isp-900">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#22c55e]" /> Live network across 4 towns
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {TOWNS.map(([town, desc]) => (
              <div
                key={town}
                className="rounded-2xl border border-isp-100 bg-white p-4 shadow-card"
              >
                <div className="flex items-center gap-2 text-base font-bold text-isp-900">
                  <MapPin className="h-4 w-4 shrink-0 text-isp-600" /> {town}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6b7280]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    ["Mercy A.", "Kapsoya", "Switched from mobile data and never looked back. Zoom calls finally don't freeze!"],
    ["Brian K.", "Eldoret CBD", "Runs our whole café POS and Wi-Fi. Support answered within minutes when we needed them."],
    ["Faith J.", "Elgon View", "Installed same week I called. The kids stream, I work — no buffering."],
  ];
  return (
    <section className="bg-isp-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead dark tag="Testimonials" title="Loved across Kenya" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.map(([name, area, quote]) => (
            <div key={name} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex gap-0.5 text-[#fbbf24]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-isp-100">"{quote}"</p>
              <div className="mt-5 text-sm font-bold">{name}</div>
              <div className="text-xs text-[#94b8e0]">{area}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["How long does installation take?", "Most homes are connected within 4 hours of approval, and we usually install within 1–3 days of your request depending on your area."],
    ["Is the data really unlimited?", "Yes. Every plan includes truly unlimited data with no caps, throttling or fair-use penalties."],
    ["Do I need to sign a contract?", "No long-term contracts. Plans are billed monthly and you can upgrade, downgrade or pause anytime."],
    ["What happens if there's an outage?", "Our local NOC monitors the network 24/7. Report an issue by phone or WhatsApp and a technician is dispatched fast."],
    ["Is the router included?", "Yes — a dual-band Wi-Fi router and professional setup are free on every plan. Mesh add-ons are available for larger spaces."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <SectionHead tag="FAQ" title="Questions, answered" />
      <div className="mt-10 space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="overflow-hidden rounded-2xl border border-isp-100 bg-white">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-isp-900">{q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-isp-600 transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <p className="px-5 pb-4 text-sm leading-relaxed text-[#6b7280]">{a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="overflow-hidden rounded-3xl bg-hero-gradient px-8 py-14 text-center shadow-glow sm:px-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to get connected?</h2>
        <p className="mx-auto mt-4 max-w-xl text-isp-100">
          Request an installation today and join thousands of happy customers across Eldoret, Kitale, Nyahururu and Thika.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+254796330157"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-isp-700 transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> Call 0796 330 157
          </a>
          <a
            href="mailto:info@eyecell.co.ke"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Email us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-isp-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-[#6b7280]">
            Trusted fiber internet provider for homes and businesses in Eldoret, Kitale, Nyahururu and Thika.
          </p>
        </div>
        <FooterCol title="Company" links={["About", "Coverage", "Careers", "Blog"]} />
        <FooterCol title="Support" links={["Help Center", "Report Outage", "Pay Bill", "Contact"]} />
        <div>
          <h4 className="text-sm font-bold text-isp-900">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[#6b7280]">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-isp-600" /> Eldoret · Kitale · Nyahururu · Thika</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-isp-600" /> 0796 330 157</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-isp-600" /> info@eyecell.co.ke</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-isp-100 py-5 text-center text-xs text-[#9ca3af]">
        © {new Date().getFullYear()} Eyecell Eldoret. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-isp-900">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-[#6b7280] transition-colors hover:text-isp-600">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHead({
  tag,
  title,
  sub,
  align = "center",
  dark = false,
}: {
  tag: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span
        className={`text-xs font-bold uppercase tracking-wider ${
          dark ? "text-isp-200" : "text-isp-600"
        }`}
      >
        {tag}
      </span>
      <h2 className={`mt-3 text-3xl font-extrabold sm:text-4xl ${dark ? "text-white" : "text-isp-900"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 ${dark ? "text-isp-100" : "text-[#6b7280]"}`}>{sub}</p>}
    </div>
  );
}
