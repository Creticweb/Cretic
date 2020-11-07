import React from 'react';
import logoO1x from "../style/images/logo-light.png";
import logoO2x from "../style/images/logo-light@2x.png";

const Menu = (props) => {

  return (

      <div className="">
        <nav className="navbar navbar-fancy navbar-fancy-dark inverse-text navbar-expand-lg flex-column">
          <div className="">
            <div className="navbar-brand"><a href="/"><img src={logoO1x} srcset={logoO1x + ' 1x,' + logoO2x + ' 2x'} alt="logo"/></a></div>
            <div className="navbar-other ml-auto order-lg-3">
              <ul className="navbar-nav flex-row align-items-center" data-sm-skip="true">
                <li className="nav-item">
                  <div className="navbar-hamburger d-lg-none d-xl-none ml-auto"><button className="hamburger animate plain" data-toggle="offcanvas-nav"><span /></button></div>
                </li>
                <li className="dropdown search-dropdown position-static nav-item">
                  <a href="/" role="button" className="collapse-toggle" data-toggle="collapse" data-target=".search-dropdown-menu" aria-haspopup="true" aria-expanded="false"><i className="jam jam-search" /></a>
                  <div className="dropdown-menu search-dropdown-menu w-100 collapse">
                    <div className="form-wrapper">
                      <form className="inverse-text">
                        <input type="text" className="form-control" placeholder="Search something" />
                      </form>
                      {/* /.search-form */}
                      <i className="dropdown-close jam jam-close" />
                    </div>
                    {/* /.form-wrapper */}
                  </div>
                </li>
                <li className="nav-item"><button className="plain" data-toggle="offcanvas-info"><i className="jam jam-info" /></button></li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-other */}
            <div className="navbar-collapse offcanvas-nav">
              <div className="offcanvas-header d-lg-none d-xl-none">
                <a href="/"><img src={logoO1x} srcset={logoO1x + ' 1x,' + logoO2x + ' 2x'} alt="logo"/></a>
                <button className="plain offcanvas-close offcanvas-nav-close"><i className="jam jam-close" /></button>
              </div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="/">Home</a>
                  
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/gst-registration">GST</a>
                  
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/trade-license/wb">Trade License</a>
                  
                </li>
                <li className="nav-item"><a className="nav-link" href="/fssai-registration">FSSAI</a>
                 
                  {/*/.dropdown-menu */}
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/contact">Contact</a>
                  
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/blog/">Blog</a>
                  
                </li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container */}
        </nav>
        {/* /.navbar */}
        <div className="offcanvas-info inverse-text">
          <button className="plain offcanvas-close offcanvas-info-close"><i className="jam jam-close" /></button>
          <a href="/"><img src="/" srcSet={logoO1x} srcset={logoO1x + ' 1x,' + logoO2x + ' 2x'} alt="logo" /></a>
          <div className="space30" />
          <p>This is not a Government run Website and the form is not the actual registration form, it is just to collect information from our clients so that our expert can easily understand their business or needs. By proceeding forward with this website you are aware that we are a private company managing this website and providing assistance based on the request from our customers and the fee collected in this website is a consultancy fee.</p>
          <div className="space20" />
          <div className="widget">
            <h5 className="widget-title">Contact Info</h5>
            <address> Moonshine St. 14/05 <br /> Light City, London <div className="space20" />
              <a href="mailto: creticweb@gmail.com" className="nocolor">creticweb@gmail.com</a><br /><i className="jam jam-whatsapp" /> +91 (964) 754 00 52 </address>
          </div>
          {/* /.widget */}
          <div className="widget">
            <h3 className="widget-title">Learn More</h3>
            <ul className="list-unstyled">
              <li><a href="/about" className="nocolor">About</a></li>
              <li><a href="/tnc" className="nocolor">Terms of Conditions</a></li>
              <li><a href="/" className="nocolor">Privacy Policy</a></li>
              <li><a href="/contact" className="nocolor">Contact Us</a></li>
            </ul>
          </div>

        </div>
        {/* /.offcanvas-info */}
      </div>
  );
}

export default Menu;