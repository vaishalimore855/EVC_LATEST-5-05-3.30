// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCaretLeft, FaCaretRight, FaEthereum } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import SectionTitle from "../../Components/Single/SectionTitle";

// ASSETS
import nftv1 from "../Dashboard/Mint/Images/level1.png";
import nftv2 from "../Dashboard/Mint/Images/level2.png";
import nftv3 from "../Dashboard/Mint/Images/level3.png";
import nftv4 from "../Dashboard/Mint/Images/level4.png";
import nftv5 from "../Dashboard/Mint/Images/level5.png";
import nftv6 from "../Dashboard/Mint/Images/level6.png";
import nftv7 from "../Dashboard/Mint/Images/level7.png";
import nftv8 from "../Dashboard/Mint/Images/level8.png";
import { Scrollbar, Navigation } from "swiper";
import "swiper/css/scrollbar";

//dev: NFT List
const nftList = [
  {
    thumb: nftv1,
    eth: "#",
    title: "Crypto Newbies",
    price: "$110",
    link: "#",
  },
  {
    thumb: nftv2,
    eth: "#",
    title: "Crypto Enthusiast",
    price: "$550",
    link: "#",
  },
  {
    thumb: nftv3,
    eth: "#",
    title: "Crypto Entrepreneur",
    price:  "$1,100",
    link: "#",
  },
  {
    thumb: nftv4,
    eth: "#",
    title: "Crypto Investor",
    price:  "$2,750",
    link: "#",
  },
  {
    thumb: nftv5,
    eth: "#",
    title: "Crypto King",
    price:  "$5,500",
    link: "#",
  },
  {
    thumb: nftv6,
    eth: "#",
    title:"Blockchain Mogul",
    price: "$11,000",
    link: "#",
  },
  {
    thumb: nftv7,
    eth: "#",
    title: "Bitcoin Billionaire",
    price: "$27,500",
    link: "#",
  },
  {
    thumb: nftv8,
    eth: "#",
    title: "CryptoCap Tycoon",
    price: "$55,000",
    link: "#",
  },
  
];

//dev: NFT List
const NftSlider = () => {
  return (
    <>
      <div className="section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <SectionTitle main="Buy NFT Avatar And Stake Your NFT" />
            </div>
            <div className="col-lg-3">
              <div className="d-flex align-items-center fw-bold gap-3 mb-5">
                {/* <div className="count text-gradient">1</div> */}
                <div className="nft-scrollbar"></div>
                {/* <div className="count">{nftList.length}</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="container overflow-swiper">
            <Swiper
              scrollbar={{
                el: ".nft-scrollbar",
              }}
              spaceBetween={32}
              slidesPerView={"auto"}
              className="nft-swiper"
              modules={[Scrollbar, Navigation]}
              navigation={{
                nextEl: ".nft-swiper-button-next",
                prevEl: ".nft-swiper-button-prev",
              }}
            >
              {nftList.map((nft, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="card-nftv">
                      <div
                        className="card-thumb"
                        style={{ backgroundImage: "url(" + nft.thumb + ")" }}
                      >
                        <div className="card-react cursor-pointer">
                          <BsHeart />
                        </div>

                        <div className="card-info">
                          <div>
                            <div className="card-title">
                              <a href="#">{nft.title}</a>
                            </div>
                            <div className="card-price">
                              Price : {nft.price}
                            </div>
                          </div>
                          <a href={nft.link} className="btn btn-sm btn-primary">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="slider-controls mt-4">
              <div className="d-flex gap-3 align-items-center">
                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer nft-swiper-button-prev">
                  <FaCaretLeft className="me-1" />
                </div>
                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer nft-swiper-button-next">
                  <FaCaretRight className="ms-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftSlider;
