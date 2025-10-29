import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Spinner from "./components/Spinner/Spinner";
 
export default function App(){
 
  return(
    <div className="container">
      <Cabecalho />
      {
       
      }
      <Suspense fallback={<Spinner/>}>
        <Outlet/>
      </Suspense>
      <Rodape/>
    </div>
  );
}

