"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Profile() {
  const pathname = usePathname();

  // 1. Profile State (Simplified - no more isEditing here)
  const [activeTab, setActiveTab] = useState('BROADCASTS');
  const [userProfile] = useState({
    name: "Alex Rivers",
    bio: "Full-stack Architect specializing in geometric UI systems and decentralized data visualization.",
    reach: "2.4k"
  });

  // 2. Tab Data
  const broadcasts = [
    { id: 1, title: "Vertex UI Component Library v1.0", stream: "DATA_STREAM_01" },
    { id: 2, title: "Geometric Brutalism Research", stream: "DATA_STREAM_02" },
    { id: 3, title: "Neural UI Navigation Logic", stream: "DATA_STREAM_03" },
    { id: 4, title: "Decentralized Node Handshake", stream: "DATA_STREAM_04" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      
      {/* GLOBAL SIDEBAR */}
      <aside className="w-64 fixed left-0 top-0 h-screen border-r border-white/10 bg-[#0a0a0a] p-6 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-black tracking-tighter italic uppercase">Vertex<span className="text-cyan-500">.</span></h1>
        </div>
        <nav className="space-y-2">
          {[
            { name: 'Feed', href: '/', icon: '◈' },
            { name: 'Explore', href: '/Explore', icon: '◬' },
            { name: 'Messages', href: 'Messages', icon: '✉' },
            { name: 'Profile', href: '/Profile', icon: '👤' },
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

      {/* MAIN PROFILE AREA */}
      <main className="flex-1 ml-64 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER SECTION */}
          <header className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden mb-12 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              {/* Avatar */}
              <div className="relative">
                <div className="w-44 h-44 bg-gradient-to-br from-gray-800 to-black border-2 border-white/20 rounded-2xl rotate-3 flex items-center justify-center group-hover:rotate-0 transition-all duration-500">
                  <div className="w-32 h-32 bg-cyan-500/10 border border-cyan-500/40 rounded-xl flex items-center justify-center">
                     <div className="text-cyan-500 font-black text-4xl italic">
                       {userProfile.name.split(' ').map(n => n[0]).join('')}
                     </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-black text-[10px] font-black px-2 py-1 rounded-sm uppercase">Verified</div>
              </div>

              {/* Identity Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <h2 className="text-5xl font-black tracking-tighter uppercase italic">{userProfile.name}</h2>
                  
                  {/* FUNCTIONALITY: Link to the Edit Profile Page */}
                  <Link 
                    href="/Editprofile"
                    className="px-4 py-2 rounded-lg text-[10px] font-mono border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    EDIT_PROFILE
                  </Link>
                </div>

                <p className="text-gray-400 font-mono text-sm max-w-md leading-relaxed">
                  {userProfile.bio}
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-8 font-mono">
                   <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-1">Network Reach</p>
                    <p className="text-xl font-black text-cyan-400">{userProfile.reach}</p>
                   </div>
                   <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-1">Data Uptime</p>
                    <p className="text-xl font-black text-purple-400">99.9%</p>
                   </div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-4 italic">Interconnected_Nodes</h3>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-black border-2 border-black" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-cyan-900 border-2 border-black flex items-center justify-center text-[10px] font-bold">+124</div>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-3">
              <div className="flex gap-8 mb-8 border-b border-white/5 text-[11px] font-black uppercase tracking-widest pb-4">
                {['BROADCASTS', 'MEDIA', 'INTERSECTS'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`transition-all ${activeTab === tab ? 'text-cyan-500 border-b border-cyan-500 pb-4 -mb-[17px]' : 'text-gray-500'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeTab === 'BROADCASTS' ? (
                  broadcasts.map((post) => (
                    <div key={post.id} className="group relative aspect-video bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all cursor-pointer">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                        <p className="text-[10px] font-mono text-cyan-500 mb-1">{post.stream}</p>
                        <h4 className="font-bold text-lg group-hover:translate-x-2 transition-transform">{post.title}</h4>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center border border-dashed border-white/5 rounded-3xl">
                    <p className="font-mono text-xs text-gray-600 uppercase tracking-widest italic">Encrypted Media Stream Offline</p>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
}