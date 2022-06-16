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
  }, []);

  return (
    <>
      <Helmet>
        <title>Movistar</title>
        <link rel="icon" href={favicon} type="image/ico" />
        <meta
          name="description"
          content="Formulario de Prepreventa"
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
