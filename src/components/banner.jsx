import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Banner = () => {
  return (

      <div className="wrapper dark-wrapper">
        <div className="rev_slider_wrapper fullwidth-container">
          <div id="slider10" className="rev_slider fullwidthbanner" data-version="5.4.7">
            <ul>
              <li data-transition="fade" data-thumb><img src="style/images/art/slider-bg12.jpg" alt="" />
                <div className="tp-caption font-weight-600 color-white text-center" data-x="center" data-y="middle" data-voffset="['-45','-45','-45','-45']" data-fontsize="['50','50','40','36']" data-lineheight="['65','65','55','51']" data-width="['550','550','550','340']" data-textalign="['center','center','center','center']" data-whitespace="['normal','normal','normal','normal']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.7;sY:0.7;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-responsive="on" data-responsive_offset="on" style={{zIndex: 9}}>Hello! We are a digital and marketing company
                </div>
                {/* /.tp-caption */}
                <a className="tp-caption btn btn-l btn-white btn-strong-hover scroll" data-x="center" data-y="middle" data-voffset="['85','85','85','85']" data-width="['auto','auto','auto','auto']" data-textalign="['center','center','center','center']" data-frames="[{&quot;delay&quot;:1500,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.7;sY:0.7;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-responsive="on" data-responsive_offset="on" style={{zIndex: 9}} href="#">Get Started
                </a>
                {/* /.tp-caption */}
              </li>
            </ul>
            <div className="tp-bannertimer tp-bottom" />
          </div>
          {/* /.rev_slider */}
        </div>
        {/* /.rev_slider_wrapper */}
      </div>

  );
};

export default Banner;
