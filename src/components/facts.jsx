import React from "react";
//import * as Icon from "react-feather";
import bgimg from "../assets/images/bg1.jpg";
const Facts = () => {
  return (
            <section>

                <div class="w-100 pt-30 pb-30 position-relative overflow-hidden">

                    <div class="fixed-bg" style={{
                    background: `url(${bgimg})`,
                    }}
                    ></div>
                    <div class="container">
                        <div class="facts-wrap text-center w-100">
                            <div class="row">
                                <div class="col-md-3 col-sm-6 col-lg-3">
                                    <div class="fact-box text-white brd-rd20 w-100">
                                        <i class="metaicon-growth"></i>
                                        <h6 class="mb-0">Projects Done</h6>
                                        <span><span class="counter">150</span><sup>+</sup></span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-lg-3">
                                    <div class="fact-box text-white brd-rd20 w-100">
                                        <i class="metaicon-supermarket"></i>
                                        <h6 class="mb-0">Success Rate</h6>
                                        <span><span class="counter">98</span><sup>%</sup></span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-lg-3">
                                    <div class="fact-box text-white brd-rd20 w-100">
                                        <i class="metaicon-medal"></i>
                                        <h6 class="mb-0">Cities Present</h6>
                                        <span><span class="counter">180</span><sup>+</sup></span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-lg-3">
                                    <div class="fact-box text-white brd-rd20 w-100">
                                        <i class="metaicon-target-1"></i>
                                        <h6 class="mb-0">Server Location</h6>
                                        <span><span class="counter">10</span><sup>+</sup></span>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  );
};

export default Facts;
