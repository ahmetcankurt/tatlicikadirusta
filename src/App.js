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

function App() {
  return (
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
  );
}

export default App;
