import { useEffect, useState } from "react";

const STORAGE_KEY = "vanguard_todo_tasks_v1";

const DEFAULT_TASKS = [
  {
    id: 1,
    text: "Warmup aim, flick & counter-strafe di Range (10m)",
    category: "COMBAT",
    completed: true,
  },
  {
    id: 2,
    text: "Cek lineup utility & post-plant spot di Site A",
    category: "LINEUP",
    completed: false,
  },
  {
    id: 3,
    text: "Pantau economy tim & rencana buy round pistol/eco",
    category: "ECON",
    completed: false,
  },
];

const CATEGORY_STYLES = {
  COMBAT: "text-[#ff4655] border-[#ff4655]/40 bg-[#ff4655]/10",
  LINEUP: "text-[#00f0ff] border-[#00f0ff]/40 bg-[#00f0ff]/10",
  ECON: "text-amber-400 border-amber-400/40 bg-amber-400/10",
};

export default function VanguardTodo() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return DEFAULT_TASKS;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : DEFAULT_TASKS;
    } catch {
      return DEFAULT_TASKS;
    }
  });

  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("COMBAT");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // Abaikan jika storage tidak tersedia
    }
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      text: trimmed,
      category,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const readinessPercent =
    tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="bg-[#0f1923]/95 border border-slate-700/80 p-6 shadow-2xl cut-corner relative overflow-hidden">
      {/* Garis aksen atas ala tactical HUD */}
      <div className="h-1 w-full bg-gradient-to-r from-[#ff4655] via-[#00f0ff] to-slate-800 mb-5" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-[#00f0ff] uppercase">
            <span className="inline-block w-2 h-2 bg-[#ff4655] rotate-45" />
            <span>PRE-MATCH BRIEFING // OBJECTIVE PROTOCOL</span>
          </div>
          <h2 className="text-2xl font-black tracking-wide text-white uppercase mt-1">
            VANGUARD // TACTICAL CHECKLIST
          </h2>
        </div>

        {/* Status Kesiapan */}
        <div className="bg-[#090b10] border border-slate-800 px-4 py-2.5 min-w-[210px]">
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className="text-slate-400">READINESS</span>
            <span className="text-white font-bold">
              {completedCount}/{tasks.length} ({readinessPercent}%)
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-[#ff4655] transition-all duration-300"
              style={{ width: `${readinessPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Tambah Objective */}
      <form
        onSubmit={handleAddTask}
        className="grid grid-cols-1 md:grid-cols-12 gap-2.5 mb-5"
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Kategori Objective"
          className="md:col-span-3 bg-[#090b10] border border-slate-700 focus:border-[#00f0ff] focus:outline-none px-3 py-2.5 text-xs font-mono tracking-wider text-slate-200 uppercase"
        >
          <option value="COMBAT">TYPE: COMBAT</option>
          <option value="LINEUP">TYPE: LINEUP</option>
          <option value="ECON">TYPE: ECON</option>
        </select>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Input objective baru (cth: Hold mid angle / Flash entry)..."
          className="md:col-span-6 bg-[#090b10] border border-slate-700 focus:border-[#00f0ff] focus:outline-none px-4 py-2.5 text-sm text-white placeholder-slate-500"
        />

        <button
          type="submit"
          className="md:col-span-3 bg-[#ff4655] hover:bg-[#e03544] text-white font-mono font-bold text-xs tracking-widest uppercase px-4 py-2.5 transition cursor-pointer"
        >
          + DEPLOY TASK
        </button>
      </form>

      {/* Filter Tab & Clear Completed */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/90">
        <div className="flex items-center gap-1.5">
          {[
            { key: "all", label: "ALL" },
            { key: "active", label: "ACTIVE" },
            { key: "completed", label: "COMPLETED" },
          ].map((tab) => {
            const isActive = filter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase border transition cursor-pointer ${
                  isActive
                    ? "bg-[#ff4655] border-[#ff4655] text-white font-bold"
                    : "bg-[#090b10] border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {completedCount > 0 && (
          <button
            type="button"
            onClick={clearCompleted}
            className="text-xs font-mono tracking-wider uppercase text-slate-400 hover:text-[#ff4655] transition cursor-pointer"
          >
            [ PURGE COMPLETED ({completedCount}) ]
          </button>
        )}
      </div>

      {/* Daftar Objective */}
      {filteredTasks.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-slate-800 bg-[#090b10]/50">
          <p className="text-xs font-mono tracking-widest text-slate-500 uppercase">
            NO OBJECTIVES FOUND IN THIS SECTOR
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => {
            const badgeStyle =
              CATEGORY_STYLES[task.category] || CATEGORY_STYLES.COMBAT;

            return (
              <li
                key={task.id}
                className="group flex items-center justify-between gap-3 bg-[#090b10]/90 border border-slate-800 hover:border-[#00f0ff]/50 px-4 py-3 transition"
              >
                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center gap-3 text-left flex-1 cursor-pointer min-w-0"
                >
                  <span
                    className={`w-5 h-5 shrink-0 flex items-center justify-center border text-xs font-bold transition ${
                      task.completed
                        ? "bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff]"
                        : "border-slate-600 text-transparent group-hover:border-slate-400"
                    }`}
                  >
                    ✓
                  </span>

                  <span
                    className={`shrink-0 text-[10px] font-mono tracking-widest px-2 py-0.5 border ${badgeStyle}`}
                  >
                    {task.category || "COMBAT"}
                  </span>

                  <span
                    className={`text-sm truncate sm:whitespace-normal transition ${
                      task.completed
                        ? "line-through text-slate-500"
                        : "text-slate-100"
                    }`}
                  >
                    {task.text}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  className="shrink-0 text-[11px] font-mono tracking-wider uppercase text-slate-500 hover:text-[#ff4655] px-2.5 py-1 border border-transparent hover:border-[#ff4655]/40 transition cursor-pointer"
                >
                  REMOVE
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}