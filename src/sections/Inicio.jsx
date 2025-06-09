const Inicio = () => {
  return (
    <section
      id="inicio"
      className="min-h-[60vh] pt-24 px-6 bg-gradient-to-b from-white to-gray-100 flex flex-col lg:flex-row items-center justify-center text-left"
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Conoce mi <span className="text-black">Trabajo</span>
        </h1>

        <p className="text-base md:text-lg text-gray-700 italic max-w-2xl">
          “La función de un buen software es hacer que lo complejo aparente ser simple.”<br />
          <span className="text-sm text-gray-500">— Grady Booch</span>
        </p>

        <a href="#acercade">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Acerca de mí
          </button>
        </a>
      </div>
    </section>
  );
};

export default Inicio;