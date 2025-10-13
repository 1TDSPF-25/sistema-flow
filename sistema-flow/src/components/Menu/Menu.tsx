import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function Menu() {
  return (
    <nav className="bg-blue-900 w-full">
      <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-white font-medium items-center">
        <li>
          <Link
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/produtos"
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="/consulta-cep"
          >
            Consultar CEP
          </Link>
        </li>
      </ul>
    </nav>
  );
}
=======
export default function Menu(){

    return(
        <nav>
            <Link to="/">Home </Link>| 
            <Link to="/produtos"> Produtos</Link>
            <Link to="/consulta-cep"> consultar cep</Link>
        </nav>
    );
}
>>>>>>> feature/adicionando-api-bolsa
