"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TestNavbar() {

  return (
    <nav className="bg-gray-900 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 h-20 relative">
        {/* Logo a la izquierda */}
        <Link href="/home" className="flex items-center gap-2 hover:no-underline">
          <span className="text-2xl font-semibold text-white hover:text-blue-500">
            AuraLearn
          </span>
        </Link>

        {/* Menú del centro (visible en escritorio) */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            <NavButton href="/userselect" label="Dashboard" />
        </div>

        {/* Idioma (a la derecha) */}
        <div className="hidden md:block">
          <NavButton href="/choose" label="Log in" />
          {/*<NavButton href="/login" label="Sing up" />*/}
        </div>
</div>

      
    </nav>
  );
}

function NavButton({ href, label }) {
  return (
    <Button asChild variant="ghost" className="text-white text-lg hover:text-blue-500">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
