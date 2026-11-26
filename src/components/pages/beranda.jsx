import React from 'react';
import Header from '../header';
import Body from '../body';
import Footer from '../footer';

export default function Beranda() {
  return (
    <div id="beranda" className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative border-b border-slate-800/80 bg-gradient-to-b from-red-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
          <span className="inline-block text-xs font-bold tracking-widest text-red-500 border border-red-500/40 bg-red-500/10 px-3 py-1 mb-6 uppercase">
            SEASON 02 // LIVE NOW
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase max-w-3xl leading-tight mb-6">
            TACTICAL PRECISION. <br />
            <span className="text-red-600">ZERO MARGIN</span> FOR ERROR.
          </h1>
          <p className="text-slate-400 max-w-xl text-base md:text-lg mb-8 leading-relaxed">
            Game tactical shooter 5v5 berbasis strategi, koordinasi tim, dan kemampuan unik setiap agent di medan tempur kompetitif.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#agents"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-widest px-8 py-4 uppercase transition"
            >
              LIHAT AGENT
            </a>
            <button className="border border-slate-700 hover:border-white text-slate-200 font-bold text-sm tracking-widest px-8 py-4 uppercase transition">
              WATCH TRAILER
            </button>
          </div>
        </div>
      </section>

      {/* Memanggil Component Body (yang di dalamnya sudah ada Card) */}
      <Body />

      <Footer />
    </div>
  );
}