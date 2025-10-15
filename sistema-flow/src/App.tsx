import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App(){

  return(
    <div className="container">
      <Cabecalho  />
      <SearchBar/>
      <Outlet/>
      <Rodape/>
    </div>
  );
}