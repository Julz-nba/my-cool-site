import { Link } from "react-router-dom";
import BlockchainHero from "../components/BlockchainHero";

const NAVY = "#0B1F3A";
const GOLD = "#C9A227";
const TEAL = "#0D9488";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F8FA" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY, minHeight: "calc(100vh - 72px)" }}
      >
        <div className="max-w-[1120px] mx-auto px-6 lg:px-10 py-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
              style={{ backgroundColor: "rgba(201,162,39,0.12)", color: GOLD, border: `1px solid rgba(201,162,39,0.25)` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              Wyoming LLC Specialists
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
              Specialized LLCs<br />
              <span style={{ color: GOLD }}>for digital-asset</span><br />
              investors.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Privacy-first structures, bulletproof asset protection, and crypto-specific operating agreements — all filed in Wyoming, the most favorable LLC jurisdiction in the US.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/choose"
                className="h-[48px] px-8 rounded-[10px] font-bold text-sm flex items-center transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Form your LLC
              </Link>
              <a
                href="#services"
                className="h-[48px] px-8 rounded-[10px] font-semibold text-sm flex items-center border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "white" }}
              >
                Learn more
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10">
              {["Privacy-first", "No upsells", "Fast processing"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-white/50 text-xs font-medium">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke={TEAL} strokeWidth="1.5"/>
                    <path d="M4.5 7l2 2 3-3" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 min-w-0 w-full lg:max-w-[480px] rounded-2xl overflow-hidden"
            style={{ height: 440, border: "1px solid rgba(201,162,39,0.2)", backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <BlockchainHero />
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 60V30C360 0 720 60 1080 30L1440 0V60H0Z" fill="#F7F8FA" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section id="services" className="py-24 px-6 lg:px-10">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>Why Wyoming</p>
            <h2 className="text-3xl lg:text-4xl font-black" style={{ color: NAVY }}>Built for the way you hold assets.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-[12px] bg-white border transition-shadow hover:shadow-lg"
                style={{ borderColor: "#D0D5DD" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${NAVY}0D` }}
                >
                  {b.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 lg:px-10" style={{ backgroundColor: NAVY }}>
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Transparent Pricing</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">One price. Everything included.</h2>
            <p className="text-white/50 text-base">No upsells. No unexpected add-ons. No annual fees hidden in the fine print.</p>
          </div>
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm p-10 rounded-[12px] text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${GOLD}40` }}
            >
              <p className="text-white/50 text-sm mb-2">One-time fee</p>
              <p className="text-6xl font-black text-white mb-1">$100</p>
              <p className="text-white/40 text-sm mb-8">Wyoming state fee included</p>
              <ul className="space-y-3 text-left mb-10">
                {[
                  "LLC formation & filing",
                  "Crypto operating agreement",
                  "Registered agent (1 year)",
                  "Digital-asset addendum",
                  "EIN application guidance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${TEAL}33` }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5 3.5-4" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/choose"
                className="w-full h-[48px] rounded-[10px] font-bold text-sm flex items-center justify-center transition-all hover:opacity-90"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Form your LLC — $100
              </Link>
              <p className="text-white/30 text-xs mt-4">New LLC or bring an existing one</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wyoming section */}
      <section id="wyoming" className="py-24 px-6 lg:px-10">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>Regulatory Edge</p>
            <h2 className="text-3xl lg:text-4xl font-black mb-6" style={{ color: NAVY }}>
              Wyoming: the most protective LLC jurisdiction in the US.
            </h2>
            <div className="space-y-5">
              {wyomingPoints.map((pt) => (
                <div key={pt.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${NAVY}0D` }}>
                    {pt.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: NAVY }}>{pt.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-[12px] overflow-hidden"
            style={{ border: "1px solid #D0D5DD", height: 420, backgroundColor: "#E8EDF4" }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=500&fit=crop&auto=format"
              alt="Professional financial desk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust / Testimonials */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#F0F4F8" }}>
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>Trusted by investors</p>
            <h2 className="text-2xl lg:text-3xl font-black" style={{ color: NAVY }}>What clients say.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-7 rounded-[12px]" style={{ border: "1px solid #D0D5DD" }}>
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={GOLD}>
                      <path d="M7 1l1.5 4.5H13L9.5 8.5 11 13 7 10.5 3 13l1.5-4.5L1 5.5h4.5z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#374151" }}>{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: NAVY }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: NAVY }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#9CA3AF" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust marks */}
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale">
            {["Law Firm Network", "Wyoming Secretary of State", "IRS EIN Partner", "Crypto Legal Alliance"].map((m) => (
              <span key={m} className="text-sm font-semibold tracking-wide" style={{ color: NAVY }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 lg:px-10">
        <div className="max-w-[560px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>Contact</p>
            <h2 className="text-3xl font-black mb-3" style={{ color: NAVY }}>Questions? Reach out.</h2>
            <p className="text-sm" style={{ color: "#6B7280" }}>We respond within one business day.</p>
          </div>
          <form className="space-y-4">
            <FormField label="Name" placeholder="Alex Johnson" type="text" />
            <FormField label="Email" placeholder="alex@example.com" type="email" />
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your situation…"
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none resize-none transition-colors"
                style={{
                  border: "1.5px solid #D0D5DD",
                  backgroundColor: "white",
                  color: "#1C1C1C",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = NAVY)}
                onBlur={(e) => (e.target.style.borderColor = "#D0D5DD")}
              />
            </div>
            <button
              type="submit"
              className="w-full h-[48px] rounded-[10px] font-bold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: NAVY, color: "white" }}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: "#0B1F3A" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[48px] px-4 rounded-[10px] text-sm outline-none transition-colors"
        style={{ border: "1.5px solid #D0D5DD", backgroundColor: "white", color: "#1C1C1C" }}
        onFocus={(e) => (e.target.style.borderColor = "#0B1F3A")}
        onBlur={(e) => (e.target.style.borderColor = "#D0D5DD")}
      />
    </div>
  );
}

const benefits = [
  {
    title: "Privacy by Default",
    desc: "Wyoming does not require member names on public filings. Your ownership stays private.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L4 5v6c0 4.4 3 8.3 7 9.3 4-1 7-4.9 7-9.3V5l-7-3z" stroke="#0B1F3A" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Asset Protection",
    desc: "Wyoming's single-member charging order protection is the strongest in the country.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="9" width="16" height="11" rx="2" stroke="#0B1F3A" strokeWidth="1.5"/>
        <path d="M7 9V6a4 4 0 018 0v3" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="14.5" r="1.5" fill="#0B1F3A"/>
      </svg>
    ),
  },
  {
    title: "Crypto-Specific Clauses",
    desc: "Operating agreements tailored for digital assets: wallet access, succession, and key management.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M15 8a3 3 0 00-6 0v1H6v9h10V9h-1V8z" stroke="#0B1F3A" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="11" cy="14" r="1.5" fill="#0B1F3A"/>
        <path d="M11 15.5v1.5" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const wyomingPoints = [
  {
    title: "Charging Order Exclusivity",
    desc: "Creditors cannot seize your LLC interest — only attach future distributions.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1L2 4v5c0 3.6 2.9 7 7 7s7-3.4 7-7V4L9 1z" stroke="#0B1F3A" strokeWidth="1.5"/></svg>,
  },
  {
    title: "No State Income Tax",
    desc: "Wyoming levies zero corporate or personal income tax on LLC profits.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3v12" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "DAO LLC Framework",
    desc: "Wyoming pioneered the DAO LLC structure, giving digital-native entities legal standing.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="#0B1F3A" strokeWidth="1.5"/><circle cx="9" cy="3" r="1.5" fill="#0B1F3A"/><circle cx="9" cy="15" r="1.5" fill="#0B1F3A"/><circle cx="3" cy="9" r="1.5" fill="#0B1F3A"/><circle cx="15" cy="9" r="1.5" fill="#0B1F3A"/><path d="M9 6V4.5M9 13.5V12M6 9H4.5M13.5 9H12" stroke="#0B1F3A" strokeWidth="1"/></svg>,
  },
  {
    title: "Perpetual Existence",
    desc: "Your LLC continues indefinitely without state-required annual dissolution.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3a6 6 0 100 12A6 6 0 009 3z" stroke="#0B1F3A" strokeWidth="1.5"/><path d="M9 6v3l2 2" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
];

const testimonials = [
  {
    quote: "Straightforward process, crystal-clear pricing, and the operating agreement covered every crypto scenario I needed. Filed in under a week.",
    name: "Marcus T.",
    role: "DeFi Investor",
  },
  {
    quote: "Finally a service that actually understands digital assets. The crypto-specific addendum alone is worth the fee.",
    name: "Priya R.",
    role: "Multi-chain Portfolio Manager",
  },
  {
    quote: "Privacy was my top concern. Digital Ascension Group structured everything so my name doesn't appear on any public document.",
    name: "Jordan K.",
    role: "Bitcoin Holder",
  },
];
