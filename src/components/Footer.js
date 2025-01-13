import { memo } from "react";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css"; // Footer bileşenine ait stilleri import ettik

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_social">
          <a
            href="https://www.instagram.com/lokmaci_kadir_usta/"
            className="social"
          >
            <FaInstagram />
          </a>
          <a href="tel:+0905525030407" className="social ">
            <FaPhoneAlt className="me-4 phone-shake" />
            <span className="phone-icon">0552 503 04 07 </span>
          </a>
        </div>
        <h3
          className="header_title mx-4"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          LOKMACI KADİR USTA
        </h3>
        <p className="footer_text">
          © 2025 Antalya Hayır Lokmacısı. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
