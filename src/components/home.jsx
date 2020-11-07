import React from "react";
import Service from "./service";
import Join from "./join";
import Banner from "./banner";
import Process from "./process";
import Footer from "./footer";

const Home = () => {
  return (
     <React.Fragment>
      <Banner />
      <Service />
      <Process />
      <Join />
      
      <Footer />
     </React.Fragment>
  );
};

export default Home;
