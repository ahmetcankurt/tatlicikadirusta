import React, { useState } from "react";
import "./Gallery.css"; // Stil dosyası

import Resim1 from "../image/tatliresimleri1.webp";
import Resim2 from "../image/tatliresimleri2.webp";
import Resim3 from "../image/tatliresimleri3.webp";
import Resim4 from "../image/tatliresimleri4.webp";
import Resim5 from "../image/tatliresimleri5.webp";
import Resim6 from "../image/tatliresimleri6.webp";
import Resim7 from "../image/tatliresimleri7.webp";
import Resim8 from "../image/tatliresimleri8.webp";
import Resim9 from "../image/tatliresimleri9.webp";
import Resim10 from "../image/tatliresimleri10.webp";

const Gallery = () => {
  const images = [
    Resim1,
    Resim2,
    Resim3,
    Resim4,
    Resim5,
    Resim6,
    Resim7,
    Resim8,
    Resim9,
    Resim10,
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
        <h2 className="blok_title">~ Galeri ~</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img src={image} alt={`image-${index}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
