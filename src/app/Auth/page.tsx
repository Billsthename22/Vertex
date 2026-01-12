"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Github, Chrome, Apple, ArrowLeft, Fingerprint, ShieldCheck, Zap } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black text-[#E4E4E7] flex overflow-hidden">
      
      {/* LEFT SIDE: THE VISUAL SIGNAL (Hidden on Mobile) */}
      <section className="hidden lg:flex flex-1 relative bg-[#020202] border-r border-white/5 items-center justify-center p-12 overflow-hidden">
        {/* Subtle OLED Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-md">
          <div className="mb-8 inline-flex p-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
             <Zap className="text-purple-500" size={32} />
          </div>
          <h2 className="text-6xl font-black italic tracking-tighter leading-none uppercase mb-6">
            The Signal <br /> Starts Here.
          </h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          
          <div className="mt-12 flex gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-xl">12k+</span>
              <span className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">Nodes Active</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-xl">0.0ms</span>
              <span className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">Signal Latency</span>
            </div>
          </div>
        </div>

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>

      {/* RIGHT SIDE: THE AUTH INTERFACE */}
      <main className="w-full lg:w-[500px] flex flex-col p-8 md:p-16 relative bg-black">
        
        <header className="flex justify-between items-center mb-16">
          <Link href="/" className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exit</span>
          </Link>
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black italic">V</div>
        </header>

        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2">
              {isLogin ? "Authenticate" : "Initialize"}
            </h1>
            <p className="text-gray-500 text-xs font-mono tracking-widest uppercase">
              {isLogin ? "Session ID: Pending" : "Establishing New Node"}
            </p>
          </div>

          {/* Social Cluster */}
          <div className="flex flex-col gap-3 mb-10">
            <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-200 transition-all">
              <Github size={18} /> Continue with GitHub
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-4 bg-[#0A0A0A] border border-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:border-white/20 transition-all text-gray-400 hover:text-white">
                <Chrome size={16} /> Google
              </button>
              <button className="py-4 bg-[#0A0A0A] border border-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:border-white/20 transition-all text-gray-400 hover:text-white">
                <Apple size={16} /> Apple
              </button>
            </div>
          </div>

          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[9px] uppercase tracking-[0.4em] font-black text-gray-700">
              <span className="bg-black px-4">Direct Access</span>
            </div>
          </div>

          {/* Input Fields */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1 italic">Identity (Email)</label>
              <input 
                type="email" 
                placeholder="identity@vertex.network" 
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:border-purple-500 focus:outline-none transition-all placeholder:text-gray-800"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic">Secret (Password)</label>
                {isLogin && <button className="text-[9px] font-black text-gray-700 uppercase tracking-widest hover:text-white transition">Forgot?</button>}
              </div>
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:border-purple-500 focus:outline-none transition-all placeholder:text-gray-800"
              />
            </div>

            <button className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(147,51,234,0.2)] hover:shadow-purple-500/40 transition-all active:scale-95">
              {isLogin ? "Execute Login" : "Initialize Account"}
            </button>
          </form>

          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="mt-8 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition text-center"
          >
            {isLogin ? "Create New Node →" : "← Re-Authenticate Node"}
          </button>
        </div>

        <footer className="mt-auto flex justify-between items-center text-[9px] font-bold text-gray-700 uppercase tracking-widest">
          <div className="flex items-center gap-2"><ShieldCheck size={12}/> Encrypted</div>
          <div>v1.0.4-Alpha</div>
        </footer>
      </main>
    </div>
  );
}
