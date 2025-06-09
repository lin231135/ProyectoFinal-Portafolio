import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaThumbsUp,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Contacto from "../sections/Contacto";
import { useState, useRef } from "react";

const ContactoPage = () => {
  const [enviado, setEnviado] = useState(false);
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
          setEnviado(true);
          formRef.current.reset();
          setTimeout(() => setEnviado(false), 5000);
        }
      })
      .catch((err) => {
        console.error("Error al enviar:", err);
      });
  };

  return (
    <>
      <Navbar />

      <section className="pt-24 bg-gradient-to-r from-white to-gray-100 min-h-screen px-4 pb-20">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold">Contacto</h1>
        </div>

        <div className="max-w-6xl bg-white rounded-lg shadow mx-auto grid grid-cols-1 md:grid-cols-2 p-10 gap-8">
          {/* Información */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Información</h2>

            <div className="flex items-start gap-3 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <p>Zona 19 La Florida, Guatemala</p>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <FaPhone className="text-blue-600 mt-1" />
              <p>502 - 8888 - 8888</p>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <FaEnvelope className="text-blue-600 mt-1" />
              <p>lin231135@uvg.edu.gt</p>
            </div>

            <div className="flex gap-4 pt-2 text-xl text-gray-700">
              <FaThumbsUp className="hover:text-blue-600 cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-600 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* Formulario funcional con confirmación */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                required
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                required
                className="border p-2 w-full"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              className="border p-2 w-full"
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              rows="5"
              required
              className="border p-2 w-full"
            />

            {/* Campos ocultos */}
            <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Enviar
            </button>

            {enviado && (
              <p className="text-green-600 font-medium">
                ¡Mensaje enviado correctamente!
              </p>
            )}
          </form>
        </div>
      </section>

      <Contacto />
    </>
  );
};

export default ContactoPage;