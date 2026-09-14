'use client';

import React, { useState, useEffect } from 'react';

export default function Page() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: '3D Solar System Explorer',
      category: 'Three.js / WebGL',
      description: 'Interactive 3D simulation of the solar system with real-time physics and customizable orbits.',
      tags: ['Three.js', 'React', 'Tailwind'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Cyberpunk E-Commerce',
      category: 'Full-Stack / 3D Configurator',
      description: 'Futuristic product visualizer allowing users to customize and view products in full 3D.',
      tags: ['Next.js', 'Three.js', 'Tailwind'],
      color: 'from-fuchsia-500 to-purple-600',
    },
    {
      title: 'AI Spatial Dashboard',
      category: 'WebXR / AI Integration',
      description: 'Spatial analytics dashboard featuring interactive 3D charts and real-time data visualizer.',
      tags: ['WebGL', 'Node.js', 'Tailwind'],
      color: 'from-violet-500 to-indigo-600',
    },
  ];

  const skills = [
    'Three.js', 'WebGL', 'React', 'Next.js', 
    'JavaScript', 'Tailwind CSS', 'Node.js', 'Git'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Background Animated Spotlights */}
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-md bg-slate-950/60 border-b border-slate-800/80 flex justify-between items-center">
        <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500">
          &lt;DEV3D /&gt;
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-8 max-w-6xl mx-auto text-center flex flex-col items-center justify-center min-h-[85vh]">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-400 mb-6">
          Creative Web Developer & 3D Specialist
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Building Immersive <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500">
            3D Web Experiences
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I craft interactive, high-performance web applications with modern frontend tools, full-stack capabilities, and 3D graphics.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:border-slate-700 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-slate-700 overflow-hidden"
            >
              <div className={`h-40 rounded-xl mb-6 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center font-black text-2xl text-slate-950/40`}>
                3D DEMO
              </div>
              <span className="text-xs font-semibold text-cyan-400">{project.category}</span>
              <h3 className="text-xl font-bold mt-1 mb-2 text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Tech <span className="text-fuchsia-500">Stack</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-8 max-w-2xl mx-auto text-center">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-400 mb-8">
            Have a project in mind or want to collaborate on 3D web applications? Feel free to reach out.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-slate-950 font-bold hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all"
          >
            Say Hello 👋
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-slate-500 text-sm border-t border-slate-900">
        © {new Date().getFullYear()} DEV3D Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
