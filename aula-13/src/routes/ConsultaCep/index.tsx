import { useState } from "react";
import type { TipoCep } from "../../types/tipoCep";
import { useNavigate } from "react-router-dom";

export default function ConsultaCep() {

    const navigate = useNavigate();

    const [logradouro, setLogradouro] = useState<TipoCep>();

  const fetchData = async (
    cepParam: string,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
        e.preventDefault();

        //trata o cep tirando o traço:
        console.log("CEP COM TRAÇo:"+cepParam);
        cepParam = cepParam.replace("-","");
        console.log("CEP SEM TRAÇo:"+cepParam);

        const response = await fetch(`https://viacep.com.br/ws/${cepParam}/json/`);

        if(response.status === 200){
            const data: TipoCep = await response.json();
            setLogradouro(data);
        }else{
            throw new Error("Ocorreu um erro ao tentar buscar esse CEP, tente novamente!");
        }
    } catch (error) {
        alert(error);
        navigate("/error");
    }
  };

  const [cepProcurado, setCepProcurado] = useState<string>("");

  const mascaraCep = (e:React.ChangeEvent<HTMLInputElement>)=>{
  const digits = e.currentTarget.value.replace(/\D/g, '').slice(0, 8); // máximo 8 dígitos
  const formatted =
    digits.length > 5
      ? `${digits.slice(0, 5)}-${digits.slice(5)}`
      : digits;
    setCepProcurado(formatted);
  }

  return (
    <main>
      <h1>Consultar CEP</h1>

      <div>
        <form onSubmit={(e) => fetchData(cepProcurado, e)} className="flex border-1 w-[50%] h-[50vh] mx-auto my-auto px-5 text-black rounded-2xl bg-white">
          
            <div className="flex flex-col justify-around w-full">
              <label htmlFor="idCep" className="block font-bold">CEP buscado:</label>
              <input
                type="text"
                name="cep"
                maxLength={9}
                required={true}
                placeholder="Digite o cep a pesquisar:"
                value={cepProcurado}
                onChange={mascaraCep}
                className="border-1 p-2 rounded-[5px] inline-block w-[80%] outline-1 outline-gray-700 placeholder:text-blue-800"
              />
              <button type="submit" className="inline-block w-[40%] mx-auto bg-blue-700 text-white rounded-[5px] h-[12vh]">Pesquisar</button>
            </div>
        </form>
      </div>
      <div>
        {logradouro ? 
          <div>
            <p>Bairro : {logradouro.bairro}</p>
            <p>Cep : {logradouro.cep}</p>
            <p>Rua : {logradouro.logradouro}</p>
            <p>Local : {logradouro.localidade}</p>
          </div>
         : 
           logradouro ? <p>Localidade não encontrada.</p> : <span></span>
        }
      </div>
    </main>
  );
}
