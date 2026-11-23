import VanguardCounter from "./components/VanguardCounter";
import VanguardTodo from "./components/VanguardTodo";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen text-slate-200">
      {/* Top Tactical Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#090b10]/90 backdrop-blur-md border-b border-slate-800/90">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#ff4655] rotate-45 inline-block" />
            <span className="font-black tracking-[0.2em] text-white text-sm sm:text-base">
              VANGUARD // PROTOCOL
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono tracking-widest text-slate-400">
            <a href="#hero" className="hover:text-white transition">
              BRIEFING
            </a>
            <a href="#counter" className="hover:text-[#00f0ff] transition">
              TRACKER
            </a>
            <a href="#todo" className="hover:text-[#ff4655] transition">
              OBJECTIVES
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / Match Briefing Header */}
      <section id="hero" className="pt-28 pb-10 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f1923] border border-slate-800 text-[11px] font-mono tracking-widest text-[#00f0ff] mb-4">
          <span>ACT IV // TACTICAL COMBAT SUITE</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
          PRECISION IS <span className="text-[#ff4655]">SURVIVAL.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-400">
          Pantau statistik ronde &amp; eliminasi serta siapkan checklist taktis sebelum masuk ke arena 5v5.
        </p>
      </section>

      {/* Komponen Interaktif (useState + localStorage) */}
      <main className="pb-16 px-6 max-w-7xl mx-auto space-y-8">
        <section id="counter">
          <VanguardCounter />
        </section>

        <section id="todo">
          <VanguardTodo />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 px-6 text-center text-xs font-mono tracking-widest text-slate-500">
        VANGUARD PROTOCOL // REACT HOOKS WORKSPACE
      </footer>
    </div>
  );
}

export default App;