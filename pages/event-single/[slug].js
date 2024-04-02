import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Footer from '../../components/footer/Footer';
import ServiceSidebar from './sidebar';
import Events from '../../api/events'
import EventTab from './Tabs/EventTab';
import Image from 'next/image';

const CampaignSinglePage = (props) => {

    const router = useRouter()

    const EventsDetails = Events.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={EventsDetails?.title} pagesub={'Events'} />
            <div className="wpo-Campaign-single-area">
                <div className="wpo-event-details-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8">
                                <div className="wpo-event-details-wrap">
                                    <div className="wpo-event-details-img">
                                        <Image src={EventsDetails?.eSimg} alt="" />
                                    </div>

                                    <EventTab EventsDetails={EventsDetails} />
                                </div>
                            </div>
                            <div className="col col-lg-4 col-12">
                                <ServiceSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CampaignSinglePage;