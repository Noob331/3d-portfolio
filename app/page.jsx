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
      </nav>
    </div>
  );
}
