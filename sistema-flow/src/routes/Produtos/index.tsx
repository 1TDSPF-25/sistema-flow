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
    <main>
      <h1>Produtos</h1>

      <table className="tblProduto">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PREÇO</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, indice) => (
            <tr key={indice}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}>
                  <CiEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>Total de Produtos : {produtos.length}</td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}
