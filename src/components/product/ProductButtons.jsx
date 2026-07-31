function ProductButtons({ product, onOpen }) {
  return (
    <div className="mt-8 flex flex-col gap-4">

      <button
        onClick={onOpen}
        className="
          w-full
          rounded-xl
          border
          border-blue-500
          text-blue-400
          hover:bg-blue-600
          hover:text-white
          py-4
          font-bold
          transition-all
          duration-300
        "
      >
        Ver detalles
      </button>

      <a
        href={`https://wa.me/528129301783?text=${encodeURIComponent(
          `Hola WhiteCore 👋

Me interesa comprar:

📦 ${product.name}

💲 Precio: $${product.price}

¿Podrían darme más información?`
        )}`}
        target="_blank"
        rel="noreferrer"
        className="
          w-full
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          py-4
          text-center
          text-white
          font-bold
          transition-all
          duration-300
        "
      >
        Comprar por WhatsApp
      </a>

    </div>
  );
}

export default ProductButtons;