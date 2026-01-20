export default function Step4Experience({ formData, handleChange }) {
  return (
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
  );
}
