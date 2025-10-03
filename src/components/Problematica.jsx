"use client";

import { ClipboardCheck, BarChart3, GraduationCap, TrendingUp } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="px-8 md:px-16 py-20 bg-slate-200">
      <div className="flex flex-col md:flex-row items-start justify-center gap-20">
        {/* Texto izquierda */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            El problema del desarrollo profesional
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Los colaboradores a menudo desean avanzar en su carrera, pero no
            cuentan con una guía clara sobre qué habilidades desarrollar ni qué
            cursos priorizar.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Por otro lado, los departamentos de RRHH enfrentan grandes retos al
            crear planes de capacitación alineados con las necesidades reales del
            talento y los objetivos estratégicos de la empresa.
          </p>
        </div>

        {/* Solución derecha */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            ¿Cómo resuelve <span className="text-blue-900">AuraLearn</span> este reto?
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="w-5 h-5 text-blue-900" />
              <span>Diagnóstico automatizado de necesidades de capacitación</span>
            </div>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-blue-900" />
              <span>Comparación entre perfil actual y aspiracional</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-900" />
              <span>Planes de formación personalizados con IA</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-blue-900" />
              <span>Seguimiento del progreso y recomendaciones laborales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
