import React, { useState, useEffect } from "react";
import PeliculasCards from "../PeliculasCards/PeliculasCards";
import style from "./Grid.module.css";

const Grid = () => {
  const [peliculas, setPeliculas] = useState([]);


  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2950044e30fcf5b5dbb7e91dcdb076cf",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUwMDQ0ZTMwZmNmNWI1ZGJiN2U5MWRjZGIwNzZjZiIsInN1YiI6IjYyOTM2YjU1ZmQ2MzAwMDA5OWRhOWZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K5qo0LoLw83dJfUXcjzRzPaZ5HLImoROqkU8hWjon94",
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setPeliculas(response.results);
      });
  }, []);
  return (
    <div className={`${style.Grid} row justify-content-between m-0`}>
      {peliculas.map((pelicula) => {
        return <PeliculasCards pelicula={pelicula} key={pelicula.id} />;
      })}
    </div>
  );
};

export default Grid;
