import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { tipoUsuario } from "../../types/tipoUsuario";
import { login } from "../../services/authService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MensagemErro = ({ error }: { error: any }) => {
  return error ? (
    <p className="text-red-500 text-sm mt-1">{error.message}</p>
  ) : null;
};

function LoginFarmacia() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tipoUsuario>({ shouldUnregister: true });

  const onSubmit: SubmitHandler<tipoUsuario> = async (data) => {
    const resultado = await login({ email: data.email, senha: data.senha });  // Corrigido: passa email e senha
    
    if (resultado.autenticado) {
      // 🔹 Passo 1 — salvar token e dados do usuário
      const usuarioLogado = {
        token: resultado.token || "123456789", // usa o da API se tiver
        nome: resultado.nome || "João Victor",
        email: data.email,
      
      };

      localStorage.setItem("auth_token", usuarioLogado.token);
      localStorage.setItem("usuario", JSON.stringify(usuarioLogado));

      // Redireciona para o perfil
      navigate("/perfil");
    } else {
      alert(resultado.erro);
    }
  };
  useEffect(() => {
    document.title = "FarmáciaPlus - Login";
  }, []);
  
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Card do Formulário*/}
      <section className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        {/* Título e Subtítulo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Acesso ao Portal</h1>
          <p className="text-gray-500 mt-1">
            Entre com suas credenciais da Farmácia.
          </p>
        </div>

        {/* Formulário: espaçamento vertical uniforme */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <fieldset className="space-y-6 [&_input]:text-black">
            {/* Campo EMAIL */}
            <div className="flex flex-col">
              <label
                htmlFor="idEmail"
                className="mb-1 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="idEmail"
                placeholder="Seu email cadastrado"
                className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // RegEx: Validação básica de email
                    message: "Formato de email inválido",
                  },
                })}
              />
              <MensagemErro error={errors.email} />
            </div>

            {/* Campo SENHA */}
            <div className="flex flex-col">
              <label
                htmlFor="idSenha"
                className="mb-1 font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="idSenha"
                placeholder="Sua senha"
                className={`p-3 w-full border rounded-md focus:outline-none focus:ring-2 ${
                  errors.senha
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter no mínimo 6 caracteres",
                  },
                })}
              />
              <MensagemErro error={errors.senha} />
            </div>
          </fieldset>

          {/* Link de Esqueci Minha Senha */}
          <div className="text-right">
            <Link
              to="/recuperar-senha"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Esqueceu a senha?
            </Link>
          </div>

          {/* Botão de Submissão */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300 mt-6"
          >
            Entrar
          </button>
        </form>

        {/* Link para Cadastro */}
        <p className="text-center mt-6 text-gray-600">
          Não tem uma conta?{" "}
          <Link
            to="/cadastro"
            className="text-blue-600 font-medium hover:text-blue-800"
          >
            Criar Perfil da Farmácia
          </Link>
        </p>
      </section>
    </main>
  );
}

export default LoginFarmacia; 