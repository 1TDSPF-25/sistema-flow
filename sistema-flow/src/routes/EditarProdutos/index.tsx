import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import type { TipoProduto } from "../../types/tipoProduto";


const URL_API_PRODUTOS = "/api-produtos/produtos"; 

export default function EditarProdutos(){
    useEffect(() => {
        document.title = "Editar Produtos";
    }, []);

    const navigate = useNavigate();
    

    const { id } = useParams<{ id: string }>();

    const { reset, register, handleSubmit, formState:{ errors } } = useForm<TipoProduto>({
      mode:"onChange"
    });
   
    useEffect(() => {
      
        const fetchProduto = async () => {
            try {
         
                const response = await fetch(`${URL_API_PRODUTOS}/${id}`);
                if(!response.ok){
                    throw new Error("Erro ao buscar o produto");
                }
                const data:TipoProduto = await response.json();

            
                reset({
                  id: data.id ?? 0,
                  nome: data.nome ?? "",
                  preco: data.preco ?? 0
                });

            } catch (error) {
                console.error(error);
            }
        }
         
        fetchProduto();

    }, [id, reset]);
    
    
    const onSubmit =  async (data:TipoProduto) => {
        try {
            
            await fetch(`${URL_API_PRODUTOS}/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            
            alert("Produto editado com sucesso!");
            navigate("/produtos");

        } catch (error) {
            console.error("Erro ao editar o produto:", error);
        }
    };

    return(
        <main>
            <h1>Editar os produtos</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow text-gray-700">
                  <h2 className="text-lg font-semibold">Editar Produto</h2>
                   
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                      id="nome"
                      type="text"
                      {...register("nome",{required:true, minLength:3,maxLength:200})}
                       className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Ex.: Teclado Mecânico"
                      aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "erro-nome" : undefined} />

                      {
                        errors.nome ? <span id="erro-nome" className="text-red-600 bg-red-300 border-2 border-red-600 rounded-sm block text-center">Digite um nome válido!</span> : ""

                      }

                  </div>

                  <div>
                    <label htmlFor="preco" className="block text-sm font-medium text-gray-700">Preço (R$)</label>
                    <input
                      id="preco"      
                      type="number"
                        step="0.01"
                        {...register("preco",{required:true,valueAsNumber:true,min:0.01})}
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="0.00"
                    aria-invalid={!!errors.preco} aria-describedby={errors.preco ? "erro-preco" : undefined} />

                      {
                        errors.preco ? <span id="erro-preco" className="text-red-600 bg-red-300 border-2 border-red-600 rounded-sm block text-center">Digite um valor válido!</span> : ""

                      }
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
                      Salvar Alterações
                    </button>
                    <button type="button" onClick={() => navigate("/produtos")} className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                      Cancelar
                    </button>
                  </div>
                </form>
            </div>
        </main>
    );
}