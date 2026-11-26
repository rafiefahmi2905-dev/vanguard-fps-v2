import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import VanguardHudOverview from "./components/VanguardHudOverview";
import VanguardAgents from "./components/VanguardAgents";
import VanguardAgentUtility from "./components/VanguardAgentUtility";
import VanguardWeapons from "./components/VanguardWeapons";
import VanguardMaps from "./components/VanguardMaps";
import VanguardCounter from "./components/VanguardCounter";
import VanguardTodo from "./components/VanguardTodo";
import VanguardIntelFeed from "./components/VanguardIntelFeed";

export default function App() {
  const navItems = [
    { to: "/", label: "Overview" },
    { to: "/agents", label: "Agents" },
    { to: "/utility", label: "Utility" },
    { to: "/weapons", label: "Weapons" },
    { to: "/maps", label: "Maps" },
    { to: "/counter", label: "Counter" },
    { to: "/todo", label: "Todo" },
    { to: "/intel", label: "Intel Feed" },
  ];

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Navbar 8 Halaman */}
        <header className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <span className="font-bold tracking-wider text-red-500">
              VANGUARD PROTOCOL
            </span>
            <nav className="flex flex-wrap gap-2 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded transition ${
                      isActive
                        ? "bg-red-600 text-white font-semibold"
                        : "text-slate-300 hover:bg-slate-800"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        {/* Area Konten Halaman */}
        <main className="max-w-6xl mx-auto py-6">
          <Routes>
            <Route path="/" element={<VanguardHudOverview />} />
            <Route path="/agents" element={<VanguardAgents />} />
            <Route path="/utility" element={<VanguardAgentUtility />} />
            <Route path="/weapons" element={<VanguardWeapons />} />
            <Route path="/maps" element={<VanguardMaps />} />
            <Route path="/counter" element={<VanguardCounter />} />
            <Route path="/todo" element={<VanguardTodo />} />
            <Route path="/intel" element={<VanguardIntelFeed />} />
            <Route
              path="*"
              element={
                <div className="p-6 text-center text-slate-400">
                  404 - Halaman tidak ditemukan
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}