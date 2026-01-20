export default function Step3JobInfo({ formData, handleChange }) {
  return (
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
  );
}
