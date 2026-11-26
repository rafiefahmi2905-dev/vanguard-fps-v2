import { useState } from "react";

const WEAPONS = [
  { name: "Vandal", type: "Rifle", cost: 2900, headDamage: 160 },
  { name: "Phantom", type: "Rifle", cost: 2900, headDamage: 156 },
  { name: "Operator", type: "Sniper", cost: 4700, headDamage: 255 },
  { name: "Sheriff", type: "Sidearm", cost: 800, headDamage: 159 },
];

export default function VanguardWeapons() {
  const [activeWeapon, setActiveWeapon] = useState(WEAPONS[0]);

  return (
    <section className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">TACTICAL ARSENAL</h2>

      <div className="flex gap-2 mb-6 flex-wrap">
        {WEAPONS.map((w) => (
          <button
            key={w.name}
            onClick={() => setActiveWeapon(w)}
            className={`px-4 py-2 rounded border ${
              activeWeapon.name === w.name
                ? "bg-red-600 border-red-500"
                : "bg-slate-900 border-slate-700"
            }`}
          >
            {w.name}
          </button>
        ))}
      </div>

      <div className="p-5 bg-slate-900 border border-slate-700 rounded max-w-md">
        <h3 className="text-xl font-bold text-red-400">{activeWeapon.name}</h3>
        <p className="text-slate-300 mt-2">Category: {activeWeapon.type}</p>
        <p className="text-slate-300">Credits: {activeWeapon.cost}</p>
        <p className="text-slate-300">Headshot Damage: {activeWeapon.headDamage}</p>
      </div>
    </section>
  );
}