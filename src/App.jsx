import VanguardCounter from "./components/VanguardCounter";
import VanguardTodo from "./components/VanguardTodo";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen text-slate-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-tactical-dark/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-widest text-white">VANGUARD</span>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#hero" className="hover:text-white transition">
              HOME
            </a>
            <a href="#counter" className="hover:text-tactical-cyan transition">
              COUNTER
            </a>
            <a href="#todo" className="hover:text-tactical-cyan transition">
              OBJECTIVES
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-tactical-cyan mb-3">
          SEASON 04 // BLACKOUT PROTOCOL
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          PRECISION IS <span className="text-tactical-accent">SURVIVAL.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          5v5 tactical shooter berbasis kemampuan unik dan tembakan presisi.
        </p>
      </section>

      {/* Komponen Counter & To-Do List (React Hooks: useState) */}
      <section id="counter" className="py-8 px-6 max-w-7xl mx-auto space-y-8">
        <VanguardCounter />
        <div id="todo">
          <VanguardTodo />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-xs text-slate-500">
        VANGUARD PROTOCOL // REACT HOOKS WORKSPACE
      </footer>
    </div>
  );
}

export default App;