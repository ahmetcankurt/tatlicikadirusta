// Footer.js
import { memo } from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer ">
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
          <span className="footer_title ">LOKMACI KADİR USTA</span>
          {/* <span className="footer_text">
            © {new Date().getFullYear()} Antalya Hayır Lokmacısı. Tüm hakları saklıdır.
          </span> */}
    </footer>
  );
}

export default memo(Footer);