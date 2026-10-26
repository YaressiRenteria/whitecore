import { createContext, useContext } from "react";

// Abre la vista rápida de un producto desde cualquier sección
export const QuickViewContext = createContext(() => {});

export const useQuickView = () => useContext(QuickViewContext);
