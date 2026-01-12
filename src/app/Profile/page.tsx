"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  RiRadarFill, RiCompass3Line, RiUser6Line, 
  RiSettings4Line, RiPulseFill, RiShieldCheckLine,
  RiNodeTree, // Cleaned up RiNodesFill error here
  RiBroadcastLine, RiStackLine, RiKey2Line,
  RiShareForwardLine, RiEditLine
} from 'react-icons/ri';

export default function Profile() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('BROADCASTS');
  
  const [userProfile] = useState({
    name: "Alex Rivers",
    handle: "alex_rivers_0x42",
    bio: "Full-stack Architect specializing in geometric UI systems and decentralized data visualization.",
    reach: "2.4k",
    uptime: "99.99%",
    reputation: "4.8"
  });

  const broadcasts = [
    { id: 1, title: "Vertex UI Component Library v1.0", stream: "DATA_STREAM_01", type: "PROTOCOL" },
    { id: 2, title: "Geometric Brutalism Research", stream: "DATA_STREAM_02", type: "DESIGN" },
    { id: 3, title: "Neural UI Navigation Logic", stream: "DATA_STREAM_03", type: "LOGIC" },
    { id: 4, title: "Decentralized Node Handshake", stream: "DATA_STREAM_04", type: "NETWORK" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white flex font-sans selection:bg-cyan-500">
      
      {/* 1. SIDEBAR */}
      <aside className="w-20 lg:w-72 fixed left-0 top-0 h-screen border-r border-white/5 bg-black/40 backdrop-blur-2xl p-6 z-50 flex flex-col">
        <div className="mb-12 px-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_#06b6d4]">
            <RiPulseFill className="text-black text-xl" />
          </div>
          <h1 className="hidden lg:block text-2xl font-black tracking-tighter italic uppercase">Vertex</h1>
        </div>
        
        <nav className="flex-1 space-y-4">
          {[
            { name: 'Feed', href: '/', icon: <RiRadarFill /> },
            { name: 'Explore', href: '/Explore', icon: <RiCompass3Line /> },
            { name: 'Messages', href: '/Messages', icon: <RiBroadcastLine /> },
            { name: 'Profile', href: '/Profile', icon: <RiUser6Line /> },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                pathname === link.href ? 'bg-white text-black shadow-xl shadow-white/5' : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}>
                <span className="text-2xl">{link.icon}</span>
                <span className="hidden lg:block">{link.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* 2. MAIN HUB */}
      <main className="flex-1 ml-20 lg:ml-72 pt-12 pb-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* PROFILE HEADER */}
          <header className="relative bg-[#0A0A0B] border border-white/5 rounded-[48px] p-10 lg:p-16 overflow-hidden mb-12 group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-48" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-end gap-12">
              <div className="relative">
                <div className="w-48 h-48 bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-center group-hover:border-cyan-500/50 transition-all duration-700 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#808080_1px,transparent_1px),linear-gradient(-45deg,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
                    <span className="text-6xl font-black italic text-cyan-500 relative z-10">AR</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                  Node_Verified
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-6">
                  <div>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic leading-none mb-2">{userProfile.name}</h2>
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em]">{userProfile.handle}</p>
                  </div>
                  <Link 
                    href="/Editprofile"
                    className="w-fit mx-auto lg:mx-0 flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    <RiEditLine size={16} /> Edit_Dossier
                  </Link>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-medium mb-10 italic">
                  "{userProfile.bio}"
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10">
                   <Stat label="Network Reach" val={userProfile.reach} color="text-cyan-500" />
                   <Stat label="Data Uptime" val={userProfile.uptime} color="text-purple-500" />
                   <Stat label="Trust Score" val={userProfile.reputation} color="text-emerald-500" />
                   <Stat label="Node Rank" val="Master" color="text-orange-500" />
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* ASIDE */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-[#0A0A0B] border border-white/5 p-8 rounded-[40px]">
                <div className="flex items-center gap-3 mb-8">
                  <RiKey2Line className="text-cyan-500 text-xl" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Identity_Protocol</h3>
                </div>
                <div className="space-y-4 font-mono text-[9px] text-gray-600 uppercase">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Key_Type</span><span className="text-white">ED25519</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>Public_Hash</span>
                    <span className="text-cyan-500 break-all bg-white/[0.03] p-3 rounded-lg border border-white/5">
                      vtx_773x_9921_kl88_pp01_node_alpha
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A0A0B] border border-white/5 p-8 rounded-[40px]">
                <div className="flex items-center gap-3 mb-8">
                  {/* FIXED ICON HERE */}
                  <RiNodeTree className="text-purple-500 text-xl" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Direct_Peers</h3>
                </div>
                <div className="flex -space-x-4 mb-6">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border-2 border-[#020202] flex items-center justify-center font-black text-[10px] text-gray-400">
                      P{i}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border-2 border-[#020202] flex items-center justify-center text-[10px] font-black text-cyan-500">+124</div>
                </div>
              </div>
            </aside>

            {/* FEED SECTION */}
            <section className="lg:col-span-8">
              <div className="flex gap-10 mb-10 border-b border-white/5 pb-6">
                {['BROADCASTS', 'MEDIA', 'INTERSECTS'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${
                      activeTab === tab ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute -bottom-6 left-0 right-0 h-1 bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeTab === 'BROADCASTS' ? (
                  broadcasts.map((post) => (
                    <div key={post.id} className="group bg-[#0A0A0B] border border-white/5 rounded-[32px] overflow-hidden hover:border-cyan-500/30 transition-all p-8 min-h-[220px]">
                      <div className="flex justify-between items-start">
                         <RiStackLine className="text-2xl text-gray-700 group-hover:text-cyan-500" />
                         <span className="text-[9px] font-black text-gray-700 uppercase tracking-widest">{post.type}</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-cyan-500/50 uppercase tracking-widest mb-2">{post.stream}</p>
                        <h4 className="font-black text-xl italic uppercase tracking-tighter leading-tight">{post.title}</h4>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[40px] opacity-20">
                    <RiShieldCheckLine size={48} className="mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em]">Signal_Locked</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Stat({ label, val, color }: any) {
  return (
    <div>
      <p className="text-[9px] font-black text-gray-700 uppercase tracking-widest mb-2 italic">{label}</p>
      <p className={`text-2xl lg:text-3xl font-black italic tracking-tighter leading-none ${color}`}>{val}</p>
    </div>
  );
}