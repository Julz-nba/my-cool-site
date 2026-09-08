import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1F3A" }} className="w-full pt-16 pb-10 px-6 lg:px-10">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <span className="text-white font-black text-xl tracking-tight">
              Crypto Asset<span style={{ color: "#C9A227" }}>Vault</span>
            </span>
            <p className="text-white/50 text-sm mt-3 max-w-xs leading-relaxed">
              Specialized Wyoming LLC formation for digital-asset investors. Privacy, asset protection, and crypto-specific operating agreements.
            </p>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-3">
              <li><FooterLink href="/#services">LLC Formation</FooterLink></li>
              <li><FooterLink href="/#wyoming">Wyoming Benefits</FooterLink></li>
              <li><FooterLink href="/#pricing">Pricing</FooterLink></li>
            </ul>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Account</p>
            <ul className="space-y-3">
              <li><FooterLink href="/signup">Sign up</FooterLink></li>
              <li><FooterLink href="/login">Login</FooterLink></li>
              <li><FooterLink href="/#contact">Contact</FooterLink></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2025 Crypto Asset Vault. Not a law firm. Not legal advice. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-white/60 hover:text-white text-sm transition-colors">
      {children}
    </a>
  );
}
