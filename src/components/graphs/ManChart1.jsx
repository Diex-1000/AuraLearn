"use client";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Desarrollador Senior",
    performance: 92,
    learning: 85,
  },
  {
    name: "Jordan Lee",
    role: "Desarrollador",
    performance: 78,
    learning: 92,
  },
  {
    name: "Sam Parker",
    role: "Desarrollador Junior",
    performance: 85,
    learning: 88,
  },
  {
    name: "Casey Morgan",
    role: "Desarrollador",
    performance: 88,
    learning: 75,
  },
];

export default function ManChart1() {
  return (
    <div className="w-full h-[420px] overflow-y-auto pr-2 space-y-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-slate-50 rounded-xl p-5 shadow-sm"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {member.name}
              </p>
              <p className="text-xs text-slate-500">{member.role}</p>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500">Rendimiento</p>
              <p className="text-sm font-bold text-slate-900">
                {member.performance}%
              </p>
            </div>
          </div>

          {/* Progreso de Aprendizaje */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-slate-500">
                Progreso de Aprendizaje
              </span>
              <span className="text-xs font-medium text-slate-700">
                {member.learning}%
              </span>
            </div>

            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-700"
                style={{ width: `${member.learning}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
