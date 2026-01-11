// app/profile/edit/page.js
export default function EditProfile() {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-black tracking-tighter italic uppercase">Modify_Node</h1>
            <p className="text-gray-500 font-mono text-[10px] mt-1 tracking-[0.3em]">Updating Identity Parameters...</p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT: Configuration Fields */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Visual Identity Section */}
              <section className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-cyan-500 border-b border-white/5 pb-2">Visual_Identity</h3>
                <div className="flex items-center gap-8">
                  <div className="relative group">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-black border border-white/20 rounded-xl rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-mono">IMG_01</span>
                    </div>
                    <button className="absolute -bottom-2 -right-2 bg-white text-black p-1.5 rounded-full hover:bg-cyan-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </button>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-2 font-mono">Uplink Profile Vector</p>
                    <p className="text-[10px] text-gray-600 uppercase">Recommended: 512x512px SVG or PNG</p>
                  </div>
                </div>
              </section>
  
              {/* Data Fields */}
              <section className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-cyan-500 border-b border-white/5 pb-2">Node_Metadata</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase">Display Name</label>
                    <input type="text" placeholder="Alex Rivers" className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm focus:border-cyan-500 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase">Handle</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500 font-mono text-sm">@</span>
                      <input type="text" placeholder="arivers" className="w-full bg-white/5 border border-white/10 p-3 pl-8 rounded text-sm focus:border-cyan-500 transition-all outline-none" />
                    </div>
                  </div>
                </div>
  
                <div className="space-y-2">
  <label className="text-[10px] font-mono text-gray-500 uppercase">
    Node Bio (Encryption Level: Low)
  </label>
  <textarea 
    rows={4} 
    placeholder="Architecting the future of geometric UI..." 
    className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm focus:border-cyan-500 transition-all outline-none resize-none" 
  />
</div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Location Hash</label>
                  <input type="text" placeholder="Lagos, NG // Node-04" className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm focus:border-cyan-500 transition-all outline-none" />
                </div>
              </section>
  
              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 uppercase tracking-[0.2em] text-xs transition-all">
                  Save_Changes
                </button>
                <button className="px-8 border border-white/10 hover:bg-white/5 text-gray-500 hover:text-white transition-all text-xs font-mono">
                  CANCEL
                </button>
              </div>
            </div>
  
            {/* RIGHT: Live Preview (Dossier View) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="sticky top-32 p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl">
                <p className="text-[10px] font-mono text-gray-600 mb-6 uppercase tracking-widest text-center italic">— LIVE_PREVIEW —</p>
                
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-cyan-500/10 border border-cyan-500/40 rounded-xl mb-4" />
                  <h4 className="text-xl font-black italic">Alex Rivers</h4>
                  <p className="text-cyan-500 font-mono text-[10px] tracking-widest mb-4">@arivers</p>
                  <p className="text-gray-400 text-xs text-center leading-relaxed">
                    Architecting the future of geometric UI...
                  </p>
                  
                  <div className="mt-8 w-full grid grid-cols-2 gap-2 text-center">
                     <div className="p-2 border border-white/5 bg-white/5 rounded">
                        <p className="text-[8px] text-gray-500">REACH</p>
                        <p className="text-xs font-bold font-mono">2.4K</p>
                     </div>
                     <div className="p-2 border border-white/5 bg-white/5 rounded">
                        <p className="text-[8px] text-gray-500">UPTIME</p>
                        <p className="text-xs font-bold font-mono">99%</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }