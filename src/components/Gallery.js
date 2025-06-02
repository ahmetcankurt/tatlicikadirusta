import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Gerçek resimleri dinamik olarak import edin
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../image/gallery', false, /\.(jpeg|jpg|mp4)$/));

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const galleryRef = useRef();

  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
      Thumbs: false,
      Toolbar: false,
    });

    // Cleanup
    return () => {
      Fancybox.destroy();
    };
  }, []);

  useEffect(() => {
    // Burada API'den veya statik olarak optimize edilmiş resim listesini alın
    const optimizedMedia = images.map(img => ({
      src: img,
      type: img.includes('.mp4') ? 'video' : 'image',
      thumbnail: img // You might want to use different thumbnails
    }));
    
    setMedia(optimizedMedia.reverse());
  }, []);

  useEffect(() => {
    // Intersection Observer ile lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const mediaElement = entry.target;
          if (mediaElement.tagName === 'IMG') {
            mediaElement.src = mediaElement.dataset.src;
          } else if (mediaElement.tagName === 'VIDEO') {
            const source = mediaElement.querySelector('source');
            source.src = source.dataset.src;
            mediaElement.load();
          }
          observer.unobserve(mediaElement);
        }
      });
    }, { rootMargin: '200px' });

    const mediaElements = galleryRef.current.querySelectorAll('[data-src]');
    mediaElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [media]);

  return (
    <div className="container">
      <h2 className="blok_title" data-aos="fade-up">
        ~ Galeri ~
      </h2>
      <div className="gallery-grid" ref={galleryRef}>
        {media.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {item.type === "image" ? (
              <a
                href={item.src}
                data-fancybox="gallery"
                data-caption={`Image ${index + 1}`}
              >
                <img
                  src={item.thumbnail}
                  data-src={item.src}
                  alt={`media-${index}`}
                  className="gallery-image"
                  loading="lazy"
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
                  preload="none"
                >
                  <source data-src={item.src} type="video/mp4" />
                </video>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;