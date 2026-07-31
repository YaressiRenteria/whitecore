function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h2 className="text-6xl md:text-8xl font-extrabold text-white">
        WHITE <span className="text-blue-500">CORE</span>
      </h2>

      <p className="mt-6 text-xl text-gray-300 max-w-xl">
        Accesorios OEM de excelente calidad para que siempre estés conectado.
      </p>

      <div className="mt-10 flex gap-4">

        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl text-white font-semibold">
          Ver catálogo
        </button>

        <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl text-white font-semibold">
          Contactar
        </button>

      </div>

    </section>
  );
}

export default Home;