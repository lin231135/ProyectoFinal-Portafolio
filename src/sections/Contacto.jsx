import { useRef, useState } from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Contacto = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    fetch("https://formsubmit.co/ajax/lin231135@uvg.edu.gt", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          setMensajeEnviado(true);
          formRef.current.reset();
          setTimeout(() => setMensajeEnviado(false), 4000);
        }
      })
      .catch((err) => {
        console.error("Error al enviar mensaje rápido:", err);
      });
  };

  return (
    <footer className="bg-white text-gray-700 py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Información */}
        <div className="space-y-2 text-sm">
          <p>502: 8888-8888</p>
          <p>linareschangjavier162@gmail.com</p>
          <p>Guatemala</p>
          <p>Guatemala</p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-2 text-sm">
          <a href="#acercade" className="hover:text-blue-500">Acerca de</a>
          <a href="#inicio" className="hover:text-blue-500">Inicio</a>
          <a href="#proyectos" className="hover:text-blue-500">Proyectos</a>
          <a
            href="#contacto"
            className="mt-2 w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Contacto
          </a>
        </div>

        {/* Formulario */}
        <div className="text-sm">
          <p className="mb-2 font-semibold">Mensaje rápido</p>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="tucorreo@ejemplo.com"
              className="border rounded px-3 py-2"
            />
            <input type="hidden" name="_subject" value="Mensaje rápido desde el footer" />
            <input type="hidden" name="_captcha" value="false" />
            <button
              type="submit"
              className="mt-1 w-fit px-4 py-2 border rounded hover:bg-gray-100"
            >
              Enviar
            </button>
            {mensajeEnviado && (
              <p className="text-green-600 text-xs mt-1">¡Mensaje enviado!</p>
            )}
          </form>
        </div>

        {/* Redes y Footer */}
        <div className="flex flex-col items-start justify-between h-full text-sm">
          <div>
            <p className="mb-2 font-semibold">Compartir</p>
            <div className="flex gap-4 text-xl text-gray-700">
              <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
              <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
              <a href="#" className="hover:text-blue-600"><FaTwitter /></a>
            </div>
          </div>
          <p className="text-xs mt-6">
            © 2025 Hecho por Javier Linares
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;