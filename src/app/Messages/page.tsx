"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, Edit3, Phone, Video, Info, 
  MoreHorizontal, Zap, Globe, Heart, 
  AtSign, Plus, Send, Image as ImageIcon, Smile, ChevronLeft, Home, Bell, Mail,User
} from 'lucide-react';

export default function VertexMessages() {
  const [activeChat, setActiveChat] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E4E4E7] flex overflow-hidden selection:bg-purple-500/30 font-sans">
      
      {/* 1. DESKTOP SIDEBAR NAV (Left) - Hidden on Mobile */}
      <aside className="w-20 border-r border-white/5 hidden lg:flex flex-col items-center py-8 gap-10 sticky top-0 h-screen bg-black">
        <Link href="/" className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black italic">V</Link>
        <nav className="flex flex-col gap-8 text-gray-500">
          <Link href="/Home"><Home size={22} className="hover:text-white transition" /></Link>
          <Link href="/Explore"><Globe size={22} className="hover:text-white transition" /></Link>
          <Link href="/Notification" className="relative">
            <Bell size={22} className="hover:text-white transition" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
          </Link>
          <Link href="/Messages"><Mail size={22} className="text-white transition" /></Link>
        </nav>
      </aside>

      {/* 2. INBOX LIST - Hidden on mobile if a chat is active */}
      <section className={`${activeChat ? 'hidden lg:flex' : 'flex'} w-full lg:w-[380px] border-r border-white/5 flex-col h-screen bg-black transition-all`}>
        <header className="p-6 lg:p-8 pb-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl lg:text-2xl font-black italic tracking-tighter uppercase">Direct</h1>
            <Edit3 size={20} className="text-gray-400 active:scale-90 transition-transform cursor-pointer" />
          </div>
          {/* iOS Style Search */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              className="w-full bg-[#1C1C1E] border-none rounded-xl py-3 pl-10 pr-4 text-[15px] focus:ring-1 focus:ring-purple-500/50 outline-none transition-all"
              placeholder="Search conversations"
            />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto no-scrollbar px-3 lg:px-4 space-y-1">
          <ChatPreviewItem 
            onClick={() => setActiveChat('bopdaddy23')}
            user="bopdaddy23" 
            message="That new architecture snippet is 🔥" 
            time="2m" 
            isUnread 
            avatar="https://i.pravatar.cc/100?u=bopdaddy23"
            active={activeChat === 'bopdaddy23'}
          />
          <ChatPreviewItem 
            onClick={() => setActiveChat('sarah_edo')}
            user="sarah_edo" 
            message="Check your DM for the assets." 
            time="1h" 
            avatar="https://i.pravatar.cc/100?u=sarah"
            active={activeChat === 'sarah_edo'}
          />
        </div>

        {/* MOBILE TAB BAR (Only shown in Inbox view) */}
        <nav className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/5 p-4 flex justify-around">
            <Link href="/Home" className="text-gray-500"><Home size={24} /></Link>
            <Link href="/Explore" className="text-gray-500"><Globe size={24} /></Link>
            <Link href="/Messages" className="text-white"><Mail size={24} /></Link>
            <Link href="/Profile" className="text-gray-500"><User size={24} /></Link>
        </nav>
      </section>

      {/* 3. ACTIVE CONVERSATION - Hidden on mobile if no chat active */}
      <main className={`${!activeChat ? 'hidden lg:flex' : 'flex'} flex-1 flex flex-col h-screen bg-[#020202]`}>
        {/* iOS Style Chat Header */}
        <header className="px-4 lg:px-8 py-4 border-b border-white/5 flex justify-between items-center bg-black/70 backdrop-blur-2xl sticky top-0 z-10">
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Back Button for Mobile */}
            <button onClick={() => setActiveChat(null)} className="lg:hidden p-1 -ml-2 text-purple-500">
              <ChevronLeft size={28} />
            </button>
            <div className="relative">
              <img src="https://i.pravatar.cc/100?u=bopdaddy23" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/10" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
            </div>
            <div>
              <h2 className="font-bold text-sm lg:text-base tracking-tight">bopdaddy23</h2>
              <p className="text-[9px] text-gray-500 font-mono tracking-widest uppercase italic">Encryption: Active</p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 text-purple-500">
            <Phone size={20} className="active:opacity-50 transition-opacity" />
            <Video size={20} className="active:opacity-50 transition-opacity" />
          </div>
        </header>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-6 no-scrollbar">
          <div className="flex justify-center">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Jan 12, 2:14 PM</span>
          </div>

          <Message bubble="Incoming" text="Yo! I just saw the Vertex architecture update." time="2:14 PM" />
          <Message bubble="Incoming" text="The way you're handling signal aggregation is crazy." time="2:15 PM" />
          <Message bubble="Outgoing" text="Exactly. Running it all on the edge." time="2:18 PM" />
        </div>

        {/* Message Input - iPhone Style pill */}
        <footer className="p-4 lg:p-8 pt-0 bg-gradient-to-t from-black via-black to-transparent">
          <div className="bg-[#1C1C1E] rounded-[2rem] p-2 flex items-end gap-2 border border-white/5">
            <button className="p-2 text-purple-500 active:scale-90 transition-transform">
                <Plus size={24} />
            </button>
            <textarea 
              rows={1}
              className="flex-1 bg-transparent border-none resize-none py-3 text-[16px] focus:ring-0 placeholder:text-gray-600"
              placeholder="Message..."
            />
            <button className="bg-white text-black p-2.5 rounded-full active:scale-90 transition-transform mb-1 mr-1">
                <Send size={18} fill="black" />
            </button>
          </div>
          {/* iOS Home Indicator Space */}
          <div className="h-4 lg:hidden" />
        </footer>
      </main>
    </div>
  );
}

function ChatPreviewItem({ user, message, time, isUnread, avatar, active, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 rounded-[1.2rem] flex items-center gap-4 cursor-pointer transition-all active:scale-[0.98] ${active ? 'bg-white/10' : 'hover:bg-white/[0.03] active:bg-white/5'}`}
    >
      <div className="relative flex-shrink-0">
        <img src={avatar} className="w-14 h-14 rounded-full border border-white/10" />
        {isUnread && <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-purple-500 border-2 border-black rounded-full" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h4 className={`text-base font-bold ${isUnread ? 'text-white' : 'text-gray-300'}`}>@{user}</h4>
          <span className="text-xs font-mono text-gray-600">{time}</span>
        </div>
        <p className={`text-sm truncate ${isUnread ? 'text-gray-100 font-medium' : 'text-gray-500'}`}>{message}</p>
      </div>
    </div>
  );
}

function Message({ bubble, text, time }: any) {
  const isIncoming = bubble === 'Incoming';
  return (
    <div className={`flex flex-col ${isIncoming ? 'items-start' : 'items-end'} animate-in slide-in-from-bottom-2 duration-300`}>
      <div className={`max-w-[85%] lg:max-w-[70%] px-5 py-3 rounded-[1.4rem] text-[15px] leading-snug shadow-sm ${
        isIncoming 
        ? 'bg-[#1C1C1E] text-white rounded-bl-none' 
        : 'bg-purple-600 text-white font-medium rounded-br-none'
      }`}>
        {text}
      </div>
      <span className="text-[8px] font-mono text-gray-600 mt-1.5 uppercase tracking-tighter px-1">{time}</span>
    </div>
  );
}