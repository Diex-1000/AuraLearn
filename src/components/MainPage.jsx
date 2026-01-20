"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ClipboardCheck, BarChart, GraduationCap, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200">
      {/* Texto principal */}
      <div className="max-w-2xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Revoluciona tu desarrollo profesional con{" "}
          <span className="text-blue-900">AuraLearn</span>
        </h1>
        <p className="text-lg text-slate-700">
          Una plataforma impulsada por <strong>Inteligencia Artificial</strong>{" "}
          que diagnostica tus necesidades de capacitación, compara tu perfil
          actual con tus aspiraciones y genera un{" "}
          <strong>plan de formación personalizado</strong>. Empodera a los
          colaboradores y ayuda a las empresas a crecer de manera estratégica.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link href="userselect">
            <Button className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white px-8 py-4 rounded-lg text-xl font-semibold shadow-lg">
              Comenzar ahora
            </Button>
          </Link>
        </div>
      </div>

      {/* Imagen / Preview lateral */}
      <div className="mt-10 md:mt-0 md:ml-10 w-full md:w-1/2 flex justify-center">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Plan de formación generado
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg">
              <ClipboardCheck className="w-5 h-5 text-blue-900" />
              <span>Diagnóstico de Capacitación (DNC)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg">
              <BarChart className="w-5 h-5 text-blue-900" />
              <span>Comparación de perfil actual y aspiracional</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg">
              <GraduationCap className="w-5 h-5 text-blue-900" />
              <span>Recomendación de cursos y certificaciones</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg">
              <Target className="w-5 h-5 text-blue-900" />
              <span>Plan de acción para crecimiento profesional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
