import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import styles from "./PeliculasDetail.module.css";

const PeliculasDetail = () => {
  const [PeliculaDetail, setPeliculaDetail] = useState([]);
  const [peliculaSimilar, setPeliculaSimilar] = useState([]);
  const { peliculaId } = useParams();
  const [isLoding, setIsLoding] = useState(true);
  const imagen = "https://image.tmdb.org/t/p/w300" + PeliculaDetail.poster_path;
  const { title, overview } = PeliculaDetail;
  useEffect(() => {
    setIsLoding(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=2950044e30fcf5b5dbb7e91dcdb076cf`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUwMDQ0ZTMwZmNmNWI1ZGJiN2U5MWRjZGIwNzZjZiIsInN1YiI6IjYyOTM2YjU1ZmQ2MzAwMDA5OWRhOWZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K5qo0LoLw83dJfUXcjzRzPaZ5HLImoROqkU8hWjon94",
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setPeliculaDetail(response));
    setIsLoding(false);
  }, [peliculaId]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${peliculaId}/similar?api_key=2950044e30fcf5b5dbb7e91dcdb076cf`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUwMDQ0ZTMwZmNmNWI1ZGJiN2U5MWRjZGIwNzZjZiIsInN1YiI6IjYyOTM2YjU1ZmQ2MzAwMDA5OWRhOWZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K5qo0LoLw83dJfUXcjzRzPaZ5HLImoROqkU8hWjon94",
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setPeliculaSimilar(response.results));
  }, [peliculaId]);
  if (isLoding) {
    return <Loader />;
  }
  return (
    <>
      <Link to={"/"}>
        <h1 className="text-center text-light m-5">Peliculas</h1>
      </Link>
      <div className={styles.contenedor}>
        <img
          src={imagen}
          className={`${styles.columnas} ${styles.img}`}
          alt={PeliculaDetail.title}
        />
        <div className={`${styles.columnas} text-light`}>
          <p>
            <strong className="fs-5">Titulo: </strong>
            {title}
          </p>
          {/* <p><strong className="fs-5">Genero: </strong>{genres.map((genres) => genres.name).join(", ")}</p> */}
          <p>
            <strong className="fs-5">Descripcion: </strong>
            {overview}
          </p>
        </div>
      </div>
      <h2 className="text-center my-5 text-light">Peliculas Similares</h2>
      <div className="row">
        {peliculaSimilar.map((peliSimilar) => {
          const imgSimilar =
            "https://image.tmdb.org/t/p/w300" + peliSimilar.poster_path;
          return (
            <div className="col-3 my-4 d-flex flex-wrap justify-content-around">
              <img className={styles.img} src={imgSimilar} alt={peliSimilar.title} />
              <h5 className="text-light mt-3">{peliSimilar.title}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PeliculasDetail;
