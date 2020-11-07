import React from "react";
//import Typist from 'react-typist';
import "../tab.css";
import "../demo.css";
//import basic from "../img/5-1.svg";
//import premium from "../img/5-2.svg";
//import standard from "../img/5-3.svg";
//import Footer from "../components/footer";
import {Helmet} from "react-helmet";

const GST = () => {
  return (
     <React.Fragment>
        <Helmet>
          <title>FSSAI Registration</title>
          <meta name="description" content="FSSAI registration is mandatory for all small food businesses, petty retailers, juice shops and hawkers in India. We offers an easy online process to register for FSSAI License from Rs.799/-" />
          <meta name="keywords" content="fssai,registration, certificate,new,gst, number,low fees,low,price" />
        </Helmet>
      <div class="wrapper light-wrapper">
      <div class="container inner">
        <h2 class="section-title mb-40 text-center">Benefits of FSSAI Certificate</h2>
        <div class="row gutter-60 gutter-md-30 process-wrapper arrow text-center">
          <div class="col-md-4"><span class="icon icon-blob icon-blob-blue color-blue mb-30"><i class="icofont-safety"></i><span class="step bg-blue">1</span></span>
            <h5>TRUST OF THE CUSTOMERS</h5>
          </div>
          <div class="col-md-4"><span class="icon icon-blob icon-blob-green color-green mb-30"><i class="icofont-ui-home"></i><span class="step bg-green">2</span></span>
            <h5>BOOST UP YOUR BUSINESS</h5>
          </div>
          <div class="col-md-4"><span class="icon icon-blob icon-blob-pink color-pink mb-30"><i class="icofont-papers"></i><span class="step bg-pink">3</span></span>
            <h5>GOVERNMENT FUNDING AND LOAN</h5>
          </div>
        </div>
      </div>
    </div>
   
    </React.Fragment>
  );
};

export default GST;
