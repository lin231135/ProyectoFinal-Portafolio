import Banner from "../assets/Backend.png";
import Calculadora from "../assets/calculadora.jpeg";
import storeops from "../assets/storeops.jpg";
import cssOnly from "../assets/cssOnly.png";



const proyectosData = [
  {
    id: "backendonly",
    titulo: "Series Tracker Backend",
    fecha: "2024",
    actualizado: "2024",
    descripcion: `Desarrollo completo del backend para una app de gestión de series (TV o anime). 
Incluye la creación de endpoints RESTful, manejo de CORS, despliegue con Docker, documentación con Swagger y conexión a un frontend existente. 
Se añadieron endpoints personalizados como upvote, downvote y manejo de episodios.`,
    tecnologias: ["Go", "Docker", "REST", "PostgreSQL"],
    github: "https://github.com/lin231135/Lab6-Backendonly",
    imagenBanner: Banner,
    imagenes: [],
  },
  {
    id: "calculadora",
    titulo: "Calculadora",
    fecha: "2024",
    actualizado: "2024",
    descripcion: `Calculadora web hecha en TypeScript enfocada en lógica de componentes, testing y buenas prácticas de linting. 
Incluye operaciones básicas, decimales, validación de errores visuales (como límites de caracteres) y funcionalidades como "+/-" y módulo. 
Cuenta con historias de Storybook, pruebas automatizadas y reglas personalizadas de código.`,
    tecnologias: ["TypeScript", "Bun", "React", "Storybook", "Testing"],
    github: "https://github.com/lin231135/Proyecto1-Calculadora.git",
    imagenBanner: Calculadora,
    imagenes: [],
  },
  {
    id: "storeops",
    titulo: "StoreOps",
    fecha: "2024",
    actualizado: "2024",
    descripcion: `Sistema completo para la gestión empresarial: inventario, ventas, autenticación, empleados y más.
Se desarrolló un frontend moderno y un backend RESTful con seguridad mediante JWT. Arquitectura modular y uso de ORM para la base de datos.`,
    tecnologias: ["React", "Node.js", "JWT", "PostgreSQL", "Docker"],
    github: "https://github.com/lin231135/store-ops-frontend",
    githubBackend: "https://github.com/lin231135/store-ops-backend",
    imagenBanner: storeops,
    imagenes: [],
  },
  {
    id: "lab4-css-only",
    titulo: "CSS Only Image Reproduction",
    fecha: "2024",
    actualizado: "2024",
    descripcion: `Dibujo digital hecho únicamente con HTML y CSS, sin usar JavaScript ni box-shadow. 
Se eligió una imagen de referencia y se replicó con posicionamiento, pseudoelementos y selectores avanzados. 
El desafío se centró en lograr precisión visual con solo un elemento HTML.`,
    tecnologias: ["HTML", "CSS puro"],
    github: "https://github.com/lin231135/Lab4-CSS-only",
    imagenBanner: cssOnly,
    imagenes: [],
  },
];

export default proyectosData;