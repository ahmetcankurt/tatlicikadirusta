import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // İkonları import ettik
import Slider from "./components/Slider";
import ProductsPromotion from "./components/ProductsPromotion";
import Sale from "./components/Sale";
import Container from "./components/Container";
import Product from "./components/Products";
import Map from "./components/Map";
import WhatsappButton from "./components/WhatsappButton";
import Header from "./components/Header";
import About from "./components/About";
import "./App.css";
import ProductionProcess from "./components/ProductionProcess";
import Gallery from "./components/Gallery";
import Logo from "./image/lokma.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde loading durumunu kapat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Yüklenme süresi (örnek: 2 saniye)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Yükleniyor...</p>
          <p className="wave-text">
            {"Lokmacı Kadir Usta".split("").map((char, index) => (
              <span
                key={index}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        </div>
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
          <Container paddingBottom={0}>
            <Map />
          </Container>

          <WhatsappButton />
          <footer>
            <div className="footer">
              <div className="footer_social">
                <a
                  href="https://www.instagram.com/antalyahayirlokmacisi/"
                  className="social"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/antalyahayirlokmacisi"
                  className="social"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/antalyahayirlokmacisi"
                  className="social"
                >
                  <FaTwitter />
                </a>
              </div>
              <p className="footer_text">
                © 2025 Antalya Hayır Lokmacısı. Tüm hakları saklıdır.
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
