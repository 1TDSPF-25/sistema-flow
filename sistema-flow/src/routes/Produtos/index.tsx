import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

export default function Produtos() {
  useEffect(() => {
    document.title = "Produtos";
  }, []);

  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/produtos");
      const data: TipoProduto[] = await response.json();
      setProdutos(data);
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Lista de Produtos
      </h1>

      {/* Container Responsivo da Tabela */}
      <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-2xl bg-white">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-left text-sm md:text-base">
              <th className="py-3 px-4 font-semibold">ID</th>
              <th className="py-3 px-4 font-semibold">Nome</th>
              <th className="py-3 px-4 font-semibold">Preço (R$)</th>
              <th className="py-3 px-4 font-semibold text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((produto) => (
              <tr
                key={produto.id}
                className="border-b hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 text-gray-700">{produto.id}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">
                  {produto.nome}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {Number(produto.preco).toFixed(2)}
                </td>
                <td className="py-3 px-4 text-center">
                  <Link
                    to={`/editar/produtos/${produto.id}`}
                    className="inline-flex items-center justify-center p-2 rounded-full hover:bg-blue-100 text-blue-600 transition"
                    title="Editar produto"
                  >
                    <CiEdit size={22} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="bg-gray-100 font-medium text-gray-700">
              <td colSpan={4} className="py-3 px-4 text-center">
                Total de Produtos:{" "}
                <span className="font-semibold">{produtos.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}
