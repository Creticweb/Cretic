import React from "react";
import Service from "./service";
import Join from "./join";
import {Helmet} from "react-helmet";
import Banner from "./banner";
import Process from "./process";
import Footer from "./footer";

const Home = () => {
  return (
     <React.Fragment>
     <Helmet>
            <title>Cretic Solutions offers a suite of online services</title>
            <meta name="description" content="We offers a suite of online services like company registration, trademark filing, income tax filing, GST registration, GST return filing" />
        </Helmet>
        <Banner />
      <Service />
      <Process />
      <Join />
      
      <Footer />
     </React.Fragment>
  );
};

export default Home;
