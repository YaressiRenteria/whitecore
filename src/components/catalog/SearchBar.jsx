import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-3xl mx-auto">

      <div className="relative">

        <Search
          size={24}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400"
        />

        <input
          type="text"
          placeholder="Buscar AirPods, cables, cargadores..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          bg-[#101828]/90
          backdrop-blur-xl
          border
          border-blue-900/30
          rounded-full
          py-5
          pl-16
          pr-8
          text-white
          text-lg
          shadow-2xl
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:shadow-blue-500/20
          "
        />

      </div>

    </div>
  );
}

export default SearchBar;