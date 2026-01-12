"use client";
import React from 'react';
import { 
  Heart, MessageSquare, AtSign, UserPlus, 
  Hash, MoreHorizontal, ChevronRight, Zap 
} from 'lucide-react';

export default function VertexNotifications() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center selection:bg-purple-500/30">
      
      {/* 1. SLIM GLOBAL NAV (Left) */}
      <aside className="w-20 border-r border-white/5 hidden md:flex flex-col items-center py-8 gap-10 sticky top-0 h-screen">
        <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black italic shadow-[0_0_20px_rgba(255,255,255,0.1)]">V</div>
        <nav className="flex flex-col gap-8 text-gray-500">
          <Zap size={22} className="hover:text-white cursor-pointer transition" />
          <div className="relative">
            <AtSign size={22} className="text-white" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#A855F7]" />
          </div>
          <Heart size={22} className="hover:text-white cursor-pointer transition" />
        </nav>
      </aside>

      {/* 2. ACTIVITY STREAM */}
      <main className="flex-1 max-w-[640px] min-h-screen border-r border-white/5">
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter uppercase italic">Activity</h1>
          <button className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition">Settings</button>
        </header>

        {/* NEW: Signal Strength Dashboard */}
        <SignalDashboard />

        <div className="divide-y divide-white/5 mt-4">
          
          {/* Tagged Notification */}
          <SocialActionRow 
            avatar="https://i.pravatar.cc/100?u=bopdaddy23"
            user="bopdaddy23"
            action="tagged you in a snippet"
            time="2m"
            preview="Checking out the new Vertex architecture. This looks insane..."
            isUnread
          />

          {/* NEW: Contextual Thread Group */}
          <ThreadGroup 
            circle="#MinimalDesign" 
            participants={[
              "https://i.pravatar.cc/100?u=1", 
              "https://i.pravatar.cc/100?u=2", 
              "https://i.pravatar.cc/100?u=bopdaddy23"
            ]} 
          />

          {/* Mentioned in Circle */}
          <SocialActionRow 
            avatar="https://i.pravatar.cc/100?u=sarah"
            user="sarah_edo"
            action="mentioned you in"
            target="#MinimalDesign"
            time="14m"
            isUnread
          />

          {/* Multiple Likes (Condensed) */}
          <div className="p-6 hover:bg-white/[0.02] transition-all cursor-pointer flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                <Heart size={18} fill="currentColor" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex -space-x-3 mb-3">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-8 h-8 rounded-full border-2 border-black" alt="user" />
                ))}
              </div>
              <p className="text-sm leading-snug">
                <span className="font-bold">guillermo</span> and <span className="font-bold">42 others</span> liked your post.
              </p>
              <span className="text-[10px] font-mono text-gray-600 mt-2 block uppercase">1h ago</span>
            </div>
          </div>

          {/* New Follower */}
          <SocialActionRow 
            avatar="https://i.pravatar.cc/100?u=lee"
            user="leeerob"
            action="started following you"
            time="3h"
            hasFollowButton
          />

          {/* Post from Tag Followed */}
          <div className="p-6 hover:bg-white/[0.02] transition-all cursor-pointer flex gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Hash size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm">
                New trending signal in <span className="text-purple-400 font-bold">#NextJS</span>
              </p>
              <div className="mt-3 p-4 bg-[#0A0A0A] border border-white/5 rounded-2xl">
                <p className="text-xs text-gray-400 italic">"Just deployed my first Vertex-powered edge worker..."</p>
              </div>
              <span className="text-[10px] font-mono text-gray-600 mt-2 block uppercase">5h ago</span>
            </div>
          </div>

        </div>
      </main>

      {/* 3. DISCOVERY SIDEBAR (Right) */}
      <aside className="w-[320px] hidden lg:block p-8 sticky top-0 h-screen">
        <div className="bg-[#0A0A0A] rounded-[2rem] p-6 border border-white/5">
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Suggested Signal</h3>
          <div className="space-y-6">
            <UserFollowCard name="DesignMilk" handle="designmilk" />
            <UserFollowCard name="The Verge" handle="verge" />
            <UserFollowCard name="Nat Friedman" handle="nat" />
          </div>
        </div>
      </aside>
    </div>
  );
}

/**
 * --- SUB-COMPONENTS ---
 */

function SignalDashboard() {
  return (
    <div className="mx-6 mt-6 p-6 bg-[#0A0A0A] border border-white/5 rounded-[2rem] flex items-center justify-between group hover:border-purple-500/20 transition-all">
      <div>
        <p className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-1">Signal Strength</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black italic tracking-tighter">84.2</span>
          <span className="text-[10px] text-green-500 font-mono">+12%</span>
        </div>
      </div>
      <div className="h-10 w-32 flex items-end gap-1 px-1">
        {[4,7,5,9,6,10,8].map((h, i) => (
          <div 
            key={i} 
            className="flex-1 bg-purple-500/20 rounded-t-[2px] group-hover:bg-purple-500/40 transition-all" 
            style={{ height: `${h*10}%` }} 
          />
        ))}
      </div>
    </div>
  );
}

function ThreadGroup({ circle, participants }: any) {
  return (
    <div className="mx-6 my-4 p-6 bg-gradient-to-br from-[#0A0A0A] to-black border border-purple-500/20 rounded-[2rem]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Active Discussion in {circle}</span>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex -space-x-3">
          {participants.map((p: string, i: number) => (
            <img key={i} src={p} className="w-10 h-10 rounded-full border-4 border-black" alt="participant" />
          ))}
        </div>
        <p className="text-xs text-gray-300 leading-snug">
          <span className="font-bold text-white">bopdaddy23</span> and others are discussing your latest snippet.
        </p>
      </div>
      <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
        Jump In
      </button>
    </div>
  );
}

function SocialActionRow({ avatar, user, action, target, time, preview, isUnread, hasFollowButton }: any) {
  return (
    <div className={`p-6 hover:bg-white/[0.02] transition-all cursor-pointer flex gap-4 relative group ${isUnread ? 'bg-purple-500/[0.02]' : ''}`}>
      {isUnread && <div className="absolute left-0 top-6 bottom-6 w-1 bg-purple-600 rounded-r-full shadow-[0_0_15px_#A855F7]" />}
      
      <img src={avatar} className="w-12 h-12 rounded-full border border-white/10 group-hover:border-white/30 transition-colors" />
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <p className="text-sm leading-tight">
            <span className="font-bold text-white hover:underline">@{user}</span> {action} {target && <span className="text-purple-400 font-bold">{target}</span>}
          </p>
          <span className="text-[10px] font-mono text-gray-600 uppercase ml-2">{time}</span>
        </div>
        
        {preview && (
          <p className="text-xs text-gray-400 mt-2 line-clamp-1 italic font-light opacity-70 group-hover:opacity-100 transition-opacity">"{preview}"</p>
        )}

        {hasFollowButton && (
          <button className="mt-3 px-6 py-1.5 bg-white text-black text-[10px] font-black uppercase rounded-full hover:bg-gray-200 transition">
            Follow Back
          </button>
        )}
      </div>
      
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight size={16} className="text-gray-700" />
      </div>
    </div>
  );
}

function UserFollowCard({ name, handle }: any) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-800" />
        <div className="min-w-0">
          <p className="text-xs font-bold truncate">{name}</p>
          <p className="text-[10px] text-gray-600">@{handle}</p>
        </div>
      </div>
      <button className="text-[10px] font-black uppercase text-purple-400 hover:text-white transition">Follow</button>
    </div>
  );
}