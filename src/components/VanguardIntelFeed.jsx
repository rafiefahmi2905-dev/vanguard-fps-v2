import { useEffect, useState } from "react";

const DUMMY_AGENTS_FALLBACK = [
  {
    id: "AG-01",
    codename: "PHANTOM",
    role: "DUELIST",
    winRate: "64%",
    status: "ONLINE",
    signature: "Flash Dash & Entry Breach",
  },
  {
    id: "AG-02",
    codename: "AEGIS",
    role: "CONTROLLER",
    winRate: "59%",
    status: "ONLINE",
    signature: "Smoke Dome & Tactical Wall",
  },
  {
    id: "AG-03",
    codename: "SPECTRE",
    role: "SENTINEL",
    winRate: "61%",
    status: "STANDBY",
    signature: "Recon Tripwire & Zone Lock",
  },
];

const ROLES = ["ALL", "DUELIST", "CONTROLLER", "SENTINEL"];

export default function VanguardIntelFeed() {
  const [intelList, setIntelList] = useState([]);
  const [selectedRole, setSelectedRole] = useState("ALL");
  const [refreshKey, setRefreshKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sourceLabel, setSourceLabel] = useState("DUMMY API");

  // useEffect berjalan saat pertama kali mount dan setiap refreshKey berubah
  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function fetchDummyIntel() {
      setLoading(true);
      setError("");

      try {
        // Fetch data dummy dari JSONPlaceholder lalu petakan ke format intel Vanguard
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=3",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }

        const rawUsers = await response.json();
        const rolePool = ["DUELIST", "CONTROLLER", "SENTINEL"];
        const statusPool = ["ONLINE", "ONLINE", "STANDBY"];

        const mappedData = rawUsers.map((user, index) => ({
          id: `AG-0${index + 1}`,
          codename: user.username.toUpperCase(),
          role: rolePool[index % rolePool.length],
          winRate: `${56 + index * 4}%`,
          status: statusPool[index % statusPool.length],
          signature: `${user.company?.catchPhrase || "Tactical Recon Protocol"}`,
        }));

        if (isMounted) {
          setIntelList(mappedData);
          setSourceLabel("JSONPLACEHOLDER DUMMY API");
        }
      } catch (err) {
        if (err.name === "AbortError") return;

        if (isMounted) {
          // Fallback data dummy lokal agar tetap tampil walau offline / blokir jaringan
          setIntelList(DUMMY_AGENTS_FALLBACK);
          setSourceLabel("LOCAL DUMMY FALLBACK");
          setError(
            "Gagal fetch API eksternal; menampilkan data dummy cadangan."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchDummyIntel();

    // Cleanup function saat komponen unmount atau sebelum effect jalan ulang
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [refreshKey]);

  const visibleIntel =
    selectedRole === "ALL"
      ? intelList
      : intelList.filter((item) => item.role === selectedRole);

  return (
    <div className="bg-[#0f1923]/95 border border-slate-700/80 p-6 shadow-2xl cut-corner relative overflow-hidden">
      {/* Garis aksen atas */}
      <div className="h-1 w-full bg-gradient-to-r from-[#00f0ff] via-[#ff4655] to-slate-800 mb-5" />

      {/* Header & Tombol Fetch Ulang */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-[#00f0ff] uppercase">
            <span className="inline-block w-2 h-2 bg-[#00f0ff] rotate-45" />
            <span>LIVE RECON // USEEFFECT &amp; FETCH DUMMY</span>
          </div>
          <h2 className="text-2xl font-black tracking-wide text-white uppercase mt-1">
            VANGUARD // AGENT INTEL FEED
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-mono px-3 py-1.5 bg-[#090b10] border border-slate-800 text-slate-400">
            SRC: <strong className="text-[#00f0ff]">{sourceLabel}</strong>
          </span>
          <button
            type="button"
            onClick={() => setRefreshKey((prev) => prev + 1)}
            disabled={loading}
            className="bg-[#00f0ff]/15 hover:bg-[#00f0ff]/25 disabled:opacity-50 border border-[#00f0ff] text-[#00f0ff] font-mono font-bold text-xs tracking-widest uppercase px-4 py-2 transition cursor-pointer"
          >
            {loading ? "SYNCING..." : "↻ RE-FETCH DATA"}
          </button>
        </div>
      </div>

      {/* Filter Role */}
      <div className="flex flex-wrap items-center gap-1.5 pb-4 mb-5 border-b border-slate-800/90">
        {ROLES.map((role) => {
          const active = selectedRole === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role)}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase border transition cursor-pointer ${
                active
                  ? "bg-[#00f0ff] border-[#00f0ff] text-[#090b10] font-bold"
                  : "bg-[#090b10] border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {role}
            </button>
          );
        })}
      </div>

      {/* Pesan Info / Error */}
      {error && (
        <div className="mb-4 px-4 py-2.5 bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono">
          {error}
        </div>
      )}

      {/* Status Loading / Data */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-[#090b10] border border-slate-800 p-4 animate-pulse space-y-3"
            >
              <div className="h-3 w-20 bg-slate-800" />
              <div className="h-5 w-32 bg-slate-800" />
              <div className="h-3 w-full bg-slate-800" />
            </div>
          ))}
        </div>
      ) : visibleIntel.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-slate-800 bg-[#090b10]/50">
          <p className="text-xs font-mono tracking-widest text-slate-500 uppercase">
            NO AGENT INTEL FOR ROLE {selectedRole}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleIntel.map((agent) => (
            <div
              key={agent.id}
              className="bg-[#090b10]/90 border border-slate-800 hover:border-[#00f0ff]/60 p-4 transition flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-slate-500">{agent.id}</span>
                  <span
                    className={
                      agent.status === "ONLINE"
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }
                  >
                    ● {agent.status}
                  </span>
                </div>

                <h3 className="text-lg font-black tracking-wide text-white uppercase">
                  {agent.codename}
                </h3>
                <span className="inline-block mt-1 text-[10px] font-mono tracking-widest px-2 py-0.5 bg-[#ff4655]/15 border border-[#ff4655]/40 text-[#ff4655]">
                  {agent.role}
                </span>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {agent.signature}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">WIN RATE</span>
                <span className="text-[#00f0ff] font-bold">{agent.winRate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}