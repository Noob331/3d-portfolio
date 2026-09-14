'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-600 rounded-full filter blur-[128px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-md bg-slate-950/60 border-b border-slate-800/80 flex justify-between items-center">
        <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500">
          &lt;DEV3D /&gt;
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/25"
        >
          Hire Me
        </a>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/10 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Full-Stack Web Developer & 3D Interactive Specialist
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-8">
            Building The Next Generation Of <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500">3D Web Apps</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            I help modern brands and businesses stand out worldwide by combining high-performance full-stack engineering with interactive 3D WebGL visuals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#contact"
              className="px-9 py-4 rounded-full font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-400/30 hover:scale-105"
            >
              Start A Project
            </a>
            <a
              href="#projects"
              className="px-9 py-4 rounded-full font-extrabold text-white border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all hover:scale-105"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 relative z-10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500">
            Full-Stack & 3D Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Full-Stack Web Apps',
                desc: 'Blazing fast web applications built with modern frontend frameworks, scalable database architectures, and secure REST/GraphQL APIs.',
                tag: 'NEXT.JS / REACT / NODE',
                color: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30',
              },
              {
                title: '3D WebGL Experiences',
                desc: 'Immersive, interactive 3D product showcases, glowing particle animations, and canvas-based WebGL backgrounds that convert visitors.',
                tag: 'THREE.JS / SPLINE / WEBGL',
                color: 'from-fuchsia-500/20 to-pink-600/10 border-fuchsia-500/30',
              },
              {
                title: 'High-Converting E-Commerce',
                desc: 'Custom online store designs equipped with 3D product configurators, automated checkout flows, and lightning-fast load times.',
                tag: 'SHOPIFY / STRIPE / TAILWIND',
                color: 'from-violet-500/20 to-purple-600/10 border-violet-500/30',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-10 rounded-3xl bg-gradient-to-b ${card.color} border backdrop-blur-xl transition-all duration-500 transform cursor-pointer ${
                  hoveredCard === idx ? '-translate-y-4 scale-105 shadow-2xl' : ''
                }`}
              >
                <span className="text-xs font-black tracking-widest text-cyan-400 uppercase">
                  {card.tag}
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-4 mb-4">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 relative z-10 bg-slate-900/60 border-t border-slate-800/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Let’s Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">Unforgettable</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Have a project in mind or need a custom 3D web application? Send me a message and let's get started right away.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been sent. I'll get back to you shortly.");
            }} 
            className="space-y-6 text-left bg-slate-950/80 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Project Details</label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your website or app idea..."
                className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-xl font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 hover:opacity-90 transition-all shadow-xl shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99]"
            >
              SEND MESSAGE & START PROJECT
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-600 border-t border-slate-900 relative z-10">
        &copy; {new Date().getFullYear()} Full-Stack 3D Web Developer. All rights reserved.
      </footer>
    </div>
  );
}
