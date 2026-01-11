"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  
  // 1. State Management
  const [formData, setFormData] = useState({ nodeId: '', passkey: '' });
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [statusMsg, setStatusMsg] = useState("INITIALIZE CONNECTION");

  // 2. Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nodeId || !formData.passkey) {
      setStatusMsg("ERR: MISSING PARAMETERS");
      return;
    }

    setIsAuthenticating(true);
    setStatusMsg("DECRYPTING CREDENTIALS...");

    // Simulate Network Latency / Authentication
    setTimeout(() => {
      setStatusMsg("CONNECTION ESTABLISHED");
      
      // Brief delay to show success before redirect
      setTimeout(() => {
        router.push('/');
      }, 800);
    }, 2000);
  };

  return (
    <div className="h-screen w-full bg-[#050505] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="w-full max-w-md relative group animate-in fade-in zoom-in duration-700">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative bg-[#0a0a0a] border border-white/10 p-10 rounded-lg shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black italic tracking-tighter text-white mb-2">VERTEX</h1>
            <p className={`text-[10px] font-mono tracking-[0.4em] uppercase transition-colors duration-300 ${
              statusMsg.includes("ERR") ? "text-red-500" : "text-cyan-500"
            }`}>
              {statusMsg}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2 tracking-widest">Node ID / Email</label>
              <input 
                required
                name="nodeId"
                type="text" 
                value={formData.nodeId}
                onChange={handleChange}
                disabled={isAuthenticating}
                className="w-full bg-black border border-white/10 p-4 rounded-none focus:outline-none focus:border-cyan-500 text-white font-mono text-sm transition-all disabled:opacity-50"
                placeholder="user@vertex.net"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2 tracking-widest">Passkey</label>
              <input 
                required
                name="passkey"
                type="password" 
                value={formData.passkey}
                onChange={handleChange}
                disabled={isAuthenticating}
                className="w-full bg-black border border-white/10 p-4 rounded-none focus:outline-none focus:border-cyan-500 text-white font-mono text-sm transition-all disabled:opacity-50"
                placeholder="••••••••"
              />
            </div>

            <button 
              disabled={isAuthenticating}
              className={`w-full font-black py-4 uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-2 ${
                isAuthenticating 
                ? "bg-gray-800 text-gray-500 cursor-wait" 
                : "bg-cyan-500 hover:bg-cyan-400 text-black active:scale-[0.98]"
              }`}
            >
              {isAuthenticating ? (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                  AUTHENTICATING...
                </div>
              ) : (
                <>Authenticate <span className="text-lg">→</span></>
              )}
            </button>
          </form>

          <div className="mt-8 flex justify-between text-[10px] font-mono text-gray-600 uppercase">
            <button className="hover:text-white transition">New Node?</button>
            <button className="hover:text-white transition">Recover Key</button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Loading Bar (Visual Only) */}
      {isAuthenticating && (
        <div className="fixed bottom-0 left-0 h-1 bg-cyan-500 animate-[load_2s_ease-in-out_infinite]" style={{ width: '100%' }} />
      )}

      <style jsx>{`
        @keyframes load {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}