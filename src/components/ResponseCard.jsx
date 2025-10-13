"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function AIResponseCard() {
  const fullText = `
Etapa 1: Análisis general del perfil
El candidato Juan Pérez es un profesional con formación en Ingeniería en Sistemas y experiencia como Backend Developer. Presenta dominio de Node.js, React y MongoDB, además de certificación AWS Certified Cloud Practitioner. Su perfil muestra una combinación sólida entre habilidades técnicas y blandas.

Datos generales:
- Nombre: Juan Pérez
- Correo: juanperez@example.com
- Edad: 28 años
- Ciudad: Mérida, Yucatán, México

Información académica:
- Nivel: Universidad
- Campo: Ingeniería en Sistemas
- Idiomas: Español, Inglés
- Certificación: AWS Certified Cloud Practitioner

Experiencia laboral:
- Puesto actual: Backend Developer
- Tiempo en el puesto: 12 meses
- Funciones: Diseño de APIs, mantenimiento de bases de datos, optimización de consultas y colaboración con equipos de frontend.
- Herramientas: Node.js, React, MongoDB, Docker

Resumen:
Juan demuestra un perfil técnico fuerte con orientación a la optimización de procesos y experiencia práctica en desarrollo full stack. Posee una actitud colaborativa y adaptabilidad ante nuevos desafíos tecnológicos.

Etapa 2: Competencias, habilidades y conocimientos
Competencias:
- Desarrollo backend con arquitectura escalable.
- Trabajo colaborativo en entornos ágiles.
- Implementación de microservicios.

Habilidades técnicas:
- Node.js (nivel avanzado)
- React (nivel intermedio)
- MongoDB (nivel avanzado)
- Docker (nivel intermedio)
- Gestión de proyectos (nivel intermedio)

Habilidades blandas:
- Comunicación efectiva (4/5)
- Trabajo en equipo (5/5)
- Resolución de problemas (4/5)
- Adaptabilidad (5/5)
- Gestión del tiempo (3/5)

Etapa 3: Puestos recomendados
1. Backend Engineer
2. Full Stack Developer
3. Cloud Solutions Developer

Etapa 4: Áreas de mejora
- Inglés técnico avanzado.
- Gestión de proyectos ágiles.
- Profundización en DevOps y CI/CD.

Etapa 5: Plan de capacitación (3 meses)
- Mes 1: Curso de inglés técnico (plataformas como Platzi o Udemy).
- Mes 2: Introducción a DevOps y Docker avanzado.
- Mes 3: Certificación en metodologías ágiles (Scrum Fundamentals).

Etapa 6: Cursos sugeridos
- "Docker & Kubernetes: The Practical Guide" – Udemy.
- "Scrum Fundamentals Certified" – SCRUMstudy.
- "Inglés técnico para profesionales IT" – Platzi.

Etapa 7: Resumen final
Juan Pérez posee una base sólida para continuar su crecimiento hacia posiciones de desarrollo avanzado y liderazgo técnico. Su enfoque de aprendizaje continuo y experiencia práctica lo posicionan favorablemente para roles que combinen desarrollo y arquitectura de software.
`;

  const [displayedText, setDisplayedText] = useState("");

  // efecto tipo IA: muestra letra por letra
  useEffect(() => {
    let index = 0;
    const speed = 8; // ms entre letras (ajusta: menor = más rápido)
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  // separa el texto ya mostrado en líneas renderizables
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
          {/* Indicador de "escribiendo..." */}
          {displayedText.length < fullText.length && (
            <span className="inline-block w-2 h-4 bg-slate-500 animate-pulse ml-1 rounded"></span>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
