import React, { useEffect, useState } from "react";
import iconoCheck from "../images/iconoCheck.svg";
import * as styles from "../css/TarjetaGracias.module.css";

const TarjetaGracias = ({ tramite, location }) => {
  const [tiempoRestante, setTiempoRestante] = useState(30);
  console.log(location.href);

  useEffect(() => {
    const interval = setInterval(handleTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleTimer() {
    setTiempoRestante((tiempoRestante) => tiempoRestante - 1);
  }

  useEffect(() => {
    if (tiempoRestante === 0) {
      window.history.replaceState(null, "", `/fibra/preventa/404`);
      window.location.href = "https://www.movistar.com.ar/";
    }
  }, [tiempoRestante]);

  const handleClick = (e) => {
    window.history.replaceState(null, "", `/fibra/preventa/404`);
    window.location.href = "https://www.movistar.com.ar/";
  };

  return (
    <article className={styles.article}>
      <img src={iconoCheck} alt="check" />
      <p className={styles.listo}>¡Listo!</p>
      <p className={styles.texto}>
        Próximamente nos contactaremos con vos para finalizar tu solicitud.
      </p>
      <span className={styles.tramite}>
        <p>Tu número de trámite es:</p>
        <p>#{tramite}</p>
      </span>
      <h6>Te vamos a redirigir al inicio en {tiempoRestante} segundos</h6>
      <button className={styles.boton} onClick={handleClick}>
        Volver al inicio
      </button>
    </article>
  );
};

export default TarjetaGracias;
