import { useEffect } from "react";
import { getAllData } from "../helpers/get";
import { useState } from "react";
import seriesLogo from "../../assets/icon-category-tv.svg";

function SerieSet() {
  const [movies, setMovies] = useState([]);

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
        if (movie.category === "TV Series") {
          return (
            <div key={index}>
              <img
                src={"src" + movie.thumbnail.regular.small.substring(1)}
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
