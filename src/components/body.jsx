import React from 'react';
import Card from './card';

export default function Body() {
  const agents = [
    {
      role: 'Duelist',
      name: 'VEX',
      description: 'Spesialis serangan cepat garis depan dengan mobilitas tinggi untuk memecah pertahanan lawan.',
      abilities: 'Dash Strike • Flash Grenade • Overdrive'
    },
    {
      role: 'Recon',
      name: 'CIPHER',
      description: 'Ahli pengintaian taktis yang melacak pergerakan musuh di balik dinding sebelum eksekusi.',
      abilities: 'Sonar Dart • Recon Drone • Neural Scan'
    },
    {
      role: 'Sentinel',
      name: 'BASTION',
      description: 'Penjaga area pertahanan yang mengunci jalur masuk dengan jebakan dan perisai energi.',
      abilities: 'Laser Tripwire • Nano Barrier • Lockdown'
    }
  ];

  return (
    <section id="agents" className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-2">
          // TACTICAL ROSTER
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          PILIH KELAS AGENT KAMU
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <Card
            key={index}
            role={agent.role}
            name={agent.name}
            description={agent.description}
            abilities={agent.abilities}
          />
        ))}
      </div>
    </section>
  );
}