// Footer.js
import { memo } from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-overlay">
        <div className="footer_social">
          <a
            href="https://www.instagram.com/lokmaci_kadir_usta/"
            className="social social-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="tel:+0905525030407" className="social social-footer">
            <FaPhoneAlt className="phone-shake" />
            <span className="phone-text">0552 503 04 07</span>
          </a>
        </div>
        <div className="footer_justify">
          <span className="footer_title mb-1">LOKMACI KADİR USTA</span>
          <span className="footer_text">
            © {new Date().getFullYear()} Antalya Hayır Lokmacısı. Tüm hakları saklıdır.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);