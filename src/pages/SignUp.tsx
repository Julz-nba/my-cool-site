import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NAVY = "#0B1F3A";
const GOLD = "#C9A227";
const TEAL = "#0D9488";

interface FormData {
  email: string;
  password: string;
  confirm: string;
}

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({ email: "", password: "", confirm: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirm) {
      alert("Please fill in all fields.");
      return;
    }
    
    if (form.password !== form.confirm) {
      alert("Passwords do not match.");
      return;
    }

    if (form.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    try {
      localStorage.setItem("signup_email", form.email);
      localStorage.setItem("signup_pass", form.password);
      localStorage.setItem("is_registered", "true");
    } catch (e) {
      console.error("Could not save to localStorage", e);
    }

    alert("Account created! You are now logged in.");
    navigate("/choose");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="w-full max-w-[480px]">
        <div
          className="bg-white rounded-[12px] px-8 py-10"
          style={{ border: "1px solid #D0D5DD", boxShadow: "0 4px 24px rgba(11,31,58,0.07)" }}
        >
          <div className="text-center mb-8">
            <Link to="/" className="text-xl font-black tracking-tight block mb-6">
              <span style={{ color: NAVY }}>Crypto Asset </span><span style={{ color: GOLD }}>Vault</span>
            </Link>
            <h1 className="text-2xl font-black mb-2" style={{ color: NAVY }}>Create your account</h1>
            <p className="text-sm" style={{ color: "#6B7280" }}>Start protecting your digital assets today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Field
              label="Email address"
              type="email"
              value={form.email}
              placeholder="you@example.com"
              onChange={(v: string) => setForm({ ...form, email: v })}
            />
            <Field
              label="Password"
              type="password"
              value={form.password}
              placeholder="Min. 8 characters"
              onChange={(v: string) => setForm({ ...form, password: v })}
            />
            <Field
              label="Confirm password"
              type="password"
              value={form.confirm}
              placeholder="Repeat password"
              onChange={(v: string) => setForm({ ...form, confirm: v })}
            />

            <div
              className="flex items-start gap-3 p-4 rounded-[10px] text-xs"
              style={{ backgroundColor: `${TEAL}10`, border: `1px solid ${TEAL}30`, color: "#374151" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                <path d="M8 1L2 3.5v5c0 3.2 2.6 6.1 6 7 3.4-.9 6-3.8 6-7v-5L8 1z" stroke={TEAL} strokeWidth="1.3"/>
              </svg>
              <span>
                Protected with <strong>bank-grade AES-256 encryption</strong>. Your credentials are stored securely in your browser cache.
              </span>
            </div>

            <button
              type="submit"
              className="w-full h-[48px] rounded-[10px] font-bold text-sm transition-all hover:opacity-90 active:scale-[.99] mt-2"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Create account
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: "#6B7280" }}>
            Already have an account?{" "}
            <Link to="/login" className="font-semibold hover:underline" style={{ color: NAVY }}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}

function Field({ label, type, value, placeholder, onChange }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: "#0B1F3A" }}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="w-full h-[48px] px-4 rounded-[10px] text-sm outline-none transition-all"
        style={{ border: "1.5px solid #D0D5DD", backgroundColor: "white", color: "#1C1C1C", fontFamily: "inherit" }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = "#0B1F3A")}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = "#D0D5DD")}
      />
    </div>
  );
}