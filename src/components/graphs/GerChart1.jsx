"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { sprint: "S1", alpha: 72, beta: 78, gamma: 68, delta: 75 },
  { sprint: "S2", alpha: 76, beta: 74, gamma: 71, delta: 78 },
  { sprint: "S3", alpha: 74, beta: 79, gamma: 73, delta: 80 },
  { sprint: "S4", alpha: 81, beta: 77, gamma: 76, delta: 83 },
];

export default function GerChart1() {
  return (
    <div className="w-full h-[420px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sprint" />
          <YAxis domain={[60, 100]} />
          <Tooltip />

          {/* Equipo principal */}
          <Area
            type="monotone"
            dataKey="delta"
            name="Equipo Delta"
            stroke="#020617"
            fill="#020617"
            fillOpacity={0.25}
            strokeWidth={3}
          />

          {/* Equipos secundarios */}
          <Area
            type="monotone"
            dataKey="alpha"
            name="Equipo Alpha"
            stroke="#334155"
            fill="#334155"
            fillOpacity={0.15}
          />

          <Area
            type="monotone"
            dataKey="beta"
            name="Equipo Beta"
            stroke="#64748b"
            fill="#64748b"
            fillOpacity={0.12}
          />

          <Area
            type="monotone"
            dataKey="gamma"
            name="Equipo Gamma"
            stroke="#94a3b8"
            fill="#94a3b8"
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
