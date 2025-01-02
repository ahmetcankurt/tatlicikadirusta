import React, {  useEffect, memo } from "react";
import "./ProductsPromotion.css";
import LokmaResmi from "../image/kadirurun/LokmaResmi.jpeg"
import AOS from "aos"; // AOS kütüphanesini import et
import "aos/dist/aos.css"; // AOS CSS dosyasını import et

function ProductsPromotion() {
  const products = [
    {
      title: "Saray Lokma",
      description: "Mayalı Şekerli Yağlı Hamur",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "İzmir Lokma",
      description: "Mayalı Şekerli Yağlı Hamur",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Tulumba",
      description: "Şekerli Yumurtalı Hamur",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Halka Tatlısı",
      description: "Şekerli Yumurtalı Hamur",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Pişi",
      description: "Şekerli Yumurtalı Hamur",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Aşure",
      description: "Buğday Nohut Kuru fasulye Şeker Su",
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
            className="col-md-4  products"
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
