import React, { memo, useState } from "react";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="header">
        <h1
          className="header_title mx-4"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          ANTALYA HAYIR LOKMACISI
        </h1>
        <div
          className="header_bottom"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          <a
            href="https://www.instagram.com/lokmaci_kadir_usta/"
            className="social"
          >
            <RiInstagramFill />
          </a>
          {/* <a
            href="https://www.facebook.com/antalyahayirlokmacisi"
            className="social"
          >
            <FaFacebook />
          </a> */}
          <a href="tel:+0905525030407" className="social ">
            <FaPhoneAlt className="me-4 phone-shake" />
            <span className="phone-icon">0552 503 04 07 </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
