import { createContext, useState, useEffect } from "react";


const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {
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
  const data = { peliculas };
  return (
    <PeliculasContext.Provider value={data}>
      {children}
    </PeliculasContext.Provider>
  );
};
export { PeliculasProvider };
export default PeliculasContext;
