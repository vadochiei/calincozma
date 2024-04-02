import React from "react";
import Link from 'next/link'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="wpo-hero-slider-s2  wpo-hero-slider-1">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={1800}
                        parallax={true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-6.jpg'})` }}>
                                <div className="slide-inner slide-bg-image" data-background="assets/images/slider/slide-6.jpg">
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2>Life Without Liberty,
                                                    As like Hell.</h2>
                                            </div>
                                            <div data-swiper-parallax="400" className="slide-text">
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                                    scrambled it to make.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div data-swiper-parallax="500" className="slide-btns">
                                                <Link onClick={ClickHandler} href="/about" className="theme-btn-s3">JOIN THE CAMPAIGN</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-4.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>Let's Make
                                                America Great Again</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                                scrambled it to make.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div data-swiper-parallax="500" className="slide-btns">
                                            <Link onClick={ClickHandler} href="/about" className="theme-btn-s3">JOIN THE CAMPAIGN</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-8.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>Life Without Liberty,
                                                As like Hell.</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                                scrambled it to make.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div data-swiper-parallax="500" className="slide-btns">
                                            <Link onClick={ClickHandler} href="/about" className="theme-btn-s3">JOIN THE CAMPAIGN</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>


                </div>
            </div>
        </section>
    )
}

export default Hero;