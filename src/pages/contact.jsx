import React from 'react';
import Con from "../components/con";
import Footer from "../components/footer";
import "../style.min.css";
import livechat from "../fonts/svg/livechat.svg";
import email from "../fonts/svg/emailopen.svg";
import phone from "../fonts/svg/phone.svg";
import book from "../fonts/svg/book.svg";
import lock from "../fonts/svg/lock.svg";
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
              <a href="/" class="help-item">
                <div class="img">
                  <img class="svg ico" src={livechat} height="65" alt="live chat"/>
                </div>
                <div class="inform">
                  <div class="title">Live Chat</div>
                  <div class="description">Lorem Ipsum is simply dummy text printing.</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="#ticket" class="help-item gocheck">
                <div class="img">
                  <img class="svg ico" src={email} height="65" alt="email support"/>
                </div>
                <div class="inform">
                  <div class="title">Send Ticket</div>
                  <div class="description">Lorem Ipsum is simply dummy text printing.</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="/" class="help-item">
                <div class="img">
                  <img class="svg ico" src={phone} height="65" alt="phone"/>
                </div>
                <div class="inform">
                  <div class="title">Phone Now</div>
                  <div class="description">Lorem Ipsum is simply dummy text printing.</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="knowledgebase-list" class="help-item">
                <div class="img">
                  <img class="svg ico" src={book} height="65" alt="book"/>
                </div>
                <div class="inform">
                  <div class="title">Knowledgebase</div>
                  <div class="description">Lorem Ipsum is simply dummy text printing.</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="login" class="help-item">
                <div class="img">
                  <img class="svg ico" src={lock} height="65" alt="client"/>
                </div>
                <div class="inform">
                  <div class="title">Cliente Area</div>
                  <div class="description">Lorem Ipsum is simply dummy text printing.</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="help-container">
              <a href="faq" class="help-item">
                <div class="img">
                  <img class="svg ico" src={FAQ} height="65" alt="Question"/>
                </div>
                <div class="inform">
                  <div class="title">FAQ</div>
                  <div class="description">Lorem Ipsum is simply dummy text printing.</div>
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