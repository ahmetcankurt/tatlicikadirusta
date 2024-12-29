import React, { useState, useEffect, memo } from "react";
import "./ProductsPromotion.css";
import AOS from "aos"; // AOS kütüphanesini import et
import "aos/dist/aos.css"; // AOS CSS dosyasını import et

function ProductsPromotion() {
  const products = [
    {
      title: "Ürün 1",
      description: "Ürün açıklaması 1",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 2",
      description: "Ürün açıklaması 2",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 3",
      description: "Ürün açıklaması 3",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 4",
      description: "Ürün açıklaması 4",
      imgUrl: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    AOS.init(); // AOS kütüphanesini başlat
    AOS.refresh(); // Bileşen yeniden render edildikçe AOS'u yenileyin
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <h2 className="blok_title">~ Ürünlerimiz ~</h2>
        {products.map((product, index) => (
          <div
            className="col-md-3  products"
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 100}
          >
            <div className="card">
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProductsPromotion);
