"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [selectedRole, setSelectedRole] = useState<"patient" | "doctor" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;

    setIsLoading(true);

    // Simulate network delay for premium feel
    setTimeout(() => {
      if (selectedRole === "patient") {
        router.push("/p");
      } else if (selectedRole === "doctor") {
        router.push("/d");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-animated-gradient opacity-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0081cf]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

      <main className="w-full max-w-5xl relative z-10 glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side: Branding */}
        <div className="md:w-2/5 md:bg-animated-gradient p-12 text-white flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 md:bg-black/10 transition-opacity"></div>

          <div className="relative z-10 hidden md:block">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-3xl">health_metrics</span>
              </div>
              <span className="text-3xl font-black font-headline tracking-tight">VoiceRx</span>
            </div>
            <h1 className="text-4xl font-extrabold font-headline leading-tight mt-12">
              The Modern <br /> Clinical <br /> Sanctuary.
            </h1>
            <p className="mt-6 text-white/90 font-body text-lg leading-relaxed mix-blend-plus-lighter drop-shadow-sm">
              Experience the future of seamless medical interactions. Smart, secure, and
              intuitive—for both world-class clinicians and their valued patients.
            </p>
          </div>

          {/* Mobile branding (simplified) */}
          <div className="relative z-10 md:hidden flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-2xl text-white">health_metrics</span>
            </div>
            <span className="text-2xl font-black font-headline text-primary">VoiceRx</span>
          </div>

          <div className="relative z-10 hidden md:flex items-center gap-4 mt-auto pt-12">
            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 flex items-center gap-3">
              <span className="material-symbols-outlined text-green-300">verified_user</span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-green-300">
                  HIPAA Compliant
                </p>
                <p className="text-xs text-white/80">End-to-end encrypted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login */}
        <div className="md:w-3/5 p-8 md:p-14 flex flex-col bg-surface z-20">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold font-headline text-on-surface">Welcome Back</h2>
            <p className="text-on-surface-variant mt-2 font-body text-sm font-medium">
              Select your interface to securely log in.
            </p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {/* Patient Card */}
            <div
              className={`role-card border-2 border-surface-container-low rounded-xl p-5 cursor-pointer relative group bg-surface ${
                selectedRole === "patient" ? "active" : ""
              }`}
              onClick={() => setSelectedRole("patient")}
            >
              <div className="absolute top-3 right-3 text-primary check-icon">
                <span className="material-symbols-outlined font-bold">check_circle</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50/80 text-primary flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                <span className="material-symbols-outlined text-xl">personal_injury</span>
              </div>
              <h3 className="text-lg font-bold font-headline text-on-surface">Patient Portal</h3>
              <p className="text-[13px] text-on-surface-variant mt-1.5 leading-snug">
                Access medical records & fill intake forms.
              </p>
            </div>

            {/* Doctor Card */}
            <div
              className={`role-card border-2 border-surface-container-low rounded-xl p-5 cursor-pointer relative group bg-surface ${
                selectedRole === "doctor" ? "active" : ""
              }`}
              onClick={() => setSelectedRole("doctor")}
            >
              <div className="absolute top-3 right-3 text-primary check-icon">
                <span className="material-symbols-outlined font-bold">check_circle</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50/80 text-primary flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                <span className="material-symbols-outlined text-xl">stethoscope</span>
              </div>
              <h3 className="text-lg font-bold font-headline text-on-surface">Clinician Portal</h3>
              <p className="text-[13px] text-on-surface-variant mt-1.5 leading-snug">
                Manage queue & review AI SOAP notes.
              </p>
            </div>
          </div>

          {/* Login Form (Unified) */}
          <form className="space-y-4 flex-1 flex flex-col justify-end mt-4" onSubmit={handleLogin}>
            <div
              className={`space-y-1 transition-all duration-500 ${
                selectedRole ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                Email Address
              </label>
              <div className="flex items-center bg-surface w-full border border-outline/30 rounded-xl px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <span className="material-symbols-outlined text-outline text-lg mr-3">mail</span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none text-sm"
                  placeholder={
                    selectedRole === "patient" ? "patient@email.com" : "doctor@clinic.com"
                  }
                  type="email"
                  required
                />
              </div>
            </div>

            <div
              className={`space-y-1 transition-all duration-500 delay-75 ${
                selectedRole ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-[11px] font-bold text-primary hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="flex items-center bg-surface w-full border border-outline/30 rounded-xl px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <span className="material-symbols-outlined text-outline text-lg mr-3">lock</span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none text-sm"
                  placeholder="Enter your password"
                  type="password"
                  required
                />
              </div>
            </div>

            <div
              className={`pt-6 transition-all duration-500 delay-150 ${
                selectedRole ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                type="submit"
                disabled={!selectedRole || isLoading}
                className={`w-full bg-gradient-to-br from-primary to-primary-container hover:from-primary-container hover:to-[rgba(0,94,184,1)] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all outline-none ${
                  isLoading ? "opacity-90 scale-[0.98]" : "hover:scale-[1.01] active:scale-[0.98]"
                } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none`}
              >
                <span>
                  {isLoading
                    ? "Authenticating..."
                    : selectedRole === "patient"
                    ? "Sign in to Patient Portal"
                    : selectedRole === "doctor"
                    ? "Sign in as Clinician"
                    : "Select a Role"}
                </span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
              <p className="text-center text-[13px] text-on-surface-variant mt-5 font-medium">
                Don't have an account?{" "}
                <a href="#" className="text-primary font-bold hover:underline">
                  Request Access
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
