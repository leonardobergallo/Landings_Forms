import React from "react";
import logoMovistar from "../images/logoMovistar.svg";
import * as styles from "../css/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.contenedor}>
      <img src={logoMovistar} alt="logo movistar" />
    </header>
  );
};
