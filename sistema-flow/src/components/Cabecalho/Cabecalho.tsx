import { useState } from "react";
import Menu from "../Menu/Menu";
import { CiSearch } from "react-icons/ci";

export default function Cabecalho() {
  const [termo, setTermo] = useState("");

  const handleSearch = () => {
    localStorage.setItem("termoPesquisa", termo);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <header className="bg-blue-900 text-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4">
        {/* Logo / Título */}
        <h1 className="text-2xl font-bold tracking-tight">Minha Loja</h1>

        {/* Barra de busca */}
        <div className="flex items-center w-full md:w-1/2 bg-neutral-200 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Pesquisar produtos eletrônicos..."
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            className="flex-1 bg-transparent text-neutral-800 placeholder-gray-500 px-4 py-2 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-700 text-neutral-800 px-4 py-2 flex items-center gap-2 hover:bg-amber-300 transition font-medium"
          >
            <CiSearch size={20} />
            <span className="hidden sm:inline">Buscar</span>
          </button>
        </div>

        {/* Menu de navegação */}
        <nav className="w-full md:w-auto">
          <Menu />
        </nav>
      </div>
    </header>
  );
}