import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-blue-900 w-full">
      <ul className="w-full flex gap-2 md:gap-6 justify-center text-white font-medium items-center">
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
