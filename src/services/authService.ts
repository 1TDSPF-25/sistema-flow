const VITE_API_URL_BASE_USUARIOS = import.meta.env.VITE_API_URL_BASE_USUARIOS;

export async function login({ email, senha }: { email: string; senha: string }) {
  try {
    const response = await fetch(`${VITE_API_URL_BASE_USUARIOS}?email=${email}`);
    const data = await response.json();

    if (data.length > 0) { 
      if (data[0].senha !== senha) {
        return { autenticado: false, erro: "Senha incorreta" };
      }

      const usuario = data[0];
      const token = btoa(`${email}:${Date.now()}`);

      localStorage.setItem('auth_token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario)); 
      return { autenticado: true };
    }

    return { autenticado: false, erro: "Email inválido" };
  } catch {
    return { autenticado: false, erro: "Erro ao buscar dados no servidor" };
  }
}

export function logout() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('usuario');
}