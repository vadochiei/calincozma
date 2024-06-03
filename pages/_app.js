import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
// import ogImage from "../CalinCozma-PrimariaCluj-ModernizareAdministratie-TransportPublic-SchimbareClujNapoca.webp";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div>
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="../favicon.ico" sizes="any"/>
      <meta name="theme-color" content="#f3ca64"/>
      <meta name="description" content="Sunt Călin Cozma, candidat la Primăria Clujului. Aici vei găsi viziunea mea pentru un Cluj Napoca mai prosper și mai echitabil. Descoperă planurile mele și alătură-te echipei noastre în construirea unei comunități mai bune pentru toți locuitorii orașului nostru!" />
      <meta name="keywords" content="Primăria Cluj-Napoca, Alegeri locale, Candidat, Politică locală, Dezvoltare urbană, Proiecte comunitare, Transparență, Participare civică, Bunăstare comunitară, Viitorul orașului" />
      <meta property="og:title" content="Calin Cozma" />
      <meta property="og:description" content="Sunt Călin Cozma, candidat la Primăria Clujului. Aici vei găsi viziunea mea pentru un Cluj Napoca mai prosper și mai echitabil. Descoperă planurile mele și alătură-te echipei noastre în construirea unei comunități mai bune pentru toți locuitorii orașului nostru!" />
      <meta property="og:image" content="../CalinCozma-PrimariaCluj-ModernizareAdministratie-TransportPublic-SchimbareClujNapoca.webp" />
      <title>Calin Cozma</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
    <Analytics />
    </>
  )
}

export default MyApp
