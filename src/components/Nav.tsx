import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const isAuth = ["/signup", "/login"].includes(location.pathname);

  return (
    <nav
      style={{ backgroundColor: "#0B1F3A" }}
      className="w-full h-[72px] flex items-center px-6 lg:px-10 sticky top-0 z-50"
    >
      <div className="max-w-[1120px] mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white font-black text-xl tracking-tight">
            Crypto Asset <span style={{ color: "#C9A227" }}>Vault</span>
          </span>
        </Link>

        {!isAuth && (
          <>
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/#services">Services</NavLink>
              <NavLink to="/#wyoming">Wyoming</NavLink>
              <NavLink to="/#pricing">Pricing</NavLink>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden md:block text-white/70 hover:text-white text-sm font-medium transition-colors px-4 py-2 border border-white/20 rounded-[10px] hover:border-white/40"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-semibold px-5 py-2 rounded-[10px] transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#C9A227", color: "#0B1F3A" }}
              >
                Sign up
              </Link>
            </div>
          </>
        )}

        {isAuth && (
          <Link
            to="/"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to home
          </Link>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <a
      href={to}
      className="text-white/70 hover:text-white text-sm font-medium transition-colors"
    >
      {children}
    </a>
  );
}
