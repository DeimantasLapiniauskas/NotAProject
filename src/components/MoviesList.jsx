import { useEffect } from "react";
import { useState } from "react";
import SearchVideoCard from "./SearchVideoCard";

function MoviesList({ entries }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      setMovies(entries);
    } catch (error) {
      console.error("Error in Movies component:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <section className="video-list">
      <h4 className="video-list__title">Movies</h4>
      {movies.map((movie, index) => {
        if (movie.category === "Movie") {
          return <SearchVideoCard key={index} movie={movie} />;
        }
        return;
      })}
    </section>
  );
}

export default MoviesList;
