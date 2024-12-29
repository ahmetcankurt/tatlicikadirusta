import { memo, useEffect } from "react"; // memo ekleyin
import AOS from "aos"; // AOS kütüphanesini import et
import "./Sale.css";

function Sale() {
  useEffect(() => {
    AOS.init(); // AOS kütüphanesini başlat
    AOS.refresh(); // Bileşen yeniden render edildikçe AOS'u yenileyin
  }, []);
  return (
    <div className="container">
      <div className="row g-2 row_container ">
        <h2 className="blok_title">~ İndirimler ~</h2>
        <div
          className="col-12 col-md-6 sale_container"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
            }}
          >
            <span className="sale_value">40%</span>
            <span className="mx-3 sale">İndirim</span>
          </h2>
          <p className="">En İyi Kalite Ürünler.</p>
          <button
            className="sale_button contact-btn"
            onClick={() => window.open("https://wa.me/905551112233", "_blank")}
          >
            WhatsApp'tan Ulaşın
          </button>
        </div>
        <div
          className="col-12 col-md-6 sale_container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
            }}
          >
            <span className="sale_value">20%</span>
            <span className="mx-3 sale">İndirim</span>
          </h2>
          <p className="">En İyi Kalite Ürünler.</p>
          <button
            className="sale_button contact-btn"
            onClick={() => window.open("https://wa.me/905551112233", "_blank")}
          >
            WhatsApp'tan Ulaşın
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Sale);
