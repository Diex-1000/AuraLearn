"use client";
import SUChart1 from "../graphs/SUChart1";
import SUChart2 from "../graphs/SUChart2";


export default function SuperAdminDashboard() {
  return (
    <section className="min-h-screen bg-slate-200 px-6 md:px-16 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Resumen del Sistema
        </h1>
        <p className="text-slate-600 mt-1">
          Analisis y métricas de toda la plataforma
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <KpiCard
          title="Total de Empresas"
          value="59"
          footer="+12 este mes"
          positive
        />
        <KpiCard
          title="Usuarios Activos"
          value="384"
          footer="+9% de crecimiento"
          positive
        />
        <KpiCard
          title="Engagement Promedio"
          value="76%"
          footer="9% más que el mes pasado"
        />
      </div>

      {/* Visualizaciones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
            Distribución de Equipos
            </h3>
            <SUChart1/>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
            Rendimiento de Departamentos
            </h3>
            <SUChart2/>
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
