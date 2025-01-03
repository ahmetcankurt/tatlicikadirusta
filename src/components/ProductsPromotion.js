import React, {  useEffect, memo } from "react";
import "./ProductsPromotion.css";
import saraylokma from "../image/urunler/saray-lokma.jpeg"
import izmirlokma from "../image/urunler/izmir-lokma.jpeg"
import tulumbaTatlisi from "../image/urunler/tulumba-tatlisi.jpg"
import halkaTatlisi from "../image/urunler/halka-tatlisi.jpg"
import asure from "../image/urunler/asure.webp"
import pisi from "../image/urunler/pisi.jpg"
import AOS from "aos"; // AOS kütüphanesini import et
import "aos/dist/aos.css"; // AOS CSS dosyasını import et

function ProductsPromotion() {
  const products = [
    {
      title: "Saray Lokma",
      description: "Mayalı Şekerli Yağlı Hamur",
      imgUrl: saraylokma,
    },
    {
      title: "İzmir Lokma",
      description: "Mayalı Şekerli Yağlı Hamur",
      imgUrl: izmirlokma,
    },
    {
      title: "Tulumba",
      description: "Şekerli Yumurtalı Hamur",
      imgUrl: tulumbaTatlisi,
    },
    {
      title: "Halka Tatlısı",
      description: "Şekerli Yumurtalı Hamur",
      imgUrl:  halkaTatlisi,
    },
    {
      title: "Pişi",
      description: "Şekerli Yumurtalı Hamur",
      imgUrl: pisi,
    },
    {
      title: "Aşure",
      description: "Buğday Nohut Kuru fasulye Şeker Su",
      imgUrl:  asure,
    },
  ];

  useEffect(() => {
    AOS.init(); // AOS kütüphanesini başlat
    AOS.refresh(); // Bileşen yeniden render edildikçe AOS'u yenileyin
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <h2 className="blok_title" data-aos="fade-up">~ Ürünlerimiz ~</h2>
        {products.map((product, index) => (
          <div
            className="col-md-4  products"
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 100}
          >
            <div className="card boxShadow">
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt={product.title}
                loading="lazy"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                {/* <p className="card-text">{product.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProductsPromotion);
