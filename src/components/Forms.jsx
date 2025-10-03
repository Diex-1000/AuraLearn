"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    certificaciones: "",
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
    formatos: [],
    certificaciones: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const totalSteps = 7;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300">

  <Card className="w-full lg:max-w-3xl bg-slate-300 shadow-lg rounded-lg lg:mt-8 mb-8">
        {/* 🔵 Indicador de pasos */}
        <div className="flex justify-between items-center px-8 pt-6">
          {[1, 2, 3, 4, 5, 6, 7].map((s) => (
            <div key={s} className="flex-1 flex items-center">
              {/* círculo */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors
                  ${
                    s === step
                      ? "bg-gray-800 text-white"
                      : s < step
                      ? "bg-gray-800 text-white"
                      : "bg-gray-400 text-white"
                  }`}
              >
                {s}
              </div>
              {/* conector */}
              {s < totalSteps && (
                <div
                  className={`flex-1 h-1 mx-2 rounded transition-colors 
                    ${s < step ? "bg-blue-900" : "bg-gray-400"}`}
                />
              )}
            </div>
          ))}
        </div>

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
          {/* Paso 1 */}
          {step === 1 && (
            <>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                placeholder="Edad"
                className="w-full p-3 border rounded-md"
              />

              {/* Dropdown de Género */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-between bg-slate-300 ${
                      selectedGender ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {selectedGender || "Selecciona tu género"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
                  <DropdownMenuItem onClick={() => setSelectedGender("Masculino")}>
                    Masculino
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedGender("Femenino")}>
                    Femenino
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedGender("Otro / Prefiero no decirlo")}
                  >
                    Otro / Prefiero no decirlo
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <input
                type="text"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                placeholder="País"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                placeholder="Estado"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                placeholder="Ciudad"
                className="w-full p-3 border rounded-md"
              />
            </>
          )}

          {/* Paso 2 */}
          {step === 2 && (
            <>
              {/* Dropdown de Educacion */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-between bg-slate-300 ${
                      selectedEducation ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {selectedEducation || "Selecciona tu máximo nivel de estudio"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
                  <DropdownMenuItem onClick={() => setSelectedEducation("Primaria")}>
                    Primaria
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedEducation("Secundaria")}>
                    Secundaria
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedEducation("Preparatoria")}
                  >
                    Preparatoria
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedEducation("Universidad")}
                  >
                    Universidad
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedEducation("Posgrado")}
                  >
                    Posgrado
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <input
                type="text"
                name="areaFormacion"
                value={formData.areaFormacion}
                onChange={handleChange}
                placeholder="Área de formación principal"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                name="idiomas"
                value={formData.idiomas}
                onChange={handleChange}
                placeholder="Idiomas"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="certificaciones"
                value={formData.certificaciones}
                onChange={handleChange}
                placeholder="Certificaciones o cursos tomados"
                className="w-full p-3 border rounded-md"
              />
            </>
          )}

          {/* Paso 3 */}
          {step === 3 && (
            <>
              <input
                type="text"
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
                placeholder="Puesto actual"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="number"
                name="mesesPuesto"
                value={formData.mesesPuesto}
                onChange={handleChange}
                placeholder="Cantidad de meses en el puesto de trabajo"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="funciones"
                value={formData.funciones}
                onChange={handleChange}
                placeholder="Principales funciones"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="requerimientos"
                value={formData.requerimientos}
                onChange={handleChange}
                placeholder="Requerimientos técnicos del puesto"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="areasMejorar"
                value={formData.areasMejorar}
                onChange={handleChange}
                placeholder="Principales áreas a mejorar"
                className="w-full p-3 border rounded-md"
              />
              
            </>
          )}

          {/* Paso 4 */}
          {step === 4 && (
            <>
              <textarea
                name="experienciasLaborales"
                value={formData.experienciasLaborales}
                onChange={handleChange}
                placeholder="Experiencias laborales previas"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="proyectosPrevios"
                value={formData.proyectosPrevios}
                onChange={handleChange}
                placeholder="Proyectos previos y su rol en el proyecto"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="herramientas"
                value={formData.herramientas}
                onChange={handleChange}
                placeholder="Herramientas utilizadas"
                className="w-full p-3 border rounded-md"
              />
            </>
          )}

          {/* Paso 5 */}
          {step === 5 && (
            <>
              <p className="text-gray-900 font-bold">
                Selecciona tu nivel en escala del 1-5 dependiendo la habilidad
              </p>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Manejo de herramientas digitales básicas
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Uso de herramientas específicas del área de trabajo
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Capacidad de análisis de información
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Gestión de proyectos y tareas
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Competencias digitales básicas
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              
            </>
          )}

          {/* Paso 6 */}
          {step === 6 && (
            <>
              <p className="text-gray-900 font-bold">
                Selecciona tu nivel en escala del 1-5 dependiendo la habilidad
              </p>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Comunicación efectiva
                </label>
                <input
                  name="comunicacion"
                  value={formData.comunicacion}
                  onChange={handleChange}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Trabajo en equipo
                </label>
                <input
                  name="trabajoEquipo"
                  value={formData.trabajoEquipo}
                  onChange={handleChange}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Resolución de problemas
                </label>
                <input
                  name="resolucionProb"
                  value={formData.resolucionProb}
                  onChange={handleChange}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Adaptabilidad
                </label>
                <input
                  name="adaptabilidad"
                  value={formData.adaptabilidad}
                  onChange={handleChange}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Gestión del tiempo
                </label>
                <input
                  name="gestionTiempo"
                  value={formData.gestionTiempo}
                  onChange={handleChange}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full accent-gray-800"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              


            </>
          )}

          {/* Paso 7 */}
          {step === 7 && (
            <>
              {/* Dropdown de Capacitacion */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-between bg-slate-300 ${
                      selectedCapacitation ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {selectedCapacitation || "Selecciona tu modalidad de capacitación preferida"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
                  <DropdownMenuItem onClick={() => setSelectedCapacitation("Online")}>
                    Online
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedCapacitation("Presencial")}>
                    Presencial
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedCapacitation("Híbrido")}
                  >
                    Híbrido
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Dropdown Tiempo de Capacitacion */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-between bg-slate-300 ${
                      selectedTimeWeekly ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {selectedTimeWeekly || "Selecciona tu tiempo disponible semanal para capacitación"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
                  <DropdownMenuItem onClick={() => setSelectedTimeWeekly("Menos de 3 horas")}>
                    Menos de 3 horas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedTimeWeekly("3 a 5 horas")}>
                    3 a 5 horas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedTimeWeekly("6 a 10 horas")}
                  >
                    6 a 10 horas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedTimeWeekly("11 a 15 horas")}>
                    11 a 15 horas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedTimeWeekly("Más de 15 horas")}
                  >
                    Más de 15 horas
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferencia de formato de aprendizaje
                </label>
                <div className="flex space-x-4">
                  {["Videos", "Lecturas", "Talleres", "Mentoría"].map((opcion) => (
                    <label key={opcion} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={opcion}
                        checked={formData.formatos.includes(opcion)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              formatos: [...formData.formatos, opcion],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              formatos: formData.formatos.filter((f) => f !== opcion),
                            });
                          }
                        }}
                      />
                      <span>{opcion}</span>
                    </label>
                  ))}
                </div>
              </div>


              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  ¿Interés en certificaciones?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="certificaciones"
                      value="si"
                      checked={formData.certificaciones === "si"}
                      onChange={handleChange}
                    />
                    <span>Sí</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="certificaciones"
                      value="no"
                      checked={formData.certificaciones === "no"}
                      onChange={handleChange}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Dropdown Deadline */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-between bg-slate-300 ${
                      selectedDeadline ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {selectedDeadline || "Selecciona el tiempo deseado para terminar la capacitación"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
                  <DropdownMenuItem onClick={() => setSelectedDeadline("Menos de 1 mes")}>
                    Menos de 1 mes
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedDeadline("1 a 3 meses")}>
                    1 a 3 meses
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedDeadline("4 a 6 meses")}
                  >
                    4 a 6 meses
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedDeadline("7 a 12 meses")}>
                    7 a 12 meses
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedDeadline("Más de 12 meses")}
                  >
                    Más de 12 meses
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/home" className="block w-full mt-4">
                <Button className="w-full bg-blue-900 hover:bg-blue-950 text-white">
                  Confirmar y Enviar
                </Button>
              </Link>
            </>
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
