"use client";
import React from 'react';
import { 
  Search, Compass, Heart, ArrowUpRight, 
  Home, Bell, Mail, User, Globe, 
  Layers, Zap, MoreHorizontal, Command 
} from 'lucide-react';

export default function VertexExplore() {
  return (
    <div className="min-h-screen bg-black text-[#E4E4E7] flex justify-center">
      
      {/* 1. LEFT NAVIGATION - The Command Center */}
      <aside className="w-[280px] hidden lg:flex flex-col sticky top-0 h-screen p-6 border-r border-white/5">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/20">
            V
          </div>
          <span className="text-xl font-bold tracking-tight italic">Vertex</span>
        </div>

        <nav className="space-y-1 flex-1">
          <NavItem icon={<Home size={20} />} label="Home" />
          <NavItem icon={<Globe size={20} />} label="Explore" active />
          <NavItem icon={<Bell size={20} />} label="Signal" badge="12" />
          <NavItem icon={<Mail size={20} />} label="Direct" />
          <NavItem icon={<Layers size={20} />} label="Circles" />
          <NavItem icon={<User size={20} />} label="Profile" />
        </nav>

        {/* System Status / User Mini */}
        <div className="mt-auto p-4 rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center gap-3 hover:bg-white/[0.05] transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">Alex Rivera</p>
            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Member #8421</p>
          </div>
          <MoreHorizontal size={14} className="text-gray-600" />
        </div>
      </aside>

      {/* 2. MAIN EXPLORE CONTENT */}
      <main className="flex-1 max-w-[900px] min-h-screen pb-24 px-6 lg:px-12 border-r border-white/5">
        
        {/* Header with Search */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-2xl py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-1">
              <h1 className="text-5xl font-black tracking-tighter uppercase italic">Explore</h1>
              <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">The Curated Network</p>
            </div>
            
            <div className="relative group flex-1 max-w-md">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={20} />
              <input 
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-white/20 focus:outline-none transition-all"
                placeholder="Search anything..."
              />
            </div>
          </div>

          {/* Navigation Pills */}
          <div className="flex gap-3 mt-10 overflow-x-auto no-scrollbar">
            {['All Signal', 'Visuals', 'Architecture', 'Culture', 'AI', 'Hardware'].map((cat, i) => (
              <button 
                key={cat} 
                className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${i === 0 ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* The Masonry Gallery */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6 mt-4">
          <div className="break-inside-avoid relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" className="w-full opacity-80 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black p-8 flex flex-col justify-end">
               <h3 className="text-2xl font-bold italic">Geometry of Logic</h3>
            </div>
          </div>

          <div className="break-inside-avoid bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-white/5 group hover:border-white/20 transition-all">
            <h3 className="text-2xl font-light italic leading-relaxed">"The details are not the details. They make the design."</h3>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-400">— Charles Eames</span>
              <ArrowUpRight className="text-gray-700 group-hover:text-white transition-all" />
            </div>
          </div>

          <div className="break-inside-avoid relative rounded-[2.5rem] overflow-hidden border border-white/5">
            <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop" className="w-full opacity-60" />
            <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/10">
              <Heart size={16} />
            </div>
          </div>
        </div>
      </main>

      {/* 3. RIGHT SIDEBAR - Trending Metadata */}
      <aside className="w-[340px] hidden xl:flex flex-col sticky top-0 h-screen p-8 gap-8">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8">
          <h3 className="text-[10px] font-black text-gray-500 tracking-[0.3em] mb-6 uppercase">Trending Now</h3>
          <div className="space-y-6">
            <TrendItem label="Vision Pro" growth="+420%" />
            <TrendItem label="TypeScript 5.5" growth="+12%" />
            <TrendItem label="Brutalism" growth="+88%" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-[2.5rem] p-8">
          <Zap className="text-purple-500 mb-4" size={24} />
          <h4 className="font-bold mb-2">Vertex Pro</h4>
          <p className="text-xs text-gray-400 leading-relaxed mb-6">Access private circles and high-fidelity asset hosting.</p>
          <button className="w-full py-3 bg-purple-600 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-purple-500/20">Upgrade</button>
        </div>
      </aside>

    </div>
  );
}

// UI Helpers
function NavItem({ icon, label, active = false, badge }: any) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all ${active ? 'bg-white text-black font-bold shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/[0.05]'}`}>
      <div className="flex items-center gap-4">
        {icon}
        <span className="text-sm font-semibold uppercase tracking-wider">{label}</span>
      </div>
      {badge && <span className="bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black">{badge}</span>}
    </div>
  );
}

function TrendItem({ label, growth }: any) {
  return (
    <div className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm font-bold group-hover:text-purple-400 transition-colors">{label}</span>
      <span className="text-[10px] font-mono text-green-500">{growth}</span>
    </div>
  );
}