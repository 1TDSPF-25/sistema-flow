import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Perfil from "./routes/Perfil/perfil.tsx";
 
export default function App(){
 
  return(
    <div className="container">
      <Cabecalho />
      {
       
      }
      <Suspense fallback={<h2>Carregando.......</h2>}>
        <Outlet/>
        <Perfil />
      </Suspense>
      <Rodape/>
    </div>
  );
}