import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import CardNoticia from "../../components/CardNoticia/CardNoticia";

export default function Home() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);
  const [resultado, setResultado] = useState<TipoProduto[]>([]);
  const [erroApi, setErroApi] = useState<string | null>(null);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/produtos");
        if (!response.ok) {
          throw new Error("A resposta da API não foi bem-sucedida.");
        }

        const data: TipoProduto[] = await response.json();
        setProdutos(data);
        setErroApi(null); 
      
      } catch (error) {
        console.error("Falha ao conectar com a API:", error);
        setErroApi("API offline. Por favor, execute 'npm run api' e recarregue a página.");
      }
    };

    fetchData();
  }, []);

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
    <main>
      
      <h2>Resultado da pesquisa</h2>
      {resultado.length > 0 ? (
        <ul>
          {resultado.map((p) => (
            <li key={p.id}>
              {p.nome} — R$ {p.preco}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
      <CardNoticia/>
    </main>
  );
}