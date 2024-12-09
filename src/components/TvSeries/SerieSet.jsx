import { useEffect } from "react";
import { getAll } from "../../../helpers/CRUD";
import { useState } from "react";
import seriesLogo from "/assets/icon-category-tv.svg";

function SerieSet() {
  const [movies, setMovies] = useState([]);

  // In TV series variables named movies, need to fix it latter

  const getMovies = async () => {
    try {
      const movies = await getAll("videos");
      setMovies(movies);
    } catch (error) {
      console.error('Error in SerieSet component:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {movies.map((movie, index) => {
        if (movie.category === "TV Series") {
          return (
            <div key={index}>
              <img
                src={movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
              />
              <p>{movie.year}</p>

              <p style={{ backgroundColor: "#999999" }}>
                <img src={seriesLogo} />
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

export default SerieSet;
