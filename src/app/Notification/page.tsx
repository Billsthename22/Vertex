"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Alert {
  id: number;
  type: "CONNECT" | "MENTION" | "SYSTEM";
  user: string;
  detail: string;
  time: string;
  active: boolean;
}

export default function Notifications() {
  const pathname = usePathname();

  // 1. Notification State
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: 1, type: "CONNECT", user: "Flux_Architect", detail: "interconnected with your node", time: "2m ago", active: true },
    { id: 2, type: "MENTION", user: "Cyber_Punk", detail: "tagged you in 'Neural UI' broadcast", time: "14m ago", active: true },
    { id: 3, type: "SYSTEM", user: "VERTEX_CORE", detail: "Security patch 0.4.1 initialized successfully", time: "1h ago", active: false },
    { id: 4, type: "CONNECT", user: "Node_Runner", detail: "requested a secure handshake", time: "3h ago", active: false },
  ]);

  // 2. Function: Mark All as Read
  const markAllRead = () => {
    setAlerts(prev => prev.map(alert => ({ ...alert, active: false })));
  };

  // 3. Function: Delete Notification
  const deleteAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  // 4. Function: Toggle Single Read State
  const toggleRead = (id: number) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, active: !alert.active } : alert
    ));
  };

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
            { name: 'Messages', href: '/Messages', icon: '✉' },
            { name: 'Notifications', href: '/Notifications', icon: '⌬' },
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

      {/* MAIN ACTIVITY FEED */}
      <main className="flex-1 ml-64 pt-28 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
            <div>
              <h1 className="text-3xl font-black tracking-tighter italic">ACTIVITY_LOG</h1>
              <p className="text-[10px] font-mono text-gray-600 mt-1 uppercase">
                {alerts.filter(a => a.active).length} Unresolved Packets
              </p>
            </div>
            <button 
              onClick={markAllRead}
              className="text-[10px] font-mono text-cyan-500 hover:text-white transition border border-cyan-500/20 px-3 py-1 rounded hover:bg-cyan-500/10"
            >
              MARK_ALL_READ
            </button>
          </div>

          <div className="space-y-4">
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`relative group border p-6 rounded-xl flex items-center gap-6 transition-all duration-300 ${
                    alert.active 
                    ? 'bg-[#0f171a] border-cyan-500/30 shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]' 
                    : 'bg-[#0a0a0a] border-white/5 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Status Indicator */}
                  <div 
                    onClick={() => toggleRead(alert.id)}
                    className={`w-1 h-12 rounded-full cursor-pointer transition-all ${
                      alert.active ? 'bg-cyan-500 shadow-[0_0_15px_#06b6d4]' : 'bg-gray-800'
                    }`} 
                  />
                  
                  <div className="flex-1 cursor-pointer" onClick={() => toggleRead(alert.id)}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        alert.type === 'SYSTEM' ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-gray-400'
                      }`}>
                        {alert.type}
                      </span>
                      <span className="text-[10px] font-mono text-gray-600">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      <span className="font-bold text-white uppercase tracking-tight">@{alert.user}</span> {alert.detail}
                    </p>
                  </div>

                  <button 
                    onClick={() => deleteAlert(alert.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 hover:text-red-500 p-2"
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <div className="py-20 text-center border border-dashed border-white/5 rounded-3xl">
                <p className="font-mono text-xs text-gray-600 uppercase tracking-[0.4em]">Log Cleared. No active pings.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}