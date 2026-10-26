import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";

import Intro from "./components/intro/Intro";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Statement from "./components/statement/Statement";
import FeaturedProducts from "./components/featured/FeaturedProducts";
import Stats from "./components/stats/Stats";
import Catalog from "./components/catalog/Catalog";
import Steps from "./components/steps/Steps";
import Benefits from "./components/benefits/Benefits";
import DeliveryPoints from "./components/delivery/DeliveryPoints";
import FinalCta from "./components/cta/FinalCta";
import Footer from "./components/footer/Footer";
import WhatsAppFloat from "./components/floating/WhatsAppFloat";
import QuickView from "./components/modal/QuickView";
import CartDrawer from "./components/cart/CartDrawer";
import FlyToCart from "./components/cart/FlyToCart";
import { QuickViewContext } from "./context/quickView";
import { CartContext } from "./context/cart";
import useCartStore from "./context/useCartStore";

const INTRO_KEY = "wc-intro";

// La intro solo se muestra una vez por sesión
const introSeen = () => {
  try {
    return sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
};

function App() {
  const [ready, setReady] = useState(introSeen);
  const [active, setActive] = useState(null);
  const cart = useCartStore();

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // sin almacenamiento disponible: se ignora
    }
    setReady(true);
  }, []);

  const closeQuickView = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (ready) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <MotionConfig reducedMotion="user">
      <CartContext value={cart}>
        <QuickViewContext value={setActive}>
          <AnimatePresence>{!ready && <Intro key="intro" onDone={finishIntro} />}</AnimatePresence>

          <Navbar />

          <main>
            <Hero ready={ready} />
            <Statement />
            <FeaturedProducts />
            <Stats />
            <Catalog />
            <Steps />
            <Benefits />
            <DeliveryPoints />
            <FinalCta />
          </main>

          <Footer />
          <WhatsAppFloat />
          <QuickView product={active} onClose={closeQuickView} />
          <CartDrawer />
          <FlyToCart />
        </QuickViewContext>
      </CartContext>
    </MotionConfig>
  );
}

export default App;
