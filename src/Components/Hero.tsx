"use client";
import { useState } from 'react';

export default function Hero() {
  const [username, setUsername] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-8 pt-20 pb-20 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Live in Beta
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9]">
          Vertex <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Socially Focused.
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-md leading-relaxed">
          The social graph reimagined. Claim your handle and be part of the first 10,000 founding members.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-sm">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">vertex.com/</span>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username" 
              className="w-full pl-[105px] pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>
          <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-xl shadow-white/5">
            Reserve Handle
          </button>
        </div>
      </div>

   {/* The Social App Mockup */}
   <div className="relative group">
        {/* Glow behind the phone */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden min-h-[500px]">
          
          {/* Mock App Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-500">FOR YOU</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-purple-400">LIVE</span>
            </div>
          </div>

          {/* Actual Mock Feed Items */}
          <div className="space-y-4">
            {/* Post 1 */}
            <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl transform transition-transform group-hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                <div>
                  <p className="text-xs font-bold">@sarah_peaks</p>
                  <p className="text-[10px] text-gray-500">Just reached the Vertex</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">The UI for this platform is actually insane. Finally a place for high-signal content. 🚀</p>
              <div className="flex gap-4 text-gray-500">
                <div className="flex items-center gap-1 text-[10px]"><span className="text-pink-500">♥</span> 1.2k</div>
                <div className="flex items-center gap-1 text-[10px]">💬 84</div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl opacity-60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-700" />
                <div className="h-2 w-20 bg-white/10 rounded" />
              </div>
              <div className="h-24 w-full bg-white/5 rounded-xl mb-3" />
              <div className="flex gap-4">
                <div className="h-2 w-8 bg-white/5 rounded" />
                <div className="h-2 w-8 bg-white/5 rounded" />
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl opacity-30">
               <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800" />
                <div className="h-2 w-24 bg-white/5 rounded" />
              </div>
            </div>
          </div>

          {/* Floating Action Button Mock */}
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-purple-600 rounded-full shadow-lg shadow-purple-500/40 flex items-center justify-center text-xl font-bold">
            +
          </div>
        </div>
      </div>
    </section>
  );
}