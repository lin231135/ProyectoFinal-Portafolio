import ProyectoCard from "../components/ProyectoCard";
import proyectosData from "../data/proyectosData";

const Proyectos = () => {
  return (
    <section id="proyectos" className="pt-24 px-6 pb-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {proyectosData.map(proy => (
          <ProyectoCard
            key={proy.id}
            id={proy.id}
            titulo={proy.titulo}
            imagen={proy.imagenBanner}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;