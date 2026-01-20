"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Edit3 } from "lucide-react";

export default function FormsEntry() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 px-4">
      <Card className="w-full max-w-3xl p-10 bg-slate-200 shadow-xl rounded-xl">
        <h1 className="text-3xl font-bold text-slate-900 text-center mb-4">
          Completa tu perfil profesional
        </h1>

        <p className="text-slate-700 text-center mb-10">
          Elige cómo deseas proporcionar tu información para que AuraLearn
          genere tu plan de desarrollo profesional.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Opción Scan CV */}
          <Link href="/scanner">
            <div className="group cursor-pointer h-full border border-slate-300 rounded-xl p-6 bg-slate-100 hover:bg-slate-200 transition shadow-sm">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 text-white mb-4">
                <FileText size={26} />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Escanear CV (PDF)
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                Sube tu currículum y autocompletaremos tu perfil. Luego podrás
                revisar y ajustar la información.
              </p>
              <Button className="w-full bg-slate-800 hover:bg-slate-900">
                Subir CV
              </Button>
            </div>
          </Link>

          {/* Opción Manual */}
          <Link href="/forms">
            <div className="group cursor-pointer h-full border border-slate-300 rounded-xl p-6 bg-slate-100 hover:bg-slate-200 transition shadow-sm">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900 text-white mb-4">
                <Edit3 size={26} />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Llenar manualmente
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                Completa el formulario paso a paso proporcionando tu información
                profesional.
              </p>
              <Button className="w-full bg-blue-900 hover:bg-blue-950">
                Ir al formulario
              </Button>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}
