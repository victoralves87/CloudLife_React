"use client";
import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [tipoConsulta, setTipoConsulta] = useState("local"); // Estado inicial: "No local"

  return (
    <section className="bg-[#17997d] text-white text-center py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Agende agora sua consulta</h1>
        <p className="text-lg mb-6">Mais de 500 mil especialistas de saúde estão prontos para te ajudar</p>
        
        {/* Área de Filtros */}
        <div className="bg-[#0d695275] rounded-lg p-4 flex flex-col md:flex-row items-center shadow-md w-full max-w-2xl">
          <div className="flex gap-2 mb-2 md:mb-0">
            <button
              className={`px-4 py-2 rounded-full ${tipoConsulta === "local" ? "bg-[#00CC99] text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setTipoConsulta("local")}
            >
              🏥 No local
            </button>
            <button
              className={`px-4 py-2 rounded-full ${tipoConsulta === "teleconsulta" ? "bg-[#00CC99] text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setTipoConsulta("teleconsulta")}
            >
              📹 Teleconsulta
            </button>
          </div>

          {/* Filtros baseados na opção selecionada */}
          <div className="flex flex-col md:flex-row w-full gap-2">
            <select className="flex-1 p-2 border rounded bg-gray-100 text-gray-900">
              <option value="" disabled selected hidden>Selecione uma especialidade</option>
              <option value="cardiologia">Cardiologia</option>
              <option value="dermatologia">Dermatologia</option>
              <option value="ortopedia">Ortopedia</option>
            </select>

            {tipoConsulta === "local" && (
              <select className="flex-1 p-2 border rounded bg-gray-100 text-gray-900">
                <option value="" disabled selected hidden>Selecione uma cidade</option>
                <option value="recife">Recife</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-de-janeiro">Rio de Janeiro</option>
              </select>
            )}

            <button className="bg-blue-500 text-white px-6 py-2 rounded">🔍 Pesquisar</button>
          </div>
        </div>

        {/* Ilustração */}
        <div className="mt-6">
          <Image src="/images/bg-medicine.jpg" alt="Médicos atendendo" width={400} height={300} />
        </div>
      </div>
    </section>
  );
}
