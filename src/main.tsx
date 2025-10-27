import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./globals.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './routes/Error/index.tsx';
import CadastroFarmacia from './routes/Cadastro/index.tsx';
import LoginFarmacia from './routes/Login/index.tsx';
import TipoCompra from './routes/FinalizarCompra/index.tsx';
import Contato from './routes/Contato/index.tsx';

export function rotaLimitada(elemento: React.ReactElement) {
  return localStorage.getItem('auth_token') ? elemento : <Login />;
}
 
const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },      
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <CadastroFarmacia /> }, 
      { path: "/produtos", element: <Produtos /> },
      { path: "/produto/:id", element: <Produtos /> },
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
      { path: "/finalizar-compra", element: <TipoCompra /> },
      { path: "/contato", element: <Contato />}
    ]
    }
  ], {basename: '/sistema-flow/'});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* Suspense aqui garante loading pros imports dinâmicos */}
    <Suspense fallback={<div>Carregando…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)