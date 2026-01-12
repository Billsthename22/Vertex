"use client";
import React from 'react';
import { 
  Search, Edit3, Phone, Video, Info, 
  MoreHorizontal, Zap, Globe, Heart, 
  AtSign, Plus, Send, Image as ImageIcon, Smile
} from 'lucide-react';

export default function VertexMessages() {
  return (
    <div className="min-h-screen bg-black text-[#E4E4E7] flex overflow-hidden selection:bg-purple-500/30">
      
      {/* 1. SLIM GLOBAL NAV (Left - Consistent with app design) */}
      <aside className="w-20 border-r border-white/5 flex flex-col items-center py-8 gap-10 sticky top-0 h-screen bg-black">
        <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black italic">V</div>
        <nav className="flex flex-col gap-8 text-gray-500">
          <Zap size={22} className="hover:text-white cursor-pointer transition" />
          <Globe size={22} className="hover:text-white cursor-pointer transition" />
          <div className="relative">
            <AtSign size={22} className="text-white" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
          </div>
          <Heart size={22} className="hover:text-white cursor-pointer transition" />
        </nav>
      </aside>

      {/* 2. INBOX LIST (Middle Pane) */}
      <section className="w-[380px] border-r border-white/5 flex flex-col h-screen bg-black">
        <header className="p-8 pb-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-black italic tracking-tighter uppercase">Direct</h1>
            <Edit3 size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" size={16} />
            <input 
              className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs focus:border-white/20 focus:outline-none transition-all"
              placeholder="Search conversations..."
            />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto no-scrollbar px-4 space-y-1">
          <ChatPreviewItem 
            user="bopdaddy23" 
            message="That new architecture snippet is 🔥" 
            time="2m" 
            isUnread 
            avatar="https://i.pravatar.cc/100?u=bopdaddy23"
            active
          />
          <ChatPreviewItem 
            user="sarah_edo" 
            message="Check your DM for the assets." 
            time="1h" 
            avatar="https://i.pravatar.cc/100?u=sarah"
          />
          <ChatPreviewItem 
            user="guillermo" 
            message="Ship it." 
            time="4h" 
            avatar="https://i.pravatar.cc/100?u=rauchg"
          />
        </div>
      </section>

      {/* 3. ACTIVE CONVERSATION (Main Pane) */}
      <main className="flex-1 flex flex-col h-screen bg-[#020202]">
        {/* Chat Header */}
        <header className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://i.pravatar.cc/100?u=bopdaddy23" className="w-10 h-10 rounded-full border border-white/10" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
            </div>
            <div>
              <h2 className="font-bold text-sm tracking-tight">bopdaddy23</h2>
              <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase italic">Encryption: Active</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-gray-500">
            <Phone size={18} className="hover:text-white cursor-pointer transition" />
            <Video size={18} className="hover:text-white cursor-pointer transition" />
            <Info size={18} className="hover:text-white cursor-pointer transition" />
          </div>
        </header>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
          <div className="flex justify-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 bg-white/5 px-4 py-1 rounded-full">Conversation Started - Jan 12</span>
          </div>

          <Message bubble="Incoming" text="Yo! I just saw the Vertex architecture update." time="2:14 PM" />
          <Message bubble="Incoming" text="The way you're handling signal aggregation is crazy. You using edge workers for that?" time="2:15 PM" />
          <Message bubble="Outgoing" text="Exactly. Running it all on the edge to keep latency sub-50ms. Still tweaking the cache headers though." time="2:18 PM" />
          <Message bubble="Incoming" text="That new architecture snippet is 🔥" time="2:20 PM" />
        </div>

        {/* Message Input Area */}
        <footer className="p-8 pt-0">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-4 flex items-end gap-4 focus-within:border-white/30 transition-all">
            <div className="flex gap-2 pb-1.5 pl-2">
               <Plus size={20} className="text-gray-500 hover:text-white cursor-pointer" />
               <ImageIcon size={20} className="text-gray-500 hover:text-white cursor-pointer" />
            </div>
            <textarea 
              rows={1}
              className="flex-1 bg-transparent border-none resize-none py-2 text-sm focus:ring-0 placeholder:text-gray-600 custom-scrollbar"
              placeholder="Message bopdaddy23..."
            />
            <div className="flex gap-2 pb-1.5 pr-2">
               <Smile size={20} className="text-gray-500 hover:text-white cursor-pointer" />
               <button className="bg-white text-black p-2 rounded-xl hover:scale-105 transition-transform">
                 <Send size={16} fill="black" />
               </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/** * --- SUB-COMPONENTS ---
 */

function ChatPreviewItem({ user, message, time, isUnread, avatar, active }: any) {
  return (
    <div className={`p-4 rounded-[1.5rem] flex items-center gap-4 cursor-pointer transition-all ${active ? 'bg-white/5' : 'hover:bg-white/[0.03]'}`}>
      <div className="relative">
        <img src={avatar} className="w-12 h-12 rounded-full border border-white/10" />
        {isUnread && <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 border-2 border-black rounded-full" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h4 className={`text-sm font-bold ${isUnread ? 'text-white' : 'text-gray-300'}`}>@{user}</h4>
          <span className="text-[10px] font-mono text-gray-600">{time}</span>
        </div>
        <p className={`text-xs truncate ${isUnread ? 'text-gray-200 font-medium' : 'text-gray-500'}`}>{message}</p>
      </div>
    </div>
  );
}

function Message({ bubble, text, time }: any) {
  const isIncoming = bubble === 'Incoming';
  return (
    <div className={`flex flex-col ${isIncoming ? 'items-start' : 'items-end'}`}>
      <div className={`max-w-[70%] px-6 py-4 rounded-[1.8rem] text-sm leading-relaxed ${isIncoming ? 'bg-[#0A0A0A] border border-white/5 text-gray-200 rounded-bl-none' : 'bg-white text-black font-medium rounded-br-none'}`}>
        {text}
      </div>
      <span className="text-[9px] font-mono text-gray-700 mt-2 uppercase tracking-tighter">{time}</span>
    </div>
  );
}