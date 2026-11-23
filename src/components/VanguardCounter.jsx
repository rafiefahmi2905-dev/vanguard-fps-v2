import { useState } from "react";

export default function VanguardCounter() {
  // State untuk menghitung Round menang dan Kill count di match Vanguard
  const [roundsWon, setRoundsWon] = useState(0);
  const [kills, setKills] = useState(0);

  return (
    <section className="p-4 border border-slate-700 rounded-lg my-4 bg-slate-900 text-white">
      <h2 className="text-lg font-bold tracking-wide">
        VANGUARD // Match &amp; Kill Counter (useState)
      </h2>
      <p className="my-2 text-sm text-slate-300">
        Rounds Won: <strong className="text-emerald-400">{roundsWon}</strong> | Total Kills:{" "}
        <strong className="text-amber-400">{kills}</strong>
      </p>

      <div className="flex gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => setRoundsWon((prev) => prev + 1)}
          className="px-3 py-1 bg-emerald-600 rounded hover:bg-emerald-500"
        >
          +1 Round Win
        </button>
        <button
          type="button"
          onClick={() => setRoundsWon((prev) => (prev > 0 ? prev - 1 : 0))}
          className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600"
        >
          -1 Round
        </button>
        <button
          type="button"
          onClick={() => setKills((prev) => prev + 1)}
          className="px-3 py-1 bg-amber-600 rounded hover:bg-amber-500"
        >
          +1 Kill
        </button>
        <button
          type="button"
          onClick={() => {
            setRoundsWon(0);
            setKills(0);
          }}
          className="px-3 py-1 bg-rose-700 rounded hover:bg-rose-600"
        >
          Reset Match
        </button>
      </div>
    </section>
  );
}