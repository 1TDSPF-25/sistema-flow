import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Produto {
  id: string;
  nome: string;
  preco: number;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

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

  const handleSearch = () => {
    if (query.trim() === "") return;

    // Navega para a página de produtos filtrada
    navigate(`/produtos?search=${encodeURIComponent(query)}`);

    // Limpa o input e fecha a lista de sugestões
    setQuery("");
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  return (
    <div className="relative w-full max-w-md mx-auto flex">
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Buscar
      </button>

      {showSuggestions && produtos.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-10">
          {produtos.map((produto, index) => (
            <li
              key={produto.id}
              onClick={() => {
                // Apenas preenche o input, não navega
                setQuery(produto.nome);
                setShowSuggestions(false);
                setActiveIndex(index);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
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
  );
}
