import dagLogo from "./Imports/Visit_TikTok_to_discover_profiles_.jpg";
import warriorLogo from "./Imports/Visit_TikTok_to_discover_profiles___1_.jpg";

const GOLD = "#C9A227";
const NAVY = "#0B1F3A";

export default function HeroBanner() {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl flex flex-col"
      style={{ backgroundColor: "#06111F", minHeight: 440 }}
    >
      {/* Ambient glow layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,162,39,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 50%, rgba(11,31,58,0.5) 0%, transparent 80%)",
        }}
      />

      {/* Top label */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: "rgba(201,162,39,0.12)",
            border: "1px solid rgba(201,162,39,0.3)",
            color: GOLD,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: GOLD }} />
          Official Partners
        </div>
        <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
          Est. 2025
        </span>
      </div>

      {/* Divider line */}
      <div
        className="relative z-10 mx-6 h-px"
        style={{ backgroundColor: "rgba(201,162,39,0.2)" }}
      />

      {/* Main content: two logos */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-stretch divide-x divide-white/5">
        {/* DAG Logo panel */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-4 group">
          <div
            className="relative w-32 h-32 rounded-2xl overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{
              boxShadow: "0 0 32px rgba(201,162,39,0.2), 0 0 80px rgba(201,162,39,0.05)",
              border: "1px solid rgba(201,162,39,0.25)",
            }}
          >
            <img
              src={dagLogo}
              alt="Digital Ascension Group logo"
              className="w-full h-full object-cover"
            />
            {/* Gold rim overlay */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: "inset 0 0 20px rgba(201,162,39,0.15)" }}
            />
          </div>
          <div className="text-center">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-1"
              style={{ color: GOLD }}
            >
              Digital Ascension Group
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Your Digital Wealth Partner
            </p>
          </div>
        </div>

        {/* Center connector */}
        <div className="flex items-center justify-center px-4 py-2 md:py-0">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px flex-1 hidden md:block" style={{ backgroundColor: "rgba(201,162,39,0.2)" }} />
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
              style={{
                backgroundColor: "rgba(201,162,39,0.12)",
                border: "1px solid rgba(201,162,39,0.35)",
                color: GOLD,
              }}
            >
              ×
            </div>
            <div className="w-px flex-1 hidden md:block" style={{ backgroundColor: "rgba(201,162,39,0.2)" }} />
          </div>
        </div>

        {/* Warrior Logo panel */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-4 group">
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{
              boxShadow: "0 0 32px rgba(180,0,0,0.2), 0 0 80px rgba(180,0,0,0.05)",
              border: "1px solid rgba(220,50,50,0.25)",
            }}
          >
            <img
              src={warriorLogo}
              alt="3T Warrior Academy logo"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ boxShadow: "inset 0 0 20px rgba(180,0,0,0.15)" }}
            />
          </div>
          <div className="text-center">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-1"
              style={{ color: "#E05555" }}
            >
              3T Warrior Academy
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Elite Investment Training
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="relative z-10 mx-6 mb-6 mt-2 rounded-xl px-5 py-3 flex items-center justify-between"
        style={{
          backgroundColor: "rgba(201,162,39,0.06)",
          border: "1px solid rgba(201,162,39,0.15)",
        }}
      >
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1L2 3.5v4c0 2.8 2 5.4 5 6 3-0.6 5-3.2 5-6v-4L7 1z"
              stroke={GOLD}
              strokeWidth="1.2"
            />
          </svg>
          <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
            Wyoming LLC · Crypto-native · Privacy-first
          </span>
        </div>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: "rgba(201,162,39,0.15)", color: GOLD }}
        >
          Verified
        </span>
      </div>
    </div>
  );
}
