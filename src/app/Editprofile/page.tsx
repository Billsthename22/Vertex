"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  RiRadarFill, RiCompass3Line, RiUser6Line, 
  RiBroadcastLine, RiPulseFill, RiSettings4Line,
  RiCameraLensLine, RiShieldUserLine, RiFingerprintLine,
  RiArrowLeftLine, RiSave3Fill, RiCloseLine
} from 'react-icons/ri';

export default function EditProfile() {
  const pathname = usePathname();
  
  // Local state for the live preview
  const [formData, setFormData] = useState({
    name: "Alex Rivers",
    handle: "arivers",
    bio: "Architecting the future of geometric UI...",
    location: "Lagos, NG // Node-04"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex font-sans selection:bg-cyan-500">
      
      {/* 1. UNIFIED SIDEBAR */}
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

      {/* 2. MAIN CONSOLE */}
      <main className="flex-1 ml-20 lg:ml-72 pt-12 pb-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header HUD */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              <Link href="/Profile" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500 transition-all text-gray-500 hover:text-cyan-500">
                <RiArrowLeftLine size={24} />
              </Link>
              <div>
                <h1 className="text-4xl lg:text-5xl font-black tracking-tighter italic uppercase leading-none">Modify_Node</h1>
                <p className="text-cyan-500 font-mono text-[9px] mt-2 tracking-[0.4em] uppercase font-bold">Protocol: Identity_Update_v4.2</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* CONFIGURATION FIELDS */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Visual Identity Upload */}
              <section className="bg-[#0A0A0B] border border-white/5 rounded-[40px] p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <RiCameraLensLine className="text-cyan-500" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Visual_Identity</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-10">
                  <div className="relative group cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[32px] blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative w-40 h-40 bg-black border border-white/10 rounded-[30px] flex items-center justify-center overflow-hidden">
                       <span className="text-gray-800 font-black text-5xl italic">AR</span>
                       <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <RiCameraLensLine size={40} className="text-white" />
                       </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">
                      Uplink a unique vector to represent your node in the network mesh.
                    </p>
                    <div className="flex gap-2">
                       <button className="text-[9px] font-black uppercase tracking-widest px-6 py-3 bg-white text-black rounded-xl hover:bg-cyan-500 transition-all">Upload_SVG</button>
                       <button className="text-[9px] font-black uppercase tracking-widest px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:text-red-500 hover:border-red-500 transition-all">Purge</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Input Fields Section */}
              <section className="bg-[#0A0A0B] border border-white/5 rounded-[40px] p-8 lg:p-10 space-y-8">
                <div className="flex items-center gap-3">
                  <RiFingerprintLine className="text-purple-500" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Core_Metadata</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-4">Display Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl text-xs font-bold focus:border-cyan-500 transition-all outline-none uppercase italic" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-4">Handle</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-cyan-500 font-black text-xs italic">@</span>
                      <input 
                        type="text" 
                        name="handle"
                        value={formData.handle}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/5 p-5 pl-12 rounded-2xl text-xs font-bold focus:border-cyan-500 transition-all outline-none lowercase" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-4">Node Bio (Public Transmission)</label>
                  <textarea 
                    name="bio"
                    rows={4} 
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/5 p-6 rounded-[32px] text-xs font-bold leading-relaxed focus:border-cyan-500 transition-all outline-none resize-none italic" 
                  />
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex gap-6">
                <button className="flex-1 flex items-center justify-center gap-3 bg-cyan-500 hover:bg-white text-black font-black py-6 rounded-[32px] uppercase tracking-[0.3em] text-[10px] transition-all shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  <RiSave3Fill size={18} /> Sync_Changes
                </button>
                <button className="px-12 flex items-center gap-3 border border-white/10 hover:border-red-500/50 hover:bg-red-500/5 text-gray-500 hover:text-red-500 transition-all text-[10px] font-black rounded-[32px] uppercase tracking-widest">
                  <RiCloseLine size={18} /> Cancel
                </button>
              </div>
            </div>

            {/* LIVE PREVIEW (SYSTEM CARD) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="sticky top-12 space-y-8">
                <div className="p-10 bg-[#0A0A0B] border border-white/10 rounded-[48px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8">
                    <RiShieldUserLine className="text-4xl text-cyan-500 opacity-20" />
                  </div>
                  
                  <p className="text-[9px] font-black text-gray-700 mb-10 uppercase tracking-[0.5em] italic">System_Card_Preview</p>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-white/5 border border-white/10 rounded-[32px] mb-8 flex items-center justify-center">
                       <span className="text-4xl font-black italic text-cyan-500 uppercase">{formData.name.charAt(0)}</span>
                    </div>
                    
                    <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-2">{formData.name}</h4>
                    <p className="text-cyan-500 font-black text-[10px] tracking-[0.3em] mb-6 uppercase">@{formData.handle}</p>
                    
                    <p className="text-gray-400 text-sm italic font-medium leading-relaxed px-6">
                      "{formData.bio}"
                    </p>
                    
                    <div className="mt-10 w-full grid grid-cols-2 gap-4 border-t border-white/5 pt-10">
                       <div className="space-y-1">
                          <p className="text-[8px] font-black text-gray-700 uppercase tracking-widest">Reach</p>
                          <p className="text-xl font-black italic text-white tracking-tighter font-mono">2.4K</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Node_Status</p>
                          <p className="text-xl font-black italic text-emerald-500 tracking-tighter font-mono">ACTIVE</p>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 border border-cyan-500/20 bg-cyan-500/5 rounded-[32px]">
                   <p className="text-[8px] font-black text-cyan-500 uppercase tracking-widest mb-2 italic">Security_Notice</p>
                   <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase">
                     Changes to your display name and location will be broadcasted to all connected peers. metadata is secured by AES-256 end-to-end encryption.
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

// Simple Helper Component
function Stat({ label, val }: { label: string, val: string }) {
  return (
    <div>
      <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1 italic">{label}</p>
      <p className="text-sm font-black text-white">{val}</p>
    </div>
  );
}