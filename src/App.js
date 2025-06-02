// App.js
import { useState, useEffect } from "react";
import Slider from "./components/Slider";
import ProductsPromotion from "./components/ProductsPromotion";
import Sale from "./components/Sale";
import Container from "./components/Container";
import Map from "./components/Map";
import WhatsappButton from "./components/WhatsappButton";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import LoadinContainerJS from "./components/LoadinContainer";
import Shape from "./image/shape/shape-pat.png";
import ShapeFooter from "./image/shape/shape8.png";
import ScrollToDownIcon from "./components/ScrollToDownIcon";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadinContainerJS />
      ) : (
        <>
          <Header />
          <div className="position-relative">
            <Slider />
            <img src={Shape} alt="Shape" className="shape" />
          </div>
          <Container>
            <ProductsPromotion />
          </Container> 
           <Container>
            <Gallery />
          </Container>
           <Container>
            <About />
          </Container> 
             <Map /> 
          <WhatsappButton /> 
          <Footer /> 
          <ScrollToDownIcon />
        </>
      )}
    </>
  );
}

export default App;