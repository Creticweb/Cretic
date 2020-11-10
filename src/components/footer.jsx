import React from "react";
//import logo from "../assets/images/footer-logo.png";
import logoO1x from "../style/images/logo-light.png";
import logoO2x from "../style/images/logo-light@2x.png";

const Footer = () => {
  return (
     <React.Fragment>
      <footer className="dark-wrapper inverse-text">
        <div className="container inner">
          <div className="row">
            <div className="col-md-12 col-lg-3 text-center text-lg-left">
              <div className="widget"> <img src={logoO1x} srcset={logoO1x + ' 1x,' + logoO2x + ' 2x'} alt="logo"/>
               </div>
            </div>
            {/* /column */}
            <div className="space30 d-lg-none d-xl-none" />
            <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
              <div className="widget">
                <h5 className="widget-title">Goods & Services Tax</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="/gst-registration">GST Registration</a></li>
                  <li><a href="/gst-invoice">GST Invoicing</a></li>
                  <li><a href="/gst-return">GST Return Filing</a></li>
                  <li><a href="/eway">eWay Bill</a></li>
                  <li><a href="/gst-registration">GST Registration for Foreigners</a></li>
                </ul>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-6 col-md-3 col-lg-2">
              <div className="widget">
                <h5 className="widget-title">Licenses</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="/wk">FSSAI [Food License]</a></li>
                  <li><a href="/wk">FSSAI Renewal</a></li>
                  <li><a href="/wk">IEC [Import/Export Code]</a></li>
                  <li><a href="/wk">IEC Certificate Modification</a></li>
                  <li><a href="/wk">Digital Signature Certificate</a></li>
                </ul>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-6 col-md-3 col-lg-2">
              <div className="widget">
                <h5 className="widget-title">Registration</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="/gst-registration">GST Registration</a></li>
                  <li><a href="/wk">MSME Registration</a></li>
                  <li><a href="/wk">One Person Company</a></li>
                  <li><a href="/wk">Private Limited Company</a></li>
                  <li><a href="/wk">Limited Liability Partnership</a></li>
                </ul>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-6 col-md-3 col-lg-2">
              <div className="widget">
                <h5 className="widget-title">Contact</h5>
                <address> 101/194 Shambhu Nath Dey Road , Habra</address>
                <a href="mailto: creticweb@gmail.com">creticweb@gmail.com</a><br /> <i className="jam jam-whatsapp" />+91 (963) 545 41 65
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="container inner pt-0 pb-40 d-flex align-items-center">
          <p className="mb-0 mr-auto">© 2020 SRV Impex International. All rights reserved.</p>
          <ul className="social social-mute  ml-auto">
            <li><i class="fab fa-cc-visa"></i></li>
            <li><i class="fab fa-cc-mastercard"></i></li>
            <li><i class="fab fa-cc-discover"></i></li>
            <li><i class="fab fa-cc-paypal"></i></li>
            <li><i class="fab fa-cc-amazon-pay"></i></li>
          </ul>
        </div>

      </footer>
    </React.Fragment>
  );
};

export default Footer;
