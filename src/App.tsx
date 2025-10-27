import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import { useTheme } from "./components/context/useTheme";
 
export default function App(){

     //Utilizando o Thema para recuperar os dados do Context
     const{ isDark } = useTheme();

  return(
    <div className={`container ${isDark ? "dark-mode" : "light-mode"}`}>
      <Cabecalho />
      {
       
      }
      <Suspense fallback={<h2>Carregando.......</h2>}>
        <Outlet/>
      </Suspense>
      <Rodape/>
    </div>
  );
}