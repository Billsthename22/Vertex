"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
  RiSave3Fill, RiArrowLeftLine, RiImageEditLine, 
  RiFingerprintLine, RiHashtag, RiLinksLine,
  RiEarthLine, RiShieldUserLine, RiSettings4Line,
  RiTerminalWindowLine, RiLayout5Line
} from 'react-icons/ri';

export default function EditProfile() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 flex font-sans selection:bg-cyan-500 overflow-x-hidden">
      {/* HUD GRID OVERLAY */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* 1. COMPACT SIDEBAR (Keep consistent with main app) */}
      <aside className="w-20 lg:w-72 fixed left-0 top-0 h-screen border-r border-white/5 bg-black/80 backdrop-blur-xl p-6 z-[60] flex flex-col">
        <div className="mb-16 px-2 flex items-center gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
            <RiSettings4Line className="text-white text-2xl" />
          </div>
          <h1 className="hidden lg:block text-xl font-black tracking-tighter uppercase italic">Control_Panel</h1>
        </div>
        <nav className="flex-1 space-y-3">
          <SettingsNavLink name="Identity_Mod" active icon={<RiShieldUserLine />} />
          <SettingsNavLink name="UI_Interface" icon={<RiLayout5Line />} />
          <SettingsNavLink name="Security_Layer" icon={<RiFingerprintLine />} />
        </nav>
      </aside>

      {/* 2. CONFIGURATION CORE */}
      <main className="flex-1 ml-20 lg:ml-72 pt-10 pb-20 px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* HEADER NAV */}
          <div className="flex justify-between items-center mb-12">
            <Link href="/Profile" className="group flex items-center gap-3 text-slate-500 hover:text-white transition-colors">
              <RiArrowLeftLine className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Abort_Changes</span>
            </Link>
            <button 
              onClick={() => {setLoading(true); setTimeout(()=>setLoading(false), 2000)}}
              className="flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black rounded-xl font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 transition-all"
            >
              {loading ? "Syncing..." : <><RiSave3Fill size={16} /> Deploy_Update</>}
            </button>
          </div>

          <div className="space-y-10">
            {/* MODULE 1: VISUAL UPLINK (Avatar & Banner) */}
            <section className="bg-[#080809] border border-white/5 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-10">
                <RiImageEditLine className="text-cyan-500" size={20} />
                <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white">Visual_Interface_Config</h3>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Avatar Edit */}
                <div className="relative group/avatar">
                  <div className="w-40 h-40 bg-black border border-white/10 rounded-[32px] flex items-center justify-center overflow-hidden relative">
                    <img src="https://i.pravatar.cc/300?u=alex" className="w-full h-full object-cover opacity-50 grayscale group-hover/avatar:opacity-20 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer">
                      <RiImageEditLine size={32} className="text-cyan-500 mb-2" />
                      <span className="text-[8px] font-black uppercase tracking-widest">Update_Node</span>
                    </div>
                  </div>
                </div>

                {/* Banner Edit */}
                <div className="flex-1 w-full">
                  <div className="h-40 w-full bg-black border border-dashed border-white/10 rounded-[32px] flex flex-col items-center justify-center gap-3 group hover:border-cyan-500/30 transition-colors cursor-pointer relative overflow-hidden">
                     <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <RiTerminalWindowLine className="text-slate-700 group-hover:text-cyan-500" size={24} />
                     <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Upload_Stream_Background</p>
                  </div>
                </div>
              </div>
            </section>

            {/* MODULE 2: IDENTITY DATA */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputModule label="Node_Alias" placeholder="Alex Rivers" icon={<RiShieldUserLine />} />
              <InputModule label="Handle_Signature" placeholder="alex_rivers_0x42" icon={<RiHashtag />} />
              
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-2 mb-2 ml-1">
                  <RiTerminalBoxFill className="text-cyan-500" size={14} />
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Core_Directive (Bio)</label>
                </div>
                <textarea 
                  rows={4}
                  className="w-full bg-[#080809] border border-white/5 rounded-[24px] p-6 text-sm italic font-medium focus:border-cyan-500/50 focus:ring-0 transition-all placeholder:text-slate-800"
                  placeholder="Define your node's primary function..."
                  defaultValue="Full-stack Architect specializing in geometric UI systems and decentralized data visualization."
                />
              </div>
            </section>

            {/* MODULE 3: EXTERNAL LINKS */}
            <section className="bg-[#080809] border border-white/5 rounded-[40px] p-8 lg:p-12">
               <div className="flex items-center gap-4 mb-10">
                <RiLinksLine className="text-cyan-500" size={20} />
                <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white">External_Portals</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1"><InputModule label="Uplink_01" placeholder="github.com/alex" icon={<RiEarthLine />} noMb /></div>
                  <div className="flex-1"><InputModule label="Uplink_02" placeholder="twitter.com/alex" icon={<RiHashtag />} noMb /></div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}

/** --- SUB-COMPONENTS --- */

function SettingsNavLink({ name, icon, active = false }: any) {
  return (
    <div className={`flex items-center gap-4 px-4 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer border ${
      active ? 'bg-white/5 text-white border-white/10 shadow-lg' : 'text-slate-600 border-transparent hover:text-white hover:bg-white/5'
    }`}>
      <span className="text-xl">{icon}</span>
      <span className="hidden lg:block">{name}</span>
    </div>
  );
}

function InputModule({ label, placeholder, icon, noMb = false }: any) {
  return (
    <div className={noMb ? "" : "mb-2"}>
      <div className="flex items-center gap-2 mb-3 ml-1">
        <span className="text-cyan-500/50">{icon}</span>
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">{label}</label>
      </div>
      <input 
        type="text" 
        className="w-full bg-[#080809] border border-white/5 rounded-2xl py-4 px-6 text-sm font-mono focus:border-cyan-500/50 focus:ring-0 transition-all placeholder:text-slate-800"
        placeholder={placeholder}
      />
    </div>
  );
}

function RiTerminalBoxFill({ className, size }: any) {
  return <RiTerminalWindowLine className={className} size={size} />;
}