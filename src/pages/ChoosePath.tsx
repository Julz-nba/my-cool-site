import { Link } from "react-router-dom";

const NAVY = "#0B1F3A";
const GOLD = "#C9A227";
const TEAL = "#0D9488";

export default function ChoosePath() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="w-full max-w-[640px]">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ backgroundColor: `${TEAL}15`, color: TEAL, border: `1px solid ${TEAL}30` }}
          >
            Step 1 of 4
          </div>
          <h1 className="text-3xl font-black mb-3" style={{ color: NAVY }}>Choose Your Starting Point</h1>
          <p className="text-sm" style={{ color: "#6B7280" }}>
            We handle both paths — new LLCs and existing ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ChoiceCard
            to="/payment"
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="8" width="24" height="18" rx="3" stroke={NAVY} strokeWidth="2"/>
                <path d="M16 12v8M12 16h8" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
            title="Form a new LLC"
            desc="We file everything from scratch. Includes operating agreement, EIN guidance, and registered agent."
            tag="Most popular"
          />
          <ChoiceCard
            to="/payment"
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 16l4 4 8-8" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="4" y="4" width="24" height="24" rx="4" stroke={NAVY} strokeWidth="2"/>
              </svg>
            }
            title="Bring an existing LLC"
            desc="We amend your current operating agreement to add crypto-specific clauses and asset protection provisions."
            tag="Existing entity"
          />
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "#9CA3AF" }}>
          Both options are $100, one-time. No ongoing fees.
        </p>
      </div>
    </div>
  );
}

function ChoiceCard({
  to, icon, title, desc, tag,
}: {
  to: string; icon: React.ReactNode; title: string; desc: string; tag: string;
}) {
  return (
    <Link
      to={to}
      className="group block p-8 rounded-[12px] bg-white transition-all hover:shadow-xl hover:-translate-y-1"
      style={{ border: "1.5px solid #D0D5DD" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = NAVY)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#D0D5DD")}
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#F0F4F8" }}>
        {icon}
      </div>
      <div
        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
        style={{ backgroundColor: `${GOLD}18`, color: GOLD }}
      >
        {tag}
      </div>
      <h2 className="text-lg font-black mb-2" style={{ color: NAVY }}>{title}</h2>
      <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{desc}</p>
      <div
        className="flex items-center gap-1 text-xs font-semibold mt-6 transition-colors group-hover:gap-2"
        style={{ color: NAVY }}
      >
        Continue
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
}
