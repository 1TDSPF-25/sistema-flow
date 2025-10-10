export async function login ({nomeUser, senha}:{nomeUser:string, senha:string}) {
  try {
    const response = await fetch(`http://localhost:3001/usuarios?nomeUser=${nomeUser}`);
    const data = await response.json();
 
    if (data.lenght > 0) {
      if (data.senha != senha) {
        return {autenticado: false, erro: "Senha incorreta"}
      }
 
      const usuario = data[0];
      const token = btoa(`${nomeUser}:${Date.now()}`);
 
      localStorage.setItem('auth_token', token);
      localStorage.setItem('usuario', usuario);
      return {autenticado: true};
    }
   
    return {autenticado: false, erro: "Nome de usuário inválido"};
 
  } catch {
    return {autenticado: false, erro: "Erro ao buscar dados no servidor"};
  }
}