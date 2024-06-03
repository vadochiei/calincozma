import React, {Fragment} from 'react';
import Navbar2 from '../components/Navbar2/Navbar2.js';
import Hero2 from '../components/hero2/Hero2.js';
import Features2 from '../components/Features2/Features2.js';
import About2 from '../components/about2/about2.js';
import CampaignCountdown from '../components/CampaignCountdown/CampaignCountdown.js';
import MissionVission from '../components/MissionVission/MissionVission.js';
import EventSection from '../components/EventSection/EventSection.js';
import FunFact from '../components/FunFact/FunFact.js';
import BlogSection from '../components/BlogSection/BlogSection.js';
import Scrollbar from '../components/scrollbar/scrollbar.js';
import Footer from '../components/footer/Footer';
import Head from "next/head";
import dynamic from 'next/dynamic.js';

const HomePage = () => {
    return (
        <>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f3ca64"/>
        <meta name="background_color" content="#f3ca64"/>
        </Head>
        
        {/* // <Fragment>
        //     <Navbar hclass={'wpo-header-style-4'} />
        //     <Hero />
        //     <Features />
        //     <About />
        //     <CampaignSection />
        //     <MissionVission />
        //     <EventSection />
        //     <BlogSection />
        //     <Footer />
        //     <Scrollbar />
        // </Fragment> */}
        <Fragment>
            <Navbar2/>
            <Hero2/>
            <About2/>
            {/* <Features2/> */}
            <EventSection/>
            <CampaignCountdown/>
            <MissionVission/>
            {/* <FunFact/> */}
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
        </>
    )
};
export default HomePage;