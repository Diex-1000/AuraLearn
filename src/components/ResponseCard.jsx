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

  // separa líneas y aplica estilos tipo markdown
  const formatted = displayedText.split("\n").map((line, idx) => {
    const trimmed = line.trim();
    // Título principal (#)
    if (/^#\s+/.test(trimmed)) {
      return (
        <h1 key={idx} className="text-3xl font-bold text-blue-900 mt-8 mb-4">
          {trimmed.replace(/^#\s+/, "")}
        </h1>
      );
    }
    // Subtítulo (##)
    if (/^##\s+/.test(trimmed)) {
      return (
        <h2 key={idx} className="text-2xl font-semibold text-blue-800 mt-6 mb-3">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    // Sub-subtítulo (###)
    if (/^###\s+/.test(trimmed)) {
      return (
        <h3 key={idx} className="text-xl font-semibold text-blue-700 mt-4 mb-2">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }
    // Listas con guión
    if (/^[-*]\s+/.test(trimmed)) {
      return (
        <li key={idx} className="ml-8 text-base text-slate-700 list-disc">
          {trimmed.replace(/^[-*]\s+/, "")}
        </li>
      );
    }
    // Listas numeradas
    if (/^\d+\.\s+/.test(trimmed)) {
      return (
        <li key={idx} className="ml-8 text-base text-slate-700 list-decimal">
          {trimmed.replace(/^\d+\.\s+/, "")}
        </li>
      );
    }
    // Enlaces markdown [texto](url)
    if (/\[(.+?)\]\((.+?)\)/.test(trimmed)) {
      // Puede haber varios links en una línea
      const linkRegex = /\[(.+?)\]\((.+?)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;
      while ((match = linkRegex.exec(trimmed)) !== null) {
        // Texto antes del link
        if (match.index > lastIndex) {
          parts.push(trimmed.slice(lastIndex, match.index));
        }
        // El link
        parts.push(
          <a key={match[2]} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900 transition">
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      // Texto después del último link
      if (lastIndex < trimmed.length) {
        parts.push(trimmed.slice(lastIndex));
      }
      return (
        <p key={idx} className="text-sm text-slate-700 leading-relaxed">
          {parts}
        </p>
      );
    }
    // Negritas (**texto**)
    if (/\*\*(.+?)\*\*/.test(trimmed)) {
      // Puede haber varias negritas en una línea
      const boldRegex = /\*\*(.+?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;
      while ((match = boldRegex.exec(trimmed)) !== null) {
        // Texto antes de la negrita
        if (match.index > lastIndex) {
          parts.push(trimmed.slice(lastIndex, match.index));
        }
        // El texto en negrita
        parts.push(
          <span key={match[1] + idx + lastIndex} className="font-bold uppercase text-base text-slate-900">
            {match[1]}
          </span>
        );
        lastIndex = match.index + match[0].length;
      }
      // Texto después de la última negrita
      if (lastIndex < trimmed.length) {
        parts.push(trimmed.slice(lastIndex));
      }
      return (
        <p key={idx} className="text-base text-slate-800">
          {parts}
        </p>
      );
    }
    // Línea vacía
    if (trimmed === "") {
      return <br key={idx} />;
    }
    // Contenido normal
    return (
      <p key={idx} className="text-sm text-slate-700 leading-relaxed">
        {trimmed}
      </p>
    );
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
