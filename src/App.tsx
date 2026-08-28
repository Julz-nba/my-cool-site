import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ChoosePath from "./pages/ChoosePath";
import Payment from "./pages/Payment";
import Finalize from "./pages/Finalize";
import WalletRecovery from "./pages/WalletRecovery";
import Success from "./pages/Success";

const ONBOARDING = ["/choose", "/payment", "/finalize", "/wallet", "/success"];

function Layout({ children, path }: { children: React.ReactNode; path: string }) {
  const isOnboarding = ONBOARDING.some((p) => path.startsWith(p));
  const isAuth = ["/signup", "/login"].includes(path);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">{children}</main>
      {!isOnboarding && !isAuth && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WithLayout path="/"><Home /></WithLayout>} />
      <Route path="/signup" element={<WithLayout path="/signup"><SignUp /></WithLayout>} />
      <Route path="/login" element={<WithLayout path="/login"><Login /></WithLayout>} />
      <Route path="/choose" element={<WithLayout path="/choose"><ChoosePath /></WithLayout>} />
      <Route path="/payment" element={<WithLayout path="/payment"><Payment /></WithLayout>} />
      <Route path="/finalize" element={<WithLayout path="/finalize"><Finalize /></WithLayout>} />
      <Route path="/wallet" element={<WithLayout path="/wallet"><WalletRecovery /></WithLayout>} />
      <Route path="/success" element={<WithLayout path="/success"><Success /></WithLayout>} />
    </Routes>
  );
}

function WithLayout({ path, children }: { path: string; children: React.ReactNode }) {
  return <Layout path={path}>{children}</Layout>;
}
