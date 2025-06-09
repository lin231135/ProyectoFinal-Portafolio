import java from "../assets/java.png";
import javaee from "../assets/javaee.png";
import mysql from "../assets/mysql.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import angular from "../assets/angular.png";

import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import postgresql from "../assets/postgresql.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import bun from "../assets/bun.png";
import vite from "../assets/vite.png";
import tailwind from "../assets/tailwind.png";


const habilidades = [
  {
    img: java,
    nombre: "Java",
    descripcion: "Lenguaje de Programación",
    porcentaje: 75,
  },
  {
    img: javaee,
    nombre: "Java EE",
    descripcion: "Plataforma de Programación",
    porcentaje: 75,
  },
  {
    img: mysql,
    nombre: "MySQL",
    descripcion: "Gestor de Bases de Datos",
    porcentaje: 85,
  },
  {
    img: html,
    nombre: "HTML",
    descripcion: "Lenguaje de Marcado",
    porcentaje: 90,
  },
  {
    img: css,
    nombre: "CSS",
    descripcion: "Lenguaje de Diseño Gráfico",
    porcentaje: 95,
  },
  {
    img: js,
    nombre: "JavaScript",
    descripcion: "Lenguaje de Programación Interpretado",
    porcentaje: 95,
  },
  {
    img: nodejs,
    nombre: "NodeJS",
    descripcion: "Entorno de Ejecución",
    porcentaje: 80,
  },
  {
    img: mongodb,
    nombre: "MongoDB",
    descripcion: "Sistema de Base de Datos NoSQL",
    porcentaje: 70,
  },
  {
    img: angular,
    nombre: "Angular",
    descripcion: "Framework",
    porcentaje: 65,
  },

  {
  img: react,
  nombre: "React",
  descripcion: "Librería para Interfaces de Usuario",
  porcentaje: 90,
  },
  {
    img: typescript,
    nombre: "TypeScript",
    descripcion: "Superset de JavaScript Tipado",
    porcentaje: 85,
  },
  {
    img: postgresql,
    nombre: "PostgreSQL",
    descripcion: "Sistema de Gestión de Bases de Datos Relacional",
    porcentaje: 80,
  },
  {
    img: docker,
    nombre: "Docker",
    descripcion: "Contenedores de Aplicaciones",
    porcentaje: 75,
  },
  {
    img: git,
    nombre: "Git & GitHub",
    descripcion: "Control de Versiones y Repositorios",
    porcentaje: 90,
  },
  {
    img: bun,
    nombre: "Bun",
    descripcion: "Runtime moderno para JavaScript",
    porcentaje: 70,
  },
  {
    img: vite,
    nombre: "Vite",
    descripcion: "Herramienta de Bundling Rápida",
    porcentaje: 85,
  },
  {
    img: tailwind,
    nombre: "Tailwind CSS",
    descripcion: "Framework CSS de Utilidades",
    porcentaje: 95,
  },
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="py-16 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Habilidades</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Porcentaje de habilidades, conocimientos y destrezas obtenidos a lo largo de mi carrera como estudiante en informática en los distintos lenguajes, tecnologías y Frameworks del mercado
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {habilidades.map((hab, i) => (
          <div key={i} className="w-full max-w-xs">
            <img src={hab.img} alt={hab.nombre} className="w-20 h-20 mx-auto mb-4 object-contain" />
            <h3 className="font-semibold text-lg">{hab.nombre}</h3>
            <p className="text-gray-500 text-sm">{hab.descripcion}</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-400 h-2 rounded-full"
                style={{ width: `${hab.porcentaje}%` }}
              />
            </div>
            <p className="mt-1 font-medium text-sm text-green-700">{hab.porcentaje}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;