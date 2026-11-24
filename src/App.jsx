import { useState } from "react";

const AGENTS_LOADOUT = [
  {
    id: "JETT",
    codename: "JETT",
    tagline: "SPEED DEMON // ENTRY FRAGGER",
    role: "DUELIST",
    origin: "SEOUL, KR",
    theme: {
      badge: "text-cyan-300 border-cyan-400/40 bg-cyan-500/10",
      activeBtn:
        "bg-gradient-to-r from-cyan-500 to-sky-400 text-slate-950 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)]",
      glow: "from-cyan-500/20 via-sky-500/5 to-transparent",
      keyBox: "bg-cyan-500/15 border-cyan-400/60 text-cyan-300",
      highlight: "text-cyan-300",
    },
    playstyle: "Aggro Entry • Off-Angle • Space Creator",
    summary:
      "Cocok buat buka site duluan, ambil first blood, lalu cabut cepat sebelum kena trade.",
    utilities: [
      {
        key: "C",
        name: "CLOUDBURST",
        type: "INSTANT SMOKE",
        cost: "200 CR",
        desc: "Lempar smoke instan buat nutup pandangan OP atau bikin ruang aman pas dash masuk site.",
        tip: "Kombinasikan Cloudburst + Tailwind buat langsung masuk ke dalam smoke di tengah site.",
      },
      {
        key: "Q",
        name: "UPDRAFT",
        type: "VERTICAL BOOST",
        cost: "150 CR",
        desc: "Lompat tinggi ke atas box atau high-ground biar musuh kaget ngecek angle atas.",
        tip: "Pakai di ronde eco/save bareng Shotgun atau Ultimate biar angle-nya susah ditebak.",
      },
      {
        key: "E",
        name: "TAILWIND",
        type: "SIGNATURE DASH",
        cost: "FREE • 2 KILLS",
        desc: "Dash super cepat ke arah gerak. Wajib aktifin sebelum peek angle rawan.",
        tip: "Aktifin timer-nya pas mau jiggle peek; kalau miss shot tinggal langsung dash balik.",
      },
      {
        key: "X",
        name: "BLADE STORM",
        type: "ULTIMATE",
        cost: "8 ORBS",
        desc: "Set pisau lempar 100% akurat bahkan sambil lompat. Headshot = auto reset.",
        tip: "Sangat mematikan buat ronde hemat (eco) karena tetap punya senjata one-tap.",
      },
    ],
  },
  {
    id: "OMEN",
    codename: "OMEN",
    tagline: "PHANTOM SHADOW // MIND GAMES",
    role: "CONTROLLER",
    origin: "UNKNOWN",
    theme: {
      badge: "text-violet-300 border-violet-400/40 bg-violet-500/10",
      activeBtn:
        "bg-gradient-to-r from-violet-500 to-indigo-400 text-white border-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.4)]",
      glow: "from-violet-500/20 via-indigo-500/5 to-transparent",
      keyBox: "bg-violet-500/15 border-violet-400/60 text-violet-300",
      highlight: "text-violet-300",
    },
    playstyle: "Map Control • Outplay • One-Way Smoke",
    summary:
      "Bikin musuh parno dengan smoke presisi, blind tembus tembok, dan TP mind-game.",
    utilities: [
      {
        key: "C",
        name: "SHROUDED STEP",
        type: "SHORT TELEPORT",
        cost: "100 CR",
        desc: "Pindah posisi jarak dekat buat nyebrang choke point atau naik ke spot tinggi.",
        tip: "Komboin sama Paranoia biar musuh nggak dengar suara TP di belakang mereka.",
      },
      {
        key: "Q",
        name: "PARANOIA",
        type: "NEARSIGHT BLIND",
        cost: "250 CR",
        desc: "Kirim gelombang bayangan nembus tembok yang bikin musuh buta dan tuli sesaat.",
        tip: "Wajib dilepas pas tim mau eksekusi masuk site atau nahan rush musuh.",
      },
      {
        key: "E",
        name: "DARK COVER",
        type: "REGEN SMOKE",
        cost: "FREE • 30S CD",
        desc: "Smoke jarak jauh yang ngisi ulang otomatis. Bisa bikin one-way smoke super rapat.",
        tip: "Taruh ujung smoke rata dengan pintu masuk biar musuh keluar dalam keadaan terekspos.",
      },
      {
        key: "X",
        name: "FROM THE SHADOWS",
        type: "ULTIMATE",
        cost: "7 ORBS",
        desc: "Teleport ke titik mana saja di seluruh map, atau cancel buat sekadar cek info.",
        tip: "Bisa dipakai buat nyolong Spike yang jatuh di area musuh lalu langsung balik.",
      },
    ],
  },
  {
    id: "SOVA",
    codename: "SOVA",
    tagline: "HUNTER'S EYE // INFO MASTER",
    role: "INITIATOR",
    origin: "SEVEROMORSK, RU",
    theme: {
      badge: "text-amber-300 border-amber-400/40 bg-amber-500/10",
      activeBtn:
        "bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 border-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.35)]",
      glow: "from-amber-500/20 via-yellow-500/5 to-transparent",
      keyBox: "bg-amber-500/15 border-amber-400/60 text-amber-300",
      highlight: "text-amber-300",
    },
    playstyle: "Wallhack Recon • Lineup • Post-Plant",
    summary:
      "Nggak ada tempat sembunyi yang aman. Bongkar posisi lawan sebelum tim mulai duel.",
    utilities: [
      {
        key: "C",
        name: "OWL DRONE",
        type: "RECON DRONE",
        cost: "400 CR",
        desc: "Terbangkan drone buat nge-clear sudut sempit dan tandai musuh pakai dart.",
        tip: "Jalanin drone di depan Duelist supaya entry jadi jauh lebih aman.",
      },
      {
        key: "Q",
        name: "SHOCK BOLT",
        type: "BOUNCE DAMAGE",
        cost: "150 CR",
        desc: "Panah listrik yang bisa mantul 2x buat hancurin trap musuh atau ganggu defuse.",
        tip: "Simpan minimal 1 Shock Bolt buat line-up anti-defuse saat situasi post-plant.",
      },
      {
        key: "E",
        name: "RECON BOLT",
        type: "SONAR SCAN",
        cost: "FREE • 40S CD",
        desc: "Panah sonar yang nge-reveal posisi musuh di radius pandangnya lewat wallhack.",
        tip: "Tembak ke tempat tinggi di belakang musuh biar mereka harus muter badan buat nembak dart.",
      },
      {
        key: "X",
        name: "HUNTER'S FURY",
        type: "ULTIMATE",
        cost: "8 ORBS",
        desc: "Tembakkan sampai 3 laser energi jarak jauh yang nembus seluruh tembok map.",
        tip: "Sangat efektif buat nyicil musuh yang kena ping Recon Bolt atau gagalin plant/defuse.",
      },
    ],
  },
  {
    id: "CYPHER",
    codename: "CYPHER",
    tagline: "ALL-SEEING EYE // SITE LOCKDOWN",
    role: "SENTINEL",
    origin: "RABAT, MA",
    theme: {
      badge: "text-rose-300 border-rose-400/40 bg-rose-500/10",
      activeBtn:
        "bg-gradient-to-r from-[#ff4655] to-rose-500 text-white border-rose-300 shadow-[0_0_20px_rgba(255,70,85,0.4)]",
      glow: "from-[#ff4655]/20 via-rose-500/5 to-transparent",
      keyBox: "bg-[#ff4655]/15 border-[#ff4655]/60 text-rose-300",
      highlight: "text-rose-300",
    },
    playstyle: "Solo Anchor • Anti-Flank • Info Trap",
    summary:
      "Jaga satu site sendirian tanpa panik dan kasih info rotasi tim dengan akurat.",
    utilities: [
      {
        key: "C",
        name: "TRAPWIRE",
        type: "STEALTH TRIP",
        cost: "200 CR",
        desc: "Kawat jebakan tersembunyi yang nahan, nge-reveal, dan nge-stun musuh kalau nggak dihancurkan.",
        tip: "Pasang setinggi pinggang biar musuh nggak bisa lompatin maupun jongkok di bawahnya.",
      },
      {
        key: "Q",
        name: "CYBER CAGE",
        type: "VISION ZONE",
        cost: "100 CR",
        desc: "Aktifin zona penghalang pandangan dari jarak jauh yang bunyi pas musuh lewat.",
        tip: "Komboin Trapwire + Cyber Cage buat nge-wallbang musuh yang nyangkut di kawat.",
      },
      {
        key: "E",
        name: "SPYCAM",
        type: "TACTICAL CAM",
        cost: "FREE • RECALL",
        desc: "Pasang kamera rahasia buat ngintip site dan tembak dart pelacak ke lawan.",
        tip: "Pasang di spot tinggi pas awal ronde biar langsung dapat info jumlah musuh yang push.",
      },
      {
        key: "X",
        name: "NEURAL THEFT",
        type: "ULTIMATE",
        cost: "6 ORBS",
        desc: "Scan mayat musuh buat bongkar posisi semua lawan yang masih hidup dua kali.",
        tip: "Pakai di mid-round buat pastiin site mana yang kosong sebelum tim rotasi.",
      },
    ],
  },
];

