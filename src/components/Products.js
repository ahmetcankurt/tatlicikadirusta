import React, { useEffect, memo } from "react"; // useEffect ve memo import et
import AOS from "aos"; // AOS kütüphanesini import et
import "./Products.css";

function Product() {
  const products = [
    {
      title: "Ürün 1",
      description: "150 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 2",
      description: "250 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 3",
      description: "100 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 4",
      description: "120 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 4",
      description: "120 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 4",
      description: "120 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 4",
      description: "120 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Ürün 4",
      description: "120 TL",
      imgUrl: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    AOS.init(); // AOS kütüphanesini başlat
    AOS.refresh(); // Bileşen yeniden render edildikçe AOS'u yenileyin
  }, []);

  return (
    <div className="container ">
      <div className="row ">
        <h2 className="blok_title">~ Sizler İçin ~</h2>
        {products.map((product, index) => (
          <div className="col-md-3 products" key={index}>
            <div style={{ border: "1px solid gray" }}
              // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos="fade-right"
              delay="600"
              >
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="products-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Product);
