'use client'

import React, { FormEvent, useState } from "react";
import Link from 'next/link'
// import Logo from '/public/images/logo.svg'
import Image from 'next/image';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Footer() {

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const [email, setEmail] = useState('')
const [emailSent, setEmailSent] = useState(false)

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
        email
    }

    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'content-type': 'application/json'

        },
        body: JSON.stringify(form)
    })

    if (response.status === 200) {
        toast.success('📰 Email-ul a fost salvat', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        console.log("Email adaugat")
        setEmailSent(true)
    }

    // setEmail('');

    console.log(form)
}
    return (
        <footer className="wpo-site-footer">
            {/* <div className="shape-1">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_223)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_223" x1="795" y1="5.99883" x2="9.55538e-10" y2="5.99883"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#274DCF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}
            {/* <div className="shape-2">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_224)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_224" x1="2.31964e-06" y1="5.99883" x2="795" y2="5.99898"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#DE2045" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    {/* <Image src={"Logo.text"} alt="blog" /> */}
                                </div>
                                {/* <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, make specimen book.</p> */}
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.facebook.com/profile.php?id=61558022969427">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://twitter.com/calinvcozma">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.instagram.com/calinvalentincozma/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.tiktok.com/@calinvalentincozma">
                                            <i className="fab fa-tiktok d"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Meniu</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/events">Evenimente</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div >
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi ti-location-pin"></i>Cluj - Napoca, Romania</li>
                                        {/* <li><i className="fi flaticon-phone-call-1"></i>+ 8 (123) 123 456 789
                                            <br />
                                            + 8 (123) 123 456 789</li> */}
                                        <li><i className="fa fa-envelope" aria-hidden="true"></i>contact@calincozma.ro</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Ultimele noutăți</h3>
                                </div>
                                <p>Fii la curent cu ultimele noutăți! Abonează-te la newsletter-ul nostru și primește informații direct în inbox-ul tău.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-1">
                                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter your email" disabled={emailSent}
                                            required/>
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="fa fa-paper-plane"
                                            aria-hidden="true"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            {/* <p className="copyright"> Copyright &copy; 2023 Design by <Link onClick={ClickHandler} href="https://www.blind.ro">Blind</Link>.All Rights Reserved.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
