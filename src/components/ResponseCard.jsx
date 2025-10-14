"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function AIResponseCard({ responseText }) {
  const [displayedText, setDisplayedText] = useState("");

  // efecto tipo IA (letra por letra)
  useEffect(() => {
    if (!responseText) return; // si no hay data, no hace nada
    setDisplayedText(""); // reinicia el texto cuando cambia la respuesta

    let index = 0;
    const speed = 8; // velocidad en ms entre letras
    const interval = setInterval(() => {
      setDisplayedText(responseText.slice(0, index));
      index++;
      if (index > responseText.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [responseText]);

  // Si no hay aún datos (antes de la API)
  if (!responseText) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Esperando respuesta del servidor...
      </div>
    );
  }

  // separa líneas para formatear visualmente
  const formatted = displayedText.split("\n").map((line, idx) => {
    if (line.trim().startsWith("Etapa")) {
      return (
        <h3
          key={idx}
          className="text-lg font-semibold text-slate-800 mt-6 mb-2 flex items-center gap-2"
        >
          <Sparkles size={18} className="text-blue-500 animate-pulse" />
          {line.trim()}
        </h3>
      );
    } else if (line.trim().startsWith("-")) {
      return (
        <li key={idx} className="ml-6 text-slate-700 list-disc">
          {line.replace(/^-/, "").trim()}
        </li>
      );
    } else if (/^\d+\./.test(line.trim())) {
      return (
        <li key={idx} className="ml-6 text-slate-700 list-decimal">
          {line.replace(/^\d+\./, "").trim()}
        </li>
      );
    } else if (line.trim() === "") {
      return <br key={idx} />;
    } else {
      return (
        <p key={idx} className="text-slate-700 leading-relaxed">
          {line.trim()}
        </p>
      );
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-slate-300 flex flex-col items-center py-12 px-4">
      <Card className="w-full max-w-5xl bg-slate-200 border border-slate-400/40 shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-slate-800 flex items-center gap-2">
            <Sparkles size={20} className="text-blue-500 animate-pulse" />
            Resultados Generados
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-700 space-y-2 prose prose-slate max-w-none">
          {formatted}
          {/* indicador de escritura */}
          {displayedText.length < responseText.length && (
            <span className="inline-block w-2 h-4 bg-slate-500 animate-pulse ml-1 rounded"></span>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
