import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link, useLocation } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
 
export default function Produtos() {
  
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);
  const usuarioId = "012"; // Exemplo: usuário logado fixo
  const location = useLocation();
 
  // Captura termo de busca da URL (ex: /produtos?search=dipirona)
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
 
  // Função para adicionar produto ao carrinho
  const handleComprar = async (produtoId: string) => {
    try {
      const response = await fetch("http://localhost:3001/carrinho", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuarioId: usuarioId,
          produtoId: produtoId,
        }),
      });
 
      if (!response.ok) throw new Error("Erro ao adicionar ao carrinho");
 
      alert("✅ Produto adicionado ao carrinho!");
    } catch (error) {
      console.error(error);
      alert("❌ Erro ao adicionar ao carrinho.");
    }
  };
 
  return (
    <main className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Produtos</h1>
 
      {produtos.length === 0 ? (
        <p className="text-gray-600">Nenhum produto encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-5 flex-grow">
                <h2
                  className="text-lg font-semibold text-gray-900 mb-2 truncate"
                  title={produto.nome}
                >
                  {produto.nome}
                </h2>
                <p className="text-xl font-bold text-blue-600 mb-4">
                  R$ {produto.preco.toFixed(2)}
                </p>
              </div>
 
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                <button
                  onClick={() => handleComprar(produto.id.toString())}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Comprar
                </button>
 
                <Link
                  to={`/editar/produtos/${produto.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  title="Editar Produto"
                >
                  <CiEdit size={20} />
                  <span>Editar</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}