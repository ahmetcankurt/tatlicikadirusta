import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry from 'react-masonry-css';

// Gerçek resimleri dinamik olarak import edin
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../image/gallery', false, /\.(jpeg|jpg|mp4)$/));

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const galleryRef = useRef();

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    0: 2  // 0 piksel ve üstü için 2 sütun
  };

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
      Toolbar: false,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  useEffect(() => {
    const optimizedMedia = images.map(img => ({
      src: img,
      type: img.includes('.mp4') ? 'video' : 'image',
      thumbnail: img,
      // Rastgele yükseklik ekleyin (veya gerçek resim boyutlarını kullanın)
      aspectRatio: Math.random() * 0.5 + 0.8 // 0.7 ile 1.2 arasında rastgele değer
    }));

    setMedia(optimizedMedia.reverse());
  }, []);

  return (
    <div className="container">
      <h2 className="blok_title" data-aos="fade-up">
        ~ Galeri ~
      </h2>
      <div ref={galleryRef}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {media.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ marginBottom: '15px' }}
            >
              {item.type === "image" ? (
                <a
                  href={item.src}
                  data-fancybox="gallery"
                  data-caption={`Image ${index + 1}`}
                >
                  <img
                    src={item.thumbnail}
                    alt={`media-${index}`}
                    className="gallery-image"
                    loading="lazy"
                    onLoad={(e) => e.target.classList.add("loaded")}
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: item.aspectRatio,
                      objectFit: 'cover'
                    }}
                  />

                </a>
              ) : (
                <a
                  href={item.src}
                  data-fancybox="gallery"
                  data-caption={`Video ${index + 1}`}
                >
                  <video
                    className="gallery-video"
                    controls
                    muted
                    preload="metadata"
                    onCanPlay={(e) => e.target.classList.add("loaded")}
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: item.aspectRatio,
                      objectFit: 'cover'
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>


                </a>
              )}
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;