"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Messages() {
  const pathname = usePathname();
  const scrollRef = useRef(null);

  // 1. Data State
  const [contacts] = useState([
    { id: 1, name: "Sarah_Flux", status: "Online", signal: "98%", color: "from-cyan-500 to-blue-600" },
    { id: 2, name: "Dev_Zero", status: "Away", signal: "45%", color: "from-purple-500 to-pink-600" },
    { id: 3, name: "Node_Master", status: "Encrypted", signal: "100%", color: "from-emerald-500 to-teal-600" },
  ]);

  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [newMessage, setNewMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: "Sarah_Flux", text: "The geometry update for the Vertex mobile app is ready for stress testing. Have you verified the node connections yet?", time: "14:02:01", type: "incoming" },
    { id: 2, sender: "You", text: "Initiating node handshake now. Everything looks green from my side.", time: "14:05:44", type: "outgoing" },
  ]);

  // 2. Auto-scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // 3. Send Logic
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg = {
      id: Date.now(),
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      type: "outgoing"
    };

    setChatHistory([...chatHistory, msg]);
    setNewMessage("");
  };

  return (
    <div className="h-screen bg-[#050505] text-white flex overflow-hidden">
      
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

      {/* MESSAGES INTERFACE (Shifted by ml-64) */}
      <div className="flex-1 ml-64 flex overflow-hidden">
        
        {/* CONTACTS LIST */}
        <aside className="w-80 border-r border-white/5 bg-[#0a0a0a]/30 flex flex-col">
          <div className="p-6 border-b border-white/5 bg-black/20">
            <h2 className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase italic">ACTIVE_FREQUENCIES</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => setActiveContact(contact)}
                className={`p-6 border-b border-white/5 cursor-pointer group transition-all relative ${
                  activeContact.id === contact.id ? 'bg-cyan-500/5' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold text-sm transition-colors ${
                    activeContact.id === contact.id ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {contact.name}
                  </span>
                  <span className="text-[10px] font-mono text-gray-600">{contact.signal}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${contact.status === 'Online' ? 'bg-cyan-500 animate-pulse' : 'bg-gray-700'}`} />
                  <span className="text-[10px] uppercase text-gray-500 tracking-tighter">{contact.status}</span>
                </div>
                {activeContact.id === contact.id && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-cyan-500 shadow-[0_0_10px_cyan]" />
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* CHAT FEED */}
        <section className="flex-1 flex flex-col bg-[#050505]">
          {/* Header */}
          <header className="p-6 border-b border-white/5 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className={`h-8 w-8 bg-gradient-to-tr ${activeContact.color} rotate-45 border border-white/20`} />
              <div>
                <h3 className="font-bold text-sm tracking-wide uppercase italic">{activeContact.name}</h3>
                <p className="text-[9px] text-cyan-500 font-mono animate-pulse">ENCRYPTION: AES-256 SECURE</p>
              </div>
            </div>
            <div className="flex gap-4 font-mono text-[10px] text-gray-500">
              <button className="hover:text-cyan-400">[PING]</button>
              <button className="hover:text-cyan-400">[CLEAR]</button>
            </div>
          </header>

          {/* Messages Container */}
          <div 
            ref={scrollRef}
            className="flex-1 p-8 space-y-8 overflow-y-auto scrollbar-hide bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px]"
          >
            {chatHistory.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.type === 'outgoing' ? 'items-end' : 'items-start'} gap-2 group`}>
                <span className="text-[10px] font-mono text-gray-600 px-2 uppercase">{msg.sender} // {msg.time}</span>
                <div className={`max-w-md p-4 rounded-2xl relative transition-all duration-300 ${
                  msg.type === 'outgoing' 
                  ? 'bg-cyan-950/20 border border-cyan-500/30 rounded-tr-none' 
                  : 'bg-[#111] border border-white/10 rounded-tl-none'
                }`}>
                  <div className={`absolute top-0 w-1 h-full ${msg.type === 'outgoing' ? '-right-[1px] bg-cyan-500' : '-left-[1px] bg-gray-500'}`} />
                  <p className={`text-sm leading-relaxed ${msg.type === 'outgoing' ? 'text-cyan-50' : 'text-gray-300'}`}>
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <footer className="p-8 border-t border-white/5">
            <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto relative group">
              <input 
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="TYPE TRANSMISSION..." 
                className="w-full bg-[#0f0f0f] border border-white/10 p-5 pl-8 rounded-full focus:outline-none focus:border-cyan-500 text-sm font-mono tracking-widest transition-all"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-cyan-500 hover:text-white transition-all transform hover:scale-125 active:scale-95">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </form>
          </footer>
        </section>
      </div>
    </div>
  );
}