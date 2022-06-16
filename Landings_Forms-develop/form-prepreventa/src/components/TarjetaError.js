import React from "react";
import * as styles from "../css/TarjetaError.module.css";
import iconoError from "../images/iconoError.svg";

const TarjetaError = () => {
  return (
    <article className={styles.article}>
      <img src={iconoError} alt="icono error" />
      <p className={styles.listo}>¡UY!</p>
      <p className={styles.texto}>Ocurrio un error procesando tu solicitud.</p>
      <p className={styles.texto}>Por favor, intentalo de nuevo mas tarde.</p>
      <a href="https://www.movistar.com.ar/">
        <button className={styles.boton}>Volver al inicio</button>
      </a>
    </article>
  );
};

export default TarjetaError;
