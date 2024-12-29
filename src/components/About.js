import React, { memo } from 'react'
import UstaResim from '../image/ustaresim.webp'
import './About.css'

function About() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="blok_title">~ Hakkımızda ~</h2>
        <div className="col-md-6">
          <img
            src={UstaResim}
            className="img-fluid"
            alt="Hakkımızda"
          />
        </div>
        <div className="col-md-6">
          <p className="about-text">
            Burada şirketinizin hakkında yazacağınız metni ekleyebilirsiniz. Hakkımızda kısmı, şirketinizin tarihçesini, misyonunu, vizyonunu ya da hizmetlerinizi tanıttığınız alan olabilir. Müşterilerinize kendinizi tanıtmaktan çekinmeyin!
          </p>
        </div>
      </div>
    </div>
  )
}

export default  memo(About)
