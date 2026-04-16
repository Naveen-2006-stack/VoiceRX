"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorPortal() {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div className="bg-background text-on-surface flex min-h-screen font-body antialiased">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-screen w-64 bg-slate-50 dark:bg-slate-950 p-4 gap-2 border-r border-outline-variant/30 fixed left-0 top-0 z-40">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm">
            <span className="material-symbols-outlined">health_metrics</span>
          </div>
          <span className="text-lg font-black text-blue-900 dark:text-white">
            VoiceRx
          </span>
        </div>
        
        <div className="mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden relative">
              <Image
                alt="Clinician Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpy1V9F1NMeyIJ9qBWrPxRNosIY6gKpqf8Jd1JpMmeucy_MTsolCut-7KoAyPTqJ0lEKgEe6w0g9rnErrgvGgiHz8yfUABcoFevTZ25SOvrT9tDd6vC_xbbJLj-2udf9YLWC6UwMMZdrDjD-6BdAkSJmqIiXMkZkjmwZlM6ooz0wnCEVmeDCFDs5WzwQbwrjVF7M9qeQOx-4Ma57BFUx_PRQwM9hOAoco62RkIOXv6U04936V0EY6njLNQatxG6rMmT6WNlfIs8G4"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="font-body text-sm font-medium text-on-surface">Dr. Sterling</p>
              <p className="text-xs text-on-surface-variant">Clinical Sanctuary</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          <div
            className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-100 hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg text-left ${
              activeView === "home" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600"
            }`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body text-sm font-medium">Home</span>
          </div>
          <button
             onClick={() => setActiveView("dashboard")}
            className={`flex items-center w-full gap-3 px-3 py-2 border border-transparent hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg text-left ${
                activeView === "dashboard" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="material-symbols-outlined">group</span>
            <span className="font-body text-sm font-medium">Patient Queue</span>
          </button>
          <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">mic</span>
            <span className="font-body text-sm font-medium">Live Capture</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">description</span>
            <span className="font-body text-sm font-medium">SOAP Notes</span>
          </div>
        </nav>

        <div className="mt-auto pt-4 border-t border-slate-200/50">
          <button
            onClick={() => setActiveView("intake")}
            className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-2.5 rounded-xl text-sm font-semibold mb-4 active:scale-[0.98] transition-all shadow-sm"
          >
            New Transcription
          </button>
          <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen relative bg-background">
        
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white/80 backdrop-blur-xl z-30 px-8 flex items-center justify-between border-b border-surface-container shadow-sm transition-all">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold tracking-tight text-xl font-headline">
                {activeView === "dashboard" ? "Live Triage Queue" : "New Patient Intake"}
              </span>
              <span
                className={`bg-error-container text-on-error-container text-xs font-bold px-2 py-0.5 rounded-full transition-opacity ${
                  activeView === "dashboard" ? "opacity-100" : "opacity-0"
                }`}
              >
                4 Patients Waiting
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center bg-surface-container rounded-full p-1">
              <button className="px-4 py-1 text-xs font-semibold rounded-full text-on-surface-variant">
                Admin
              </button>
              <button className="px-4 py-1 text-xs font-bold rounded-full bg-white shadow-sm text-primary">
                Doctor
              </button>
            </div>
            <div className="hidden lg:flex items-center gap-3 bg-tertiary-container/20 px-3 py-1 rounded-full border border-tertiary-container/30">
              <span
                className="material-symbols-outlined text-tertiary text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-on-tertiary-fixed-variant font-label">
                HIPAA Compliant
              </span>
            </div>
            <Link href="/">
              <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 px-3 py-1.5 rounded-full transition-colors">
                <span className="material-symbols-outlined text-sm">logout</span>
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Log Out</span>
              </button>
            </Link>
          </div>
        </header>

        {/* VIEW 1: DASHBOARD */}
        {activeView === "dashboard" && (
          <div className="mt-16 p-8 grid grid-cols-12 gap-8 clinical-scroll overflow-y-auto w-full animate-fade-in">
            {/* Left Column: Patient List (Asymmetric Layout 4/12) */}
            <div className="col-span-12 lg:col-span-4 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline font-bold text-lg">Active Patients</h3>
                <span className="text-xs font-label uppercase tracking-wider text-on-surface-variant">
                  Sorted by Urgency
                </span>
              </div>
              
              {/* Active Patient Card */}
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border-l-4 border-error relative overflow-hidden group hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-headline font-extrabold text-on-surface">John Doe, 45</h4>
                    <p className="text-xs text-on-surface-variant">ID: #88291 • Arrival: 14:02</p>
                  </div>
                  <span className="bg-error-container text-on-error-container text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    Emergency
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant line-clamp-1 italic">
                  "Squeezing chest pain starting 1 hour ago..."
                </p>
                <div className="mt-3 flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                  <span className="text-[10px] font-bold text-error uppercase">Active Triage</span>
                </div>
              </div>
              
              {/* Patient Card 2 */}
              <div className="bg-surface-container rounded-xl p-4 hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Sarah Miller, 29</h4>
                    <p className="text-xs text-on-surface-variant">ID: #88295 • Arrival: 14:15</p>
                  </div>
                  <span className="bg-tertiary-container text-tertiary-fixed text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                    Stable
                  </span>
                </div>
              </div>
              
              {/* Patient Card 3 */}
              <div className="bg-surface-container rounded-xl p-4 hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Robert Chen, 62</h4>
                    <p className="text-xs text-on-surface-variant">ID: #88301 • Arrival: 14:28</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                    Moderate
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Expanded SOAP Note (Asymmetric Layout 8/12) */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl border border-error/50 shadow-lg overflow-hidden flex flex-col h-full min-h-[600px]">
                <div className="bg-error-container/40 px-6 py-4 flex justify-between items-center border-b border-error/10">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-error"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      error
                    </span>
                    <h2 className="font-headline font-extrabold text-error text-lg">
                      🔴 EMERGENCY (Level: RED)
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-error/70 uppercase">Vocal Transcription Active</p>
                    <p className="text-lg font-bold text-error">John Doe, 45</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-yellow-600">warning</span>
                  <p className="text-sm text-yellow-800 font-medium">
                    <span className="font-bold">AI Note:</span> Patient mentioned family history of cardiac issues but did not specify which relative. Please verify.
                  </p>
                </div>

                <div className="p-8 flex-1 space-y-10 clinical-scroll overflow-y-auto bg-white">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-primary">S</span>
                      <h3 className="font-headline font-bold text-on-surface text-lg">Subjective</h3>
                    </div>
                    <div className="ml-10 text-on-surface-variant leading-relaxed text-lg">
                      Patient reports acute onset of <span className="bg-yellow-200/60 px-1 rounded">"squeezing" chest pain</span> starting 1 hour ago, accompanied by <span className="bg-yellow-200/60 px-1 rounded">severe dizziness</span>.
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-primary">O</span>
                      <h3 className="font-headline font-bold text-on-surface text-lg">Objective</h3>
                    </div>
                    <div className="ml-10">
                      <button className="flex items-center gap-2 border border-dashed border-outline-variant rounded-xl px-6 py-4 text-on-surface-variant hover:bg-surface-container transition-colors w-full justify-center shadow-sm">
                        <span className="material-symbols-outlined">add_circle</span>
                        <span className="font-semibold">Add Vitals manually</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-low border-t border-surface-container flex justify-between items-center">
                  <button className="flex items-center gap-2 text-primary font-semibold hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">picture_as_pdf</span> Download PDF
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-2.5 rounded-xl font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Acknowledge & Approve
                    </button>
                  </div>
                </div>
              </div>

              {/* Contextual Vitals Sidebar */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-surface-container rounded-xl p-4 flex flex-col gap-1 border border-surface-dim/40 shadow-sm">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Heart Rate</span>
                  <span className="text-2xl font-black text-on-surface">112 <span className="text-sm font-medium">BPM</span></span>
                  <span className="text-xs text-error font-bold">▲ Elevated</span>
                </div>
                <div className="bg-surface-container rounded-xl p-4 flex flex-col gap-1 border border-surface-dim/40 shadow-sm">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">SpO2</span>
                  <span className="text-2xl font-black text-on-surface">94 <span className="text-sm font-medium">%</span></span>
                  <span className="text-xs text-yellow-600 font-bold">Borderline</span>
                </div>
                <div className="bg-surface-container rounded-xl p-4 flex flex-col gap-1 border border-surface-dim/40 shadow-sm">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Blood Pressure</span>
                  <span className="text-2xl font-black text-on-surface">145/92</span>
                  <span className="text-xs text-error font-bold">▲ Hypertensive</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: INTAKE FORM */}
        {activeView === "intake" && (
          <div className="mt-16 flex-col w-full max-w-md mx-auto pt-6 pb-12 px-6 animate-fade-in flex min-h-[calc(100vh-4rem)]">
            <button
              onClick={() => setActiveView("dashboard")}
              className="self-start mb-6 -ml-2 p-2 flex items-center gap-2 text-primary font-bold text-sm hover:bg-surface-container-low rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Patient Queue
            </button>

            <div className="flex gap-2 mb-8 items-center justify-center">
              <div className="h-1.5 w-12 rounded-full editorial-gradient"></div>
              <div className="h-1.5 w-12 rounded-full bg-surface-container-high border border-surface-dim"></div>
              <div className="h-1.5 w-12 rounded-full bg-surface-container-high border border-surface-dim"></div>
            </div>

            <div className="mb-8">
              <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 font-label">
                Clinical Intake
              </p>
              <h2 className="text-3xl font-extrabold font-headline text-on-surface leading-tight">
                Patient Information
              </h2>
              <p className="text-on-surface-variant mt-2 font-body text-sm leading-relaxed">
                Please provide initial patient metrics before beginning the voice-to-SOAP transcription.
              </p>
            </div>

            <form className="space-y-5 flex-grow" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Full Name</label>
                <div className="group flex items-center bg-surface-container-lowest shadow-sm rounded-xl px-4 py-3.5 transition-all duration-200 border border-surface-dim focus-within:border-primary/50 form-input-focus">
                  <span className="material-symbols-outlined text-outline mr-3 text-lg">person</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none" placeholder="E.g., John Doe" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Age</label>
                  <div className="flex items-center bg-surface-container-lowest shadow-sm rounded-xl px-4 py-3.5 transition-all duration-200 border border-surface-dim focus-within:border-primary/50 form-input-focus">
                    <input className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none" placeholder="45" type="number" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">BP (Initial)</label>
                  <div className="flex items-center bg-surface-container-lowest shadow-sm rounded-xl px-4 py-3.5 transition-all duration-200 border border-surface-dim focus-within:border-primary/50 form-input-focus">
                    <input className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none" placeholder="120/80" type="text" />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5 pt-2">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Primary Symptoms</label>
                <div className="bg-surface-container-lowest shadow-sm rounded-xl px-4 py-3.5 transition-all duration-200 border border-surface-dim focus-within:border-primary/50 form-input-focus">
                  <textarea className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium resize-none outline-none" placeholder="Briefly describe symptoms or clinical observations (optional)..." rows={3}></textarea>
                </div>
              </div>
            </form>

            <div className="mt-10 space-y-4">
              {/* Disabled voice capture per prototype requirements */}
              <button disabled className="w-full editorial-gradient text-on-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-all opacity-50 cursor-not-allowed">
                <span className="text-[15px]">Start Voice Capture</span>
                <span className="material-symbols-outlined font-normal text-[22px]">mic</span>
              </button>
              
              <Link 
                href="/transcription?role=doctor" 
                className="w-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold py-3.5 rounded-xl border border-surface-dim transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span className="text-[12px] tracking-widest uppercase">Next: Transcription & Analysis</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Decorative vertical text when on intake */}
      {activeView === "intake" && (
        <div className="hidden lg:block fixed left-[280px] top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-lr] text-outline-variant/20 font-bold text-5xl select-none z-10 transition-opacity">
          VOICERX CLINICAL FLOW
        </div>
      )}

      {/* Mobile BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-100 flex items-center justify-around z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px]">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-blue-700">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
          <span className="text-[10px]">Triage</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">description</span>
          <span className="text-[10px]">Notes</span>
        </button>
      </nav>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
}
