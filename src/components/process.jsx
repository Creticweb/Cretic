import React from "react";
//import * as Icon from "react-feather";
import select from "../fonts/svg/select.svg";
import speed from "../fonts/svg/speed.svg";
import inv from "../fonts/svg/inverse.svg";

const Process = () => {
  return (
  <section class="services sec-normal sec-bg3 cpupath-w scrollme">
    <div class="container">
      <div class="service-wrap">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="section-heading text-white">GST Return Filing</h2>
            <p class="section-subheading">We are available 7 days a Week. You can reach us via Phone, Email & WhatsApp</p>
          </div>
          <div class="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1" data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
            <div class="service-section">
              <div class="plans badge feat bg-pink">Start 199/Mo</div>
              <img class="svg" src={select} alt="Filed by Chartered Accountant"/>
              <div class="title">Filed by Chartered Accountant</div>
              <p class="subtitle">
                Your GST Return will be prepared and filed by our Experienced Team of CAs having Vast Experience
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1" data-to="0" data-opacity="1" data-translatey="100" data-easeinout="0">
            <div class="service-section">
              <img class="svg" src={speed} alt="Timely Submission of GST Return"/>
              <div class="title">Timely Submission of GST Return</div>
              <p class="subtitle">
                We will submit your GST Return within 24 hours of submission of all details
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1" data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
            <div class="service-section">
              <div class="plans badge feat bg-pink">10% Discount</div>
              <img class="svg" src={inv} alt="E-Commerce GST Filing"/>
              <div class="title">E-Commerce GST Filing</div>
              <p class="subtitle">
                Specialised Services for Sellers who work on Online Selling Platforms including Refund Adjustments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Process;
