"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Tech Corp",
    actual: 240,
    previous: 190,
  },
  {
    name: "Design Inc",
    actual: 180,
    previous: 160,
  },
  {
    name: "Startup Lab",
    actual: 90,
    previous: 80,
  },
  {
    name: "Consulting Group",
    actual: 320,
    previous: 280,
  },
];

export default function SUChart1() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={6}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="actual"
            fill="#020617"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="previous"
            fill="#94a3b8"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
