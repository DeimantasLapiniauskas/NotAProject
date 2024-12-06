

import { useEffect } from "react";
import { getAllData } from "../components/helpers/get";
import { useState } from "react";
import movieLogo from "../assets/icon-category-movie.svg";
import seriesLogo from "../assets/icon-category-tv.svg";
function Movie() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const getMovies = async () => {
    const movies = await getAllData();
    setMovies(movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
    
      {movies.map((movie, index) => {
        if (movie.category==="Movie") {
          return (
            <div key={index}>
             
              <img
                src={"src" + movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
              />
              <p>{movie.year}</p>
              {console.log(movie.category)}
              <p style={{ backgroundColor: "#999999" }}>
                <img src={movieLogo} />
                {movie.category}
              </p>
              <p>{movie.rating}</p>
              <h1>{movie.title}</h1>
            </div>
          );
        }
        return;
      })}
    </>
  );
}
export default Movie;
