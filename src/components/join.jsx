import React from "react";
//import * as Icon from "react-feather";
import "../style.min.css"
import shared from "../fonts/svg/cloudfiber.svg";
import email from "../fonts/svg/email.svg";

const Join = () => {
  return (
  <section class="help pt-4 pb-80 white-wrapper">
    <div class="container">
     <div className="text-center">
            <h2 className="title-bg bg-default color-default">eXpLore</h2>
      </div>
     <h2 class="section-title larger text-center">Try Our Web Services</h2>
     </div>
    <div class="container">
      <div class="service-wrap">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="help-container">
              <div class="plans badge feat left bg-grey"><i class="fas fa-long-arrow-alt-left"></i></div>
              <a href="/shared-hosting" class="help-item">
                <div class="img">
                  <img class="svg ico" src={shared} alt="Sharerd Hosting"/>
                </div>
                <div class="inform">
                  <div class="title">Go to Shared Hosting</div>
                  <div class="description">All the features you need to build the website of your dreams - without the hassle.</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="help-container">
              <div class="plans badge feat bg-grey"><i class="fas fa-long-arrow-alt-right"></i></div>
              <a href="email" class="help-item">
                <div class="img">
                  <img class="svg ico" src={email} alt="Business Mail"/>
                </div>
                <div class="inform">
                  <div class="title">Go to Business Email</div>
                  <div class="description">Choose an email matching your business name. Choose a customized email address</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  );
};

export default Join;
