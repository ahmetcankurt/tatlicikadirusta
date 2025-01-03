import React, { memo } from "react";
import UstaResim from "../image/ustaresim.webp";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="blok_title" data-aos="fade-up">~ Hakkımızda ~</h2>
        <div className="col-md-6">
          <img src={UstaResim} className="img-fluid" alt="Hakkımızda"  data-aos="fade-up-right" loading="lazy"/>
        </div>
        <div className="col-md-6">
          <p className="about-text" data-aos="fade-up-left">
            Kadir Usta, okul hayatından iş yaşamına uzanan yolculuğunda
            hayalindeki mesleğe 2011 yılında adım atmıştır. Uzun yıllar boyunca
            mesleğinin çıraklığını yaparak kendini geliştirmiş ve çeşitli unlu
            mamuller üzerinde uzmanlaşmıştır. Sanatkâr bir esnaf olma hedefiyle
            çıktığı bu yolda, yeteneklerini ve deneyimlerini en iyi şekilde
            yansıtacak alanı "lokmacılık" olarak seçmiştir. Ustalığı, çıraklığı
            ve pazarlamayı bir arada yürütme başarısıyla, Antalya’nın farklı
            noktalarında hayır lokması dökümü ve dağıtımı yaparak sizlere hizmet
            vermektedir. İnanıyoruz ki, yapılan her hayır, insanların gönlünde
            iz bırakır ve Allah katında kabul görür. Bizi tercih ettiğiniz için
            teşekkür ederiz. Lokmalarınızın bereketli ve hayırlı olması
            dileğiyle…
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(About);
