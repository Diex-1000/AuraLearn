"use client";
import EmpChart1 from "../graphs/EmpChart1";
import EmpChart2 from "../graphs/EmpChart2.jsx";


export default function SuperAdminDashboard() {
  return (
    <section className="min-h-screen bg-slate-200 px-6 md:px-16 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Análisis de Empresa
        </h1>
        <p className="text-slate-600 mt-1">
          Información y métricas de toda la organización
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <KpiCard
          title="Total de Empleados"
          value="290"
          footer="+12 este trimestre"
          positive
        />
        <KpiCard
          title="Rendimiento Promedio"
          value="83.8%"
          footer="+4% de mejora"
          positive
        />
        <KpiCard
          title="Finalización de Aprendizaje"
          value="76%"
          footer="En buen camino"
        />
      </div>

      {/* Visualizaciones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
            Distribución de Equipos
            </h3>
            <EmpChart1 />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
            Rendimiento de Departamentos
            </h3>
            <EmpChart2 />
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
