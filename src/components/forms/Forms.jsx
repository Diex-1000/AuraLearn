"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createProfile } from "@/api/apiServices"
import ResponseCard from "@/components/ResponseCard";
import StepperNav from "../forms/StepperNav";
import Step1BasicInfo from "./steps/Step1BasicInfo";
import Step2Education from "./steps/Step2Education";
import Step3JobInfo from "./steps/Step3JobInfo";
import Step4Experience from "./steps/Step4Experience";
import Step5TechSkills from "./steps/Step5TechSkills";
import Step6SoftSkills from "./steps/Step6SoftSkills";
import Step7Learning from "./steps/Step7Learning";


export default function StepperForm() {
  const [step, setStep] = useState(1);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");
  const [selectedCapacitation, setSelectedCapacitation] = useState("");
  const [selectedTimeWeekly, setSelectedTimeWeekly] = useState("");
  const [selectedDeadline, setSelectedDeadline] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    pais: "",
    estado: "",
    ciudad: "",
    areaFormacion: "",
    idiomas: "",
    puesto: "",
    mesesPuesto: "",
    funciones: "",
    requerimientos: "",
    areasMejorar: "",
    experienciasLaborales: "",
    proyectosPrevios: "",
    herramientas: "",
    comunicacion: 3,
    trabajoEquipo: 3,
    resolucionProb: 3,
    adaptabilidad: 3,
    gestionTiempo: 3,
    herramientasDigBas: 3,
    herramientasTrabajo: 3,
    capacidadAnalisis: 3,
    gestionProyecto: 3,
    competenciasDigBas: 3,
    formatos: [],
    certifications: "", /* education */
    certificaciones: "", /* learning method */
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);



  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "range" || type === "number" ? Number(value) : value 
    });
  };

  const totalSteps = 7;
  const nextStep = () => { if (step < totalSteps) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  let interval;
  
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setProgress(0);

  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 90) return prev;
      return prev + Math.random() * 10;
    });
  }, 500);

  try {
    const payload = {
      basic: {
        name: formData.nombre,
        email: formData.correo,
        age: Number(formData.edad),
        gender: [selectedGender],
        country: formData.pais.toLowerCase(),
        state: formData.estado.toLowerCase(),
        city: formData.ciudad.toLowerCase(),
      },
      education: [
        {
          level: selectedEducation || "Universidad",
          field: formData.areaFormacion || "No especificado",
          languages: formData.idiomas || "Español",
          certifications: formData.certifications || "Ninguna"
        }
      ],
      experience: [
        {
          previousJob: formData.experienciasLaborales || "Sin experiencia",
          projects: [
            { role_improved: formData.proyectosPrevios || "N/A" }
          ],
          tools: formData.herramientas || "N/A"
        }
      ],
      softSkills: {
        comunicacionEfectiva: Number(formData.comunicacion) || 3,
        trabajoEnEquipo: Number(formData.trabajoEquipo) || 3,
        resolucionDeProblemas: Number(formData.resolucionProb) || 3,
        adaptabilidad: Number(formData.adaptabilidad) || 3,
        gestionDelTiempo: Number(formData.gestionTiempo) || 3,
      },
      digitalSkills: {
        herramientas_dig_bas: Number(formData.herramientasDigBas) || 3,
        herramientas_trabajo: Number(formData.herramientasTrabajo) || 3,
        capacidad_analisis: Number(formData.capacidadAnalisis) || 3,
        gestion_proyecto: Number(formData.gestionProyecto) || 3,
        compe_dig_bas: Number(formData.competenciasDigBas) || 3,
      },
      jobInformation: {
        actualPosition: formData.puesto || "N/A",
        timeInJob: formData.mesesPuesto || "0",
        functionsJob: formData.funciones
          ? formData.funciones.split(",").map(f => f.trim()).filter(Boolean)
          : ["N/A"],
        technicalReq: formData.requerimientos
          ? formData.requerimientos.split(",").map(r => r.trim()).filter(Boolean)
          : ["N/A"],
        improveAreas: formData.areasMejorar
          ? formData.areasMejorar.split(",").map(a => a.trim()).filter(Boolean)
          : ["N/A"],
      },
      learningMethod: {
        modalidad_preferida: selectedCapacitation || "Online",
        tiempo_disponible: selectedTimeWeekly || "3 a 5 horas",
        metodo_aprendizaje:
          formData.formatos.length > 0
            ? formData.formatos.map(f => f
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase())
            : ["videos"],
        certificaciones: formData.certificaciones
          ? [formData.certificaciones.toLowerCase()]
          : ["no"],
      }
    };

    const res = await createProfile(payload);
    setApiResponse(res.data);
    alert("Perfil enviado con éxito!");
  } catch (error) {
    if (error.response) {
      setApiResponse(error.response.data);
      console.error("Backend validation error:", error.response.data);
      alert("Error: " + JSON.stringify(error.response.data));
    } else {
      setApiResponse({ message: error.message });
      console.error("Error:", error.message);
      alert("Error: " + error.message);
    }
  } finally {
    setLoading(false);
    clearInterval(interval);
  setProgress(100);

  }
};
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />

          <p className="text-lg text-gray-700">
            Analizando tu perfil profesional…
          </p>

          <div className="w-64 h-3 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <span className="text-sm text-gray-600">
            {Math.floor(progress)}%
          </span>
        </div>
      );
    }
    if (apiResponse) {
      return <ResponseCard responseText={apiResponse.message || "No se recibió mensaje del servidor"} />;
    }




  return (
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300">

  <Card className="w-full lg:max-w-3xl bg-slate-300 shadow-lg rounded-lg lg:mt-8 mb-8">
    <StepperNav
      step={step}
      setStep={setStep}
      totalSteps={totalSteps}
    />

        {/* Encabezado del formulario */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {step === 1 && "Datos básicos requeridos"}
            {step === 2 && "Formación académica"}
            {step === 3 && "Información sobre el puesto de trabajo"}
            {step === 4 && "Experiencia profesional"}
            {step === 5 && "Habilidades técnicas"}
            {step === 6 && "Habilidades blandas"}
            {step === 7 && "Capacitación y aprendizaje"}
          </CardTitle>
          <CardDescription>
            Paso {step} de {totalSteps}
          </CardDescription>
        </CardHeader>

        {/* Contenido dinámico */}
        <CardContent className="space-y-4">
          {step === 1 && (
            <Step1BasicInfo
              formData={formData}
              handleChange={handleChange}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          )}

          {step === 2 && (
            <Step2Education
              formData={formData}
              handleChange={handleChange}
              selectedEducation={selectedEducation}
              setSelectedEducation={setSelectedEducation}
            />
          )}

          {step === 3 && (
            <Step3JobInfo
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {step === 4 && (
            <Step4Experience
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {step === 5 && (
            <Step5TechSkills
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {step === 6 && (
            <Step6SoftSkills
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {step === 7 && (
            <Step7Learning
              formData={formData}
              handleChange={handleChange}
              selectedCapacitation={selectedCapacitation}
              setSelectedCapacitation={setSelectedCapacitation}
              selectedTimeWeekly={selectedTimeWeekly}
              setSelectedTimeWeekly={setSelectedTimeWeekly}
              selectedDeadline={selectedDeadline}
              setSelectedDeadline={setSelectedDeadline}
              handleSubmit={handleSubmit}
            />
          )}

          {/* 🔘 Botones navegación */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="px-5 py-2"
            >
              Atrás
            </Button>
            {step < totalSteps && (
              <Button
                onClick={nextStep}
                className="px-5 py-2 bg-slate-800 text-white hover:bg-slate-900"
              >
                Siguiente
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
