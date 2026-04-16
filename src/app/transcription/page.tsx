"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function TranscriptionContent() {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "doctor";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    setIsSubmitting(true);
    // Simulate generation delay
    setTimeout(() => {
      // Route based on role
      if (role === "patient") {
        router.push("/p/status");
      } else {
        router.push("/d");
      }
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen p-4 md:p-8 font-body text-on-surface flex flex-col items-center justify-center">
      {/* Universal Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">
            medical_services
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-primary font-headline">
            VoiceRx
          </h1>
        </div>
        <Link href="/">
          <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 px-3 py-1.5 rounded-full transition-colors">
            <span className="material-symbols-outlined text-sm">logout</span>
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Log Out</span>
          </button>
        </Link>
      </header>

      <div className="bg-surface glass-panel rounded-3xl p-8 md:p-12 max-w-3xl shadow-xl w-full mt-16 animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              edit_note
            </span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-headline">Manual Clinical Input</h1>
            <p className="text-on-surface-variant font-medium mt-1 text-sm md:text-base">
              Since voice recording is disabled, provide clinical observations manually to generate SOAP notes.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">
              Transcript / Clinical Text
            </label>
            <div className="bg-surface-container-low rounded-xl px-4 py-4 transition-all duration-200 border border-transparent focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 shadow-inner">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-outline/50 font-medium resize-none outline-none"
                placeholder="E.g., Patient is a 45-year-old male presenting with acute squeezing chest pain that started 1 hour ago..."
                rows={8}
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-surface-dim">
            <Link href="/p">
              <button 
                type="button" 
                className="text-primary font-bold px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors flex items-center gap-2"
                disabled={isSubmitting}
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                <span className="hidden sm:inline">Back</span>
              </button>
            </Link>
            
            <button 
              type="submit" 
              disabled={isSubmitting || !text.trim()}
              className="bg-gradient-to-br from-primary to-primary-container text-white px-6 md:px-8 py-3.5 rounded-xl font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>{isSubmitting ? "Analyzing..." : "Submit for Analysis"}</span>
              <span className="material-symbols-outlined text-lg">
                {isSubmitting ? "hourglass_empty" : "auto_awesome"}
              </span>
            </button>
          </div>
        </form>
      </div>

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

export default function TranscriptionMock() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <TranscriptionContent />
    </Suspense>
  );
}
