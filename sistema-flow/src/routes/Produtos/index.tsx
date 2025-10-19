import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link, useLocation } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

export default function Produtos() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);
  const location = useLocation();

  // Pega o termo de busca da URL: /produtos?search=...
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("search")?.toLowerCase() || "";

  useEffect(() => {
    document.title = "Produtos";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/produtos");
      const data: TipoProduto[] = await response.json();

      if (searchTerm) {
        // Filtra os produtos pelo nome que contém o termo
        const filtered = data.filter((p) =>
          p.nome.toLowerCase().includes(searchTerm)
        );
        setProdutos(filtered);
      } else {
        setProdutos(data);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <main className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Produtos</h1>
      <div>
        {produtos.map((produto) => (
          <div key={produto.id} style={{ border: '1px solid #eee', marginBottom: '1rem', padding: '1rem' }}>
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco}</p>
            <Link to={`/editar/produtos/${produto.id}`}>
              <CiEdit size={20} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}