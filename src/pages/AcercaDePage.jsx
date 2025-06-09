import Navbar from "../components/Navbar";
import { FaUser, FaGraduationCap, FaLaptopCode, FaUsers } from "react-icons/fa";
import Contacto from "../sections/Contacto";

const datos = [
  {
    icono: <FaUser className="text-white text-3xl" />,
    titulo: "Datos Personales",
    contenido: [
      "Nombre: Javier Alexander Linares Chang",
      "Edad: 21 años",
      "Ocupación: Estudiante",
      "Teléfono: 8888-8888",
      "Dirección: Zona 19, La Florida, Guatemala",
      "Email: lin231135@uvg.edu.gt",
    ],
  },
  {
    icono: <FaGraduationCap className="text-white text-3xl" />,
    titulo: "Formación académica",
    contenido: [
      "Educación primaria (2011–2016): Colegio Nuestra Señora de Montserrat",
      "Educación básica (2017–2019): Instituto Emiliani Somosac",
      "Diversificado - Perito en Informática (2020–2022): Centro Educativo Laboral Kinal",
      "Universidad (2023–Actualidad): 3er año de Ingeniería en Ciencias de la Computación : UVG",
    ],
  },
  {
    icono: <FaLaptopCode className="text-white text-3xl" />,
    titulo: "Habilidades Técnicas",
    contenido: [
      "HTML & CSS",
      "Java & Java EE",
      "JavaScript",
      "React",
      "TypeScript",
      "Angular",
      "NodeJS",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Git & GitHub",
      "Bun",
      "Vite",
      "Tailwind CSS",
      "Pruebas con Vitest / Jest",
      "Linting (Standard JS / ESLint)",
    ],
  },
  {
    icono: <FaUsers className="text-white text-3xl" />,
    titulo: "Cursos y Diplomados",
    contenido: [
      "2019 | Diplomado en Soporte Técnico",
      "2020 | It Essential",
      "2020 | CCNA",
      "2020 | CCNA2",
    ],
  },
];

const AcercaDePage = () => {
  return (
    <>
      <Navbar />

      <section className="pt-24 bg-gradient-to-r from-white to-gray-100 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold">Javier Alexander Linares Chang</h1>
          <p className="text-gray-700 text-lg">Estudiante informático</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {datos.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row bg-white rounded-lg shadow border overflow-hidden">
              <div className="bg-blue-600 flex items-center justify-center sm:w-24 w-full sm:h-auto h-24">
                {item.icono}
              </div>
              <div className="p-6 flex-1">
                <h2 className="font-semibold mb-2">{item.titulo}</h2>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {item.contenido.map((linea, idx) => (
                    <li key={idx}>{linea}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contacto />
    </>
  );
};

export default AcercaDePage;