import React from 'react'
import abimg from '/public/images/about.jpg'
import Link from 'next/link'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About2 = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="Calin Cozma, candidat la Primaria Cluj Napoca in anul 2024" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <p><span>About</span></p>
                            <h2>Te-ai săturat să alegi între <b> <span>rău</span> și <span>foarte rău</span></b> ?
                            {/* Te-ai săturat să alegi între „rău” și „foarte rău”? */}
                            </h2>
                            <p>
                            Sunt Călin Cozma, un artist liric pasionat, cu o experiență vastă pe scenele internaționale, interpretând peste 300 de spectacole.
                            Însă, pasiunea mea pentru artă este doar un aspect al personalității mele. Sunt și un antreprenor dedicat, având afaceri de succes în industria agriculturii și a sectorului HORECA. 
                            Prin aceste inițiative, am dezvoltat patronate și am condus federații naționale, contribuind la promovarea intereselor economice și sociale ale comunității noastre. 
                            Cu o viziune amplă și o abordare pragmatică, mă angajez să aduc schimbări pozitive în orașul nostru, inspirat de experiența mea vastă și de dorința de a contribui la prosperitatea și bunăstarea fiecărui locuitor al Clujului. 
                            Sunt pregătit să mă implic activ și să muncesc alături de voi pentru a crea un viitor mai luminos și mai prosper pentru toți.
                            </p>
                            {/* <Link onClick={ClickHandler} href="/about" className="theme-btn">More About Us</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;