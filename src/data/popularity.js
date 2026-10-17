const KEY = "wc-clicks";

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? {};
  } catch {
    return {};
  }
};

// Suma un clic al producto cuando alguien toca "Pedir por WhatsApp"
export function trackClick(id) {
  try {
    const data = read();
    data[id] = (data[id] ?? 0) + 1;
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // sin almacenamiento disponible: se ignora
  }
}

// Primero los más cliqueados; el resto se completa con una rotación diaria
export function pickFeatured(products, count = 3) {
  const clicks = read();

  const byClicks = products
    .filter((p) => clicks[p.id] > 0)
    .sort((a, b) => clicks[b.id] - clicks[a.id])
    .slice(0, count);

  if (byClicks.length >= count) return byClicks;

  const day = Math.floor(Date.now() / 86400000);
  const rest = products.filter((p) => !byClicks.includes(p));
  const start = (day * count) % rest.length;
  const rotating = [...rest.slice(start), ...rest.slice(0, start)].slice(
    0,
    count - byClicks.length
  );

  return [...byClicks, ...rotating];
}