import React from 'react';
import local from '../style/images/local.jpg';
//import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';


const Banner = () => {
  return (

      <div className="wrapper dark-wrapper">
       <img src={local} class="img-fluid" alt="VocalForLocal"/>
      </div>

  );
};

export default Banner;
