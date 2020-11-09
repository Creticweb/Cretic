import React from 'react';
import Con from "../components/con";
import Footer from "../components/footer";
import "../style.min.css";
import livechat from "../fonts/svg/livechat.svg";
import email from "../fonts/svg/emailopen.svg";
import phone from "../fonts/svg/phone.svg";
//import book from "../fonts/svg/book.svg";
//import lock from "../fonts/svg/lock.svg";
import FAQ from "../fonts/svg/question.svg";


const Contact = (props) => {

  return (
   <React.Fragment>
   <Con />
    <section class="services help pt-4 pb-80 cpupath">
    <div class="container">
      <div class="service-wrap">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="https://bit.ly/3eFapxc" class="help-item">
                <div class="img">
                  <img class="svg ico" src={livechat} height="65" alt="live chat"/>
                </div>
                <div class="inform">
                  <div class="title">Live Chat</div>
                  
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="mailto: creticweb@gmail.com" class="help-item gocheck">
                <div class="img">
                  <img class="svg ico" src={email} height="65" alt="email support"/>
                </div>
                <div class="inform">
                  <div class="title">Send Ticket</div>
                  
                </div>
              </a>
            </div>
          </div>
                  <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="tel:+919635454165" class="help-item gocheck">
                <div class="img">
                  <img class="svg ico" src={phone} height="65" alt="phone support"/>
                </div>
                <div class="inform">
                  <div class="title">Phone Support</div>
                  
                </div>
              </a>
            </div>
          </div>
                  <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="/faq" class="help-item gocheck">
                <div class="img">
                  <img class="svg ico" src={FAQ} height="65" alt="FAQ"/>
                </div>
                <div class="inform">
                  <div class="title">FAQ</div>
                  
                </div>
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
   
  </section>
  <Footer />
 </React.Fragment>
  );
}

export default Contact;