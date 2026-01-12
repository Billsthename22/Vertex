"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import router for redirect
import { Github, Chrome, Apple, ArrowLeft, ShieldCheck, Zap, Loader2 } from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Network Latency for "Node Initialization"
    setTimeout(() => {
      const userData = {
        email,
        isLoggedIn: true,
        nodeId: `vtx_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString()
      };

      // 1. Store in Local Storage
      localStorage.setItem('vertex_session', JSON.stringify(userData));

      // 2. Redirect to Home (Feed)
      router.push('/Home');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-[#E4E4E7] flex overflow-hidden">
      
      {/* LEFT SIDE: VISUAL SIGNAL */}
      <section className="hidden lg:flex flex-1 relative bg-[#020202] border-r border-white/5 items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-md">
          <div className="mb-8 inline-flex p-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl text-purple-500">
             <Zap size={32} />
          </div>
          <h2 className="text-6xl font-black italic tracking-tighter leading-none uppercase mb-6">
            The Signal <br /> Starts Here.
          </h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>
      </section>

      {/* RIGHT SIDE: AUTH INTERFACE */}
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
              {loading ? "Establishing Secure Link..." : (isLogin ? "Session ID: Pending" : "Establishing New Node")}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleAuth}>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1 italic">Identity (Email)</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="identity@vertex.network" 
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:border-purple-500 focus:outline-none transition-all placeholder:text-gray-800"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic">Secret (Password)</label>
              </div>
              <input 
                required
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:border-purple-500 focus:outline-none transition-all placeholder:text-gray-800"
              />
            </div>

            <button 
              disabled={loading}
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(147,51,234,0.2)] hover:shadow-purple-500/40 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> 
                  Synchronizing
                </>
              ) : (
                isLogin ? "Execute Login" : "Initialize Account"
              )}
            </button>
          </form>

          <button 
            type="button"
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