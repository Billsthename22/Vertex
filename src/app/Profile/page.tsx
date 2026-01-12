"use client";
import React from 'react';
import { 
  Zap, Globe, Heart, AtSign, Settings, 
  Share2, Link as LinkIcon, MapPin, Calendar,
  Grid, List, Layers, ArrowUpRight
} from 'lucide-react';

export default function VertexProfile() {
  return (
    <div className="min-h-screen bg-black text-[#E4E4E7] flex justify-center selection:bg-purple-500/30">
      
      {/* 1. SLIM GLOBAL NAV (Consistent Sidebar) */}
      <aside className="w-20 border-r border-white/5 hidden md:flex flex-col items-center py-8 gap-10 sticky top-0 h-screen">
        <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black italic">V</div>
        <nav className="flex flex-col gap-8 text-gray-500">
          <Zap size={22} className="hover:text-white cursor-pointer transition" />
          <Globe size={22} className="hover:text-white cursor-pointer transition" />
          <AtSign size={22} className="hover:text-white cursor-pointer transition" />
          <div className="w-8 h-8 rounded-full border-2 border-purple-500 p-0.5">
            <img src="https://i.pravatar.cc/100?u=me" className="rounded-full grayscale" alt="me" />
          </div>
        </nav>
      </aside>

      {/* 2. PROFILE CONTENT */}
      <main className="flex-1 max-w-[900px] border-r border-white/5 min-h-screen">
        
        {/* Banner & Avatar Section */}
        <div className="relative h-64 bg-[#0A0A0A] overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform hover:scale-105 duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-16 mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-[2.5rem] bg-black p-1 border border-white/10">
                <img src="https://i.pravatar.cc/300?u=alex" className="w-full h-full rounded-[2.2rem] object-cover" alt="Avatar" />
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-black flex items-center justify-center">
                <Zap size={10} className="text-white fill-white" />
              </div>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
                <Share2 size={18} />
              </button>
              <button className="px-6 py-3 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition">
                Edit Dossier
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tighter italic uppercase">Alex Rivera</h1>
            <p className="text-gray-500 font-mono text-[11px] tracking-[0.2em] uppercase">Architectural Engineer • Node #8421</p>
            
            <p className="mt-4 text-gray-400 max-w-xl leading-relaxed italic">
              Building the future of high-signal networks. Focused on minimal UX, edge computing, and brutalist digital architecture. 
            </p>

            <div className="flex gap-6 mt-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-2"><MapPin size={12} /> Tokyo, JP</span>
              <span className="flex items-center gap-2"><LinkIcon size={12} /> vertex.network/alex</span>
              <span className="flex items-center gap-2"><Calendar size={12} /> Joined Jan '24</span>
            </div>
          </div>

          {/* SIGNAL STATS - Bento Grid Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard label="Followers" value="12.4k" />
            <StatCard label="Following" value="842" />
            <StatCard label="Signal" value="98.2" color="text-purple-500" />
            <StatCard label="Artifacts" value="156" />
          </div>

          {/* TABS */}
          <div className="flex border-b border-white/5 mb-8">
            <TabItem label="Artifacts" active />
            <TabItem label="Circles" />
            <TabItem label="Mentions" />
          </div>

          {/* ARTIFACTS FEED (Masonry/Grid Hybrid) */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
             <div className="break-inside-avoid bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 group hover:border-white/20 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest">Post // 042</span>
                  <ArrowUpRight size={16} className="text-gray-700 group-hover:text-white" />
                </div>
                <p className="text-xl font-light italic mb-6 leading-relaxed">"The intersection of brutalism and digital interfaces is where true speed lives."</p>
                <div className="flex items-center gap-4 text-gray-600 text-[10px] font-black uppercase">
                  <span className="flex items-center gap-1"><Heart size={12}/> 1.2k</span>
                  <span className="flex items-center gap-1"><Layers size={12}/> 42</span>
                </div>
             </div>

             <div className="break-inside-avoid rounded-[2.5rem] overflow-hidden border border-white/5 aspect-square relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-white text-black px-6 py-2 rounded-full">View Artifact</span>
                </div>
             </div>

             <div className="break-inside-avoid bg-white text-black rounded-[2.5rem] p-8 cursor-pointer hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-black tracking-tighter uppercase italic leading-none mb-4">Project: Obsidian</h3>
                <p className="text-sm font-medium mb-6">A deep dive into OLED-first design systems and high-contrast typography.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest underline">Read Case Study</span>
                  <Zap size={16} fill="black" />
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* 3. RIGHT SIDEBAR - USER'S ACTIVE CIRCLES */}
      <aside className="w-[300px] hidden xl:flex flex-col sticky top-0 h-screen p-8 gap-8">
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
          <h3 className="text-[10px] font-black text-gray-500 tracking-[0.3em] mb-6 uppercase">Active Circles</h3>
          <div className="space-y-6">
            <CircleItem name="Edge Ops" members="1.2k" />
            <CircleItem name="Brutalist Design" members="8.4k" />
            <CircleItem name="Tokyo Builders" members="402" />
          </div>
        </div>
        
        <div className="p-8 border border-white/5 rounded-[2.5rem] bg-gradient-to-br from-purple-900/10 to-transparent">
          <h3 className="text-[10px] font-black text-purple-400 tracking-[0.3em] mb-4 uppercase">Identity Verified</h3>
          <p className="text-xs text-gray-500 leading-relaxed">This node has been verified through GitHub and LinkedIn authentication.</p>
        </div>
      </aside>

    </div>
  );
}

/** --- SUB-COMPONENTS --- */

function StatCard({ label, value, color = "text-white" }: any) {
  return (
    <div className="bg-[#0A0A0A] border border-white/5 p-5 rounded-3xl hover:border-white/20 transition-all cursor-default">
      <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-xl font-bold italic tracking-tighter ${color}`}>{value}</p>
    </div>
  );
}

function TabItem({ label, active = false }: any) {
  return (
    <button className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${active ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}>
      {label}
      {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 shadow-[0_0_10px_#A855F7]" />}
    </button>
  );
}

function CircleItem({ name, members }: any) {
  return (
    <div className="flex justify-between items-center group cursor-pointer">
      <div>
        <p className="text-sm font-bold group-hover:text-purple-400 transition-colors">#{name}</p>
        <p className="text-[9px] text-gray-600 font-mono tracking-tighter">{members} Members</p>
      </div>
      <ArrowUpRight size={14} className="text-gray-800 group-hover:text-white transition" />
    </div>
  );
}