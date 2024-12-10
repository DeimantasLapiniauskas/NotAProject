import { useEffect } from "react";
import { getAll } from "../../helpers/CRUD";
import { useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const movies = await getAll("videos");
      setMovies(movies);
    } catch (error) {
      console.error("Error in Movie component:", error);
    }
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
                <img src="/assets/icon-category-movie.svg" />
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

export default Movies;
