import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";

type ItemCarrinho = {
  id: string;
  usuarioId: string;
  produtoId: string;
  produto?: TipoProduto;
};

export default function Carrinho() {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [usuarioId] = useState<string>("012");
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    document.title = "FarmáciaPlus - Meu Carrinho";
    carregarCarrinho();
  }, []);

  const carregarCarrinho = async () => {
    try {
      const carrinhoRes = await fetch(
        `http://localhost:3001/carrinho?usuarioId=${usuarioId}`
      );
      const carrinhoData: ItemCarrinho[] = await carrinhoRes.json();

      const produtosRes = await fetch("http://localhost:3001/produtos");
      const produtosData: TipoProduto[] = await produtosRes.json();

      const itensComProduto = carrinhoData.map((item) => {
        const produto = produtosData.find(
          (p) => String(p.id) === String(item.produtoId)
        );
        return { ...item, produto };
      });

      setItens(itensComProduto);
    } catch (error) {
      console.error("Erro ao carregar carrinho", error);
    } finally {
      setCarregando(false);
    }
  };

  const handleRemover = async (id: string) => {
    try {
      await fetch(`http://localhost:3001/carrinho/${id}`, { method: "DELETE" });
      setItens((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao remover item", error);
    }
  };

  const total = itens.reduce(
    (acc, item) => acc + (item.produto?.preco || 0),
    0
  );

  if (carregando) {
    return <p className="p-6 text-gray-600">Carregando seu carrinho...</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Meu Carrinho</h1>

      {itens.length === 0 ? (
        <p className="text-gray-600">🛒 Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {itens.map((item) => (
              <li
                key={item.id}
                className="bg-white border rounded-lg shadow p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg text-black font-semibold">
                    {item.produto?.nome || "Produto não encontrado"}
                  </h2>
                  <p className="text-blue-600 font-bold">
                    R$ {item.produto?.preco?.toFixed(2) || "0.00"}
                  </p>
                </div>
                <button
                  onClick={() => handleRemover(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <span className="text-lg text-black font-bold">Total:</span>
            <span className="text-xl font-bold text-green-600">
              R$ {total.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </main>
  );
}