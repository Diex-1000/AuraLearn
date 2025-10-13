"use client";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6ebf4] to-[#dce3f0] px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
        <div className="text-center mb-6">
          <h3 className="text-gray-500 text-sm mb-1">Bienvenido</h3>
          <h2 className="text-2xl font-bold text-gray-800">Crear Cuenta</h2>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="usuario" className="block text-gray-700 font-medium">
              Usuario
            </label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bfc8dc]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bfc8dc]"
              required
            />
          </div>

          <div className="text-center">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              ¿Ya tienes cuenta?{" "}
              <span className="font-medium text-gray-800 hover:underline">
                Iniciar sesión 
              </span>
            </Link>
          </div>

          <Link href="/perfil">
            <button
              type="button"
              className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
            >
              Crear
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
