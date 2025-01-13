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

import Galeri35 from "../image/gallery/galeri-48.mp4";
import Galeri36 from "../image/gallery/galeri-36.jpeg";
import Galeri37 from "../image/gallery/galeri-37.jpeg";
import Galeri38 from "../image/gallery/galeri-38.mp4";
import Galeri39 from "../image/gallery/galeri-39.jpeg";
import Galeri40 from "../image/gallery/galeri-40.jpeg";
import Galeri41 from "../image/gallery/galeri-41.jpeg";
import Galeri42  from "../image/gallery/galeri-43.jpeg";
import Galeri43 from "../image/gallery/galeri-46.mp4";
import Galeri44 from "../image/gallery/galeri-44.jpeg";
import Galeri45 from "../image/gallery/galeri-45.jpeg";
import Galeri46 from "../image/gallery/galeri-42.jpeg";
import Galeri47 from "../image/gallery/galeri-47.mp4";
import Galeri48 from "../image/gallery/galeri-35.jpeg";



import Resim1 from "../image/slider/resim1.jpeg";
import Resim2 from "../image/slider/resim2.jpeg";
import Resim3 from "../image/slider/resim3.jpeg";
import Resim4 from "../image/slider/resim4.jpeg";
import Resim5 from "../image/slider/resim5.jpeg";
import Resim6 from "../image/slider/resim6.jpeg";
import Resim7 from "../image/slider/resim7.jpeg";
import Resim8 from "../image/slider/resim8.jpeg";
import Resim9 from "../image/slider/resim9.jpeg";
import Resim10 from "../image/slider/resim10.jpeg";
import Resim11 from "../image/slider/resim11.jpeg";
import Resim12 from "../image/slider/resim12.jpeg";
import Resim13 from "../image/slider/resim13.jpeg";
import Resim14 from "../image/slider/resim14.jpeg";

const Gallery = () => {
  const media = [
    { src: Galeri1, type: "image" },
    { src: Galeri2, type: "image" },
    { src: Galeri3, type: "image" },
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
    { src: Galeri35, type: "video" },
    { src: Galeri36, type: "image" },
    { src: Galeri37, type: "image" },
    { src: Galeri38, type: "video" },
    { src: Galeri39, type: "image" },
    { src: Galeri40, type: "image" },
    { src: Galeri41, type: "image" },
    { src: Galeri42, type: "image" },
    { src: Galeri43, type: "image" },
    { src: Galeri44, type: "image" },
    { src: Galeri45, type: "image" },
    { src: Galeri46, type: "image" },
    { src: Galeri47, type: "video" },
    { src: Galeri48, type: "image" },



    { src: Resim1, type: "image" },
    { src: Resim2, type: "image" },
    { src: Resim3, type: "image" },
    { src: Resim4, type: "image" },
    { src: Resim5, type: "image" },
    { src: Resim6, type: "image" },
    { src: Resim7, type: "image" },
    { src: Resim8, type: "image" },
    { src: Resim9, type: "image" },
    { src: Resim10, type: "image" },
    { src: Resim11, type: "image" },
    { src: Resim12, type: "image" },
    { src: Resim13, type: "image" },
    { src: Resim14, type: "image" },

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
        {media.reverse().map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            {item.type === "image" ? (
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={item.src}
                alt={`media-${index}`}
                className="gallery-image"
                loading="lazy"
              />
            ) : (
              <video
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={item.src}
                className="gallery-video"
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
