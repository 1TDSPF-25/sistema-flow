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
      <input type="text" placeholder="Pesquisar produtos eletrônicos" value={termo} onChange={(e) => setTermo(e.target.value)}/>
      <button onClick={handleSearch}>Buscar</button>
      <Menu />
    </header>
  );
}