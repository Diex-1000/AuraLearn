"use client";

export default function FormHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 border-b border-slate-300">
      <div className="max-w-4xl mx-auto text-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Completa tu Perfil Profesional
        </h1>
        <p className="text-slate-700 mt-3 text-lg">
          Responde las siguientes secciones paso a paso para que{" "}
          <span className="font-semibold text-blue-900">AuraLearn</span> pueda generar 
          un plan de formación personalizado de acuerdo a tu experiencia y metas profesionales.
        </p>
      </div>
    </div>
  );
}
