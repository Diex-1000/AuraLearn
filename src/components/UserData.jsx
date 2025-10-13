"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Briefcase,
  GraduationCap,
  Settings2,
  Star,
  BookOpen,
  Edit,
} from "lucide-react";

export default function UserData() {
  const userData = {
    basic: {
      name: "Juan Pérez",
      email: "juanperez@example.com",
      age: 28,
      gender: ["Masculino"],
      country: "México",
      state: "Yucatán",
      city: "Mérida",
    },
    education: [
      {
        level: "Universidad",
        field: "Ingeniería en Sistemas",
        languages: "Español, Inglés",
        certifications: "AWS Certified Cloud Practitioner",
      },
    ],
    experience: [
      {
        previousJob: "Desarrollador Full Stack",
        projects: [{ role_improved: "Implementación de microservicios" }],
        tools: "Node.js, React, MongoDB",
      },
    ],
    softSkills: {
      comunicacionEfectiva: 4,
      trabajoEnEquipo: 5,
      resolucionDeProblemas: 4,
      adaptabilidad: 5,
      gestionDelTiempo: 3,
    },
    digitalSkills: {
      herramientas_dig_bas: 4,
      herramientas_trabajo: 3,
      capacidad_analisis: 5,
      gestion_proyecto: 4,
      compe_dig_bas: 4,
    },
    jobInformation: {
      actualPosition: "Backend Developer",
      timeInJob: "12 meses",
      functionsJob: ["Diseñar APIs", "Mantenimiento de bases de datos"],
      technicalReq: ["Node.js", "Docker", "MongoDB"],
      improveAreas: ["Gestión de proyectos", "Inglés técnico"],
    },
    learningMethod: {
      modalidad_preferida: "Online",
      tiempo_disponible: "3 a 5 horas",
      metodo_aprendizaje: ["videos", "lecturas"],
      certificaciones: ["sí"],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-slate-300 flex flex-col items-center py-12 px-4">
      {/* 🧾 HEADER PERFIL */}
      <div className="w-full max-w-5xl bg-gradient-to-br from-slate-200 to-slate-300 
        rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-10 
        border border-slate-400/40 border-b border-slate-500/40 shadow-inner">

        {/* Izquierda: Avatar y nombre */}
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-semibold 
            text-white bg-gradient-to-br from-slate-600 to-slate-800 shadow-sm">
            JP
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{userData.basic.name}</h1>
            <p className="text-slate-700">{userData.jobInformation.actualPosition}</p>
            <p className="text-slate-600 text-sm">
              {userData.basic.city}, {userData.basic.state}, {userData.basic.country}
            </p>
          </div>
        </div>

        {/* Derecha: Botón editar */}
        <Link href="/forms">
          <Button className="bg-slate-700 text-white hover:bg-slate-600 font-semibold transition 
            flex items-center gap-2 shadow-sm">
            <Edit size={18} /> Editar perfil
          </Button>
        </Link>
      </div>


      {/* GRID PRINCIPAL EN PARES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

        {/* 1️⃣ DATOS BÁSICOS REQUERIDOS */}
        <Card className="bg-slate-200 border border-slate-400/40 shadow-lg shadow-slate-400/30 hover:-translate-y-1 transition-all rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800 font-semibold">
              <User size={18} /> Datos básicos requeridos
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-1">
            <p><strong>Correo:</strong> {userData.basic.email}</p>
            <p><strong>Edad:</strong> {userData.basic.age}</p>
            <p><strong>Género:</strong> {userData.basic.gender}</p>
          </CardContent>
        </Card>

        {/* 2️⃣ FORMACIÓN ACADÉMICA */}
        <Card className="bg-slate-200 border-slate-400/40 shadow-lg shadow-slate-400/30 hover:-translate-y-1 transition-all rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800 font-semibold">
              <GraduationCap size={18} /> Formación académica
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-1">
            <p><strong>Nivel:</strong> {userData.education[0].level}</p>
            <p><strong>Campo:</strong> {userData.education[0].field}</p>
            <p><strong>Idiomas:</strong> {userData.education[0].languages}</p>
            <p><strong>Certificación:</strong> {userData.education[0].certifications}</p>
          </CardContent>
        </Card>

        {/* 3️⃣ INFORMACIÓN DEL PUESTO DE TRABAJO */}
        <Card className="bg-slate-200 border border-slate-400/40 shadow-lg shadow-slate-400/30 hover:-translate-y-1 transition-all rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800 font-semibold">
              <Briefcase size={18} /> Información sobre el puesto de trabajo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-1">
            <p><strong>Puesto actual:</strong> {userData.jobInformation.actualPosition}</p>
            <p><strong>Tiempo en el puesto:</strong> {userData.jobInformation.timeInJob}</p>
            <p><strong>Funciones:</strong> {userData.jobInformation.functionsJob.join(", ")}</p>
            <p><strong>Requisitos técnicos:</strong> {userData.jobInformation.technicalReq.join(", ")}</p>
            <p><strong>Áreas a mejorar:</strong> {userData.jobInformation.improveAreas.join(", ")}</p>
          </CardContent>
        </Card>

        {/* 4️⃣ EXPERIENCIA PROFESIONAL */}
        <Card className="bg-slate-200 border border-slate-400/40 shadow-lg shadow-slate-400/30 hover:-translate-y-1 transition-all rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800 font-semibold">
              <Briefcase size={18} /> Experiencia profesional
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-1">
            <p><strong>Puesto anterior:</strong> {userData.experience[0].previousJob}</p>
            <p><strong>Proyecto destacado:</strong> {userData.experience[0].projects[0].role_improved}</p>
            <p><strong>Herramientas:</strong> {userData.experience[0].tools}</p>
          </CardContent>
        </Card>

        {/* 5️⃣ HABILIDADES TÉCNICAS */}
        <Card className="bg-slate-200 border border-slate-400/40 shadow-lg shadow-slate-400/30 hover:-translate-y-1 transition-all rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800 font-semibold">
              <Settings2 size={18} /> Habilidades técnicas
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-1">
            {Object.entries(userData.digitalSkills).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}/5
              </p>
            ))}
          </CardContent>
        </Card>

        {/* 6️⃣ HABILIDADES BLANDAS */}
        <Card className="bg-slate-200 border border-slate-400/40 shadow-lg shadow-slate-400/30 hover:-translate-y-1 transition-all rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800 font-semibold">
              <Star size={18} /> Habilidades blandas
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-1">
            {Object.entries(userData.softSkills).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}/5
              </p>
            ))}
          </CardContent>
        </Card>

        {/* 7️⃣ CAPACITACIÓN Y APRENDIZAJE */}
        <div className="md:col-span-2 flex justify-center">
          <Card className="w-full md:w-2/3 bg-slate-200 border border-slate-400/40 shadow-lg shadow-slate-400/30 hover:-translate-y-1 transition-all rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800 font-semibold justify-center">
                <BookOpen size={18} /> Capacitación y aprendizaje
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-1 text-center">
              <p><strong>Modalidad preferida:</strong> {userData.learningMethod.modalidad_preferida}</p>
              <p><strong>Tiempo disponible:</strong> {userData.learningMethod.tiempo_disponible}</p>
              <p><strong>Métodos:</strong> {userData.learningMethod.metodo_aprendizaje.join(", ")}</p>
              <p><strong>¿Desea certificaciones?:</strong> {userData.learningMethod.certificaciones}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
