import React, { memo } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // İkonlar için
import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <div className="fixed_buttons">
      <a
        href="https://wa.me/905323331347"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp_button pulse-green"
      >
        <FaWhatsapp />
      </a>
      <a href="tel:+905323331347" className="phone_button pulse-blue">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default  memo(WhatsappButton);
