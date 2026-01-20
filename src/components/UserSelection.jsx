"use client";

import {
  ShieldCheck,
  Building2,
  Users,
  UserCog,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const roles = [
  {
    title: "Super Administrador",
    description: "Control y gestión del sistema completo",
    icon: ShieldCheck,
    nav: "/dashboard/superusuario",
  },
  {
    title: "Empresa",
    description: "Administración a nivel empresarial",
    icon: Building2,
    nav: "/dashboard/empresa",
  },
  {
    title: "Gerente de Empresa",
    description: "Supervisión de departamentos y equipos",
    icon: Users,
    nav: "/dashboard/gerente",
  },
  {
    title: "Manager",
    description: "Gestión de equipos y rendimiento",
    icon: UserCog,
    nav: "/dashboard/manager",
  },
  {
    title: "Colaborador",
    description: "Desarrollo personal y aprendizaje",
    icon: User,
    nav: "/dashboard/colaborador",
  },
];

export default function RoleSelection() {
  return (
    <section className="min-h-screen bg-slate-200 px-6 md:px-16 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-slate-900">
          AuraLearn
        </h1>
        <p className="text-slate-600 mt-2">
          Plataforma de Evaluación de Talento y Aprendizaje
        </p>

      </div>

      {/* Grid de roles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {roles.map((role) => {
          const Icon = role.icon;

          return (
            <div
              key={role.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
            >
              {/* Icono */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 mb-4">
                <Icon className="w-6 h-6 text-blue-900" />
              </div>

              {/* Texto */}
              <h3 className="text-lg font-bold text-slate-900">
                {role.title}
              </h3>
              <p className="text-slate-600 text-sm mt-1 mb-6">
                {role.description}
              </p>

              {/* Botón */}
              <Link href={role.nav}>
                <Button className="mt-auto w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition">
                Acceder al Panel
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
