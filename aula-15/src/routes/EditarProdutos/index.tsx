import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import type { TipoProduto } from "../../types/tipoProduto";

export default function EditarProdutos(){
    useEffect(() => {
        document.title = "Editar Produtos";
    }, []);
    
    //Recuperar o ID do produto utilizando o hook useParams.
    const { id } = useParams<string>();

    const { reset,register } = useForm<TipoProduto>();
   
    useEffect(() => {
      
        const fetchProduto = async () => {
            try {
                const response = await fetch(`http://localhost:3001/produtos/${id}`);
                if(!response.ok){
                    throw new Error("Erro ao buscar o produto");
                }
                const data:TipoProduto = await response.json();

                reset(data);

            } catch (error:any) {
                console.error(error.message);
            }
        }
         
        fetchProduto();

    }, [id, reset]);
    

    return(
        <main>
            <h1>Editar os produtos</h1>
   <div>
        <form className="mx-auto max-w-md space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow text-gray-700">
          <h2 className="text-lg font-semibold">Cadastro de Produto</h2>
           
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              id="nome"
              type="text"
              {...register("nome")}
               className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Ex.: Teclado Mecânico"
            />
          </div>

          <div>
            <label htmlFor="preco" className="block text-sm font-medium text-gray-700">Preço (R$)</label>
            <input
              id="preco"      
              type="number"
                step="0.01"
                {...register("preco",{valueAsNumber:true})}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="0.00"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
              Editar
            </button>
          </div>
        </form>
      </div>

        </main>
    );
}

















