import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import FeaturedProducts from "./components/featured/FeaturedProducts";
import Catalog from "./components/catalog/Catalog";
import Benefits from "./components/benefits/Benefits";
import DeliveryPoints from "./components/delivery/DeliveryPoints";
import Footer from "./components/footer/Footer";
import WhatsAppFloat from "./components/floating/WhatsAppFloat";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-amber"
    />
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <FeaturedProducts />
        <Catalog />
        <Benefits />
        <DeliveryPoints />
      </main>

      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  );
}

export default App;