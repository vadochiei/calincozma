import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '/public/images/slider/2.png'
import hero2 from '/public/images/slider/4.png'
import Image from "next/image";


const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    fade: true
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Hero2 = () => {
    return (
        <section className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title-sub">
                                        <h5>Ne unim pentru Romani!</h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Calin Cozma, un candidat fara notorietate, dar cu realizari notabile!</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        {/* <p>🇷🇴</p> */}
                                    </div>
                                    <div className="btns">
                                        {/* <Link onClick={ClickHandler} href="/about" className="theme-btn-s3">Explore More <i className="fi "></i></Link> */}
                                    </div>
                                    <div className="slider-pic">
                                        <Image src={hero1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title-sub">
                                        <h5>WE ARE AWESOME!</h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>World Needs A Leader</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                            scrambled it to make.</p>
                                    </div>
                                    <div className="btns">
                                        <Link onClick={ClickHandler} href="/about" className="theme-btn-s3">Explore More <i className="fi "></i></Link>
                                    </div>
                                    <div className="slider-pic">
                                        <Image src={hero2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title-sub">
                                        <h5>WE ARE AWESOME!</h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>World Needs A Leader</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                            scrambled it to make.</p>
                                    </div>
                                    <div className="btns">
                                        <Link onClick={ClickHandler} href="/about" className="theme-btn-s3">Explore More <i className="fi "></i></Link>
                                    </div>
                                    <div className="slider-pic">
                                        <Image src={hero1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     */}
                </Slider>
            </div>
        </section>
    )
}

export default Hero2;