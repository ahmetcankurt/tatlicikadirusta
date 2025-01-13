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
    title: "Hayır Lokması ile Düğün ve Organizasyonlar Daha Tatlı",
    description: "Beşinci açıklama",
  },
  {
    image: Resim6,
    title: "Sıcak Lokmalarla Sevgi Dağıtıyoruz",
    description: "Altıncı açıklama",
  },
  {
    image: Resim7,
    title: "Antalya’nın En Lezzetli Hayır Lokmacısı",
    description: "Yedinci açıklama",
  },
  {
    image: Resim8,
    title: "Özel Günlerinizi Lokma Tatlısıyla Taçlandırın",
    description: "Sekizinci açıklama",
  },
  {
    image: Resim9,
    title: "Gelenekten Geleceğe: Lokma İmalat ve Dağıtımı",
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
  const isMobile = useMobileMode(); // Mobil mod kontrolü

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % slides.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? slides.length - (isMobile ? 1 : 2)
        : (prevIndex - (isMobile ? 1 : 2) + slides.length) % slides.length
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
          <div
            className="slider-title"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {slides[currentIndex].title}
          </div>
        </div>
        {!isMobile && (
          <div
            className="slider-image"
            style={{
              backgroundImage: `url(${
                slides[(currentIndex + 1) % slides.length].image
              })`,
            }}
          >
            <div className="slider-title"
             data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1000"
             >
              {slides[(currentIndex + 1) % slides.length].title}
            </div>
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
