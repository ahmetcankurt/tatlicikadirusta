import React, { memo } from "react";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa"; // İkonları import ettik
import { PiChefHatDuotone } from "react-icons/pi";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="header_title mx-4">
            {/* <PiChefHatDuotone size={70} color="brown" /> */}
          LOKMACI KADİR USTA
        </h1>
        <div className="header_bottom">
          
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
          <a href="tel:+0905323331347" className="social">
          < FaPhoneAlt className="me-4" />0552 503 04 07 
          </a>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
