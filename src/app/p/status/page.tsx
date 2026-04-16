"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PatientStatus() {
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

      <main className="pt-24 pb-12 px-6 max-w-md mx-auto min-h-screen flex flex-col justify-center text-center animate-fade-in -mt-10">
        
        <div className="bg-surface-container-lowest rounded-3xl p-10 shadow-lg border border-surface-dim relative overflow-hidden">
          {/* Animated background glow */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-100">
              <span className="material-symbols-outlined text-4xl text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            
            <h2 className="text-2xl font-extrabold font-headline text-on-surface mb-3">
              Submission Successful
            </h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
              Your clinical intake information has been securely transmitted and processed by our AI. It is now safely in your clinician's queue.
            </p>

            <div className="bg-surface-container rounded-xl p-5 border border-surface-dim/40 shadow-inner flex items-center gap-4 text-left mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">pending_actions</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Pending Review</h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5">
                  You will be able to view your finalized SOAP notes and medical report here once Dr. Sterling reviews and approves them.
                </p>
              </div>
            </div>

            <Link href="/">
              <button 
                className="w-full editorial-gradient text-on-primary font-bold py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-primary/20"
              >
                Return to Home
              </button>
            </Link>
          </div>
        </div>

      </main>

      {/* Decorative vertical text */}
      <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-lr] text-outline-variant/30 font-bold text-5xl select-none">
        VOICERX CLINICAL FLOW
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}} />
    </>
  );
}
