import React, { memo } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // İkonlar için
import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <div className="fixed_buttons">
      <a
        href="https://wa.me/905525030407"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp_button "
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <FaWhatsapp className="whatsapp-button" />
      </a>
      <a
        href="tel:+0905525030407"
        className="phone_button pulse-blue"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-duration="850"
      >
        <FaPhoneAlt className="phone-shake" />
      </a>
    </div>
  );
};

export default memo(WhatsappButton);
