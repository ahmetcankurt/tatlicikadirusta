import { useState, useEffect, memo } from "react";
import AOS from "aos"; // AOS kütüphanesini import et
import useMobileMode from "../hook/useMobileMode"; // Mobil mod kontrol hook'u

import Resim1 from "../image/slider/resim1.jpeg";
import Resim2 from "../image/slider/resim2.jpeg";
import Resim3 from "../image/slider/resim3.jpeg";
import Resim4 from "../image/slider/resim4.jpeg";
import Resim5 from "../image/slider/resim5.jpeg";
import Resim6 from "../image/slider/resim6.jpeg";
import Resim7 from "../image/slider/resim7.jpeg";
import Resim8 from "../image/slider/resim8.jpeg";
import Resim9 from "../image/slider/resim9.jpeg";
import Resim10 from "../image/slider/resim10.jpeg";
import Resim11 from "../image/slider/resim11.jpeg";
import Resim12 from "../image/slider/resim12.jpeg";
import Resim13 from "../image/slider/resim13.jpeg";
import Resim14 from "../image/slider/resim14.jpeg";

import "./Slider.css"; // Stil dosyası

const slides = [
  {
    image: Resim1,
    title: "Antalya'da Geleneksel Tatlı Keyfi: Hayır Lokması",
    description: "Birinci açıklama",
  },
  {
    image: Resim2,
    title: "Hayır Lokması: İyi Dileklerin Tatlı Sembolü",
    description: "İkinci açıklama",
  },
  {
    image: Resim3,
    title: "Aşure ve Hayır Lokmasıyla Gönüllere Dokunun",
    description: "Üçüncü açıklama",
  },
  {
    image: Resim4,
    title: "Tatlı Anılar İçin Antalya Lokma Dağıtımı",
    description: "Dördüncü açıklama",
  },
  {
    image: Resim5,
    title: "Hayır Lokması ile Düğün ve Organizasyonları",
    description: "Beşinci açıklama",
  },
  {
    image: Resim6,
    title: "Sıcak Lokmalarla Sevgi Dağıtıyoruz",
    description: "Altıncı açıklama",
  },
 
  {
    image: Resim8,
    title: "Özel Günlerinizi Lokma Tatlısıyla Taçlandırın",
    description: "Sekizinci açıklama",
  },
  {
    image: Resim9,
    title: "Gelenekten Geleceğe: Pişi İmalat ve Dağıtımı",
    description: "Dokuzuncu açıklama",
  },
  {
    image: Resim10,
    title: "Sıcak Lokmalar, Mutlu Kalpler",
    description: "Onuncu açıklama",
  },
  {
    image: Resim11,
    title: "Lezzetin ve Sevginin Buluşma Noktası",
    description: "On birinci açıklama",
  },
  {
    image: Resim12,
    title: "Lokma Tadıyla Antalya'nın Her Köşesine Sevgi Dağıtıyoruz",
    description: "On ikinci açıklama",
  },
  {
    image: Resim13,
    title: "Hayır Lokması: Tatlı Bir Geleneği Yaşatıyoruz",
    description: "On üçüncü açıklama",
  },
  {
    image: Resim14,
    title: "Organizasyonlarınız için Özel Lokma Hizmeti",
    description: "On dördüncü açıklama",
  },
];


const Slider = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const isMobile = useMobileMode();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
    
    const timer = setInterval(() => {
      if (!transitioning) {
        handleNext();
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentIndex, transitioning]);

  const goToSlide = (newIndex) => {
    setTransitioning(true);
    setCurrentIndex(newIndex);
    
    // Geçiş tamamlandıktan sonra durumu sıfırla
    setTimeout(() => {
      setTransitioning(false);
    }, 800);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + (isMobile ? 1 : 2)) % slides.length;
    goToSlide(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 
      ? slides.length - (isMobile ? 1 : 2) 
      : (currentIndex - (isMobile ? 1 : 2) + slides.length) % slides.length;
    goToSlide(prevIndex);
  };

  return (
    <div className="slider-container">
      <div 
        className={`slider-slide ${transitioning ? 'transitioning' : ''}`}
        style={{
          transform: isMobile 
            ? `translateX(-${currentIndex * 100}%)`
            : `translateX(-${currentIndex * 50}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slider-image"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className="slider-title"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              {slide.title}
            </div>
          </div>
        ))}
      </div>
      
      <button
        className="slider-btn prev-btn"
        onClick={handlePrev}
        disabled={transitioning}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        ❮
      </button>
      <button
        className="slider-btn next-btn"
        onClick={handleNext}
        disabled={transitioning}
        data-aos="fade-right"
        data-aos-delay="300"
      >
        ❯
      </button>
    </div>
  );
};

export default memo(Slider);