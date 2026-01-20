"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Step7Learning({
  formData,
  handleChange,
  selectedCapacitation,
  setSelectedCapacitation,
  selectedTimeWeekly,
  setSelectedTimeWeekly,
  selectedDeadline,
  setSelectedDeadline,
  handleSubmit,
}) {
  return (
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
            {selectedCapacitation ||
              "Selecciona tu modalidad de capacitación preferida"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
          <DropdownMenuItem onClick={() => setSelectedCapacitation("Online")}>
            Online
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedCapacitation("Presencial")}>
            Presencial
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedCapacitation("Híbrido")}>
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
            {selectedTimeWeekly ||
              "Selecciona tu tiempo disponible semanal para capacitación"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
          <DropdownMenuItem onClick={() => setSelectedTimeWeekly("Menos de 3 horas")}>
            Menos de 3 horas
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedTimeWeekly("3 a 5 horas")}>
            3 a 5 horas
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedTimeWeekly("6 a 10 horas")}>
            6 a 10 horas
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedTimeWeekly("11 a 15 horas")}>
            11 a 15 horas
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedTimeWeekly("Más de 15 horas")}>
            Más de 15 horas
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Formatos de aprendizaje */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Preferencia de formato de aprendizaje
        </label>
        <div className="flex space-x-4">
          {["Videos", "Lecturas", "Talleres", "Mentoría"].map((opcion) => (
            <label key={opcion} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.formatos.includes(opcion)}
                onChange={() =>
                  handleChange({
                    target: {
                      name: "formatos",
                      value: formData.formatos.includes(opcion)
                        ? formData.formatos.filter((f) => f !== opcion)
                        : [...formData.formatos, opcion],
                    },
                  })
                }
              />
              <span>{opcion}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Certificaciones */}
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
            {selectedDeadline ||
              "Selecciona el tiempo deseado para terminar la capacitación"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-slate-300 text-gray-900">
          <DropdownMenuItem onClick={() => setSelectedDeadline("Menos de 1 mes")}>
            Menos de 1 mes
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedDeadline("1 a 3 meses")}>
            1 a 3 meses
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedDeadline("4 a 6 meses")}>
            4 a 6 meses
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedDeadline("7 a 12 meses")}>
            7 a 12 meses
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedDeadline("Más de 12 meses")}>
            Más de 12 meses
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/home" className="block w-full mt-4">
        <Button
          onClick={handleSubmit}
          className="w-full bg-blue-900 hover:bg-blue-950 text-white"
        >
          Confirmar y Enviar
        </Button>
      </Link>
    </>
  );
}
