import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Benefits from "./components/benefits/Benefits";
import FeaturedProducts from "./components/featured/FeaturedProducts";
import DeliveryPoints from "./components/delivery/DeliveryPoints";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/Footer";
import WhatsAppFloat from "./components/floating/WhatsAppFloat";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Benefits />

      <DeliveryPoints />

      <FeaturedProducts />

      <Catalog />

      <Footer />

      <WhatsAppFloat />
    </>
  );
}

export default App;