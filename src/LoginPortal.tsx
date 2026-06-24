import { useState } from "react";
import { X, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "https://api.eyefi.co.ke";

const APP_URLS: Record<string, { url: string; label: string }> = {
  SUPER_ADMIN: { url: "https://staff.eyefi.co.ke", label: "Admin Dashboard" },
  ADMIN:       { url: "https://staff.eyefi.co.ke", label: "Admin Dashboard" },
  TECHNICIAN:  { url: "https://tech.eyefi.co.ke",  label: "Technician Portal" },
  CUSTOMER:    { url: "https://app.eyefi.co.ke",   label: "Customer Portal" },
};

type Stage = "login" | "forgot" | "forgot-sent" | "redirecting";

export default function LoginPortal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState<Stage>("login");
  const [destination, setDestination] = useState<{ url: string; label: string } | null>(null);

  function reset() {
    setEmail(""); setPassword(""); setError("");
    setStage("login"); setDestination(null); setLoading(false);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.detail || "Invalid credentials"); setLoading(false); return; }
      const dest = APP_URLS[data.role as string];
      if (!dest) { setError("Unknown account type."); setLoading(false); return; }
      setDestination(dest); setStage("redirecting"); setLoading(false);
      setTimeout(() => { window.location.href = dest.url; }, 1500);
    } catch {
      setError("Cannot reach server. Try again."); setLoading(false);
    }
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.detail || "Something went wrong."); setLoading(false); return; }
      setStage("forgot-sent"); setLoading(false);
    } catch {
      setError("Cannot reach server. Try again."); setLoading(false);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="text-sm font-medium text-[#6b7280] transition-colors hover:text-isp-600"
      >
        My Account
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[100] bg-black/50" onClick={() => { setOpen(false); reset(); }} />

      {/* Dialog */}
      <div className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
        <button
          onClick={() => { setOpen(false); reset(); }}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Login */}
        {stage === "login" && (
          <>
            <h2 className="text-center text-xl font-bold text-isp-900">Sign in to your account</h2>
            <p className="mt-1 text-center text-sm text-gray-500">Staff, technicians and customers — one login</p>

            <form onSubmit={handleLogin} className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required autoFocus value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-isp-500 focus:ring-2 focus:ring-isp-100" />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <button type="button" onClick={() => { setError(""); setStage("forgot"); }}
                    className="text-xs font-medium text-isp-600 hover:text-isp-700">Forgot password?</button>
                </div>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-isp-500 focus:ring-2 focus:ring-isp-100" />
              </div>
              {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-isp-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-isp-700 disabled:opacity-60">
                {loading && <Loader2 className="h-4 w-4 animate-spin" />} Sign In
              </button>
            </form>
          </>
        )}

        {/* Forgot password */}
        {stage === "forgot" && (
          <>
            <h2 className="text-center text-xl font-bold text-isp-900">Reset your password</h2>
            <p className="mt-1 text-center text-sm text-gray-500">Enter your email and we'll send a reset link</p>

            <form onSubmit={handleForgot} className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required autoFocus value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-isp-500 focus:ring-2 focus:ring-isp-100" />
              </div>
              {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-isp-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-isp-700 disabled:opacity-60">
                {loading && <Loader2 className="h-4 w-4 animate-spin" />} Send Reset Link
              </button>
              <button type="button" onClick={() => { setError(""); setStage("login"); }}
                className="block w-full text-center text-sm text-gray-500 hover:text-isp-600">Back to sign in</button>
            </form>
          </>
        )}

        {/* Reset sent */}
        {stage === "forgot-sent" && (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-isp-900">Check your inbox</h3>
            <p className="text-center text-sm text-gray-500">
              If <span className="font-medium text-isp-700">{email}</span> is registered, you'll receive a reset link.
            </p>
            <button onClick={() => { setError(""); setStage("login"); }}
              className="mt-2 text-sm font-medium text-isp-600 hover:text-isp-700">Back to sign in</button>
          </div>
        )}

        {/* Redirecting */}
        {stage === "redirecting" && destination && (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <ArrowRight className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-isp-900">Welcome back!</h3>
            <p className="text-sm text-gray-500">
              Taking you to <span className="font-medium text-isp-700">{destination.label}</span>…
            </p>
            <Loader2 className="h-5 w-5 animate-spin text-isp-500" />
          </div>
        )}
      </div>
    </>
  );
}
