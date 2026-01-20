import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Step1BasicInfo({
  formData,
  handleChange,
  selectedGender,
  setSelectedGender,
}) {
  return (
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

      {/* Género */}
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
          <DropdownMenuItem onClick={() => setSelectedGender("Otro / Prefiero no decirlo")}>
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
  );
}
