import React, { useState } from "react";
import "./Gallery.css"; // Stil dosyası

import Galeri1 from "../image/gallery/galeri-1.jpeg";
import Galeri2 from "../image/gallery/galeri-2.jpeg";
import Galeri3 from "../image/gallery/galeri-3.jpg";
import Galeri4 from "../image/gallery/galeri-4.jpeg";
import Galeri5 from "../image/gallery/galeri-5.jpeg";
import Galeri6 from "../image/gallery/galeri-6.jpeg";
import Galeri7 from "../image/gallery/galeri-7.jpeg";
import Galeri8 from "../image/gallery/galeri-8.jpeg";
import Galeri9 from "../image/gallery/galeri-9.jpeg";
import Galeri10 from "../image/gallery/galeri-10.jpeg";
import Galeri11 from "../image/gallery/galeri-11.jpeg";
import Galeri12 from "../image/gallery/galeri-12.jpeg";
import Galeri13 from "../image/gallery/galeri-13.jpeg";
import Galeri14 from "../image/gallery/galeri-14.jpeg";
import Galeri15 from "../image/gallery/galeri-15.jpeg";
import Galeri16 from "../image/gallery/galeri-16.jpeg";
import Galeri17 from "../image/gallery/galeri-17.mp4";
import Galeri18 from "../image/gallery/galeri-18.jpeg";
import Galeri19 from "../image/gallery/galeri-19.jpeg";
import Galeri20 from "../image/gallery/galeri-20.jpeg";
import Galeri21 from "../image/gallery/galeri-21.mp4";
import Galeri22 from "../image/gallery/galeri-22.jpeg";
import Galeri23 from "../image/gallery/galeri-23.jpeg";
import Galeri24 from "../image/gallery/galeri-24.jpeg";
import Galeri25 from "../image/gallery/galeri-25.mp4";
import Galeri26 from "../image/gallery/galeri-26.mp4";
import Galeri27 from "../image/gallery/galeri-27.jpeg";
import Galeri28 from "../image/gallery/galeri-28.mp4";
import Galeri29 from "../image/gallery/galeri-29.mp4";
import Galeri30 from "../image/gallery/galeri-30.jpeg";
import Galeri31 from "../image/gallery/galeri-31.mp4";
import Galeri32 from "../image/gallery/galeri-32.mp4";
import Galeri33 from "../image/gallery/galeri-33.jpeg";
import Galeri34 from "../image/gallery/galeri-34.mp4";

const Gallery = () => {
  const media = [
    { src: Galeri1, type: "image" },
    { src: Galeri2, type: "image" },
    { src: Galeri3, type: "image" },
    { src: Galeri4, type: "image" },
    { src: Galeri5, type: "image" },
    { src: Galeri6, type: "image" },
    { src: Galeri7, type: "image" },
    { src: Galeri8, type: "image" },
    { src: Galeri9, type: "image" },
    { src: Galeri10, type: "image" },
    { src: Galeri11, type: "image" },
    { src: Galeri12, type: "image" },
    { src: Galeri13, type: "image" },
    { src: Galeri14, type: "image" },
    { src: Galeri15, type: "image" },
    { src: Galeri16, type: "image" },
    { src: Galeri17, type: "video" },
    { src: Galeri18, type: "image" },
    { src: Galeri19, type: "image" },
    { src: Galeri20, type: "image" },
    { src: Galeri21, type: "video" },
    { src: Galeri22, type: "image" },
    { src: Galeri23, type: "image" },
    { src: Galeri24, type: "image" },
    { src: Galeri25, type: "video" },
    { src: Galeri26, type: "video" },
    { src: Galeri27, type: "image" },
    { src: Galeri28, type: "video" },
    { src: Galeri29, type: "video" },
    { src: Galeri30, type: "image" },
    { src: Galeri31, type: "video" },
    { src: Galeri32, type: "video" },
    { src: Galeri33, type: "image" },
    { src: Galeri34, type: "video" },
  ];
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="container">
      <h2 className="blok_title" data-aos="fade-up">
        ~ Galeri ~
      </h2>
      <div className="gallery-grid">
        {media.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`media-${index}`}
                className="gallery-image"
                data-aos="fade-right"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                className="gallery-video"
                data-aos="fade-right"
                controls
                loading="lazy"
                muted
              ></video>
            )}
          </div>
        ))}
      </div>

      {selectedMedia && (
  <div className="modal" onClick={closeModal}>
    <div className="modal-content">
      {selectedMedia.type === "image" ? (
        <img
          src={selectedMedia.src}
          alt="Selected"
          className="modal-image"
        />
      ) : (
        <video
          src={selectedMedia.src}
          className="modal-video"
          controls
          autoPlay
        ></video>
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default Gallery;
