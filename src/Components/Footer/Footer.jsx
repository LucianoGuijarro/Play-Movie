import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Link to={"/"}>
                <p className="text-light">Audio y subtitulo</p>
                <p className="text-light">Prensa</p>
                <p className="text-light">Privacidad</p>
              </Link>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <Link to={"/"}>
                <p className="text-light">Audio descriptivo</p>
                <p className="text-light">Relaciones con inversionistas</p>
                <p className="text-light">Avisos legales</p>
              </Link>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <Link to={"/"}>
                <p className="text-light">Centro de ayuda</p>
                <p className="text-light">Empleo</p>
                <p className="text-light">Preferencias de cookies</p>
              </Link>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <Link to={"/"}>
                <p className="text-light">Tarjetas de regalo</p>
                <p className="text-light">Terminos de uso</p>
                <p className="text-light">Impressum</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
