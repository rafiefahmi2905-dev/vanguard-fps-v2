import { useState } from "react";

const AGENTS = [
  { name: "Jett", role: "Duelist", origin: "South Korea" },
  { name: "Omen", role: "Controller", origin: "Unknown" },
  { name: "Sova", role: "Initiator", origin: "Russia" },
  { name: "Killjoy", role: "Sentinel", origin: "Germany" },
];

export default function VanguardAgents() {
  const [selectedRole, setSelectedRole] = useState("All");

  const filtered =
    selectedRole === "All"
      ? AGENTS
      : AGENTS.filter((a) => a.role === selectedRole);

  return (
    <section className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">VANGUARD AGENT ROSTER</h2>

      <div className="flex gap-2 mb-6">
        {["All", "Duelist", "Controller", "Initiator", "Sentinel"].map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-3 py-1 rounded border ${
              selectedRole === role
                ? "bg-red-600 border-red-500"
                : "bg-slate-900 border-slate-700"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((agent) => (
          <div key={agent.name} className="p-4 bg-slate-900 border border-slate-700 rounded">
            <h3 className="text-lg font-bold text-red-400">{agent.name}</h3>
            <p className="text-sm text-slate-300">Role: {agent.role}</p>
            <p className="text-xs text-slate-400">Origin: {agent.origin}</p>
          </div>
        ))}
      </div>
    </section>
  );
}