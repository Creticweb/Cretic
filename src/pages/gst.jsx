import React from "react";
import "../tab.css";
import "../demo.css";
import basic from "../img/5-1.svg";
import premium from "../img/5-2.svg";
import standard from "../img/5-3.svg";
import Footer from "../components/footer";
import GSTFAQ from "../components/gstfaq";
//import Pay from "../components/foobar";
import {Helmet} from "react-helmet";

const GST = () => {
  return (
     <React.Fragment>
        <Helmet>
          <title>GST Registration Online | Get Your GST Number in 1 Day</title>
          <meta name="description" content="GST registration is mandatory for all entities involved in the buying or selling or providing of services in India. We offers an easy online process to register for GST from Rs.299/-" />
          <meta name="keywords" content="gst,registration,new,gst, number,low fees,low,price" />
        </Helmet>
        <div class="wrapper light-wrapper">
      <div class="container inner">
        <h2 class="section-title mb-40 text-center">How Does GST Registration Work For You?</h2>
        <div class="row gutter-60 gutter-md-30 process-wrapper arrow text-center">
          <div class="col-md-4"><span class="icon icon-blob icon-blob-blue color-blue mb-30"><i class="icofont-safety"></i><span class="step bg-blue">1</span></span>
            <h5>We help you get a Secure GST Identification Number.</h5>
          </div>
          <div class="col-md-4"><span class="icon icon-blob icon-blob-green color-green mb-30"><i class="icofont-ui-home"></i><span class="step bg-green">2</span></span>
            <h5>We make it easy for you to get your GST from the comfort of your own home.</h5>
          </div>
          <div class="col-md-4"><span class="icon icon-blob icon-blob-pink color-pink mb-30"><i class="icofont-papers"></i><span class="step bg-pink">3</span></span>
            <h5>We will file your returns and complete all other compliances as and when required.</h5>
          </div>
        </div>
      </div>
    </div>
      <div class="p-body">

      <div id="kote-template-1">
        <div className="all-presets-container">
          <div className="presets-container">
            <div className="preset-container">
              {/* Table Start*/}
              <div className="kote-prices-table-1">
                <div className="prices-table__left-column">
                  <div className="prices-table__top-container">
                    <div className="prices-table__icons-container">
                      <div className="prices-table__icon-1"><img src="https://previews.customer.envatousercontent.com/files/284738661/templates/template-1/styles/images/background.svg" alt="Icon" /></div>
                      <div className="prices-table__icon-2"><img src={basic} alt="basic gst" /></div>
                    </div>
                    <div className="prices-table__price"><b>₹399</b><span>all inclusive fees</span></div>
                    <hr />
                    <div className="prices-table__name">
                      <p>Basic</p>
                    </div>
                    <div className="prices-table__description">
                      <ul>
                        <li>GST Registration</li>
                        <li>Business Bank Account Opening</li>
                        <li>Online GST Software</li>
                        <li>1 Month Free GST Filing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="prices-table__bottom-container">
                    <div className="prices-table__button"><a href="https://rzp.io/l/2Ij5LmObg">Get started </a></div>
                  </div>
                </div>
                <div className="prices-table__center-column">
                  <div className="prices-table__top-container">
                    <div className="prices-table__icons-container">
                      <div className="prices-table__icon-1"><img src="https://previews.customer.envatousercontent.com/files/284738661/templates/template-1/styles/images/background.svg" alt="Icon" /></div>
                      <div className="prices-table__icon-2"><img src={premium} alt="Premium GST" /></div>
                    </div>
                    <div className="prices-table__price"><b>₹1499</b><span>all inclusive fees</span></div>
                    <hr />
                    <div className="prices-table__name">
                      <p>Premium</p>
                    </div>
                    <div className="prices-table__description">
                      <ul>
                        <li>GST Registration</li>
                        <li>Udyam Registration</li>
                        <li>Business Bank Account Opening</li>
                        <li>Online GST Software</li>
                        <li>6 Months Free GST Filing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="prices-table__bottom-container">
                    <div className="prices-table__button"><a href="https://rzp.io/l/GIL4Dcs">Get started </a></div>
                  </div>
                </div>
                <div className="prices-table__right-column">
                  <div className="prices-table__top-container">
                    <div className="prices-table__icons-container">
                      <div className="prices-table__icon-1"><img src="https://previews.customer.envatousercontent.com/files/284738661/templates/template-1/styles/images/background.svg" alt="Icon" /></div>
                      <div className="prices-table__icon-2"><img src={standard} alt="Standard Gst" /></div>
                    </div>
                    <div className="prices-table__price"><b>₹799</b><span>all inclusive fees</span></div>
                    <hr />
                    <div className="prices-table__name">
                      <p>Standard</p>
                    </div>
                    <div className="prices-table__description">
                      <ul>
                        <li>GST Registration</li>
                        <li>Udyam Registration</li>
                        <li>Business Bank Account Opening</li>
                        <li>Online GST Software</li>
                        <li>3 Months Free GST Filing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="prices-table__bottom-container">
                    <div className="prices-table__button"><a href="https://rzp.io/l/HYXqmSLe">Get started </a></div>
                  </div>
                </div>
              </div>
              {/* Table End*/}
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="wrapper gray-wrapper">
        <div className="container inner">
          <h3 className="section-title mb-40 text-center">The following documents must be submitted by regular taxpayers applying for GST registration.</h3>
          <div className="row gutter-50">
            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <div className="icon icon-bg icon-bg-rose color-rose mr-25"><span className="number">1</span></div>
                </div>
                <div>
                  <h5>PAN card of the business</h5>
                  <p>GST registration is linked to the PAN of the business. Hence, PAN must be obtained for the legal entity before applying for GST Registration.</p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <div className="icon icon-bg icon-bg-blue color-blue mr-25"><span className="number">2</span></div>
                </div>
                <div>
                  <h5>Identity proof along with photographs</h5>
                  <p>PAN, passport, driving license, aadhar card or voter’s identity card can be submitted as identity proof. Photographs of the promoters/ proprietors also need to be submitted.</p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="space20 d-none d-md-block d-lg-none" />
            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <div className="icon icon-bg icon-bg-green color-green mr-25"><span className="number">3</span></div>
                </div>
                <div>
                  <h5>Address proof of promoter</h5>
                  <p>Documents like passport, driving license, aadhaar card, voters identity card and ration card can be submitted as address proof.</p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="space20 d-none d-lg-block" />
            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <div className="icon icon-bg icon-bg-purple color-purple mr-25"><span className="number">4</span></div>
                </div>
                <div>
                  <h5>Bank account proof</h5>
                  <p>Scanned copy of the first page of bank passbook or the relevant page of bank statement or scanned copy of a cancelled cheque containing name of the proprietor or business entity, bank account no., MICR, IFSC and branch details including code needs to be uploaded.</p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="space20 d-none d-md-block d-lg-none" />
            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <div className="icon icon-bg icon-bg-orange color-orange mr-25"><span className="number">5</span></div>
                </div>
                <div>
                  <h5>Business registration document</h5>
                  <p>Proof of business registration must be submitted for all types of entities. There is no requirement of submitting this document for a proprietorship as the proprietor and the entity are essentially considered the same.</p>
                </div>
              </div>
            </div>
            {/*/column */}
            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <div className="icon icon-bg icon-bg-violet color-violet mr-25"><span className="number">6</span></div>
                </div>
                <div>
                  <h5>Business location proof</h5>
                  <p>Address proof must be provided for all places of businesses mentioned in the GST registration application. The following documents are acceptable as address proof for GST registration.</p>
                </div>
              </div>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}
      </div>
      <GSTFAQ />
      <Footer/>
    </React.Fragment>
  );
};

export default GST;
