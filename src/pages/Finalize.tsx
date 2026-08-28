import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NAVY = "#0B1F3A";
const GOLD = "#C9A227";
const TEAL = "#0D9488";

export default function Finalize() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", state: "Wyoming", members: "1" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/wallet");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="w-full max-w-[480px]">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ backgroundColor: `${TEAL}15`, color: TEAL, border: `1px solid ${TEAL}30` }}
          >
            Step 3 of 4
          </div>
          <h1 className="text-3xl font-black mb-2" style={{ color: NAVY }}>Finalize Setup</h1>
          <p className="text-sm" style={{ color: "#6B7280" }}>
            Answer a few final questions and we handle the rest.
          </p>
        </div>

        <div
          className="bg-white rounded-[12px] p-8"
          style={{ border: "1px solid #D0D5DD", boxShadow: "0 4px 24px rgba(11,31,58,0.06)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>LLC Name</label>
              <input
                type="text"
                placeholder="e.g., Apex Digital Holdings LLC"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full h-[48px] px-4 rounded-[10px] text-sm outline-none transition-all"
                style={{ border: "1.5px solid #D0D5DD", fontFamily: "inherit" }}
                onFocus={(e) => (e.target.style.borderColor = NAVY)}
                onBlur={(e) => (e.target.style.borderColor = "#D0D5DD")}
              />
              <p className="text-xs mt-1.5" style={{ color: "#9CA3AF" }}>
                Must end in "LLC" or "L.L.C." — we verify availability before filing.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>State of formation</label>
              <select
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                className="w-full h-[48px] px-4 rounded-[10px] text-sm outline-none transition-all appearance-none"
                style={{ border: "1.5px solid #D0D5DD", fontFamily: "inherit", backgroundColor: "white", color: "#1C1C1C" }}
                onFocus={(e) => (e.target.style.borderColor = NAVY)}
                onBlur={(e) => (e.target.style.borderColor = "#D0D5DD")}
              >
                <option value="Wyoming">Wyoming (recommended)</option>
                <option value="Delaware">Delaware</option>
                <option value="Nevada">Nevada</option>
                <option value="Other">Other — contact us</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Number of members</label>
              <div className="flex gap-3">
                {["1", "2", "3", "4+"].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm({ ...form, members: n })}
                    className="flex-1 h-[48px] rounded-[10px] text-sm font-semibold transition-all"
                    style={{
                      border: `1.5px solid ${form.members === n ? NAVY : "#D0D5DD"}`,
                      backgroundColor: form.members === n ? NAVY : "white",
                      color: form.members === n ? "white" : "#1C1C1C",
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="p-4 rounded-[10px] text-xs leading-relaxed"
              style={{ backgroundColor: "#F0F4F8", color: "#6B7280" }}
            >
              <strong style={{ color: NAVY }}>We coordinate with your law firm.</strong> If you have an attorney of record, add their contact in the next step and we loop them in automatically.
            </div>

            <button
              type="submit"
              className="w-full h-[48px] rounded-[10px] font-bold text-sm transition-all hover:opacity-90 active:scale-[.99]"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Continue →
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center mt-6">
          <Link to="/payment" className="text-xs transition-colors hover:underline" style={{ color: "#9CA3AF" }}>← Back to payment</Link>
        </div>
      </div>
    </div>
  );
}
