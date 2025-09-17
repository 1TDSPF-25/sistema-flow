import { useEffect, useState } from "react";
import type { TipoCep } from "../../types/tipoCep";

export default function ConsultaCep() {

  const [logradouro, setLogradouro] = useState<TipoCep>();

  const fetchData = async (cepParam:number) => {

    const response = await fetch(`https://viacep.com.br/ws/${cepParam}/json/`);

    const data:TipoCep = await response.json();

    setLogradouro(data);

  };

  const [cepProcurado, setCepProcurado] = useState<number>(0);

  return (
    <main>
      <h1>Consulta CEP</h1>

        <div>
            <form onSubmit={()=>fetchData(cepProcurado)}>
                <fieldset>
                    <legend>Pesquis de CEP</legend>
                    <div>
                        <label htmlFor="idCep">CEP buscado:</label>
                        <input type="number" name="cep" maxLength={8} required={true} placeholder="Digite o cep a pesquisar:" value={cepProcurado} onChange={(e)=> setCepProcurado(Number(e.target.value))}/>
                    </div>
                    <div>
                        <button type="submit">Pesquisar</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div>
            {
                logradouro ?
                <div>
                    <p>Bairro : {logradouro.bairro}</p>
                    <p>Cep : {logradouro.cep}</p>
                    <p>Rua : {logradouro.logradouro}</p>
                    <p>Local : {logradouro.localidade}</p>
                </div>
                : <p>Localidade não encontrada.</p>

            }
        </div>
    </main>
  );
}
