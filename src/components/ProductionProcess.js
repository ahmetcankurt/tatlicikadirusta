import React from 'react';
import './ProductionProcess.css'; // Stil dosyasını import edelim

function ProductProcess() {
  const products = [
    {
      name: "Tatlı 1",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      description: "Tatlı 1'in yapım aşamaları burada açıklanır.",
      steps: [
        "Malzemelerin hazırlanması",
        "Karışımın yapılması",
        "Pişirme aşaması",
        "Sunum ve servis"
      ]
    },
    {
      name: "Tatlı 2",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      description: "Tatlı 2'nin yapım aşamaları burada açıklanır.",
      steps: [
        "Şekerin eritilmesi",
        "Karıştırma işlemi",
        "Kalıba dökülmesi",
        "Soğuma ve servisi"
      ]
    },
    // Diğer ürünler eklenebilir
  ];

  return (
    <div className="product-process">
      <h2 className="blok_title">~ Ürün Yapım Aşamaları ~</h2>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-12 product-block">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    {product.images.map((image, idx) => (
                      <div key={idx} className="col-md-6 col-6">
                        <img src={image} alt={`product-${index}-${idx}`} className="product-image mt-4" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6 product-info">
                  <h3 className='mt-3'>{product.name}</h3>
                  <p>{product.description}</p>
                  <h4>Yapım Aşamaları:</h4>
                  <ul>
                    {product.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductProcess;
