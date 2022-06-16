import React from "react";
import { Header } from "../components/Header";
// import { Helmet } from "react-helmet";
// import favicon from "../images/favicon.ico";
import Fade from "react-bootstrap/Fade";
import TarjetaError from "../components/TarjetaError";

const NotFoundPage = () => {
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
      <Fade appear={true} in={true} timeout={1500}>
        <main>
          <TarjetaError />
        </main>
      </Fade>
    </>
  );
};

export default NotFoundPage;
