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
    <section className="video-list">
      <h4 className="video-list__title">Recommended for you</h4>
      {movies.map((movie, index) => {
        if (!movie.isTrending) {
          return (
            <div key={index} className="video-card">
              <p>{movie.isTrending && "trending"}</p>
              <img
                src={movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
                className="video-card__img"
              />
              <div className="video-card__details">
                <p className="video-card__year">{movie.year}</p>
                <span>&#8226;</span>
                <p className="video-card__icon">
                  <img
                    src={
                      movie.category == "Movie"
                        ? "/assets/icon-category-movie.svg"
                        : "/assets/icon-category-tv.svg"
                    }
                  />
                  {movie.category}
                </p>
                <span>&#8226;</span>
                <p className="video-card__rating">{movie.rating}</p>
              </div>
              <h6 className="video-card__title">{movie.title}</h6>
            </div>
          );
        }
        return;
      })}
    </section>
  );
}

export default Recommended;
