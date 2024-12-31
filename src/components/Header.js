import React, { memo } from "react";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa"; // İkonları import ettik
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="header_title">LOKMACI KADİR USTA</h1>
        <div className="header_bottom">
          <a href="tel:+0905323331347" className="social">
            <FaPhoneAlt />
          </a>
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
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
