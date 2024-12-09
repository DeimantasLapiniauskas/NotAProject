import { useEffect } from "react";
import { getAll } from "../../../helpers/CRUD";
import { useState } from "react";
import movieLogo from "/assets/icon-category-movie.svg";

function Movie() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const movies = await getAll("videos");
    setMovies(movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {movies.map((movie, index) => {
        if (movie.category === "Movie") {
          return (
            <div key={index}>
              <img
                src={movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
              />
              <p>{movie.year}</p>
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
