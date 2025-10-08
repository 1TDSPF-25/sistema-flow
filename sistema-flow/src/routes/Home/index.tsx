import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";

export default function Home() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);
  const [resultado, setResultado] = useState<TipoProduto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/produtos");
      const data: TipoProduto[] = await response.json();
      setProdutos(data);
    };
    fetchData();
  }, []);

  const atualizarPesquisa = () => {
    const termo = localStorage.getItem("termoPesquisa") || "";
    const termoNormalizado = termo.toLowerCase();
    const filtrados = produtos.filter((p) =>
      p.nome.toLowerCase().includes(termoNormalizado)
    );
    setResultado(filtrados);
  };

  useEffect(() => {
    window.addEventListener("storage", atualizarPesquisa);
    return () => window.removeEventListener("storage", atualizarPesquisa);
  }, [produtos]);

  return (
    <main className="flex flex-col h-[100vh] bg-gray-50 items-center justify-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Resultado da pesquisa
      </h2>

      {resultado.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resultado.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200"
            >
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {p.nome}
              </h3>

              
              <span className="text-green-500 font-bold text-lg">
                R$ {Number(p.preco).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">
          Nenhum resultado encontrado.
        </p>
      )}
    </main>
  );
}
