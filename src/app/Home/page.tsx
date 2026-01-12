"use client";
import React, { useState } from 'react';
import { 
  Home, Hash, Bell, Mail, User, Search, 
  Plus, Code, Image, BarChart3, MoreHorizontal,
  MessageCircle, Repeat2, Heart, Share2, Globe
} from 'lucide-react';

export default function VertexUnifiedHome() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5] flex justify-center">
      
      {/* 1. NAVIGATION BAR */}
      <aside className="w-[280px] hidden lg:flex flex-col sticky top-0 h-screen p-6 border-r border-white/5">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/20">
            V
          </div>
          <span className="text-xl font-bold tracking-tight">Vertex</span>
        </div>

        <nav className="space-y-2 flex-1">
          <NavItem icon={<Home size={20} />} label="Home" active />
          <NavItem icon={<Globe size={20} />} label="Explore" />
          <NavItem icon={<Bell size={20} />} label="Notifications" badge="4" />
          <NavItem icon={<Mail size={20} />} label="Messages" />
          <NavItem icon={<User size={20} />} label="Profile" />
        </nav>

        {/* User Mini-Profile */}
        <div className="mt-auto p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-rose-400" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">Alex Rivera</p>
            <p className="text-xs text-gray-500 truncate">@arivera</p>
          </div>
          <MoreHorizontal size={16} className="text-gray-600" />
        </div>
      </aside>

      {/* 2. MAIN FEED */}
      <main className="flex-1 max-w-[640px] border-r border-white/5 min-h-screen">
        <header className="sticky top-0 z-30 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Signal</h2>
            <div className="flex bg-white/5 p-1 rounded-full border border-white/5">
              <button className="px-4 py-1 text-xs font-bold rounded-full bg-white text-black transition">For You</button>
              <button className="px-4 py-1 text-xs font-bold text-gray-400 hover:text-white transition">Following</button>
            </div>
          </div>
        </header>

        {/* Unified Composer */}
        <div className="p-6 border-b border-white/5">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex-shrink-0" />
            <div className="flex-1">
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-lg placeholder-gray-600 resize-none pt-2"
                placeholder="What's happening?"
                rows={2}
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-1">
                  <ComposerAction icon={<Image size={18} />} />
                  <ComposerAction icon={<Code size={18} />} label="Snippet" />
                  <ComposerAction icon={<BarChart3 size={18} />} />
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition shadow-lg shadow-white/5">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The Content Stream */}
        <div className="divide-y divide-white/5">
          <FeedItem 
            author="Sarah Edo"
            handle="sarah_edo"
            time="2h"
            content="Just finished migrating the Vertex design system to CSS variables. The performance gains on low-end devices are actually noticeable. 🎨"
            likes="1.2k"
            comments="42"
          />
          
          <CodePost 
            author="Vertex Dev"
            handle="vertex_internal"
            time="5h"
            content="Snippet: How we handle real-time notification debouncing."
            code={`const debounce = (fn, ms) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
};`}
          />

          <FeedItem 
            author="Design Milk"
            handle="designmilk"
            time="8h"
            content="Minimalism isn't the lack of something. It's the perfect amount of something. Looking at the new Vertex interface today."
            likes="856"
            comments="12"
          />
        </div>
      </main>

      {/* 3. DISCOVERY SIDEBAR */}
      <aside className="w-[380px] hidden xl:flex flex-col sticky top-0 h-screen p-8 gap-8">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" size={18} />
          <input 
            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:border-purple-500/50 focus:bg-white/[0.05] focus:outline-none transition-all"
            placeholder="Search communities..."
          />
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-6">
          <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Trending Circles</h3>
          <div className="space-y-6">
            <TrendItem title="Architecture" sub="12.4k posts" />
            <TrendItem title="Generative AI" sub="45.1k posts" />
            <TrendItem title="Mechanical Keyboards" sub="8.2k posts" />
            <TrendItem title="Minimalist Desk" sub="3.1k posts" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-[2rem] p-6">
          <h3 className="font-bold mb-2 text-white">Founding Member</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">You're part of the first 10k users. Your feedback shapes the future of Vertex.</p>
          <button className="text-xs font-bold text-purple-400 hover:text-purple-300 transition">View Rewards →</button>
        </div>
      </aside>

    </div>
  );
}

// Visual components
function NavItem({ icon, label, active = false, badge }: any) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all ${active ? 'bg-white/5 text-white' : 'text-gray-500 hover:text-white hover:bg-white/[0.02]'}`}>
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-semibold text-[15px]">{label}</span>
      </div>
      {badge && <span className="bg-purple-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{badge}</span>}
    </div>
  );
}

function ComposerAction({ icon, label }: any) {
  return (
    <button className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-xl text-gray-500 hover:text-purple-400 transition">
      {icon}
      {label && <span className="text-xs font-bold">{label}</span>}
    </button>
  );
}

function FeedItem({ author, handle, time, content, likes, comments }: any) {
  return (
    <div className="p-6 hover:bg-white/[0.01] transition-colors cursor-pointer group">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold hover:underline underline-offset-2">{author}</span>
            <span className="text-gray-600 text-sm">@{handle} • {time}</span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">{content}</p>
          <div className="flex justify-between max-w-sm text-gray-500">
            <button className="flex items-center gap-2 hover:text-blue-400 transition"><MessageCircle size={18} /><span className="text-xs">{comments}</span></button>
            <button className="flex items-center gap-2 hover:text-green-400 transition"><Repeat2 size={18} /><span className="text-xs">12</span></button>
            <button className="flex items-center gap-2 hover:text-pink-400 transition"><Heart size={18} /><span className="text-xs">{likes}</span></button>
            <button className="hover:text-white transition"><Share2 size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodePost({ author, handle, time, content, code }: any) {
  return (
    <div className="p-6 hover:bg-white/[0.01] transition-colors">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold">V</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold">{author}</span>
            <span className="text-gray-600 text-sm">@{handle} • {time}</span>
          </div>
          <p className="text-gray-300 mb-3 text-sm italic">{content}</p>
          <pre className="bg-black border border-white/5 p-4 rounded-2xl overflow-x-auto">
            <code className="text-xs font-mono text-purple-300">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function TrendItem({ title, sub }: any) {
  return (
    <div className="group cursor-pointer">
      <p className="text-white font-bold group-hover:text-purple-400 transition">{title}</p>
      <p className="text-xs text-gray-600">{sub}</p>
    </div>
  );
}