export default function VanguardAgentUtility() {
  const [selectedAgentId, setSelectedAgentId] = useState("JETT");
  const [selectedKey, setSelectedKey] = useState("E");

  const activeAgent =
    AGENTS_LOADOUT.find((agent) => agent.id === selectedAgentId) ||
    AGENTS_LOADOUT[0];

  const activeUtility =
    activeAgent.utilities.find((u) => u.key === selectedKey) ||
    activeAgent.utilities[0];

  return (
    <div className="relative rounded-2xl bg-[#0b101b]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden">
      {/* Ambient Gradient Glow dinamis sesuai Agent */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br ${activeAgent.theme.glow} blur-3xl transition-all duration-500`}
      />

      {/* Top Bar: Judul + Pill Selector Agent */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#ff4655] animate-pulse" />
            <span>AGENT LOADOUT // INTERACTIVE KIT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-2">
            UTILITY <span className={activeAgent.theme.highlight}>ARSENAL</span>
          </h2>
        </div>

        {/* Selector Pill */}
        <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-xl bg-black/50 border border-white/10">
          {AGENTS_LOADOUT.map((agent) => {
            const isSelected = agent.id === selectedAgentId;
            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => {
                  setSelectedAgentId(agent.id);
                  setSelectedKey("E");
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-widest uppercase border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? agent.theme.activeBtn
                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {agent.codename}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content: Kiri Profil Agent, Kanan Grid Utility + Pro Tip */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Kolom Kiri: Agent Spotlight Card */}
        <div className="lg:col-span-4 rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-5 flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md border ${activeAgent.theme.badge}`}
              >
                {activeAgent.role}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {activeAgent.origin}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-4">
              {activeAgent.codename}
            </h3>
            <p
              className={`text-[11px] font-mono tracking-widest mt-1 ${activeAgent.theme.highlight}`}
            >
              {activeAgent.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mt-4">
              {activeAgent.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
              PLAYSTYLE TAGS
            </span>
            <p className="text-xs font-mono text-slate-200 bg-black/40 border border-white/5 rounded-lg px-3 py-2">
              {activeAgent.playstyle}
            </p>
          </div>
        </div>

        {/* Kolom Kanan: 4 Kartu Ability + Spotlight Pro Tip */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activeAgent.utilities.map((util) => {
              const isFocused = util.key === activeUtility.key;
              return (
                <button
                  key={util.key}
                  type="button"
                  onClick={() => setSelectedKey(util.key)}
                  className={`text-left rounded-xl p-4 border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                    isFocused
                      ? "bg-white/[0.08] border-white/30 shadow-lg scale-[1.01]"
                      : "bg-black/40 border-white/10 hover:bg-white/[0.04] hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center border font-mono font-black text-sm ${activeAgent.theme.keyBox}`}
                      >
                        {util.key}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-md bg-white/5 text-slate-300">
                        {util.type}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold tracking-wide text-white uppercase">
                      {util.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {util.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">COST</span>
                    <span className={`font-bold ${activeAgent.theme.highlight}`}>
                      {util.cost}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Box Pro Tip Interaktif sesuai Utility yang diklik */}
          <div className="rounded-xl bg-black/50 border border-white/10 px-4 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <span
                className={`shrink-0 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest border ${activeAgent.theme.badge}`}
              >
                PRO TIP [{activeUtility.key}]
              </span>
              <p className="text-xs sm:text-sm text-slate-200">
                {activeUtility.tip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}