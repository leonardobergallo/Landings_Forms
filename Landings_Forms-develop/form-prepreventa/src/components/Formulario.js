import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import * as styles from "../css/Formulario.module.css";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Input from "./Input";
import {
  returnAlphaNumOnly,
  returnLettersOnly,
  returnNumberOnly,
  validateEmail,
} from "../js/validaciones";

// inputs que son OBLIGATORIAS
const inputs = {
  nombre: "",
  apellido: "",
  numContacto: "",
  correo: "",
  telAlternativo: "",
  calle: "",
  altura: "",
  localidad: "",
  provincia: "",
  entreCalles: "",
};

export const Formulario = ({ velocidad }) => {
  // #region Definiciones
  const [isLoading, setIsLoading] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numContacto, setNumContacto] = useState("");
  const [telAlternativo, setTelAlternativo] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoOk, setCorreok] = useState(false);
  const [showErrorCorreo, setShowErrorCorreo] = useState(false);
  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState("");
  const [piso, setPiso] = useState("");
  const [depto, setDpto] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [entreCalles, setEntreCalles] = useState("");
  let inputNumber;
  // #endregion

  // Cada vez que una variable (estado) cambia, ejecutamos el formReview para revisar el estado de los inputs
  useEffect(() => {
    formReview();
  }, [
    nombre,
    apellido,
    numContacto,
    telAlternativo,
    correo,
    calle,
    altura,
    localidad,
    provincia,
    entreCalles,
  ]);

  // #region changeInputs
  const changeNombre = (e) => {
    inputs.nombre = returnLettersOnly(e.target.value);
    setNombre(inputs.nombre);
  };
  const changeApellido = (e) => {
    inputs.apellido = returnLettersOnly(e.target.value);
    setApellido(inputs.apellido);
  };
  const changeNumContacto = (e) => {
    inputNumber = returnNumberOnly(e.target.value);
    setNumContacto(inputNumber);
    inputs.numContacto = inputNumber;
  };
  const changeTelAlternativo = (e) => {
    inputNumber = returnNumberOnly(e.target.value);
    setTelAlternativo(inputNumber);
    inputs.telAlternativo = inputNumber;
  };

  const changeCorreo = (e) => {
    if (e.target.value === "") {
      setCorreo("");
      setCorreok(false);
      setShowErrorCorreo(false);
      inputs.correo = "";
    } else {
      const ok = validateEmail(e.target.value);
      setCorreo(e.target.value);
      setCorreok(ok);
      inputs.correo = e.target.value;
      setShowErrorCorreo(!ok);
    }
  };
  const changeCalle = (e) => {
    inputs.calle = returnAlphaNumOnly(e.target.value);
    setCalle(inputs.calle);
  };
  const changeAltura = (e) => {
    inputs.altura = returnAlphaNumOnly(e.target.value);
    setAltura(inputs.altura);
  };
  const changePiso = (e) => {
    setPiso(returnAlphaNumOnly(e.target.value));
  };
  const changeDpto = (e) => {
    setDpto(returnAlphaNumOnly(e.target.value));
  };
  const changeLocalidad = (e) => {
    inputs.localidad = returnAlphaNumOnly(e.target.value);
    setLocalidad(inputs.localidad);
  };
  const changeProvincia = (e) => {
    inputs.provincia = returnLettersOnly(e.target.value);
    setProvincia(inputs.provincia);
  };
  const changeEntreCalles = (e) => {
    inputs.entreCalles = returnAlphaNumOnly(e.target.value);
    setEntreCalles(inputs.entreCalles);
  };
  //#endregion

  const formReview = () => {
    let key,
      validos = [];
    for (key in inputs) {
      switch (key) {
        case "numContacto":
          inputs[key].length > 9 ? validos.push(true) : validos.push(false);
          break;
        case "telAlternativo":
          validos.push(true);
          break;
        case "correo":
          correoOk ? validos.push(true) : validos.push(false);
          break;
        case "nombre":
        case "apellido":
        case "localidad":
        case "provincia":
          inputs[key].length > 1 ? validos.push(true) : validos.push(false);
          break;
        case "calle":
        case "altura":
        case "entreCalles":
          inputs[key].length > 0 ? validos.push(true) : validos.push(false);
          break;
        default:
          break;
      }
    }
    validos.every((x) => x === true) ? setFormOk(true) : setFormOk(false);
  };

  function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }

  const fetchData = async () => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ASP.NET_SessionId=pqxkmzwrnpr3wrp3nhy2wtbq; AspxAutoDetectCookieSupport=1"
    );

    let paramTelAlt;
    if (telAlternativo == "")
      paramTelAlt = "0000000000";
    else
      paramTelAlt = telAlternativo;

    let formdata = new FormData();
    formdata.append("accion", "alta_ticket");
    formdata.append("idProducto", 780);
    formdata.append("ani", paramTelAlt);
    formdata.append("nombre_apellido", `${nombre} ${apellido}`);
    formdata.append("telefono", paramTelAlt);
    formdata.append("celular", numContacto);
    formdata.append("email", correo);
    formdata.append("dni", "1111111");
    formdata.append("field_Nacimiento", "00/00/0000");
    formdata.append("field_E-mail", correo);
    formdata.append("field_Localidad", localidad);
    formdata.append("field_Provincia", provincia);
    formdata.append("field_Calle", calle);
    formdata.append("field_Altura", altura);
    formdata.append("field_Piso", piso);
    formdata.append("field_Departamento", depto);
    formdata.append("field_Entre calles", entreCalles);

    const utmcookie = getCookie("utms");
    if (utmcookie != null) {
      const utm = JSON.parse(utmcookie);
      formdata.append("utm_source", utm["utm_source"]);
      formdata.append("utm_medium", utm["utm_medium"]);
      formdata.append("utm_campaign", utm["utm_campaign"]);
      formdata.append("utm_term", utm["utm_term"]);
      formdata.append("utm_content", utm["utm_content"]);
    }

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(process.env.MAIN_URL, requestOptions);
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result.tramite;
      } else {
        throw new Error("ERROR", response.status);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const tramite = await fetchData();
    tramite
      ? navigate("/gracias", { state: { tramite: `${tramite}` } })
      : navigate("/404");
  };

  return (
    <>
      {isLoading && (
        <Modal show={isLoading} dialogClassName="dial" centered>
          <div className={styles.spinnerContainer}>
            <Spinner animation="grow" role="status" size="xl">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </Modal>
      )}
      <article className={styles.article}>
        <p className={styles.titulo}>
          ¡Pronto estaremos disponibles en tu zona!
        </p>
        <p className={styles.subtitulo}>Dejanos tus datos para mantenerte al tanto </p>
        <form onSubmit={handleClick}>
          <div className={styles.datosTitular}>

            <p>Información del titular que contratará el servicio </p>

            <div className={styles.datosTitularInputs}>

              <label htmlFor="nombre" className={styles.nombre}>
                <Input
                  placeholder="Nombre"
                  id="nombre"
                  value={nombre}
                  callback={changeNombre}
                />
              </label>
              <label htmlFor="apellido" className={styles.apellido}>
                <Input
                  placeholder="Apellido"
                  id="apellido"
                  value={apellido}
                  callback={changeApellido}
                />
              </label>
              <label htmlFor="numContacto" className={styles.numContacto}>
                <Input
                  placeholder="Número de contacto (Ej: 1145278945)"
                  tipo="tel"
                  id="numContacto"
                  value={numContacto}
                  callback={changeNumContacto}
                  max={10}
                />
              </label>
              <label htmlFor="telAlternativo" className={styles.telAlternativo}>
                <Input
                  placeholder="Teléfono Alternativo (Ej.: 1534343434)"
                  tipo="tel"
                  id="telAlternativo"
                  value={telAlternativo}
                  callback={changeTelAlternativo}
                  max={10}
                />
              </label>

              <div className={styles.contenedorCorreo}>
                <label htmlFor="correo">
                  <Input
                    placeholder="E-mail"
                    tipo="email"
                    id="correo"
                    value={correo}
                    callback={changeCorreo}
                    max={75}
                  // autocomplete="nope"
                  />
                </label>
                {showErrorCorreo && (
                  <p>*Por favor verificá tu correo electrónico</p>
                )}
              </div>
            </div>
          </div>

          <div className={styles.datosDomicilio}>
            <p>
              Domicilio donde querés instalar Movistar Fibra
            </p>

            <div className={styles.datosDomicilioInputs}>

              <label htmlFor="calle" className={styles.calle}>
                <Input
                  placeholder="Domicilio exacto de instalación"
                  id="calle"
                  value={calle}
                  callback={changeCalle}
                />
              </label>
              <label htmlFor="altura" className={styles.altura}>
                <Input
                  placeholder="Altura"
                  id="altura"
                  value={altura}
                  callback={changeAltura}
                  max={10}
                />
              </label>
              <label htmlFor="piso" className={styles.piso}>
                <Input
                  id="piso"
                  value={piso}
                  callback={changePiso}
                  placeholder="Piso"
                  max={10}
                />
              </label>
              <label htmlFor="dpto" className={styles.dpto}>
                <Input
                  id="dpto"
                  value={depto}
                  callback={changeDpto}
                  placeholder="Depto"
                  max={15}
                />
              </label>
              <label htmlFor="localidad" className={styles.localidad}>
                <Input
                  placeholder="Localidad"
                  id="localidad"
                  value={localidad}
                  callback={changeLocalidad}
                />
              </label>
              <label htmlFor="provincia" className={styles.provincia}>
                <Input
                  placeholder="Provincia"
                  tipo="texto"
                  id="provincia"
                  value={provincia}
                  callback={changeProvincia}
                />
              </label>
              <label htmlFor="entreCalles" className={styles.entreCalles}>
                <Input
                  id="entreCalles"
                  value={entreCalles}
                  callback={changeEntreCalles}
                  placeholder="Entre calles"
                  max={60}
                />
              </label>

            </div>
          </div>
          <div className={styles.textoBoton}>

            <p>Incluye instalación
              <span className={styles.textoFinal}> 100% bonificada + <br /> 1 mes GRATIS</span> y <span className={styles.textoFinal}>beneficios exclusivos.</span>
            </p>

            <input
              type="submit"
              disabled={!formOk}
              className={styles.boton}
              value="Enviar"
            />
          </div>
        </form>
      </article>
    </>
  );
};
