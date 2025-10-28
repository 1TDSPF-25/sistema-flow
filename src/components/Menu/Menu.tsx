import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-blue-900 w-full">
      <ul className="w-full flex gap-2 md:gap-6 justify-center text-white font-medium items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white"
                : "text-gray-200 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="produtos"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white"
                : "text-gray-200 hover:text-white"
            }
          >
            Produtos 
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/carrinho"
          className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white"
                : "text-gray-200 hover:text-white"
            }
          >
          
          
            🛒 Carrinho
          </NavLink>
        </li>
        <li><NavLink 
        to="faq"
        >
          
        Faq</NavLink></li>
      </ul>
    </nav>
  );
}
