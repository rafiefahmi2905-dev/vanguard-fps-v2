import { useState } from "react";

const TACTICAL_MODES = [
  {
    id: "COMPETITIVE",
    label: "COMPETITIVE // 5V5",
    region: "AP-SOUTHEAST // SINGAPORE",
    accent: "text-[#ff4655] border-[#ff4655]/50 bg-[#ff4655]/10",
    note: "Full economy discipline, site executes, dan post-plant control.",
  },
  {
    id: "FIRING_RANGE",
    label: "FIRING RANGE // DRILL",
    region: "LOCAL PRACTICE // SANDBOX",
    accent: "text-[#00f0ff] border-[#00f0ff]/50 bg-[#00f0ff]/10",
    note: "Fokus recoil control, flick timing, dan latihan lineup utility.",
  },
  {
    id: "SCRIM_INTEL",
    label: "SCRIM BRIEFING // RECON",
    region: "TACTICAL HUB // LIVE FEED",
    accent: "text-amber-400 border-amber-400/50 bg-amber-400/10",
    note: "Review komposisi role tim dan kesiapan sebelum masuk ronde.",
  },
];

export default function VanguardHudOverview() {
  const [selectedMode, setSelectedMode] = useState("COMPETITIVE");

  const activeMode =
    TACTICAL_MODES.find((m) => m.id === selectedMode) || TACTICAL_MODES[0];

  return (
    <div className="bg-[#0f1923]/90 border border-slate-800 p-5 shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <p className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase">
            PROTOCOL STATUS // TACTICAL HUD
          </p>
          <h2 className="text-lg sm:text-xl font-black tracking-wide text-white uppercase mt-0.5">
            MATCH COMMAND &amp; SESSION OVERVIEW
          </h2>
        </div>

        {/* Selector Mode Tampilan */}
        <div className="flex flex-wrap gap-2">
          {TACTICAL_MODES.map((mode) => {
            const isSelected = mode.id === selectedMode;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setSelectedMode(mode.id)}
                className={`px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase border transition cursor-pointer ${
                  isSelected
                    ? "bg-[#ff4655] border-[#ff4655] text-white font-bold"
                    : "bg-[#090b10] border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                {mode.id.replace("_", " ")}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ringkasan 3 Kartu Info Taktis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-[#090b10]/90 border border-slate-800 p-3.5">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
            ACTIVE PROTOCOL
          </span>
          <p className="text-sm font-bold text-white mt-1">{activeMode.label}</p>
          <p className="text-xs text-slate-400 mt-1">{activeMode.note}</p>
        </div>

        <div className="bg-[#090b10]/90 border border-slate-800 p-3.5">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
            SHARD / ROUTING
          </span>
          <p className="text-sm font-mono font-bold text-[#00f0ff] mt-1">
            {activeMode.region}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Telemetry sinkron dengan modul Counter, Objectives, dan Intel.
          </p>
        </div>

        <div className="bg-[#090b10]/90 border border-slate-800 p-3.5 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
              SYSTEM INTEGRITY
            </span>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-mono font-bold text-emerald-400">
                ● NOMINAL
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 border ${activeMode.accent}`}
              >
                {activeMode.id}
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Siap dipakai langsung di browser tanpa konfigurasi tambahan.
          </p>
        </div>
      </div>
    </div>
  );
}