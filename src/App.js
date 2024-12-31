import { useState, useEffect } from "react";
import Slider from "./components/Slider";
import ProductsPromotion from "./components/ProductsPromotion";
import Sale from "./components/Sale";
import Container from "./components/Container";
import Product from "./components/Products";
import Map from "./components/Map";
import WhatsappButton from "./components/WhatsappButton";
import Header from "./components/Header";
import About from "./components/About";
import ProductionProcess from "./components/ProductionProcess";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import LoadinContainerJS from "./components/LoadinContainer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde loading durumunu kapat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Yüklenme süresi (örnek: 2 saniye)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadinContainerJS />
      ) : (
        <>
          <Header />
          <Slider />
          <Container>
            <ProductsPromotion />
          </Container>
          <Container>
            <Sale />
          </Container>
          <Container>
            <Product />
          </Container>
          <Container>
            <About />
          </Container>
          <Container>
            <Gallery />
          </Container>
          <Container>
            <ProductionProcess />
          </Container>
          <Container>
            <Map />
          </Container>
          <WhatsappButton />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;