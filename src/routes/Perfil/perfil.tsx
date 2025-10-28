
export default function Perfil() {
  const usuario = {
    nome: "João Victor",
    email: "joaovictor@email.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    cidade: "São Paulo, SP",
    cargo: "Desenvolvedor Front-End",
    sobre:
      "Apaixonado por tecnologia, esportes e desenvolvimento web. Sempre buscando aprender mais e criar projetos que façam a diferença.",
  };
    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8 text-center">
        {/* Avatar */}
        <img
          src={usuario.avatar}
          alt="Avatar do usuário"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-600 shadow-sm"
        />

        {/* Nome e cargo */}
        <h2 className="text-2xl font-bold mt-4 text-gray-800">{usuario.nome}</h2>
        <p className="text-blue-700 font-medium">{usuario.cargo}</p>

        
