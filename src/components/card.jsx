import React, { useState } from 'react';

export default function Card({ role, name, description, accentColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const isCyan = accentColor === 'cyan';

  return (
    <>
      {/* Kartu Agent */}
      <div
        onClick={() => setIsOpen(true)}
        className={`bg-tactical-panel border border-slate-800 p-6 cut-corner transition cursor-pointer group ${
          isCyan ? 'hover:border-tactical-cyan' : 'hover:border-tactical-accent'
        }`}
      >
        <span
          className={`text-xs font-bold tracking-widest uppercase ${
            isCyan ? 'text-tactical-cyan' : 'text-tactical-accent'
          }`}
        >
          {role}
        </span>
        <h3 className="font-display font-bold text-2xl text-white mt-2 mb-3 group-hover:scale-[1.02] transition-transform">
          {name}
        </h3>
        <p className="text-slate-400">{description}</p>
        <p className="text-xs text-slate-500 mt-4 tracking-wider uppercase">// KLIK UNTUK DETAIL</p>
      </div>

      {/* Pop-up Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-tactical-panel border border-slate-700 max-w-lg w-full p-6 cut-corner relative shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Tombol Close (X) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white font-display font-bold text-lg px-3 py-1 bg-slate-800 hover:bg-red-600 transition"
            >
              ✕
            </button>

            {/* Isi Pop-up */}
            <span
              className={`text-xs font-bold tracking-widest uppercase ${
                isCyan ? 'text-tactical-cyan' : 'text-tactical-accent'
              }`}
            >
              {role}
            </span>
            <h2 className="font-display font-black text-3xl text-white mt-2 mb-4">
              {name}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {description}
            </p>
            <div className="border-t border-slate-800 pt-4 mb-6">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">// STATUS OPERASIONAL</p>
              <p className="text-sm font-semibold text-white">READY FOR DEPLOYMENT // SYSTEM STABLE</p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className={`w-full font-display font-bold py-3 text-sm tracking-widest cut-corner transition text-white ${
                isCyan ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-red-600 hover:bg-red-500'
              }`}
            >
              TUTUP JENDELA
            </button>
          </div>
        </div>
      )}
    </>
  );
}