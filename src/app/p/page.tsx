import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PatientIntake() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">
            medical_services
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-primary font-headline">
            VoiceRx
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 bg-tertiary-container/20 px-3 py-1.5 rounded-full">
            <span
              className="material-symbols-outlined text-tertiary text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-tertiary-fixed-variant font-label">
              Secure & Encrypted
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
      
      <main className="pt-24 pb-12 px-6 max-w-md mx-auto min-h-screen flex flex-col">
        {/* Progress Indicator */}
        <div className="flex gap-2 mb-8 items-center justify-center">
          <div className="h-1.5 w-12 rounded-full editorial-gradient"></div>
          <div className="h-1.5 w-12 rounded-full bg-surface-container-high"></div>
          <div className="h-1.5 w-12 rounded-full bg-surface-container-high"></div>
        </div>
        
        {/* Section Header */}
        <div className="mb-10">
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
        
        {/* Form Elements */}
        <form className="space-y-6 flex-grow">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
              Full Name
            </label>
            <div className="group flex items-center bg-surface-container-low rounded-xl px-4 py-3.5 transition-all duration-200 border border-transparent focus-within:border-primary/20 form-input-focus">
              <span className="material-symbols-outlined text-outline mr-3 text-lg">
                person
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          
          {/* Row: Age & Blood Pressure */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                Age
              </label>
              <div className="flex items-center bg-surface-container-low rounded-xl px-4 py-3.5 transition-all duration-200 border border-transparent focus-within:border-primary/20 form-input-focus">
                <input
                  className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none"
                  placeholder="45"
                  type="number"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
                BP (Vitals)
              </label>
              <div className="flex items-center bg-surface-container-low rounded-xl px-4 py-3.5 transition-all duration-200 border border-transparent focus-within:border-primary/20 form-input-focus">
                <input
                  className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none"
                  placeholder="120/80"
                  type="text"
                />
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
              Location / Ward
            </label>
            <div className="flex items-center bg-surface-container-low rounded-xl px-4 py-3.5 transition-all duration-200 border border-transparent focus-within:border-primary/20 form-input-focus">
              <span className="material-symbols-outlined text-outline mr-3 text-lg">
                location_on
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium outline-none"
                placeholder="General Ward - B2"
                type="text"
              />
            </div>
          </div>
          
          {/* Symptoms */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
              Primary Symptoms
            </label>
            <div className="bg-surface-container-low rounded-xl px-4 py-3.5 transition-all duration-200 border border-transparent focus-within:border-primary/20 form-input-focus">
              <textarea
                className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium resize-none outline-none"
                placeholder="Describe symptoms or clinical observations..."
                rows={3}
              ></textarea>
            </div>
          </div>
          
          {/* Subtle Medical Context Card (Tonal Architecture) */}
          <div className="bg-surface-container rounded-xl p-4 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCav8HaaH3QBFi7mPKVeBcmgX7_z2yc1ddBKJX6qNp060_AW0Q3BeUbtCNvwk4GOpd1L012GOBOFWUFh9CJeS3in23CNUT4yJeG5bhL1m7seFUmZuULRzaEznDz90HlDYtByOuJMSlyEThquzjK6HdPnasRb_Pyol5kRPwVWqfZBSNvW8zNBvRNnrZchvAIDcaqLEU0HcR-5708Y2rOLm5nqMG5F51htp5dwyWx0O_N_WiBT8bi1mnlpHMOHvso-gMhIla4DNVveT8"
                alt="Medical Equipment"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-on-surface font-headline">
                Clinical Compliance
              </h4>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-normal">
                Data is processed in real-time under HIPAA-compliant end-to-end encryption protocols.
              </p>
            </div>
          </div>
        </form>
        
        {/* Fixed Bottom Action Area */}
        <div className="mt-12 space-y-4">
          <button 
            type="button"
            className="w-full editorial-gradient text-on-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98] opacity-50 cursor-not-allowed"
            disabled
          >
            <span>Start Voice Capture</span>
            <span className="material-symbols-outlined text-xl">mic</span>
          </button>
          
          <Link 
            href="/transcription?role=patient" 
            className="w-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold py-3.5 rounded-xl border border-surface-dim transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span className="text-[12px] tracking-widest uppercase">Next: Transcription & Analysis</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </main>
      
      {/* Side Decoration (Editorial Gutter) */}
      <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-lr] text-outline-variant/30 font-bold text-5xl select-none">
        VOICERX CLINICAL FLOW
      </div>
    </>
  );
}
