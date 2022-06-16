import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Formulario } from "../components/Formulario";
import Fade from "react-bootstrap/Fade";
// import { Helmet } from "react-helmet";
// import favicon from "../images/favicon.ico";

const IndexPage = ({ location }) => {
  // separo los queryParams (viene mas de una cosa). El primero siempre es el plan de fibra
  const planFibra = location.search.split("&")[0];
  // siempre trae planFibra=xxx, separo en '=' y uso el 2do dato
  const velocidad = planFibra.split("=")[1];
  useEffect(() => {
    /* Google Tag Manager  */
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':

          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],

        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =

          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);

    })(window, document, 'script', 'dataLayer', 'GTM-5MJ5NS');
    console.log(window);
    window.dataLayer.push({
      'event': 'virtualPageview',
      'pageName': '/formulario_hogar/preventaapp/carga_datos'
   });
  
   

    /* End Google Tag Manager */
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Movistar</title>
        <link rel="icon" href={favicon} type="image/ico" />
        <meta
          name="description"
          content="Formulario de Preventa desde Pauta"
        ></meta>
      </Helmet> */}
      <Header />
      <Fade appear={true} in={true} timeout={1400}>
        <main>
          <Formulario velocidad={velocidad} />
        </main>
      </Fade>
    </>
  );
};

export default IndexPage;
