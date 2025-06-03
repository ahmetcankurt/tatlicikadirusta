import React, { useState, useEffect, useCallback } from "react";
import "./ProductsPromotion.css";
import saraylokma from "../image/urunler/saray-lokma.jpeg";
import izmirlokma from "../image/urunler/izmir-lokma.jpeg";
import tulumbaTatlisi from "../image/urunler/tulumba-tatlisi.jpg";
import halkaTatlisi from "../image/urunler/halka-tatlisi.jpg";
import Asure from "../image/urunler/asure.webp";
import Pisi from "../image/urunler/pisi.jpg";
import IrmikHelvası from "../image/gallery/galeri-41.jpeg";
import Dondurma from "../image/urunler/dondurma.jpeg";
import Simit from "../image/urunler/simit.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

function ProductsPromotion() {
  const products = [
    { title: "Saray Lokma", description: "Mayalı Şekerli Yağlı Hamur", imgUrl: saraylokma },
    { title: "İzmir Lokma", description: "Mayalı Şekerli Yağlı Hamur", imgUrl: izmirlokma },
    { title: "Tulumba", description: "Şekerli Yumurtalı Hamur", imgUrl: tulumbaTatlisi },
    { title: "Halka Tatlısı", description: "Şekerli Yumurtalı Hamur", imgUrl: halkaTatlisi },
    { title: "Pişi", description: "Şekerli Yumurtalı Hamur", imgUrl: Pisi },
    { title: "Aşure", description: "Buğday Nohut Kuru fasulye Şeker Su", imgUrl: Asure },
    { title: "İrmik Helvası", description: "Buğday Nohut Kuru fasulye Şeker Su", imgUrl: IrmikHelvası },
    { title: "Dondurma", description: "Süt Şeker Krema", imgUrl: Dondurma },
    { title: "Simit", description: "Un Su Tuz", imgUrl: Simit },
  ];


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="container">
      <div className="row">
        <h2 className="blok_title" data-aos="fade-up">~ Ürünlerimiz ~</h2>
        {products.map((product, index) => (
          <div className="col-md-4 products mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card boxShadow">
              <img src={product.imgUrl} className="card-img-top" alt={product.title} loading="lazy" />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPromotion;
