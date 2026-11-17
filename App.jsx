import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Tailwind Berhasil Jalan! 🚀
      </h1>
      <p className="text-slate-300">
        Sekarang proyek React-mu sudah siap didesain pakai Tailwind CSS.
      </p>
    </div>
  )
}

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Halo, React Berhasil Jalan! 🚀</h1>
      <p>Proyek web pertamamu sudah siap dikembangkan.</p>
      
      <div style={{ margin: '20px' }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App