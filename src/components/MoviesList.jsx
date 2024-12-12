import { useEffect } from "react";
import { getAll } from "../../helpers/CRUD";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const movies = await getAll("videos");
      setMovies(movies);
    } catch (error) {
      console.error("Error in Movies component:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <section className="video-list">
        <h4 className="video-list__title">Movies</h4>
        {movies.map((movie, index) => {
          if (movie.category === "Movie") {
            return (
              <div key={index} className="video-card">
                <LazyLoadImage
                  src={movie.thumbnail.regular.small.substring(1)}
                  alt={movie.title + "'s image"}
                  className="video-card__img"
                />
                <div className="video-card__details">
                  <p className="video-card__year">{movie.year}</p>
                  <span>&#8226;</span>
                  <p className="video-card__icon">
                    <img src="/assets/icon-category-movie.svg" />
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
    </>
  );
}

export default MoviesList;
