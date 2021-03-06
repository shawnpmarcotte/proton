import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Link from "next/link";


const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="slider-area">
      <div className="homepage-slide1">
        <Swiper getSwiper={setSwiper}>
          <div className="single-slide-item slide-bg1">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">welcome</p>
                        <h2 className="slider__title">
                          Proton Ministries Global Network
                        </h2>
                        <Link href="/about"><a className="theme-btn">
                          learn more About Us
                        </a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide-item slide-bg2">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">welcome</p>
                        <h2 className="slider__title">
                          Proton Ministries Global Network
                        </h2>
                        <a href="#" className="theme-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide-item slide-bg3">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">welcome</p>
                        <h2 className="slider__title">
                          Proton Ministries Global Network
                        </h2>
                        <a href="#" className="theme-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
        <div className="owl-dots">
          <div onClick={goPrev} className="owl-dot">
            <span></span>
          </div>
          <div onClick={goNext} className="owl-dot">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
