import { useParams, Link } from "react-router-dom";
import proyectosData from "../data/proyectosData";

const ProyectoDetalle = () => {
  const { id } = useParams();
  const proyecto = proyectosData.find(p => p.id === id);

  if (!proyecto) {
    return <div className="p-10 text-center text-red-600">Proyecto no encontrado</div>;
  }

  const otros = proyectosData.filter(p => p.id !== id);

  return (
    <div className="pt-24 px-6 pb-12 bg-gray-50 min-h-screen">
      {/* Banner */}
      {proyecto.imagenBanner && (
        <div className="w-full h-64 bg-cover bg-center rounded-lg mb-8 shadow"
          style={{ backgroundImage: `url(${proyecto.imagenBanner})` }}
        />
      )}

      {/* Contenido */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <p className="text-sm text-gray-400 mb-2">
          {proyecto.fecha} · Actualizado {proyecto.actualizado}
        </p>
        <h1 className="text-3xl font-bold mb-4">{proyecto.titulo}</h1>
        <p className="mb-4 whitespace-pre-line">{proyecto.descripcion}</p>

        {proyecto.tecnologias && (
          <p className="mb-4 text-sm text-gray-700">
            <strong>Tecnologías:</strong> {proyecto.tecnologias.join(", ")}
          </p>
        )}

        {proyecto.github && (
          <p className="mb-4">
            <a
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Ver repositorio en GitHub
            </a>
          </p>
        )}

        {/* Galería */}
        {proyecto.imagenes.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {proyecto.imagenes.map((img, idx) => (
              <img key={idx} src={img} alt={`Captura ${idx}`} className="rounded shadow" />
            ))}
          </div>
        )}
      </div>

      {/* Otros proyectos */}
      {otros.length > 0 && (
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-4">Otros proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otros.map(proy => (
              <Link key={proy.id} to={`/proyecto/${proy.id}`} className="group">
                <div className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition">
                  {proy.imagenBanner && (
                    <img
                      src={proy.imagenBanner}
                      alt={proy.titulo}
                      className="h-32 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-blue-600">{proy.titulo}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectoDetalle;