export default function Step6SoftSkills({ formData, handleChange }) {
  return (
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
  );
}
