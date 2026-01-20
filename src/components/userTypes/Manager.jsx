"use client";

import ManChart1 from "../graphs/ManChart1";

export default function GerenteDashboard() {
  return (
    <section className="min-h-screen bg-slate-200 px-6 md:px-16 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Gestión de Equipo
        </h1>
        <p className="text-slate-600 mt-1">
          Monitorea y apoya el desarrollo de tu equipo
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <KpiCard
          title="Tamaño del Equipo"
          value="8"
          footer="Equipos activos"
        />
        <KpiCard
          title="Miembros del Equipo"
          value="64"
          footer="Colaboradores asignados"
        />
        <KpiCard
          title="Rendimiento Promedio"
          value="81%"
          footer="+3% vs periodo anterior"
          positive
        />
        <KpiCard
          title="Objetivos Activos"
          value="127"
          footer="En seguimiento"
        />
      </div>

      {/* Visualización principal */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Miembros del Equipo
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Desempeño y progreso individual
          </p>
          <ManChart1 />
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTES ================= */

function KpiCard({ title, value, footer, positive }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <p className="text-sm text-slate-600">{title}</p>
      <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
      <p
        className={`text-sm mt-2 ${
          positive ? "text-green-600" : "text-slate-500"
        }`}
      >
        {footer}
      </p>
    </div>
  );
}
