import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="bg-[#00A99D] text-white text-center py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Agende agora sua consulta</h1>
        <p className="text-lg mb-6">Mais de 500 mil especialistas de saúde estão prontos para te ajudar</p>
        
        {/* Área de Filtros */}
        <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center shadow-md w-full max-w-2xl">
          <div className="flex gap-2 mb-2 md:mb-0">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-full">🏥 No local</button>
            <button className="bg-[#00CC99] text-white px-4 py-2 rounded-full">📹 Teleconsulta</button>
          </div>
          
          <div className="flex flex-col md:flex-row w-full gap-2">
            <select className="flex-1 p-2 border rounded">
              <option>Especialidade, doença ou nome</option>
            </select>
            <input type="text" className="flex-1 p-2 border rounded" placeholder="Recife" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded">🔍 Pesquisar</button>
          </div>
        </div>

        {/* Ilustração */}
        <div className="mt-6">
          <Image src="/images/bg_headerHero.jpg" alt="Médicos atendendo" width={400} height={300} />
        </div>
      </div>
    </section>
  );
}
