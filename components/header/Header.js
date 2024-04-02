import React from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '/public/images/logo-s3.svg'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'
import Image from 'next/image'


const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <header id="header" className={`${props.hclass}`}>
            <HeaderTopbar />
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-sm-3  col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-5 col-sm-4 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={Logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-sm-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Home style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-4">Home style 4</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/about">About us</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">EVENTS</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/events">EVENTS</Link></li>
                                                <li><Link onClick={ClickHandler} href="/event-single/Support-for-Womans">EVENTS single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                                                <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                                <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Harry-Abraham">Team Single</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Services</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/service">Services Style 1</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-s2">Services Style 2</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Newspaper">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} href="/faq">FAQ</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Auth Pages</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/login">Login Page</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/register">Register Page</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/forgot-password">Forgot Password</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Letraset-Sheets-Passage-And-Recently">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Letraset-Sheets-Passage-And-Recently">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Letraset-Sheets-Passage-And-Recently">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/donate"><span className="text">MAKE DONATION</span>
                                            <span className="mobile">
                                                <i className="fi flaticon-user"></i>
                                            </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;