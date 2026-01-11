"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Explore() {
  const pathname = usePathname();
  
  // 1. Data State
  const allTrends = [
    { id: 1, category: "Technology", title: "The rise of Neural UI", views: "1.2M", color: "bg-cyan-500" },
    { id: 2, category: "Architecture", title: "Geometric Brutalism in 2026", views: "840k", color: "bg-purple-500" },
    { id: 3, category: "Network", title: "Vertex Node Handshake Protocol", views: "310k", color: "bg-emerald-500" },
    { id: 4, category: "Technology", title: "Quantum Encryption Nodes", views: "1.5M", color: "bg-cyan-500" },
  ];

  // 2. Functional States
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  // 3. Filter Logic
  const filteredTrends = allTrends.filter(trend => {
    const matchesSearch = trend.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "ALL" || trend.category.toUpperCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filters = ["ALL", "TECHNOLOGY", "ARCHITECTURE", "NETWORK"];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 fixed left-0 top-0 h-screen border-r border-white/10 bg-[#0a0a0a] p-6 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-black tracking-tighter italic uppercase">Vertex<span className="text-cyan-500">.</span></h1>
        </div>
        <nav className="space-y-2">
          {[
            { name: 'Feed', href: '/', icon: '◈' },
            { name: 'Explore', href: '/Explore', icon: '◬' },
            { name: 'Profile', href: 'Profile', icon: '👤' },
            { name: 'Settings', href: '/Settings', icon: '⚙' },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`flex items-center gap-4 px-4 py-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                pathname === link.href ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}>
                <span>{link.icon}</span> {link.name.toUpperCase()}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 pt-28 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tighter uppercase italic">Explore Network</h1>
              <div className="flex gap-4 mt-4">
                {filters.map(f => (
                  <button 
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`text-[10px] font-mono tracking-widest px-3 py-1 border transition-all ${
                      activeFilter === f ? 'border-cyan-500 text-cyan-500 bg-cyan-500/5' : 'border-white/10 text-gray-500 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH FREQUENCIES..." 
                className="bg-[#0f0f0f] border border-white/10 py-3 px-6 pr-12 rounded-full w-full md:w-80 focus:outline-none focus:border-cyan-500 transition-all font-mono text-xs text-white"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-cyan-500 transition-colors">⌕</span>
            </div>
          </div>

          {/* Dynamic Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 min-h-[600px]">
            
            {/* Featured Item (Hidden if searching/filtering specifically) */}
            {activeFilter === "ALL" && searchQuery === "" && (
              <div className="md:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                <div className="h-full flex flex-col justify-end relative z-10">
                  <span className="text-cyan-500 font-mono text-xs mb-2 tracking-[0.3em]">FEATURED_STREAM</span>
                  <h2 className="text-3xl font-black leading-tight mb-4">DECENTRALIZED SOCIAL ARCHITECTURE: THE VERTEX MANIFESTO</h2>
                  <button className="w-fit bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 transition-colors">Enter</button>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>
            )}

            {/* Trending Cards */}
            {filteredTrends.map((trend) => (
              <div key={trend.id} className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:bg-[#111] transition-all group animate-in fade-in zoom-in duration-300">
                <div className={`w-8 h-1 mb-4 ${trend.color}`} />
                <p className="text-[10px] font-mono text-gray-500 uppercase mb-1">{trend.category}</p>
                <h3 className="font-bold text-lg mb-4 group-hover:text-white transition-colors">{trend.title}</h3>
                <p className="text-xs text-gray-600 font-mono">{trend.views} Active Nodes</p>
              </div>
            ))}

            {/* Empty State */}
            {filteredTrends.length === 0 && (
              <div className="col-span-full h-64 flex items-center justify-center border border-dashed border-white/10 rounded-3xl">
                <p className="font-mono text-gray-600 uppercase tracking-widest">No signal found on this frequency...</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}