import { memo } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // İkonları import ettik
import "./Footer.css"; // Footer bileşenine ait stilleri import ettik

function Footer() {
  return (
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
