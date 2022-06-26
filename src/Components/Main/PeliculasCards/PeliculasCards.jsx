import React from "react";
import { Link } from "react-router-dom";
import styles from "./PeliculasCards.module.css";

const PeliculasCards = ({ pelicula }) => {
  const imagen = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
  return (
    <>
      <div className={`${styles.cards} my-4 `}>
        <Link to={"/pelicula/" + pelicula.id}>
          <img src={imagen} className={styles.img} alt={pelicula.title} />
          <div>
            <h5 className="text-center text-light pt-4">{pelicula.title}</h5>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PeliculasCards;
