"use client";

import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Engineering", value: 85 },
  { name: "Sales", value: 78 },
  { name: "Marketing", value: 82 },
  { name: "HR", value: 91 },
];

export default function EmpChart2() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart data={data} barSize={48}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#020617"
            radius={[8, 8, 0, 0]}
          />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}
