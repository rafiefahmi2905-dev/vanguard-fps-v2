import { useState, useEffect } from "react";

const MAPS = [
  { name: "Ascent", location: "Venice, Italy", sites: "2 Sites (A / B)" },
  { name: "Bind", location: "Rabat, Morocco", sites: "2 Sites + Teleporters" },
  { name: "Haven", location: "Thimphu, Bhutan", sites: "3 Sites (A / B / C)" },
  { name: "Split", location: "Tokyo, Japan", sites: "2 Sites + Mid Ropes" },
];

export default function VanguardMaps() {
  const [selectedMap, setSelectedMap] = useState(MAPS[0]);

  useEffect(() => {
    document.title = `Vanguard | Map: ${selectedMap.name}`;
  }, [selectedMap]);

  return (
    <section className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">ACTIVE MAP ROTATION</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {MAPS.map((m) => (
          <button
            key={m.name}
            onClick={() => setSelectedMap(m)}
            className={`p-3 rounded border text-left ${
              selectedMap.name === m.name
                ? "bg-red-600 border-red-500"
                : "bg-slate-900 border-slate-700"
            }`}
          >
            <div className="font-bold">{m.name}</div>
            <div className="text-xs text-slate-300">{m.location}</div>
          </button>
        ))}
      </div>

      <div className="p-5 bg-slate-900 border border-slate-700 rounded">
        <h3 className="text-xl font-bold text-red-400">{selectedMap.name}</h3>
        <p className="text-slate-300 mt-1">Location: {selectedMap.location}</p>
        <p className="text-slate-300">Layout: {selectedMap.sites}</p>
      </div>
    </section>
  );
}