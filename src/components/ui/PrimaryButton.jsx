function PrimaryButton({ children }) {
  return (
    <button
      className="
        bg-blue-600
        hover:bg-blue-700
        transition-all
        duration-300
        px-8
        py-4
        rounded-2xl
        text-white
        font-semibold
        hover:scale-105
      "
    >
      {children}
    </button>
  );
}

export default PrimaryButton;