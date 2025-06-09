import { Link } from "react-router-dom";

const ProyectoCard = ({ id, titulo, imagen, vistas, comentarios, favoritos }) => {
  return (
    <Link to={`/proyecto/${id}`} className="w-full max-w-xs">
      <div className="relative h-60 rounded overflow-hidden shadow-lg group cursor-pointer">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col justify-end p-4 text-white">
          <h3 className="font-semibold text-lg mb-1">{titulo}</h3>
          {/* Iconos opcionales si quieres agregar después */}
        </div>
      </div>
    </Link>
  );
};

export default ProyectoCard;