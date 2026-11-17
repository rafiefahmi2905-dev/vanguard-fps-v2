import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-red-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rotate-45"></div>
          <h1 className="text-xl font-bold tracking-widest text-white uppercase">
            VANGUARD <span className="text-red-500">//</span> PROTOCOL
          </h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wider text-slate-300">
          <a href="#beranda" className="hover:text-red-500 transition">BERANDA</a>
          <a href="#agents" className="hover:text-red-500 transition">AGENTS</a>
          <a href="#arsenal" className="hover:text-red-500 transition">ARSENAL</a>
        </nav>
        <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest px-5 py-2.5 uppercase transition">
          PLAY FREE
        </button>
      </div>
    </header>
  );
}