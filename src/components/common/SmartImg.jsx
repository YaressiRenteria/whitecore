import { useState } from "react";
import { imgCandidates } from "../../data/site";

// Imagen que prueba rutas alternativas si la primera no carga
export default function SmartImg({ src, alt = "", ...props }) {
  const list = imgCandidates(src);
  const [i, setI] = useState(0);

  return (
    <img
      src={list[i]}
      alt={alt}
      onError={() => setI((n) => Math.min(n + 1, list.length - 1))}
      {...props}
    />
  );
}