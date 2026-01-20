"use client";

import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Engineering", value: 42 },
  { name: "Sales", value: 28 },
  { name: "Marketing", value: 18 },
  { name: "HR", value: 12 },
];

const COLORS = ["#020617", "#334155", "#64748b", "#94a3b8"];

export default function EmpChart1() {
  return (
    <div className="flex items-center justify-center gap-6 h-64">
      {/* Gráfico */}
      <div className="w-48 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <RePieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </RePieChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda */}
      <div className="flex flex-col gap-3 text-sm text-slate-700">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className="whitespace-nowrap">{item.name}</span>
            <span className="text-slate-500">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
