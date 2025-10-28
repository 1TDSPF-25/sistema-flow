import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-blue-900 w-full">
      <ul className="w-full flex gap-2 md:gap-6 justify-center text-white font-medium items-center">
        <li>
          <NavLink
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="produtos"
          >
            Produtos 
          </NavLink>
        </li>
        <li>
          <NavLink to="carrinho">
            🛒 Carrinho
          </NavLink>
        </li>
        <li><NavLink to="faq">Faq</NavLink></li>
      </ul>
    </nav>
  );
}
