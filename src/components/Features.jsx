"use client";

import { GraduationCap, Briefcase, LineChart, Brain } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-10 h-10 text-blue-900" />,
    title: "Diagnóstico Inteligente",
    description:
      "Identifica tus fortalezas y brechas de capacitación con IA avanzada.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-900" />,
    title: "Planes Personalizados",
    description:
      "Recibe un plan de formación adaptado a tu perfil y aspiraciones.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-900" />,
    title: "Seguimiento de Progreso",
    description:
      "Visualiza tu avance hacia el puesto deseado con métricas claras.",
  },
  {
    icon: <Brain className="w-10 h-10 text-blue-900" />,
    title: "Recomendaciones Laborales",
    description:
      "Accede a oportunidades alineadas con tu perfil fortalecido.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
