import { useEffect, useState } from "react";

const STORAGE_KEY = "vanguard_todo_tasks_v1";

const DEFAULT_TASKS = [
  { id: 1, text: "Warmup aim & recoil di Firing Range (10 menit)", completed: true },
  { id: 2, text: "Cek lineup smoke & flash untuk Site A", completed: false },
];

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
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // Abaikan jika storage penuh atau diblokir browser
    }
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      text: trimmed,
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="bg-tactical-panel border border-slate-800 rounded-xl p-6 shadow-lg">
      {/* Header Komponen */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <p className="text-xs font-mono tracking-widest text-tactical-cyan">
            TACTICAL CHECKLIST // USESTATE & LOCALSTORAGE
          </p>
          <h2 className="text-xl font-bold text-white mt-1">
            VANGUARD // Match Objective & Prep List
          </h2>
        </div>
        <span className="text-xs font-mono px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-300 self-start sm:self-auto">
          Completed: <strong className="text-tactical-cyan">{completedCount}</strong> / {tasks.length}
        </span>
      </div>

      {/* Form Tambah Tugas */}
      <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tambah misi / target latihan baru..."
          className="flex-1 bg-[#090b10] border border-slate-700 focus:border-tactical-cyan focus:outline-none rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500"
        />
        <button
          type="submit"
          className="bg-tactical-accent hover:bg-red-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition cursor-pointer"
        >
          + Add Objective
        </button>
      </form>

      {/* Bar Filter & Bersihkan yang Selesai */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          {[
            { key: "all", label: "All" },
            { key: "active", label: "Active" },
            { key: "completed", label: "Completed" },
          ].map((tab) => {
            const active = filter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                  active
                    ? "bg-tactical-cyan/15 border-tactical-cyan text-tactical-cyan"
                    : "bg-[#090b10] border-slate-800 text-slate-400 hover:text-slate-200"
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
            className="text-xs font-mono text-slate-400 hover:text-tactical-accent transition cursor-pointer"
          >
            Clear Completed ({completedCount})
          </button>
        )}
      </div>

      {/* Daftar Tugas */}
      {filteredTasks.length === 0 ? (
        <p className="text-center text-sm text-slate-500 py-6 border border-dashed border-slate-800 rounded-lg">
          Tidak ada objective pada filter ini.
        </p>
      ) : (
        <ul className="space-y-2.5">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between gap-3 bg-[#090b10]/80 border border-slate-800 hover:border-slate-700 rounded-lg px-4 py-3 transition"
            >
              <button
                type="button"
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-3 text-left flex-1 cursor-pointer"
              >
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center border text-xs font-bold transition ${
                    task.completed
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                      : "border-slate-600 text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span
                  className={`text-sm transition ${
                    task.completed ? "line-through text-slate-500" : "text-slate-200"
                  }`}
                >
                  {task.text}
                </span>
              </button>

              <button
                type="button"
                onClick={() => deleteTask(task.id)}
                className="text-xs font-mono text-slate-400 hover:text-tactical-accent px-2.5 py-1 rounded hover:bg-slate-900 transition cursor-pointer"
              >
                HAPUS
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}