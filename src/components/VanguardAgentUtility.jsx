import { useState } from "react";

const AGENTS_LOADOUT = [
  {
    id: "JETT",
    codename: "JETT",
    role: "DUELIST",
    origin: "SOUTH KOREA",
    accent: "text-[#00f0ff] border-[#00f0ff]/50 bg-[#00f0ff]/10",
    summary: "Mobilitas tinggi untuk entry frag cepat dan reposition setelah pick.",
    utilities: [
      {
        key: "C",
        name: "CLOUDBURST",
        type: "SMOKE",
        cost: "200 CREDITS",
        desc: "Lempar proyektil kabut instan untuk menutup sightline sniper saat entry.",
      },
      {
        key: "Q",
        name: "UPDRAFT",
        type: "MOBILITY",
        cost: "150 CREDITS",
        desc: "Meluncur vertikal ke high-ground atau off-angle tak terduga.",
      },
      {
        key: "E",
        name: "TAILWIND",
        type: "SIGNATURE",
        cost: "FREE // 2 KILLS",
        desc: "Dash cepat ke arah gerakan untuk keluar dari duel berbahaya.",
      },
      {
        key: "X",
        name: "BLADE STORM",
        type: "ULTIMATE",
        cost: "8 ORBS",
        desc: "Equip set pisau lempar akurasi penuh bahkan saat melompat.",
      },
    ],
  },
  {
    id: "OMEN",
    codename: "OMEN",
    role: "CONTROLLER",
    origin: "UNKNOWN",
    accent: "text-indigo-400 border-indigo-400/50 bg-indigo-400/10",
    summary: "Kontrol map jarak jauh dengan smoke regenerasi dan teleportasi taktis.",
    utilities: [
      {
        key: "C",
        name: "SHROUDED STEP",
        type: "TELEPORT",
        cost: "100 CREDITS",
        desc: "Teleport jarak pendek untuk menyeberangi angle atau naik ke box.",
      },
      {
        key: "Q",
        name: "PARANOIA",
        type: "BLIND",
        cost: "250 CREDITS",
        desc: "Kirim bayangan menembus tembok yang membutakan dan meredam suara musuh.",
      },
      {
        key: "E",
        name: "DARK COVER",
        type: "SMOKE",
        cost: "1 FREE // COOLDOWN",
        desc: "Pasang bola bayangan jarak jauh dari fase astral untuk memblokir visi.",
      },
      {
        key: "X",
        name: "FROM THE SHADOWS",
        type: "ULTIMATE",
        cost: "7 ORBS",
        desc: "Teleport ke titik mana pun di map untuk rotasi cepat atau ambil spike.",
      },
    ],
  },
  {
    id: "SOVA",
    codename: "SOVA",
    role: "INITIATOR",
    origin: "RUSSIA",
    accent: "text-amber-400 border-amber-400/50 bg-amber-400/10",
    summary: "Buka informasi posisi musuh sebelum tim melakukan eksekusi atau retake.",
    utilities: [
      {
        key: "C",
        name: "OWL DRONE",
        type: "RECON",
        cost: "400 CREDITS",
        desc: "Kendalikan drone pengintai untuk menyapu sudut dan menembak dart pelacak.",
      },
      {
        key: "Q",
        name: "SHOCK BOLT",
        type: "DAMAGE",
        cost: "150 CREDITS",
        desc: "Panah listrik dengan pantulan untuk hancurkan trap atau post-plant lineup.",
      },
      {
        key: "E",
        name: "RECON BOLT",
        type: "SIGNATURE",
        cost: "FREE // 40S CD",
        desc: "Panah sonar yang memindai lokasi musuh di garis pandang.",
      },
      {
        key: "X",
        name: "HUNTER'S FURY",
        type: "ULTIMATE",
        cost: "8 ORBS",
        desc: "Tembakkan hingga 3 gelombang energi jarak jauh menembus dinding.",
      },
    ],
  },
  {
    id: "CYPHER",
    codename: "CYPHER",
    role: "SENTINEL",
    origin: "MOROCCO",
    accent: "text-[#ff4655] border-[#ff4655]/50 bg-[#ff4655]/10",
    summary: "Kunci site sendirian dan amankan flank tim lewat jaringan jebakan.",
    utilities: [
      {
        key: "C",
        name: "TRAPWIRE",
        type: "TRAP",
        cost: "200 CREDITS",
        desc: "Pasang kawat tak terlihat antar tembok untuk menahan flank dan reveal musuh.",
      },
      {
        key: "Q",
        name: "CYBER CAGE",
        type: "ZONE",
        cost: "100 CREDITS",
        desc: "Aktifkan zona penghalang pandangan yang memberi sinyal audio saat dilewati.",
      },
      {
        key: "E",
        name: "SPYCAM",
        type: "SIGNATURE",
        cost: "FREE // RECALL",
        desc: "Tempel kamera pengawas di dinding untuk memantau site dan menembak dart.",
      },
      {
        key: "X",
        name: "NEURAL THEFT",
        type: "ULTIMATE",
        cost: "6 ORBS",
        desc: "Ekstrak data dari mayat musuh untuk mengungkap lokasi seluruh lawan hidup.",
      },
    ],
  },
];

