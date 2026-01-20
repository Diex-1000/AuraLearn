export default function Step5TechSkills({ formData, handleChange }) {
  return (
    <>
              <p className="text-gray-900 font-bold">
                Selecciona tu nivel en escala del 1-5 dependiendo la habilidad
              </p>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Manejo de herramientas digitales básicas
                </label>
                <input
                  name="herramientasDigBas"
                  value={formData.herramientasDigBas}
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
                  Uso de herramientas específicas del área de trabajo
                </label>
                <input
                  name="herramientasTrabajo"
                  value={formData.herramientasTrabajo}
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
                  Capacidad de análisis de información
                </label>
                <input
                  name="capacidadAnalisis"
                  value={formData.capacidadAnalisis}
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
                  Gestión de proyectos y tareas
                </label>
                <input
                  name="gestionProyecto"
                  value={formData.gestionProyecto}
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
                  Competencias digitales básicas
                </label>
                <input
                  name="competenciasDigBas"
                  value={formData.competenciasDigBas}
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
