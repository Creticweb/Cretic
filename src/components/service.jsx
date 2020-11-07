import React from "react";
import LogoO1x from "../style/images/concept/concept14.png";
import LogoO2x from "../style/images/concept/concept14@2x.png";
import LogoT1x from "../style/images/concept/concept19.png";
import LogoT2x from "../style/images/concept/concept19@2x.png";
import LogoTE1x from "../style/images/concept/concept18.png";
import LogoTE2x from "../style/images/concept/concept18@2x.png";
import LogoF1x from "../style/images/concept/concept15.png";
import LogoF2x from "../style/images/concept/concept15@2x.png";

const Service = () => {
  return (

      <div className="wrapper white-wrapper">
        <div className="container inner">
          <div className="text-center">
            <h2 className="title-bg bg-default color-default">What We Do?</h2>
          </div>
          <div className="space10" />
          <h3 className="display-3 text-center">Cretic is cloud-based business services platform dedicated to helping.</h3>
          <div className="space30" />
          <div className="row gutter-60 text-center align-items-end">
            <div className="col-md-4">
              <figure className="mb-30"><img src={LogoO1x} srcset={LogoO1x + ' 1x,' + LogoO2x + ' 2x'} alt="GST service"/></figure>
              <h4>GST Registration</h4>
              <p className="mb-15">Completely managed GST registration service until obtaining GSTIN with Expert Support and 1 year Online accounting software. Inclusive of all government fee and taxes.</p>
              <div className="text-center"><a href="/gst-registration" className="more">Learn more</a></div>
            </div>
            <div className="space20 d-md-none" />
            <div className="col-md-4">
              <figure className="mb-30"><img src={LogoT1x} srcset={LogoT1x + ' 1x,' + LogoT2x + ' 2x'} alt="ecom-service"/></figure>
              <h4>e-Commerce Solution</h4>
              <p className="mb-15">You can rest all your queries and concerns because here we provide a wide variety of options to choose from as the scope of e-commerce.</p>
              <div className="text-center"><a href="/online" className="more">Learn more</a></div>
            </div>
            <div className="space20 d-md-none" />
            <div className="col-md-4">
              <figure className="mb-30"><img src={LogoTE1x} srcset={LogoTE1x + ' 1x,' + LogoTE2x + ' 2x'} alt="e-commerce"/></figure>
              <h4>Trade License</h4>
              <p className="mb-15">A place of business within a State, Corporation or Municipality will require a trade license from the concerned State or Corporation or Municipality for operating.</p>
              <div className="text-center"><a href="/trade-license" className="more">Learn more</a></div>
            </div>
          </div>
          <div className="space140" />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <figure><img src={LogoF1x} srcset={LogoF1x + ' 1x,' + LogoF2x + ' 2x'} alt="Trade License"/></figure>
            </div>
          </div>
        </div>
       </div>
  );
};

export default Service;
