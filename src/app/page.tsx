import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Background Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 blur-[120px] -z-10" />

      <Navbar />
      
      <main className="space-y-24">
        <Hero />
        
        {/* 1. Feature Grid Section */}
        <section className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Re-engineered for Connection</h2>
                <p className="text-gray-400 max-w-xl mx-auto">Vertex strips away the clutter of traditional social media to focus on what matters: the signal.</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              emoji="🚀" 
              title="Peak Performance" 
              desc="Next-gen feed architecture for zero-latency scrolling and instant media loading." 
            />
            <FeatureCard 
              emoji="🔒" 
              title="Privacy First" 
              desc="Encrypted interactions. Your data is your property, not a product for advertisers." 
            />
            <FeatureCard 
              emoji="🎯" 
              title="Vertex Circles" 
              desc="Organize your world by interests. No algorithms, just the people you actually care about." 
            />
          </div>
        </section>

        {/* 2. Trending Section (The "Social Pulse") */}
        <section className="max-w-7xl mx-auto px-8 py-16 bg-white/[0.01] border-y border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Happening at the Vertex</h2>
                    <p className="text-gray-400">See what the world is talking about right now.</p>
                </div>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition">View all trends →</button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['#DesignSystem', '#NextJS', '#FutureTech', '#VertexBeta'].map((tag) => (
                    <div key={tag} className="p-6 rounded-2xl glass border border-white/5 hover:bg-white/5 transition cursor-pointer">
                        <p className="text-purple-500 font-mono text-xs mb-2">Trending</p>
                        <h4 className="font-bold text-lg">{tag}</h4>
                        <p className="text-gray-500 text-sm mt-1">1.2k posts today</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 3. Community Showcase (Visual Section) */}
        <section className="max-w-7xl mx-auto px-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="h-40 rounded-2xl bg-gradient-to-br from-purple-600/20 to-transparent border border-white/10" />
                            <div className="h-64 rounded-2xl bg-white/5 border border-white/10" />
                        </div>
                        <div className="space-y-4">
                            <div className="h-64 rounded-2xl bg-white/5 border border-white/10" />
                            <div className="h-40 rounded-2xl bg-gradient-to-tr from-pink-600/20 to-transparent border border-white/10" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-6">Build your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Digital Home.</span></h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">1</div>
                            <p className="text-gray-300"><span className="text-white font-semibold">Customize your space:</span> Every profile is a canvas. Choose your vibe, your layout, and your rules.</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">2</div>
                            <p className="text-gray-300"><span className="text-white font-semibold">Join the conversation:</span> Engage in high-fidelity threads with built-in markdown and code support.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 4. Final Call to Action */}
        <section className="max-w-5xl mx-auto px-8 py-32 text-center">
            <div className="relative p-12 md:p-24 rounded-[3rem] bg-gradient-to-b from-purple-600/10 to-transparent border border-purple-500/20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <h2 className="text-5xl md:text-6xl font-black mb-8">Ready to reach <br /> the Vertex?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">Join the waitlist today and secure your unique @handle before the global launch.</p>
                <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-purple-500/20">
                    Get Early Access Now
                </button>
            </div>
        </section>
      </main>

      <footer className="py-12 text-center text-gray-600 border-t border-white/5">
        <div className="mb-4 flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Discord</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
        </div>
        <p>© 2026 Vertex Platform. Built for the next web.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ emoji, title, desc }: { emoji: string, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{emoji}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}