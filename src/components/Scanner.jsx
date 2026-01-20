"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UploadCloud, FileCheck } from "lucide-react";

export default function ScanCV() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 px-4">
      <Card className="w-full max-w-xl p-8 bg-slate-200 shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">
          Escanea tu currículum
        </h1>

        <p className="text-slate-700 text-center mb-6">
          Sube tu CV en formato PDF. Analizaremos la información relevante para
          prellenar tu perfil.
        </p>

        {!uploaded ? (
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-400 rounded-xl p-10 cursor-pointer hover:bg-slate-300 transition">
            <UploadCloud size={40} className="text-slate-700 mb-3" />
            <span className="text-slate-700 font-medium">
              Haz clic para subir tu PDF
            </span>
            <span className="text-sm text-slate-500 mt-1">
              Tamaño máximo recomendado: 5MB
            </span>
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={() => setUploaded(true)}
            />
          </label>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <FileCheck size={40} className="text-green-700" />
            <p className="text-slate-800 font-medium">
              CV cargado correctamente
            </p>

            <Link href="/forms" className="w-full">
              <Button className="w-full bg-blue-900 hover:bg-blue-950">
                Continuar al formulario
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
}
