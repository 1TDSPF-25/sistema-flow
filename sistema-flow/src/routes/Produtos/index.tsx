import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
 
export default function Produtos() {
    useEffect(() => {
        document.title = "Produtos";
    }, []);
 
    const [produtos, setProdutos] = useState<TipoProduto[]>([]);
    const [filtro, setFiltro] = useState('');
 
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/produtos");
            const data: TipoProduto[] = await response.json();
            setProdutos(data);
        };
        fetchData();
    }, []);
 
    const produtosFiltrados = filtro.length > 0
        ? produtos.filter(produto =>
            produto.nome.toLowerCase().includes(filtro.toLowerCase())
          )
        : produtos;
 
    return (
        <div className="container">
            <main className="p-4 md:p-8 bg-gray-50 min-h-full">
 
                <div className="w-[90%] md:w-[80%] mx-auto mb-6">
                    <input
                        type="text"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                        placeholder="Buscar por nome do produto..."
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 "
                    />
                </div>
 
                <div className="w-[90%] md:w-[80%] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full text-left text-gray-700">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
                            <tr>
                                <th scope="col" className="p-4 font-semibold">ID</th>
                                <th scope="col" className="p-4 font-semibold">Nome</th>
                                <th scope="col" className="p-4 font-semibold">Preço</th>
                                <th scope="col" className="p-4 font-semibold text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {produtosFiltrados.map((produto) => (
                                <tr key={produto.id} className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                    <td className="p-4 font-medium">{produto.id}</td>
                                    <td className="p-4">{produto.nome}</td>
                                    <td className="p-4">R$ {produto.preco.toFixed(2)}</td>
                                    <td className="p-4 text-center">
                                        <Link
                                            to={`/editar/produtos/${produto.id}`}
                                            className="inline-block text-blue-500 hover:text-blue-700 text-2xl transition-transform hover:scale-125 duration-200"
                                        >
                                            <CiEdit />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-50 font-semibold text-gray-600">
                            <tr>
                                <td colSpan={4} className="p-4 text-center">
                                    Total de Produtos: {produtosFiltrados.length}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </main>
        </div>
    );
}