import { Link } from "react-router-dom";

const NAVY = "#0B1F3A";
const GOLD = "#C9A227";
const TEAL = "#0D9488";

const timeline = [
  { status: "done", label: "Payment received", time: "Just now", detail: "Order #VL-2025-1047 confirmed." },
  { status: "active", label: "Filing preparation", time: "Today", detail: "Drafting your operating agreement and articles of organization." },
  { status: "pending", label: "Wyoming state filing", time: "1–2 business days", detail: "Submitted to the Wyoming Secretary of State." },
  { status: "pending", label: "EIN application", time: "2–3 business days", detail: "Federal tax ID filed with the IRS on your behalf." },
  { status: "pending", label: "Documents delivered", time: "3–5 business days", detail: "Certified copies emailed to your account." },
];

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="w-full max-w-[560px]">
        {/* Success card */}
        <div
          className="bg-white rounded-[12px] p-10 text-center mb-8"
          style={{ border: "1px solid #D0D5DD", boxShadow: "0 4px 32px rgba(11,31,58,0.08)" }}
        >
          {/* Checkmark */}
          <div className="flex items-center justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${TEAL}15` }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke={TEAL} strokeWidth="2"/>
                <path d="M12 20l6 6 10-11" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-black mb-3" style={{ color: NAVY }}>
            {"We're filing your LLC."}
          </h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#6B7280" }}>
            Your Wyoming LLC is officially in motion. Certified documents will be in your inbox within 3–5 business days.
          </p>

          <div
            className="flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full"
            style={{ backgroundColor: `${GOLD}15`, color: GOLD }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="5" width="12" height="9" rx="1.5" stroke={GOLD} strokeWidth="1.5"/>
              <path d="M5 5V4a3 3 0 016 0v1" stroke={GOLD} strokeWidth="1.5"/>
            </svg>
            Order #VL-2025-1047
          </div>
        </div>

        {/* Timeline */}
        <div
          className="bg-white rounded-[12px] p-8"
          style={{ border: "1px solid #D0D5DD" }}
        >
          <h2 className="text-base font-black mb-6" style={{ color: NAVY }}>Filing timeline</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor:
                        item.status === "done" ? TEAL :
                        item.status === "active" ? `${GOLD}20` :
                        "#F3F4F6",
                      border: `2px solid ${
                        item.status === "done" ? TEAL :
                        item.status === "active" ? GOLD :
                        "#D0D5DD"
                      }`,
                    }}
                  >
                    {item.status === "done" ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7l3 3 5-5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : item.status === "active" ? (
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: GOLD }} />
                    ) : (
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D0D5DD" }} />
                    )}
                  </div>
                  {i < timeline.length - 1 && (
                    <div
                      className="w-0.5 flex-1 my-1"
                      style={{
                        backgroundColor: item.status === "done" ? TEAL : "#E5E7EB",
                        minHeight: 28,
                      }}
                    />
                  )}
                </div>
                <div className={`pb-6 ${i === timeline.length - 1 ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: item.status === "pending" ? "#9CA3AF" : NAVY }}
                    >
                      {item.label}
                    </p>
                    <span className="text-xs" style={{ color: "#9CA3AF" }}>{item.time}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <Link
            to="/"
            className="flex-1 h-[48px] rounded-[10px] font-semibold text-sm flex items-center justify-center border transition-colors hover:bg-gray-50"
            style={{ borderColor: "#D0D5DD", color: NAVY }}
          >
            Return home
          </Link>
          <a
            href="#"
            className="flex-1 h-[48px] rounded-[10px] font-bold text-sm flex items-center justify-center transition-all hover:opacity-90"
            style={{ backgroundColor: NAVY, color: "white" }}
          >
            View dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
