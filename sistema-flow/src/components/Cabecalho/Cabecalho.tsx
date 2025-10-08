import Menu from "../Menu/Menu";
import { useState } from "react";
export default function Cabecalho() {
  const [termo, setTermo] = useState("");

  const handleSearch = () => {
    localStorage.setItem("termoPesquisa", termo);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <header>
      <h1>Cabeçalho</h1>
      
  <input type="text" placeholder="Pesquisar Produtos" value={termo} 
  onChange={(e) => setTermo(e.target.value)} 
  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"/>

  <button onClick={handleSearch} className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
    Buscar
  </button>
      <Menu />
    </header>
  );
}