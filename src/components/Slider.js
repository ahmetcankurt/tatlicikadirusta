import { useState, useEffect, memo } from "react";
import AOS from "aos"; // AOS kütüphanesini import et
import useMobileMode from '../hook/useMobileMode'; // Mobil mod kontrol hook'u

import Resim1 from "../image/tatliresimleri1.webp";
import Resim2 from "../image/tatliresimleri2.webp";
import Resim3 from "../image/tatliresimleri3.webp";
import Resim4 from "../image/tatliresimleri4.webp";
import Resim5 from "../image/tatliresimleri5.webp";
import Resim6 from "../image/tatliresimleri6.webp";
import Resim7 from "../image/tatliresimleri7.webp";
import Resim8 from "../image/tatliresimleri8.webp";
import Resim9 from "../image/tatliresimleri9.webp";
import Resim10 from "../image/tatliresimleri10.webp";

import "./Slider.css"; // Stil dosyası

const slides = [
  { image: Resim1, title: "ANTALYA HAYIR LOKMACISI", description: "Birinci açıklama" },
  { image: Resim2, title: "ANTALYA HAYIR LOKMASI İMALAT VE DAĞITIM", description: "İkinci açıklama" },
  { image: Resim3, title: "ANTALYA AŞURE İMALAT VE DAĞITIMI", description: "Üçüncü açıklama" },
  { image: Resim4, title: "ANTALYA LOKMA TATLISI İMALAT VE DAĞITIMI", description: "Dördüncü açıklama" },
  { image: Resim5, title: "ANTALYA HAYIR LOKMACISI", description: "Beşinci açıklama" },
  { image: Resim6, title: "ANTALYA HAYIR LOKMACISI", description: "Altıncı açıklama" },
  { image: Resim7, title: "ANTALYA HAYIR LOKMACISI", description: "Yedinci açıklama" },
  { image: Resim8, title: "ANTALYA HAYIR LOKMACISI", description: "Sekizinci açıklama" },
  { image: Resim9, title: "ANTALYA HAYIR LOKMACISI", description: "Dokuzuncu açıklama" },
  { image: Resim10, title: "ANTALYA HAYIR LOKMACISI", description: "Onuncu açıklama" },
];

const Slider = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMobileMode(); // Mobil mod kontrolü

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - (isMobile ? 1 : 2) : (prevIndex - (isMobile ? 1 : 2) + slides.length) % slides.length
    );
  };

  useEffect(() => {
    AOS.init(); // AOS kütüphanesini başlat
    AOS.refresh(); // Bileşen yeniden render edildikçe AOS'u yenileyin
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-slide">
        <div
          className="slider-image"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <div className="slider-title">{slides[currentIndex].title}</div>
        </div>
        {!isMobile && (
          <div
            className="slider-image"
            style={{ backgroundImage: `url(${slides[(currentIndex + 1) % slides.length].image})` }}
          >
            <div className="slider-title">{slides[(currentIndex + 1) % slides.length].title}</div>
          </div>
        )}
      </div>
      <button
        className="slider-btn prev-btn "
        data-aos="fade-left"
        delay="300"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button
        className="slider-btn next-btn"
        data-aos="fade-right"
        delay="300"
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default memo(Slider);
