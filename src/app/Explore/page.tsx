"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Search, Compass, Heart, ArrowUpRight, 
  Home, Bell, Mail, User, Globe, 
  Layers, Zap, MoreHorizontal, Plus
} from 'lucide-react';

export default function VertexExplore() {
  return (
    <div className="min-h-screen bg-black text-[#F4F4F7] flex justify-center pb-24 lg:pb-0 font-sans">
      
      {/* 1. DESKTOP SIDEBAR - Hidden on iPhone */}
      <aside className="w-[280px] hidden lg:flex flex-col sticky top-0 h-screen p-6 border-r border-white/5">
        <Link href="/" className="flex items-center gap-3 mb-10 px-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/20">V</div>
          <span className="text-xl font-bold tracking-tight italic">Vertex</span>
        </Link>

        <nav className="space-y-1 flex-1">
          <NavItem href="/Home" icon={<Home size={22} />} label="Home" />
          <NavItem href="Explore" icon={<Globe size={22} />} label="Explore" active />
          <NavItem href="Notification" icon={<Bell size={22} />} label="Signal" badge="12" />
          <NavItem href="/Messages" icon={<Mail size={22} />} label="Direct" />
          <NavItem href="/Profile" icon={<User size={22} />} label="Profile" />
        </nav>

        <Link href="/profile" className="mt-auto p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
          <div className="flex-1 min-w-0 text-sm">
            <p className="font-bold truncate">Alex Rivera</p>
            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Member #8421</p>
          </div>
          <MoreHorizontal size={14} className="text-gray-600" />
        </Link>
      </aside>

      {/* 2. MAIN CONTENT - The "App" View */}
      <main className="flex-1 max-w-[900px] min-h-screen px-4 lg:px-12 border-x border-white/5">
        
        {/* iOS Style Large Title Header */}
        <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl pt-10 pb-4">
          <div className="flex justify-between items-center mb-6">
            <div className="space-y-0.5">
              <p className="text-purple-500 text-[10px] font-black tracking-[0.2em] uppercase">Discovery</p>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight italic">EXPLORE</h1>
            </div>
            {/* iOS Mini Profile Avatar */}
            <Link href="/profile" className="lg:hidden active:scale-95 transition-transform">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-white/10" />
            </Link>
          </div>
          
          {/* iOS Style Search Bar */}
          <div className="relative group w-full mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              className="w-full bg-[#1C1C1E] border-none rounded-xl py-3 pl-12 pr-4 text-[17px] placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              placeholder="Search Vertex"
            />
          </div>

          {/* iOS Segmented Control / Pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
            {['For You', 'Trending', 'Visuals', 'Tech', 'Culture'].map((cat, i) => (
              <button 
                key={cat} 
                className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold transition-all ${i === 0 ? 'bg-white text-black' : 'bg-[#1C1C1E] text-gray-400 active:bg-[#2C2C2E]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Masonry Content - Optimized for Touch */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4 mt-6">
          <div className="break-inside-avoid relative rounded-[2.5rem] overflow-hidden border border-white/5 active:scale-[0.98] transition-transform duration-200">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-8 flex flex-col justify-end">
               <h3 className="text-2xl font-bold italic">Geometry of Logic</h3>
               <div className="flex items-center gap-2 mt-2 text-gray-400 text-xs font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500" />
                  <span>Curated by Studio-X</span>
               </div>
            </div>
          </div>

          <div className="break-inside-avoid bg-[#1C1C1E] p-8 rounded-[2.5rem] border border-white/5 active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <ArrowUpRight className="text-purple-500" size={20} />
            </div>
            <h3 className="text-2xl font-light italic leading-snug">"The details are not the details. They make the design."</h3>
            <p className="mt-6 text-sm font-bold text-gray-500 uppercase tracking-widest">— Charles Eames</p>
          </div>
        </div>
      </main>

      {/* 3. DESKTOP TRENDS - Hidden on iPhone */}
      <aside className="w-[340px] hidden xl:flex flex-col sticky top-0 h-screen p-8 gap-8">
        <div className="bg-[#1C1C1E] rounded-[2.5rem] p-8 border border-white/5">
          <h3 className="text-[10px] font-black text-gray-500 tracking-[0.3em] mb-6 uppercase">Trending Now</h3>
          <div className="space-y-6">
            <TrendItem label="Vision Pro" growth="+420%" />
            <TrendItem label="TypeScript 5.5" growth="+12%" />
          </div>
        </div>
      </aside>

      {/* 4. iPHONE STYLE TAB BAR */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* Subtle Gradient overlay behind tab bar */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        
        {/* The Tab Bar Container */}
        <div className="mx-6 mb-6 px-6 py-3 bg-[#1C1C1E]/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 flex justify-between items-center shadow-2xl">
          <Link href="/Home" className="p-3 text-gray-500 active:text-white transition-colors">
            <Home size={24} />
          </Link>
          <Link href="/Explore" className="p-3 text-white">
            <Globe size={24} />
          </Link>
          
          {/* Central Action Button */}
          <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
            <Plus size={24} strokeWidth={3} />
          </button>
          
          <Link href="/Notification" className="p-3 text-gray-500 active:text-white transition-colors">
             <div className="relative">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
             </div>
          </Link>
          <Link href="/Messages" className="p-3 text-gray-500 active:text-white transition-colors">
            <Mail size={24} />
          </Link>
        </div>
      </nav>

    </div>
  );
}

{/* iOS Style Navigation Item */}
function NavItem({ icon, label, href, active = false, badge }: any) {
  return (
    <Link href={href} className={`flex items-center justify-between px-5 py-3.5 rounded-2xl cursor-pointer transition-all active:scale-95 ${active ? 'bg-white text-black font-bold shadow-lg' : 'text-gray-500 hover:text-white'}`}>
      <div className="flex items-center gap-4">
        {icon}
        <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
      </div>
      {badge && <span className="bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black">{badge}</span>}
    </Link>
  );
}

function TrendItem({ label, growth }: any) {
  return (
    <div className="flex justify-between items-center group cursor-pointer active:opacity-50 transition-opacity">
      <span className="text-sm font-bold">{label}</span>
      <span className="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded-md">{growth}</span>
    </div>
  );
}