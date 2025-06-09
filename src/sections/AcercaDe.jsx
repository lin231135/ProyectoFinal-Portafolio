import { FaBullseye, FaUsers, FaHandshake, FaLightbulb } from "react-icons/fa";
import montania from "../assets/montaña.avif";

const fortalezas = [
  {
    icon: <FaBullseye className="text-blue-500 text-3xl mb-2" />,
    titulo: "Metas",
    descripcion:
      "Actualmente estoy cursando el tercer año de la carrera de Ingeniería en Sistemas. Mi meta es graduarme y fundar mi propia empresa de desarrollo web.",
  },
  {
    icon: <FaLightbulb className="text-blue-500 text-3xl mb-2" />,
    titulo: "Proyecto de Formación",
    descripcion:
      "El realizar proyectos fuera de mis estudios es algo de lo que me apasiona y como principal proyecto tengo el de realizar la mayor cantidad de diplomados relacionados con la programación durante el transcurso de mi carrera.",
  },
  {
    icon: <FaHandshake className="text-blue-500 text-3xl mb-2" />,
    titulo: "Compromiso",
    descripcion:
      "Me considero una persona que se compromete en todos los aspectos con cada proyecto que me propongo por lo que lo considero como mis principales puntos fuertes.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-3xl mb-2" />,
    titulo: "Trabajo en Equipo",
    descripcion:
      "El trabajo en equipo es algo a lo que le doy especial valor a la hora de realizar proyectos de desarrollo por lo que he trabajado mucho en pulir mis habilidades para trabajar en equipo de la mejor manera posible.",
  },
];

const AcercaDe = () => {
  return (
    <section id="acercade" className="flex flex-col lg:flex-row items-stretch bg-white">
      {/* Imagen con Título */}
      <div className="relative w-full lg:w-1/2 h-80 lg:h-[520px]">
        <img src={montania} alt="Montaña" className="w-full h-full object-cover" />
        <h2 className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-black bg-white/60 text-center px-4">
          Mis Puntos<br />Fuertes
        </h2>
      </div>

      {/* Tarjetas a la derecha */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 place-items-center">
        {fortalezas.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 w-full max-w-xs"
          >
            {item.icon}
            <h3 className="font-semibold text-blue-600 mb-2">{item.titulo}</h3>
            <p className="text-gray-700 text-sm">{item.descripcion}</p>
            <div className="mt-4 h-1 w-10 bg-blue-500 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcercaDe;