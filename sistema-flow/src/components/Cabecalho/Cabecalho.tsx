import { useState } from "react";
import Menu from "../Menu/Menu";
import { CiSearch } from "react-icons/ci";

export default function Cabecalho() {
  const [termo, setTermo] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  const handleSearch = () => {
    localStorage.setItem("termoPesquisa", termo);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <header className="bg-blue-900 text-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 relative">
        <h1 className="text-2xl font-bold tracking-tight">Minha Loja</h1>

        <div className="w-full md:w-1/2 bg-neutral-200 rounded-full overflow-hidden grid grid-cols-[1fr_auto]">
          <input
            type="text"
            placeholder="Pesquisar produtos eletrônicos..."
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            className="px-4 py-2 text-neutral-800 placeholder-gray-500 outline-none bg-transparent w-full"
          />

          <button
            onClick={handleSearch}
<<<<<<< HEAD
            className="bg-blue-500 text-neutral-800 px-4 py-2 flex items-center gap-2 hover:bg-blue-300 transition font-medium"
=======
            className="bg-blue-700 text-white px-4 py-2 hover:bg-amber-300 transition font-medium flex items-center gap-2"
>>>>>>> 292ca6db4c01d0b7a9d30f5b9664d6d827cf10fb
          >
            <CiSearch size={20} />
            <span className="hidden sm:inline">Buscar</span>
          </button>
        </div>

        <button
          className="md:hidden bg-blue-800 px-3 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          Menu
        </button>

        <div className="hidden md:flex md:gap-6">
          <Menu />
        </div>
      </div>

      <div
        className={`md:hidden bg-blue-900 w-full absolute left-0 transition-max-h duration-300 overflow-hidden ${
          menuAberto ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          <Menu />
        </div>
      </div>
    </header>
  );
}
