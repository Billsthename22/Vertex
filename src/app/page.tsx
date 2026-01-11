"use client";
import { useState, KeyboardEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Post {
  id: number;
  user: string;
  time: string;
  content: string;
  likes: number;
  isLiked: boolean;
}

export default function Home() {
  const pathname = usePathname();
  
  // Feed State
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, user: "Arc_Designer", time: "2h ago", content: "Architecture is the geometry of light. Vertex 2.0 is coming together nicely.", likes: 1240, isLiked: false },
    { id: 2, user: "Vector_Man", time: "5h ago", content: "Testing the new edge-rendering engine. The sharp corners are intentional.", likes: 842, isLiked: false },
  ]);

  const [newPostContent, setNewPostContent] = useState("");

  const handleBroadcast = () => {
    if (!newPostContent.trim()) return;
    const newPost: Post = {
      id: Date.now(),
      user: "Alex_Rivers",
      time: "Just now",
      content: newPostContent,
      likes: 0,
      isLiked: false,
    };
    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleBroadcast();
  };

  const toggleLike = (id: number) => {
    setPosts(prev => prev.map(post => post.id === id ? {
      ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked
    } : post));
  };

  const navLinks = [
    { name: 'Feed', href: '/', icon: '◈' },
    { name: 'Explore', href: '/Explore', icon: '◬' },
    { name: 'Messages', href: '/Messages', icon: '✉' },
    { name: 'Profile', href: '/Profile', icon: '👤' },
    { name: 'Settings', href: '/Settings', icon: '⚙' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      
      {/* 1. THE SIDEBAR (Fixed to the left) */}
      <aside className="w-64 fixed left-0 top-0 h-screen border-r border-white/10 bg-[#0a0a0a] p-6 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-black tracking-tighter italic">VERTEX<span className="text-cyan-500">.</span></h1>
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Node_Cluster_04</p>
        </div>
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`flex items-center gap-4 px-4 py-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                pathname === link.href ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}>
                <span className="text-lg">{link.icon}</span>
                {link.name.toUpperCase()}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* 2. THE MAIN CONTENT (Pushed right by ml-64) */}
      <main className="flex-1 ml-64 pt-28 pb-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CENTER FEED */}
          <section className="lg:col-span-8 space-y-8">
            <div className="bg-gradient-to-r from-cyan-900/10 to-transparent border border-white/10 p-4 rounded-2xl flex gap-4 items-center group focus-within:border-cyan-500/50 transition-all">
              <div className="h-10 w-10 bg-white/10 rounded-full flex-shrink-0" />
              <input 
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Broadcast to the network..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full text-white placeholder-gray-600 outline-none"
              />
              <button onClick={handleBroadcast} className={`text-[10px] font-mono font-black px-3 py-1 rounded border transition-all ${newPostContent ? 'bg-cyan-500 text-black border-cyan-500' : 'text-gray-600 border-white/10'}`}>
                SEND_
              </button>
            </div>

            <div className="space-y-6">
              {posts.map(post => (
                <article key={post.id} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-[#0f0f0f] border border-white/10 p-8 rounded-2xl transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-3 items-center">
                        <div className="h-10 w-10 bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                        <div>
                          <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">@{post.user}</h4>
                          <p className="text-[10px] uppercase tracking-tighter text-gray-500 font-mono">{post.time}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed font-light">{post.content}</p>
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex gap-6">
                        <button onClick={() => toggleLike(post.id)} className={`flex items-center gap-2 text-xs font-mono transition-all ${post.isLiked ? 'text-cyan-400' : 'text-gray-500 hover:text-cyan-400'}`}>
                          <span className="text-lg">{post.isLiked ? '▲' : '△'}</span> {post.likes.toLocaleString()}
                        </button>
                      </div>
                      <div className={`h-2 w-2 rounded-full ${post.isLiked ? 'bg-cyan-500 animate-pulse' : 'bg-gray-800'}`} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RIGHT SIDEBAR (Trends) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Active Zones</h3>
              <ul className="space-y-4">
                {['NEURAL_NET', 'DESIGN_OPS', 'CYBER_FLUX'].map(tag => (
                  <li key={tag} className="flex justify-between items-center border-b border-white/5 pb-2 hover:border-cyan-500 transition-colors cursor-pointer group">
                    <span className="font-mono text-sm group-hover:text-cyan-400 italic">#{tag}</span>
                    <span className="text-[10px] text-gray-600 font-bold">1.2k</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}