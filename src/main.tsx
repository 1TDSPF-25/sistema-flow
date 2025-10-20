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
import Login from './routes/Login/index.tsx';
import TipoCompra from './routes/FinalizarCompra/index.tsx';

export function rotaLimitada(elemento: React.ReactElement) {
  return localStorage.getItem('token') ? elemento : <Login />
}

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      { path: "/login", element:<Login /> },
      { path: "/cadastro", element:<CadastroFarmacia /> },
      { path: "/produtos", element:<Produtos /> },
      { path: "/produto/:id", element:<Produtos /> },
      { path: "/editar/produtos/:id", element:rotaLimitada(<EditarProdutos />) },
      { path: "/finalizar-compra", element:rotaLimitada (<TipoCompra />) }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
