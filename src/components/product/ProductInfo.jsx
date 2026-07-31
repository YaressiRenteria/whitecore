function ProductInfo({ product }) {
  return (
    <>
      <span className="inline-block bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
        {product.category}
      </span>

      <h3 className="text-white text-xl sm:text-2xl font-bold mt-4 min-h-[64px] flex items-center leading-7">
        {product.name}
      </h3>

      <p className="text-blue-400 text-3xl sm:text-4xl font-black mt-2">
        ${product.price}
      </p>

      <p className="text-gray-400 leading-7 mt-5 flex-1 text-sm sm:text-base">
        {product.description}
      </p>

      <div className="mt-6 border-t border-blue-900/20 pt-5">
        <div className="flex items-center gap-2 text-gray-300 text-sm">
          🛡️
          <span>
            Garantía:
            <strong className="text-white">
              {" "}
              {product.warranty}
            </strong>
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;