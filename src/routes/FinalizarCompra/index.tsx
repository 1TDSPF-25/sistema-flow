import { useEffect } from "react";
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form'; 
import type { TipoCompra } from '../../types/tipoCompra';

const FinalizarCompra = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TipoCompra>();

  const onSubmit: SubmitHandler<TipoCompra> = (data) => {
    console.log('DADOS DA COMPRA:', data);
    alert('Compra finalizada com sucesso! Verifique os dados no console.');
  };

  useEffect(() => {
            document.title = "FarmáciaPlus - Finalizar Compra";
        }, []);

  return (

    <div>
      <h1>Preencha os dados abaixo para concluir seu pedido.</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        <fieldset>
          <legend><h3>Informações de Entrega</h3></legend>
          
          <div>
            <label htmlFor="nomeCompleto">Nome Completo</label>
            <input 
              id="nomeCompleto"
              className='border border-gray-700'
              {...register("nomeCompleto", { required: "O nome é obrigatório" })}
            />
            {errors.nomeCompleto && <p style={{ color: 'red' }}>{errors.nomeCompleto.message}</p>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className='border border-gray-700'
              {...register("email", { required: "O email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }})}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="rua">Rua</label>
            <input 
              id="rua"
              className='border border-gray-700'
              {...register("rua", { required: "A rua é obrigatória" })}
            />
            {errors.rua && <p style={{ color: 'red' }}>{errors.rua.message}</p>}
          </div>

          <div>
            <label htmlFor="cidade">Cidade</label>
            <input 
              id="cidade"
              className='border border-gray-700'
              {...register("cidade", { required: "A cidade é obrigatória" })}
            />
            {errors.cidade && <p style={{ color: 'red' }}>{errors.cidade.message}</p>}
          </div>

          <div>
            <label htmlFor="cep">CEP</label>
            <input 
              id="cep"
              className='border border-gray-700'
              {...register("cep", { 
                required: "O CEP é obrigatório",
                pattern: {
                  value: /^\d{5}-?\d{3}$/,
                  message: "CEP inválido (formato: 12345-678)"
                }
              })}
            />
            {errors.cep && <p style={{ color: 'red' }}>{errors.cep.message}</p>}
          </div>
        </fieldset>

        <fieldset>
          <legend><h3>Dados de Pagamento</h3></legend>
          <div>
            <label htmlFor="cartaoNome">Nome no Cartão</label>
            <input 
              id="cartaoNome"
              className='border border-gray-700'
              {...register("cartaoNome", { required: "O nome no cartão é obrigatório" })}
            />
            {errors.cartaoNome && <p style={{ color: 'red' }}>{errors.cartaoNome.message}</p>}
          </div>

          <div>
            <label htmlFor="cartaoNumero">Número do Cartão</label>
            <input
              id="cartaoNumero"
              className='border border-gray-700'
              {...register("cartaoNumero", { required: "O número do cartão é obrigatório", minLength: { value: 16, message: "Deve ter 16 dígitos" }, maxLength: { value: 16, message: "Deve ter 16 dígitos" } })}
            />
            {errors.cartaoNumero && <p style={{ color: 'red' }}>{errors.cartaoNumero.message}</p>}
          </div>

          <div>
            <label htmlFor="cartaoValidade">Validade (MM/AA)</label>
            <input
              id="cartaoValidade"
              className='border border-gray-700'
              {...register("cartaoValidade", { required: "A validade é obrigatória", pattern: { value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/, message: "Formato MM/AA inválido" }})}
            />
            {errors.cartaoValidade && <p style={{ color: 'red' }}>{errors.cartaoValidade.message}</p>}
          </div>

          <div>
            <label htmlFor="cartaoCVC">CVC</label>
            <input
              id="cartaoCVC"
              className='border border-gray-700'
              {...register("cartaoCVC", { required: "O CVC é obrigatório", minLength: { value: 3, message: "Deve ter 3 dígitos" }, maxLength: { value: 3, message: "Deve ter 3 dígitos" } })}
            />
            {errors.cartaoCVC && <p style={{ color: 'red' }}>{errors.cartaoCVC.message}</p>}
          </div>
        </fieldset>

        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default FinalizarCompra;