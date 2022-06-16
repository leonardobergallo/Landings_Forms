import React, { useEffect, useState } from "react";
import Fade from "react-bootstrap/Fade";
import { Header } from "../components/Header";
import TarjetaGracias from "../components/TarjetaGracias";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";

const Gracias = ({ location = null }) => {
  const [tramite, setTramite] = useState("");

  useEffect(() => {
    if (location !== null) {
      location.state !== null
        ? setTramite(location.state.tramite)
        : navigate("/404", { replace: true });
    } else {
      navigate("/404", { replace: true });
    }

    // Esta funcion de GTM se ejecuta solo si se levanta la pagina, ya que necesita de window.document
    /* Google Tag Manager */
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5MJ5NS");
    /* End Google Tag Manager */
  }, []);

  return (
    <>
      <Helmet>
        <title>Movistar</title>
        <link rel="icon" href={favicon} type="image/ico" />
        <meta
          name="description"
          content="Formulario de Preventa desde Pauta"
        ></meta>
      </Helmet>
      <Header />
      <Fade appear={true} in={true} timeout={1500}>
        <main>
          <TarjetaGracias tramite={tramite} location={location} />
        </main>
      </Fade>
    </>
  );
};

export default Gracias;
