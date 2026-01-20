import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Step2Education({
  formData,
  handleChange,
  selectedEducation,
  setSelectedEducation,
}) {
  return (
    <>
      {/* Nivel educativo */}
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
          <DropdownMenuItem onClick={() => setSelectedEducation("Preparatoria")}>
            Preparatoria
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedEducation("Universidad")}>
            Universidad
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedEducation("Posgrado")}>
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
        name="certifications"
        value={formData.certifications}
        onChange={handleChange}
        placeholder="Certificaciones o cursos tomados"
        className="w-full p-3 border rounded-md"
      />
    </>
  );
}
