import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./globals.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';
import CadastroFarmacia from './routes/Cadastro/index.tsx';
import LoginFarmacia from './routes/Login/index.tsx';
import TipoCompra from './routes/FinalizarCompra/index.tsx';
import Contato from './routes/Contato/index.tsx';

export function rotaLimitada(elemento: React.ReactElement) {
  return localStorage.getItem('token') ? elemento : <Home />
}

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginFarmacia /> },
      { path: "/cadastro", element: <CadastroFarmacia /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/produto/:id", element: <Produtos /> },
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
      { path: "/finalizar-compra", element: <TipoCompra /> },
      { path: "/contato", element: <Contato />}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
