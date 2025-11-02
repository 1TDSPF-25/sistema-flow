import { useForm, type SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import type { tipoUsuario } from '../../types/tipoUsuario'
import { login } from '../../services/authService'
const VITE_API_URL_BASE_USUARIOS = import.meta.env.VITE_API_URL_BASE_USUARIOS

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MensagemErro = ({ error }: { error: any }) => {
  return error ? <p className='text-red-500 text-sm mt-1'>{error.message}</p> : null
}

function CadastroFarmacia() {
  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<tipoUsuario>({ shouldUnregister: true })

  const watchEmail = watch('email')
  const watchSenha = watch('senha')

  const onSubmit: SubmitHandler<tipoUsuario> = async data => {
    try {
      const response = await fetch(VITE_API_URL_BASE_USUARIOS)
      const dataUsuario = await response.json()

      const emailExiste = dataUsuario.some(
        (p: tipoUsuario) => p.email === data.email
      )
      const usuarioExiste = dataUsuario.some(
        (p: tipoUsuario) => p.nomeUser === data.nome  
      )

      if (emailExiste) {
        setError('email', { type: 'manual', message: 'Email já cadastrado' })
        return;
      }

      if (usuarioExiste) {
        setError('nome', { type: 'manual', message: 'Nome de usuario ja cadastrado' })
        return;
      }

      const postResponse = await fetch(VITE_API_URL_BASE_USUARIOS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!postResponse.ok) {
        alert("Erro ao cadastrar. Tente novamente.");
        return;
      }
      const resultado = await login({ email: data.email, senha: data.senha });
      if (resultado.autenticado) {
        navigate('/'); 
      } else {
        alert(resultado.erro);
      }
    } catch {
      alert("Erro inesperado. Tente novamente.");
    }
  };

  return (
    <main className='min-h-screen flex items-center justify-center p-4'>
      <section className='bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl'>
        
        {/* Título e Subtítulo */}
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold text-gray-800'>Cadastrar Farmácia</h1>
          <p className='text-gray-500 mt-1'>Crie o perfil da sua Farmácia no portal.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <fieldset className='space-y-6 [&_input]:text-black'>
            
            {/*Nome e CPF*/}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              
              {/* Campo NOME */}
              <div className='flex flex-col'>
                <label htmlFor='idNome' className='mb-1 font-medium text-gray-700'>Nome Completo</label>
                <input
                  type='text'
                  id='idNome'
                  placeholder='Nome completo da farmácia/responsável'
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${errors.nome ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  {...register('nome', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/, // RegEx: Letras e espaços, 3+ caracteres
                      message: 'Apenas letras e no mínimo 3 caracteres',
                    },
                  })}
                />
                
                <MensagemErro error={errors.nome} />
              </div>

              {/* Campo CPF*/}
              <div className='flex flex-col'>
                <label htmlFor='idCpf' className='mb-1 font-medium text-gray-700'>CPF</label>
                <input
                  type='text'
                  id='idCpf'
                  inputMode='numeric'
                  placeholder='Apenas 11 dígitos numéricos'
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${errors.cpf ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  {...register('cpf', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^\d{11}$/, // RegEx: Exatamente 11 dígitos numéricos
                      message: 'Apenas 11 números, sem pontos ou traços',
                    },
                  })}
                />
                <MensagemErro error={errors.cpf} />
              </div>
            </div>

            {/* Linha 2: Email e Confirmação de Email */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col'>
                <label htmlFor='idEmail' className='mb-1 font-medium text-gray-700'>Email</label>
                <input
                  type='email'
                  id='idEmail'
                  placeholder='Ex: seu.email@dominio.com'
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  {...register('email', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // RegEx: Validação básica de email
                      message: 'Formato de email inválido',
                    },
                  })}
                />
                <MensagemErro error={errors.email} />
              </div>

              {/* Campo CONFIRMAR EMAIL */}
              <div className='flex flex-col'>
                <label htmlFor='idConfirmarEmail' className='mb-1 font-medium text-gray-700'>Confirmar Email</label>
                <input
                  type='email'
                  id='idConfirmarEmail'
                  placeholder='Repita o email acima'
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${errors.confirmarEmail ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  {...register('confirmarEmail', {
                    required: 'Campo obrigatório',
                    validate: (valor) => {
                      return valor === watchEmail || 'Emails não correspondem' // Validação customizada com watch - assistido
                    },
                  })}
                />
                <MensagemErro error={errors.confirmarEmail} />
              </div>
            </div>

            {/* Linha 3: Senha e Confirmação de Senha (Sessão Simplificada) */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col'>
                <label htmlFor='idSenha' className='mb-1 font-medium text-gray-700'>Senha</label>
                <input
                  type='password' 
                  id='idSenha'
                  placeholder='Mínimo de 6 caracteres'
                  className={`p-3 w-full border rounded-md focus:outline-none focus:ring-2 ${errors.senha ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  {...register('senha', {
                    required: 'Campo obrigatório',
                    minLength: {
                      value: 6,
                      message: 'Informe no mínimo 6 caracteres',
                    },
                  })}
                />
                <MensagemErro error={errors.senha} />
              </div>

              {/* Campo CONFIRMAR SENHA */}
              <div className='flex flex-col'>
                <label htmlFor='idSenhaConfirmada' className='mb-1 font-medium text-gray-700'>Confirmar Senha</label>
                <input
                  type='password' 
                  id='idSenhaConfirmada'
                  placeholder='Repita a senha acima'
                  className={`p-3 w-full border rounded-md focus:outline-none focus:ring-2 ${errors.confirmarSenha ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  {...register('confirmarSenha', {
                    required: 'Campo obrigatório',
                    validate: (valor) => {
                      return valor === watchSenha || 'Senhas não correspondem' // Validação customizada
                    },
                  })}
                />
                <MensagemErro error={errors.confirmarSenha} />
              </div>
            </div>

            {/* Termos de Uso */}
            <p className='mt-4 text-sm text-gray-600'>
              Ao criar um perfil, você concorda com os{' '}
              <Link to='/' className='font-semibold text-blue-600 hover:text-blue-800'>
                Termos de Uso
              </Link>
              .
            </p>
          </fieldset>
          
          {/* Botão de Submissão */}
          <button 
            type='submit' 
            className='w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300 mt-6'
          >
            Cadastrar Farmácia
          </button>
        </form>

        {/* Link para login */}
        <p className='text-center mt-6 text-gray-600'>
          Já tem um perfil?{' '}
          <Link to='/login' className='text-blue-600 font-medium hover:text-blue-800'>
            Entrar
          </Link>
        </p>
      </section>
    </main>
  )
}

export default CadastroFarmacia;  