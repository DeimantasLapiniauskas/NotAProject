import { useEffect } from "react";
import { getAll } from "../../helpers/CRUD";
import { useState } from "react";

function Recommended() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const movies = await getAll("videos");
      setMovies(movies);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h1>Recommended</h1>
      {movies.map((movie, index) => {
        if (!movie.isTrending) {
          return (
            <div key={index}>
              <p>{movie.isTrending && "trending"}</p>
              <img
                src={movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
              />
              <p>{movie.year}</p>
              <p style={{ backgroundColor: "#999999" }}>
                <img
                  src={
                    movie.category == "Movie"
                      ? "/assets/icon-category-movie.svg"
                      : "/assets/icon-category-tv.svg"
                  }
                />
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

export default Recommended;
