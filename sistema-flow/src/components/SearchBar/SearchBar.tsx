import { useState, useEffect, useRef } from "react";

interface Produto {
  id: string;
  nome: string;
  preco: number;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // índice ativo para setas
  const inputRef = useRef<HTMLInputElement>(null);

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
        const filtered = data.filter((produto) =>
          produto.nome.toLowerCase().includes(query.toLowerCase())
        );
        setProdutos(filtered.slice(0, 5));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    const delay = setTimeout(fetchData, 300);
    return () => clearTimeout(delay);
  }, [query]);

  const handleSelect = (produto: Produto) => {
    setQuery(produto.nome);
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!produtos.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % produtos.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? produtos.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < produtos.length) {
        handleSelect(produtos[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar produtos..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={handleKeyDown}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {showSuggestions && produtos.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-10">
          {produtos.map((produto, index) => (
            <li
              key={produto.id}
              onClick={() => handleSelect(produto)}
              className={`px-4 py-2 cursor-pointer flex justify-between ${
                index === activeIndex ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
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
