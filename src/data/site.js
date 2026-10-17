// Número de WhatsApp: 52 (México) + 10 dígitos
export const WHATSAPP = "528129301783";
export const WHATSAPP_DISPLAY = "81 2930 1783";

export const SITE = {
  name: "White Core",
  tagline: "OEM de excelente calidad",
};

export const WARRANTY_TEXT = "3 días de garantía por fallas de fábrica";

export const SOCIALS = [
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/white_c0re" },
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/share/1CpNUoz2qS/" },
  { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@whitecore.mty" },
];

export const wa = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const formatPrice = (n) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);

// Si una imagen no está en la ruta indicada, prueba en la carpeta contraria
export const imgCandidates = (path) =>
  [
    path,
    path.replace(/^\/products\//, "/"),
    path.replace(/^\//, "/products/"),
  ].filter((v, i, a) => a.indexOf(v) === i);