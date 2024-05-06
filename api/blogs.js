// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/blog-single/img-1.jpg";
import blogSingleImg2 from "/public/images/blog/blog-single/img-2.jpg";
import blogSingleImg3 from "/public/images/blog/blog-single/img-3.jpg";



const blogs = [
    {
        id: '1',
        title: 'Călin Cozma: Candidatura la Primăria Clujului',
        slug:'Calin-Cozma-Candidatura-la-Primaria-Clujului',
        screens: blogImg1,
        description: 'Descoperă motivele pentru care Călin Cozma și-a anunțat candidatura la Primăria Clujului în alegerile din 2024 și viziunea sa pentru oraș.',
        text: 'Călin Cozma este candidatul care își propune să aducă schimbarea în Cluj-Napoca. Artist liric de renume și antreprenor cu experiență, Cozma și-a asumat această candidatură pentru a contribui la dezvoltarea orașului nostru. În articolul de mai jos, vei afla mai multe despre motivele care l-au determinat pe Călin Cozma să intre în cursa pentru Primăria Clujului și despre viziunea sa pentru viitorul orașului.',
        quote:'Sunt singurul dintre candidații înscriși în competiție născut în Cluj-Napoca. Un clujean, român și patriot care își dorește să dezvolte confortul și bunăstarea fiecărui cetățean al acestei urbe! Nu mă lupt pentru o funcție, mă lupt pentru viitorul familiei mele, pentru viitorul Clujului!',
        text2: 'Candidatul pentru Consiliul Local își asumă un angajament hotărât: să formeze o majoritate solidă alături de colegii săi consilieri și să ofere Clujului un nou primar. Este timpul ca orașul să beneficieze de un nou început, iar acesta pare să fie sentimentul general. O nouă conducere poate aduce schimbarea necesară și așteptată de comunitate. Învierea spiritului civic și a responsabilității este esențială pentru viitorul orașului. Se pare că acesta este momentul potrivit pentru o transformare. Cu o experiență variată, de la domeniul artistic la cel antreprenorial, candidatul aduce în competiție o perspectivă proaspătă și o viziune clară asupra direcției în care ar trebui să se îndrepte Cluj-Napoca. Este evident că orașul are nevoie de o schimbare și este datoria noastră să ne asigurăm că viitorul său este mai luminos.',
        souceLink: 'https://cluj24.ro/aur-si-a-desemnat-candidatul-la-primaria-cluj-calin-cozma-sunt-singurul-dintre-candidatii-inscrisi-nascut-in-cluj-napoca-205650.html',
        souce: 'Cluj24.ro',
        author: 'Echipa Călin Cozma',
        create_at: '3 Mai 2024',
        blogSingleImg: blogSingleImg1,
        comment: '35',
        day: '12',
        month: 'Aprilie',
        blClass: 'format-standard-image',
        animation: '1200',
    },
    {
        id: '2',
        title: 'Promisiuni și Proiecte: Agenda lui Călin Cozma pentru Cluj',
        slug:'Promisiuni-si-Proiecte-Agenda-lui-Calin-Cozma-pentru-Cluj',
        screens: blogImg2,
        description: 'Află mai multe despre proiectele și promisiunile lui Călin Cozma pentru dezvoltarea și îmbunătățirea Clujului și a vieții locuitorilor săi.',
        author: 'Echipa Călin Cozma',
        create_at: '15 Aprilie 2024',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        day:'15',
        month:'Aprilie',
        blClass:'format-standard-image',
        animation:'1400',
    },
    {
        id: '3',
        title: 'Participă și Tu: Cum Poți Susține Campania lui Călin Cozma',
        slug:'Participa-si-Tu-Cum-Poti-Sustine-Campania-lui-Calin-Cozma',
        screens: blogImg3,
        description: 'Descoperă cum poți să te implici și să susții campania lui Călin Cozma pentru Primăria Clujului și să contribui la schimbarea orașului nostru în bine.',
        author: 'Echipa Călin Cozma',
        create_at: '20 Aprilie 2024',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        day:'20',
        month:'Aprilie',
        blClass:'format-video',
        animation:'1600',
    }

];
export default blogs;