import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
import { CiSearch } from "react-icons/ci";

interface Produto {
  id: string;
  nome: string;
  preco: number;
}

export default function Cabecalho() {
  const [query, setQuery] = useState("");
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  // Buscar produtos para sugestões
  useEffect(() => {
    if (query.trim() === "") {
      setProdutos([]);
      setActiveIndex(-1);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/produtos?nome_like=${encodeURIComponent(query)}`
        );
        const data: Produto[] = await response.json();
        const filtered = data.filter((p) =>
          p.nome.toLowerCase().includes(query.toLowerCase())
        );
        setProdutos(filtered.slice(0, 5));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    const delay = setTimeout(fetchData, 300);
    return () => clearTimeout(delay);
  }, [query]);

  // Função de busca
  const handleSearch = () => {
    if (query.trim() === "") return;

    navigate(`/produtos?search=${encodeURIComponent(query)}`);
    setQuery(""); // limpa o input
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  return (
    <header className="bg-blue-900 text-gray-100 shadow-md border border-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 relative">
        <h1 className="text-2xl font-bold tracking-tight">Minha Loja</h1>

        {/* Barra de pesquisa */}
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Pesquisar produtos eletrônicos..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full px-4 py-2 rounded-l-full text-gray-900 placeholder-gray-500 outline-none bg-white border rounded-full border-gray-300"
          />

          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 h-full bg-blue-500 text-white px-4 py-2 rounded-r-full flex items-center gap-2 hover:bg-blue-600 transition border-none"
          >
            <CiSearch size={20} />
            <span className="hidden sm:inline">Buscar</span>
          </button>

          {/* Sugestões */}
          {showSuggestions && produtos.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 mt-1">
              {produtos.map((produto, index) => (
                <li
                  key={produto.id}
                  onClick={() => {
                    setQuery(produto.nome); // apenas preenche o input
                    setShowSuggestions(false);
                    setActiveIndex(index);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between text-gray-900"
                >
                  <span>{produto.nome}</span>
                  <span className="text-sm text-gray-500">
                    R$ {produto.preco.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botão Menu mobile */}
        <button
          className="md:hidden bg-blue-800 px-3 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          Menu
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex md:gap-6">
          <Menu />
        </div>
      </div>

      {/* Menu mobile expandido */}
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