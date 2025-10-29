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

    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <section className='bg-white shadow-xl rounded-lg p-8 w-full max-w-5xl'>

      <div className='mb-6 text-center'>
        <h1 className='text-3xl font-bold text-gray-800'>Preencha os dados abaixo para concluir seu pedido.</h1>
      </div>


      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        
        <fieldset className='text-black mb-2'>
          
          <legend className='mb-1 font-medium text-gray-700'>
            <h3 className="text-xl">Informações de Entrega</h3>
          </legend>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3'>
          <div className='flex flex-col mb-0.5'>
            <label htmlFor="nomeCompleto" className='mb-0.5 font-medium text-gray-700'>Nome Completo</label>
            <input 
              id="nomeCompleto"
              className="p-3 border rounded-md focus:outline-none focus:ring-1"
              {...register("nomeCompleto", { 
                required: "O nome é obrigatório",
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s'-]+(\s[A-Za-zÀ-ÿ\s'-]+)+$/,
                  message: "Digite o nome completo (nome e sobrenome)"
                }
              })}
            />
            {errors.nomeCompleto && <p style={{ color: 'red' }}>{errors.nomeCompleto.message}</p>}
          </div>
          
          <div className='flex flex-col mb-0.5'>
            <label htmlFor="email" className='mb-0.5 font-medium text-gray-700'>Email</label>
            <input
              id="email"
              type="email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2"
              {...register("email", { required: "O email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }})}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          </div>
          
          
            <div className='flex flex-col mb-0.5'>
              <label htmlFor="rua" className='mb-0.5 font-medium text-gray-700'>Rua</label>
              <input 
                id="rua"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("rua", { required: "A rua é obrigatória" })}
              />
              {errors.rua && <p style={{ color: 'red' }}>{errors.rua.message}</p>}
            </div>
            
            <div className='flex flex-col mb-0.5'>
              <label htmlFor="numero" className='mb-0.5 font-medium text-gray-700'>Número</label>
              <input 
                id="numero"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("numero", { 
                  required: "O número é obrigatório",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "O campo deve conter apenas números"
                  }
                })}
              />
              {errors.numero && <p style={{ color: 'red' }}>{errors.numero.message}</p>}
            </div>
          
            <div className='flex flex-col mb-0.5'>
              <label htmlFor="complemento" className='mb-0.5 font-medium text-gray-700'>Complemento (Opcional)</label>
              <input 
                id="complemento"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("complemento")} 
              />
            </div>

            <div className='flex flex-col mb-0.5'>
              <label htmlFor="bairro" className='mb-0.5 font-medium text-gray-700'>Bairro</label>
              <input 
                id="bairro"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("bairro", { required: "O bairro é obrigatório" })}
              />
              {errors.bairro && <p style={{ color: 'red' }}>{errors.bairro.message}</p>}
            </div>

            <div className='flex flex-col mb-0.5'>
              <label htmlFor="cidade" className='mb-0.5 font-medium text-gray-700'>Cidade</label>
              <input 
                id="cidade"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("cidade", { required: "A cidade é obrigatória" })}
              />
              {errors.cidade && <p style={{ color: 'red' }}>{errors.cidade.message}</p>}
            </div>

            <div className='flex flex-col mb-0.5'>
              <label htmlFor="cep" className='mb-0.5 font-medium text-gray-700'>CEP</label>
              <input 
                id="cep"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
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
          </div>
        </fieldset>

        <fieldset className='space-y-6 [&_input]:text-black'>
          <legend className='mb-1 font-medium text-gray-700'>
            <h3 className="text-xl">Dados de Pagamento</h3>
          </legend>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3'>
            <div className='flex flex-col mb-0.5'>
              <label htmlFor="cartaoNome" className='mb-0.5 font-medium text-gray-700'>Nome no Cartão</label>
              <input 
                id="cartaoNome"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("cartaoNome", { required: "O nome no cartão é obrigatório" })}
              />
              {errors.cartaoNome && <p style={{ color: 'red' }}>{errors.cartaoNome.message}</p>}
            </div>

            <div className='flex flex-col mb-0.5'>
              <label htmlFor="cartaoNumero" className='mb-0.5 font-medium text-gray-700'>Número do Cartão</label>
              <input
                id="cartaoNumero"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("cartaoNumero", { required: "O número do cartão é obrigatório", minLength: { value: 16, message: "Deve ter 16 dígitos" }, maxLength: { value: 16, message: "Deve ter 16 dígitos" } })}
              />
              {errors.cartaoNumero && <p style={{ color: 'red' }}>{errors.cartaoNumero.message}</p>}
            </div>

            <div className='flex flex-col mb-0.5'>
              <label htmlFor="cartaoValidade" className='mb-0.5 font-medium text-gray-700'>Validade (MM/AA)</label>
              <input
                id="cartaoValidade"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("cartaoValidade", { required: "A validade é obrigatória", pattern: { value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/, message: "Formato MM/AA inválido" }})}
              />
              {errors.cartaoValidade && <p style={{ color: 'red' }}>{errors.cartaoValidade.message}</p>}
            </div>

            <div className='flex flex-col mb-0.5'>
              <label htmlFor="cartaoCVC" className='mb-0.5 font-medium text-gray-700'>CVC</label>
              <input
                id="cartaoCVC"
                className="p-3 border rounded-md focus:outline-none focus:ring-2"
                {...register("cartaoCVC", { required: "O CVC é obrigatório", minLength: { value: 3, message: "Deve ter 3 dígitos" }, maxLength: { value: 3, message: "Deve ter 3 dígitos" } })}
              />
              {errors.cartaoCVC && <p style={{ color: 'red' }}>{errors.cartaoCVC.message}</p>}
            </div>
          </div>
        </fieldset>
        <div className="flex flex-col">
          <button type="submit" className="text-white bg-green-500 hover:bg-green-600 font-bold p-3 rounded-md">Finalizar Compra</button>
        </div>
      </form>
      </section>
    </main>
  );
};

export default FinalizarCompra;