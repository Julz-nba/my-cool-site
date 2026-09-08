import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const NAVY = "#0B1F3A";
const GOLD = "#C9A227";
const TEAL = "#0D9488";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem("signup_email");
    const savedPass = localStorage.getItem("signup_pass");

    if (savedEmail && savedPass) {
      setForm({ email: savedEmail, password: savedPass });
      setTimeout(() => {
        formRef.current?.requestSubmit();
      }, 100);
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    if (!form.email || !form.password) {
      alert("Please enter email and password");
      setIsLoading(false);
      return;
    }

    const storedEmail = localStorage.getItem("signup_email");
    const storedPass = localStorage.getItem("signup_pass");

    if (form.email === storedEmail && form.password === storedPass) {
      localStorage.setItem("logged_in", "true");
      navigate("/choose");
    } else {
      alert("Invalid email or password");
      setIsLoading(false);
    }
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
              <span style={{ color: NAVY }}>Crypto Asset</span><span style={{ color: GOLD }}>Vault</span>
            </Link>
            <h1 className="text-2xl font-black mb-2" style={{ color: NAVY }}>Welcome back</h1>
            <p className="text-sm" style={{ color: "#6B7280" }}>Log in to access your assets.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Enter your password"
              onChange={(v: string) => setForm({ ...form, password: v })}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[48px] rounded-[10px] font-bold text-sm transition-all hover:opacity-90 active:scale-[.99] mt-2"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: "#6B7280" }}>
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold hover:underline" style={{ color: NAVY }}>
              Sign up
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="w-full h-[48px] px-4 rounded-[10px] text-sm outline-none transition-all"
        style={{ border: "1.5px solid #D0D5DD", backgroundColor: "white", color: "#1C1C1C", fontFamily: "inherit" }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = "#0B1F3A")}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = "#D0D5DD")}
      />
    </div>
  );
}