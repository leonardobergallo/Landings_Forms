import React from "react";
import { Header } from "../components/Header";
import { Formulario } from "../components/Formulario";
import Fade from "react-bootstrap/Fade";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";


const IndexPage = () => {
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
      <Fade appear={true} in={true} timeout={1400}>
        <main>
          <Formulario/>
        </main>
      </Fade>
    </>
  );
};

export default IndexPage;
