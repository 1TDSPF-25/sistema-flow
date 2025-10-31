import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./globals.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './routes/Error/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Carrinho from './routes/Carrinho/index.tsx';
import Login from './routes/Login/index.tsx';
 
const Home = lazy(() => import('./routes/Home/index.tsx'));
const Produtos = lazy(() => import('./routes/Produtos/index.tsx'));
const EditarProdutos = lazy(() => import('./routes/EditarProdutos/index.tsx'));
const CadastroFarmacia = lazy(() => import('./routes/Cadastro/index.tsx'));
const TipoCompra = lazy(() => import('./routes/FinalizarCompra/index.tsx'));
const Faq = lazy(() => import('./routes/Faq/index.tsx'));
const Perfil = lazy(() => import('./routes/Perfil/perfil.tsx'));
const Integrantes = lazy(() => import('./routes/Integrantes/integrantes.tsx'));

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
      { path: "/carrinho", element: <Carrinho /> },
      { path: "/editar/produtos/:id", element: rotaLimitada(<EditarProdutos />) },
      { path: "/finalizar-compra", element: rotaLimitada(<TipoCompra />) },
      { path: "/faq", element: <Faq /> },
      { path: "/contato", element: <Contato />},
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/perfil", element: rotaLimitada(<Perfil />) }
      
    ]
    }
  ], {basename: '/sistema-flow/'});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* Suspense aqui garante loading pros imports dinâmicos */}
    <Suspense fallback={<div>Carregando…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)