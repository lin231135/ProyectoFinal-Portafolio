import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center gap-8 py-4 text-sm font-medium text-gray-800">
        <li>
          {isHome ? (
            <ScrollLink to="inicio" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Inicio
            </ScrollLink>
          ) : (
            <RouterLink to="/" className="hover:text-blue-600">Inicio</RouterLink>
          )}
        </li>
        <li>
          <RouterLink to="/acercade" className="hover:text-blue-600">Acerca de mí</RouterLink>
        </li>
        <li>
          {isHome ? (
            <ScrollLink to="proyectos" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Proyectos
            </ScrollLink>
          ) : (
            <RouterLink to="/" className="hover:text-blue-600">Proyectos</RouterLink>
          )}
        </li>
        <li>
          <RouterLink to="/contacto" className="hover:text-blue-600">Contacto</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;