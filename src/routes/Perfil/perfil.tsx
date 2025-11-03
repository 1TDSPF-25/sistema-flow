import { useEffect, useState } from "react";

export default function Perfil() {
  const [usuarioLogado, setUsuarioLogado] = useState({
    nome: "",
    email: "",
    avatar: "https://cdn-icons-png.flaticon.com/512/4433/4433850.png",
  });

  useEffect(() => {
    // Busca o usuário salvo no login
    const usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {
      const dados = JSON.parse(usuarioSalvo);
      setUsuarioLogado((prev) => ({
        ...prev,
        nome: dados.nome || "Usuário",
        email: dados.email || "email@desconhecido.com",
      }));
    }
  }, []);

     return (
    <main className=" from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <section className="bg-white rounded-2xl shadow-xl w-full max-w-md p-9 text-center transform transition hover:scale-[1.02]">
        {/* Avatar */}
        <img
          src={usuarioLogado.avatar}
          alt="Avatar do usuário"
          className="w-35 h-35 rounded-full mx-auto border-4 border-blue-600 shadow-md"
        />

        {/* Nome */}
        <h1 className="text-3xl font-bold text-gray-800 mt-6">
          {usuarioLogado.nome}
        </h1>

        {/* Email */}
        <p className="text-gray-600 mt-2 text-lg">{usuarioLogado.email}</p>

        {/* Divisor */}
        <div className="w-16 h-[2px] mx-auto my-6 rounded-full"></div>

        {/* Botão de editar */}
        <button className="bg-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-md transition-all">
          Editar Perfil
        </button>
      </section>
    </main>
  );
}
        
