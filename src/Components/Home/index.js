import React from "react";
import Product from "../Products";
import "./styles/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Icon1 from "./svgs/2.svg";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="hero">
          <div className="main">
            <div className="categories">
              <ul>
                <li>
                  <img src={Icon1} alt="React Logo" />
                  Supermarket
                </li>
                <li>{" Health & Beauty"}</li>
                <li>{" Home & Office"}</li>
                <li>{" Phones & Tablets"}</li>
                <li>Computing</li>
                <li>Electronics</li>
                <li>Baby Products</li>
                <li>Gaming</li>
                <li>Sporting Good</li>
                <li>Automobile</li>
                <li>Other categories</li>
                <li></li>
              </ul>
            </div>
            <div className="banner">
              <img
                src="https://ng.jumia.is/cms/Homepage/2021/w01/Slider-copy-2.jpg"
                alt=""
              />
            </div>
            <div className="extra">
              <div className="cta">
                <p>HELP CENTER</p>
                <p>EASY RETURN</p>
                <p>SELL ON JUMIA</p>
              </div>

              <div className="gif">
                <img
                  src="https://ng.jumia.is//cms/Homepage/2020/W40/BSB-Jumia-Plus-.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="cta-row">
            <h1>Back To Work</h1>
            <h1>Jumia Food</h1>
            <h1>Official Stores</h1>
            <h1>Jumia Global</h1>
          </div>
        </div>
        <div className="recommended">
          <h3>Recommended for you</h3>
          <div className="recProducts">
            <Swiper
              spaceBetween={50}
              slidesPerView={6}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
