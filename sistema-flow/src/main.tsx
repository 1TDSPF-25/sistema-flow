import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./globals.css";

<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
=======
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
>>>>>>> feature/adicionando-api-bolsa
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';
<<<<<<< HEAD
import CadastroFarmacia from './routes/Cadastro/index.tsx';
import LoginFarmacia from './routes/Login/index.tsx';

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
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
=======

const router = createBrowserRouter([
  {path:"/", element: <App/>, errorElement:<Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/produtos", element: <Produtos/>},
    {path:"/editar/produtos/:id", element: <EditarProdutos/>},
  ]}
]); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
>>>>>>> feature/adicionando-api-bolsa
  </StrictMode>,
)
