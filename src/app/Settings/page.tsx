"use client";
import { useState } from 'react';

// Define the shape of your settings object
interface NodeSettings {
  highFreq: boolean;
  stealth: boolean;
  autoUplink: boolean;
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Interface');
  
  // Explicitly type the state
  const [settings, setSettings] = useState<NodeSettings>({
    highFreq: true,
    stealth: false,
    autoUplink: true
  });

  // Use keyof NodeSettings to ensure only valid keys are passed
  const toggleSetting = (key: keyof NodeSettings) => {
    setSettings(prev => ({ 
      ...prev, 
      [key]: !prev[key] 
    }));
  };

  const categories = ['Security', 'Interface', 'Privacy', 'Nodes', 'Data'];

  return (
    <div className="min-h-screen pt-28 pb-10 px-6 bg-[#050505]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Settings Navigation */}
        <aside className="col-span-1 space-y-2">
          {categories.map((item) => (
            <button 
              key={item} 
              onClick={() => setActiveTab(item)}
              className={`w-full text-left px-4 py-3 text-xs font-mono uppercase tracking-widest transition-all ${
                activeTab === item 
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
              }`}
            >
              {item}
            </button>
          ))}
        </aside>

        {/* Configuration Panel */}
        <main className="col-span-3 space-y-10">
          
          {activeTab === 'Interface' && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 tracking-tighter italic">INTERFACE_CONFIG</h2>
              <div className="space-y-8">
                
                {/* High-Frequency Toggle */}
                <div className="flex justify-between items-center group">
                  <div>
                    <p className="font-bold text-sm uppercase italic group-hover:text-cyan-400 transition-colors">High-Frequency Transitions</p>
                    <p className="text-xs text-gray-500 font-mono">Enable motion-blur on node navigation</p>
                  </div>
                  <div 
                    onClick={() => toggleSetting('highFreq')}
                    className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-colors duration-300 ${
                      settings.highFreq ? 'bg-cyan-500/20 border border-cyan-500' : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      settings.highFreq 
                      ? 'translate-x-6 bg-cyan-500 shadow-[0_0_8px_cyan]' 
                      : 'translate-x-0 bg-gray-600'
                    }`} />
                  </div>
                </div>

                {/* Stealth Protocol Toggle */}
                <div className="flex justify-between items-center group">
                  <div>
                    <p className="font-bold text-sm uppercase italic group-hover:text-purple-400 transition-colors">Stealth Protocol</p>
                    <p className="text-xs text-gray-500 font-mono">Hide your node from global explore grid</p>
                  </div>
                  <div 
                    onClick={() => toggleSetting('stealth')}
                    className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-colors duration-300 ${
                      settings.stealth ? 'bg-purple-500/20 border border-purple-500' : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      settings.stealth 
                      ? 'translate-x-6 bg-purple-500 shadow-[0_0_8px_#a855f7]' 
                      : 'translate-x-0 bg-gray-600'
                    }`} />
                  </div>
                </div>

              </div>
            </section>
          )}

          {activeTab !== 'Interface' && (
            <section className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl">
              <p className="text-xs font-mono text-gray-600 uppercase tracking-[0.3em]">Accessing {activeTab} Data...</p>
              <div className="mt-4 w-12 h-1 bg-white/5 overflow-hidden">
                <div className="w-full h-full bg-cyan-500 animate-[loading_2s_infinite]" />
              </div>
            </section>
          )}

          <section>
            <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 text-red-500 tracking-tighter italic">DANGER_ZONE</h2>
            <button 
              onClick={() => {
                if(confirm("CRITICAL: Are you sure you want to terminate this node? This cannot be undone.")) {
                   alert("Node termination sequence initiated.");
                }
              }}
              className="border border-red-500/50 text-red-500 px-6 py-3 text-xs font-mono hover:bg-red-500 hover:text-white transition-all uppercase group"
            >
              Terminate Node <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
          </section>
        </main>
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}