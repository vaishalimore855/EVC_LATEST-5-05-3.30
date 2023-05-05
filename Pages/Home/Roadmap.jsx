import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Components/Single/SectionTitle";

//dev: Roadmap
const Roadmap = () => {
  return (
    <div className="section-gap bg-pattern roadmap">
      <div className="container">
        <SectionTitle
          main="Roadmap"
          sub="Our Roadmap to Decentralizing Internet Infrastructures"
          className="text-center"
        />
      </div>
      <div className="overflow-hidden">
        <div className="container">
          <div className="timeline-vertical">
            <Swiper
             spaceBetween={10}
              slidesPerView={"6"}
              breakpoints={{
                0: {
                  slidesPerView: "1",
                },
                575: {
                  slidesPerView: "2",
                },
                991: {
                  slidesPerView: "3",
                },
                1199: {
                  slidesPerView: "4",
                },
                1399: {
                  slidesPerView: "5",
                },
                1459: {
                  slidesPerView: "6",
                },
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".roadmap-swiper-button-next",
                prevEl: ".roadmap-swiper-button-prev",
              }}
              
            
            >
              <SwiperSlide>
                <div className="card-step" >
                  <span></span>
                  <div className="card-title font-gilroy mb-3">Q3 2023</div>
                  <ul>
                    <li>Smart Contract<br></br> Testing & Audit</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-step">
                  <span></span>
                  <div className="card-title font-gilroy mb-3">Q4 2023</div>
                  <ul>
                    <li>Pre-launch</li>
                    <li>Listing on PancakeSwap</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-step">
                  <span></span>
                  <div className="card-title font-gilroy mb-3">Q1 2024</div>
                  <ul>
                    <li>Launch of EVC <br></br>Advertising Product</li>
                    <li>CEX Listing</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-step">
                  <span></span>
                  <div className="card-title font-gilroy mb-3">Q2 2024</div>
                  <ul>
                    <li>Launch of Decentrali-<br></br>zed Dating App</li>
                    <li>CEX Listing</li>
                    <li>Partnerships</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-step">
                  <span></span>
                  <div className="card-title font-gilroy mb-3">Q3 2024</div>
                  <ul>
                    <li>Launch of NFT<br></br> Marketplace</li>
                    <li>CEX Listing</li>
                    <li>More Partnerships</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-step">
                  <span></span>
                  <div className="card-title font-gilroy mb-3">Q4 2024</div>
                  <ul>
                    <li>Launch of Cross <br></br>Chain NFT Avatar</li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slider-controls d-xxl-none">
            <div className="d-flex gap-3 align-items-center">
              <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer roadmap-swiper-button-prev">
                <FaCaretLeft className="me-1" />
              </div>
              <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer roadmap-swiper-button-next">
                <FaCaretRight className="ms-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
