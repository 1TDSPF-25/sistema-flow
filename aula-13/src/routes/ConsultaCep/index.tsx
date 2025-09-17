import { useState } from "react";
import type { TipoCep } from "../../types/tipoCep";
import { useNavigate } from "react-router-dom";

export default function ConsultaCep() {

    

    const [logradouro, setLogradouro] = useState<TipoCep>();

  const fetchData = async (
    cepParam: string,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
        e.preventDefault();
        const response = await fetch(`https://viacep.com.br/ws/${cepParam}/json/`);

        const data: TipoCep = await response.json();
        setLogradouro(data);

    } catch (error) {
        console.error(error);

    }
  };

  const [cepProcurado, setCepProcurado] = useState<string>("");

  return (
    <main>
      <h1>Consulta CEP</h1>

      <div>
        <form onSubmit={(e) => fetchData(cepProcurado, e)}>
          <fieldset>
            <legend>Pesquis de CEP</legend>
            <div>
              <label htmlFor="idCep">CEP buscado:</label>
              <input
                type="text"
                name="cep"
                maxLength={8}
                required={true}
                placeholder="Digite o cep a pesquisar:"
                value={cepProcurado}
                onChange={(e) => setCepProcurado(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Pesquisar</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div>
        {logradouro ? (
          <div>
            <p>Bairro : {logradouro.bairro}</p>
            <p>Cep : {logradouro.cep}</p>
            <p>Rua : {logradouro.logradouro}</p>
            <p>Local : {logradouro.localidade}</p>
          </div>
        ) : (
          <p>Localidade não encontrada.</p>
        )}
      </div>
    </main>
  );
}
