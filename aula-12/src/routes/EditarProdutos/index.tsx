import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function EditarProdutos(){

    //Receber o ID do produto que será editado.
    const { id } = useParams<string>();

    //Utilizar o useForm do react-hook-form
    const {register, handleSubmit, formState, reset,setValue,getValues, watch} = useForm<TipoProduto>({
        defaultValues:{
            id:0,
            nome:"",
            preco:0
        },//Valores iniciais do formulário
        mode:"onChange" //Valida enquanto o usuário digita
    });

    return(
        <main>
            <h1>Editar os produtos</h1>
        </main>
    );
}






















// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import type { TipoProduto } from "../../types/tipoProduto";
// import Card from "../../components/Card/Card";

// export default function EditarProdutos(){

//     //Recuperar o produto utilizando os rooks useParams,useState e useEffect.
//     // Faça uma requisição do tipo GET para a API local utilizando o fetch. Crie uma função assincrona para esta operação.
//     //Em caso de dúvidas olhe o que foi feito em Produtos.

//     //Criando uma forma de recuperar o ID do usuário que foi enviado através do click(Request/Requisição)
    
//       const { id } = useParams<string>();

//       //Criando useState para guardar o objeto que será apresentado na tela.
//       const [produto, setProduto] = useState<TipoProduto>();
    
      
//       //Criar um useEffect para controlar os efeitos colaterais e realizar apenas uma chamada para a API externa.
//      useEffect(()=>{
        
//         (async ()=>{
//             //Realizando uma chamada do tipo GET para a API
//             //Esta chamada pode demorar, pode travar a aplicação, por isso utilizamos await após o =
//             const response = await fetch("http://localhost:3001/produtos");
            
//             //Necessário realizar um PARSE de STRING/JSOn para objeto/literal. Utilizamos as funções json() para isso. Mas pode demorar e travar a aplicação, então também usamos o await nesta instrução.
//             const data:TipoProduto[] = await response.json();
            
//             //Agora com a lista recuperada, utilizamos o id para pesquisar o produto selecionado pelo usuário na tabela.
//             //Em seguida colocamos esse produto em uma nova variavel e depois colocamos no useState.

//             const produtoEncontrado:TipoProduto | undefined = data.find( p => p.id.toString() === id);

//             //Produto encontrado, colocamos ele no useState
//             setProduto(produtoEncontrado);

//         })();

//      },[]);

//     return(
//         <main>
//             <h1>Editar os produtos</h1>

//                 { produto ? <Card nomeProps={produto.nome} precoProps={produto.preco} idProps={produto.id}/> : <p>Produto não encontrado!!</p>}

//         </main>
//     );
// }