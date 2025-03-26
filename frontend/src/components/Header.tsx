"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones do Lucide

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
        <h1>CloudLife</h1>
          {/* <Image
            src="/images/logo.png"
            alt="DoctorApp Logo"
            width={150}
            height={50}
            priority
          /> */}
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-[#00A99D]">Segurança de Dados</Link>
          <Link href="/" className="text-gray-600 hover:text-[#00A99D]">Pergunte ao Especialista</Link>
          <Link href="/" className="text-gray-600 hover:text-[#00A99D]">Criar Perfil</Link>
        </nav>

        {/* Ações */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-[#00A99D]">Entrar</Link>
          <button className="bg-[#00A99D] text-white px-4 py-2 rounded-lg">
            Você é profissional?
          </button>
        </div>

        {/* Ícone do Menu Hambúrguer */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-white shadow-md transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 p-2"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center gap-6 mt-16">
          <Link href="/" className="text-gray-600 hover:text-[#00A99D]" onClick={() => setMenuOpen(false)}>Segurança de Dados</Link>
          <Link href="/" className="text-gray-600 hover:text-[#00A99D]" onClick={() => setMenuOpen(false)}>Pergunte ao Especialista</Link>
          <Link href="/" className="text-gray-600 hover:text-[#00A99D]" onClick={() => setMenuOpen(false)}>Criar Perfil</Link>
          <Link href="/login" className="text-gray-600 hover:text-[#00A99D]" onClick={() => setMenuOpen(false)}>Entrar</Link>
          <button className="bg-[#00A99D] text-white px-4 py-2 rounded-lg">
            Você é profissional?
          </button>
        </nav>
      </div>
    </header>
  );
}
