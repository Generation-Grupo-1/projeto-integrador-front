import React from 'react';
import EstudoMundial from "../../assets/img/estudos-mundial.png";
import Futuro from "../../assets/img/futuro.png";
import Leitura from "../../assets/img/leitura.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel.css';

const Caroussel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
  };


  return (
    <Slider {...settings} className='slick-slider'>
        <div>
          <img src={Futuro} alt="" className='slick-slide' />
        </div>
        <div>
          <img src={EstudoMundial} alt=""  className='slick-slide'/>
        </div>
        <div>
          <img src={Leitura} alt=""  className='slick-slide'/>
        </div>
    </Slider>
  );
};

export default Caroussel;
