import React from 'react'
import LazyLoadImage from '../../Components/Global/LazyImage';
import SectionTitle from '../../Components/Single/SectionTitle';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

//dev: ASSETS
import aboutImage from '../../assets/img/regular/about.png';
import { Navigation } from 'swiper';

//dev: About Pages
const About = () => {
    return (
        <div className="section-gap position-relative z-1 bg-pattern theme-about" id="About">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="image-effect mb-5 mb-lg-0">
                            <LazyLoadImage src={aboutImage}   style={{borderRadius:"3% 3%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle
                            pre="ABOUT"
                            main="Introducing NFT Al Avatars - The Future of Digital Identities"
                            sub="Create, Customize and Earn with EVC Token on the BSC Blockchain"
                            subFull
                        />
                        <div className="about-slider-area">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.about-swiper-button-next',
                                    prevEl: '.about-swiper-button-prev',
                                }}>
                                <SwiperSlide>Welcome to a brand new world - a world of unique digital identities! With the rise of our NFT Al Avatar, you can now create, trade and reward yourself with EVC Token. Get creative and customize your avatar the way you want with help of an artificial intelligence. Plus, you get rewarded with EVC Token when you mint your NFT Avatar!</SwiperSlide>
                                <SwiperSlide>Step into the metaverse and step up your rewards game. Enjoy endless exploration and earn as you go by visiting top businesses in the virtual world. Make every day feel like a rewarding adventure - start your metaverse journey today!"</SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="slider-controls">
                            <div className="d-flex gap-3 align-items-center">
                                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer about-swiper-button-prev">
                                    <FaCaretLeft className='me-1' />
                                </div>
                                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer about-swiper-button-next">
                                    <FaCaretRight className='ms-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About