export default function VanguardAgentUtility() {
  const [selectedAgentId, setSelectedAgentId] = useState("JETT");

  const activeAgent =
    AGENTS_LOADOUT.find((agent) => agent.id === selectedAgentId) ||
    AGENTS_LOADOUT[0];

  return (
    <div className="bg-[#0f1923]/95 border border-slate-700/80 p-6 shadow-2xl cut-corner relative overflow-hidden">
      {/* Garis aksen atas */}
      <div className="h-1 w-full bg-gradient-to-r from-[#ff4655] via-amber-400 to-[#00f0ff] mb-5" />

      {/* Header & Selector Agent */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5 border-b border-slate-800/90">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-[#ff4655] uppercase">
            <span className="inline-block w-2 h-2 bg-[#ff4655] rotate-45" />
            <span>AGENT ARSENAL // UTILITY LOADOUT</span>
          </div>
          <h2 className="text-2xl font-black tracking-wide text-white uppercase mt-1">
            VANGUARD // TACTICAL ABILITY MATRIX
          </h2>
        </div>

        {/* Tombol Pilih Agent */}
        <div className="flex flex-wrap gap-2">
          {AGENTS_LOADOUT.map((agent) => {
            const isSelected = agent.id === selectedAgentId;
            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => setSelectedAgentId(agent.id)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border transition cursor-pointer ${
                  isSelected
                    ? "bg-[#ff4655] border-[#ff4655] text-white font-bold"
                    : "bg-[#090b10] border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                {agent.codename}
              </button>
            );
          })}
        </div>
      </div>

      {/* Profil Singkat Agent Terpilih */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#090b10]/90 border border-slate-800 px-4 py-3.5 mt-5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-black tracking-wider text-white uppercase">
            {activeAgent.codename}
          </h3>
          <span
            className={`text-[10px] font-mono tracking-widest px-2.5 py-0.5 border ${activeAgent.accent}`}
          >
            {activeAgent.role}
          </span>
          <span className="text-[11px] font-mono text-slate-500">
            // {activeAgent.origin}
          </span>
        </div>
        <p className="text-xs text-slate-400">{activeAgent.summary}</p>
      </div>

      {/* Grid 4 Utility (C, Q, E, X) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {activeAgent.utilities.map((util) => (
          <div
            key={util.key}
            className="bg-[#090b10] border border-slate-800 hover:border-[#00f0ff]/60 p-4 flex flex-col justify-between gap-3 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 flex items-center justify-center bg-[#ff4655]/15 border border-[#ff4655] text-[#ff4655] font-mono font-black text-sm">
                  {util.key}
                </span>
                <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 bg-slate-900 border border-slate-700 text-[#00f0ff]">
                  {util.type}
                </span>
              </div>

              <h4 className="text-base font-black tracking-wide text-white uppercase">
                {util.name}
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {util.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-500">COST</span>
              <span className="text-slate-200 font-semibold">{util.cost}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}