"use client";
import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function UserData() {
  // Estado para simular si hay datos o no
  const [hasData, setHasData] = useState(false);

  return (
    <div className="flex justify-center bg-slate-200 min-h-screen">
      <div className="mt-16">
        <Card className="w-full max-w-2xl bg-slate-300 shadow-lg rounded-lg p-6">
          {!hasData ? (
            // 🔴 Estado: sin datos
            <div className="text-center space-y-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Todavía no tienes datos en tu perfil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Completa el formulario para generar tu plan de estudio personalizado.
                </p>
                <Link href="/forms">
                  <Button className="bg-gray-800 text-white hover:bg-gray-900">
                    Completar Formulario
                  </Button>
                </Link>
              </CardContent>
            </div>
          ) : (
            // 🟢 Estado: con datos
            <div className="space-y-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Mi Perfil</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-800">
                <div>
                  <p><strong>Nombre:</strong> Juan Pérez</p>
                  <p><strong>Correo:</strong> juanperez@example.com</p>
                  <p><strong>Edad:</strong> 28</p>
                  <p><strong>Género:</strong> Masculino</p>
                </div>
                <div>
                  <p><strong>Puesto actual:</strong> Desarrollador Frontend</p>
                  <p><strong>Experiencia:</strong> 3 años</p>
                  <p><strong>Principales áreas a mejorar:</strong> Gestión de proyectos, Liderazgo</p>
                </div>
                <div>
                  <p><strong>Habilidades técnicas:</strong></p>
                  <ul className="list-disc pl-6">
                    <li>JavaScript: 4/5</li>
                    <li>React: 5/5</li>
                    <li>SQL: 3/5</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Habilidades blandas:</strong></p>
                  <ul className="list-disc pl-6">
                    <li>Comunicación: 5/5</li>
                    <li>Trabajo en equipo: 4/5</li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Link href="/forms">
                    <Button className="bg-blue-900 text-white hover:bg-blue-950">
                      Editar datos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          )}

          {/* 🔘 Botón de prueba para cambiar estado */}
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setHasData(!hasData)}
            >
              {hasData ? "Simulacion" : "Simulacion"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
