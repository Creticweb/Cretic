import React from "react";
import testi1 from "../assets/images/resources/testi-img1-1.png";
import testi from "../assets/images/resources/testi-mckp.jpg";
import testi2 from "../assets/images/resources/testi-img1-2.png";
import testi3 from "../assets/images/resources/testi-img1-3.png";
 

const Testimonials = () => {
  return (
    
      <section>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div className="w-100 pt-100 pb-100 position-relative">
          <div id="particles3" className="particles-js top-left" data-color="#ffe27a" data-saturation={300} data-size={40} data-count={8} data-speed={2} data-hide={770} data-image="assets" />
          <div className="container">
            <div className="testi-mckp-wrap w-100">
              <div className="row align-items-center">
                <div className="col-md-12 col-sm-12 col-lg-6 order-1 d-none d-lg-block">
                  <img className="img-fluid" src={testi} alt="Testimonials Mockup" />
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <div className="testi-wrap w-100">
                    <div className="testi-caro simple-arrows">
                    <div class="carousel-item active">
                      <div className="testi-box">
                        <div className="testi-info">
                          <img className="img-fluid rounded-circle" src={testi1} alt="Testimonial" />
                          <div className="testi-info-inner">
                            <h4 className="mb-0">Ann Statham</h4>
                            <span className="d-block">CEO Pranklin Agency</span>
                          </div>
                        </div>
                        <p className="mb-0">They have great service, quality products and we trust them. We value a local relationship and the impact it has on our community.</p>
                        <span className="d-block star-rating"><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape off" /></span>
                      </div>
                     </div>
                      <div class="carousel-item">
                      <div className="testi-box">
                        <div className="testi-info">
                          <img className="img-fluid rounded-circle" src={testi2} alt="Testimonial" />
                          <div className="testi-info-inner">
                            <h4 className="mb-0">Peter Doe</h4>
                            <span className="d-block">Manager</span>
                          </div>
                        </div>
                        <p className="mb-0">They have great service, quality products and we trust them. We value a local relationship and the impact it has on our community.</p>
                        <span className="d-block star-rating"><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape off" /><i className="metaicon-star-in-black-of-five-points-shape off" /></span>
                      </div>
                      </div>
                      <div class="carousel-item">
                      <div className="testi-box">
                        <div className="testi-info">
                          <img className="img-fluid rounded-circle" src={testi3} alt="Testimonial" />
                          <div className="testi-info-inner">
                            <h4 className="mb-0">Eva</h4>
                            <span className="d-block">Designer</span>
                          </div>
                        </div>
                        <p className="mb-0">They have great service, quality products and we trust them. We value a local relationship and the impact it has on our community.</p>
                        <span className="d-block star-rating"><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /><i className="metaicon-star-in-black-of-five-points-shape on" /></span>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* Testimonials With Mockup Wrap */}
          </div>
        </div>
      </div>
     </div>
      </section>
  );
};

export default Testimonials;
