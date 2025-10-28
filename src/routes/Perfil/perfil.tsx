
export default function Perfil() {
  const usuarioLogado = {
    nome: "João Victor",
    email: "joaovictor@email.com",
    avatar: "https://i.pravatar.cc/150?img=32",
  };
    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8 text-center">
        {/* Avatar */}
        <img
          src={usuarioLogado.avatar}
          alt="Avatar do usuário"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-600 shadow-sm"
        />
        {/* Nome */}
        <h1 className="text-2xl font-bold text-gray-800 mt-4">{usuarioLogado.nome}</h1>
        {/* Email */}
        <p className="text-gray-600 mt-2">{usuarioLogado.email}</p>  

        {/* Botão de editar (futuro) */}
        <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-xl shadow-sm transition-all">
          Editar Perfil
        </button>
      </div>
    </div>
  );
}
        
