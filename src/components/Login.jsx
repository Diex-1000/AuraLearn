"use client";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6ebf4] px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="usuario" className="block text-gray-700 font-medium">
              Usuario
            </label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
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
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <Link href="/home">
            <button
              type="button"
              className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
