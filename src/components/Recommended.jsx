import { LazyLoadImage } from "react-lazy-load-image-component";

function Recommended({ entries }) {
  return (
    <section className="video-list">
      <h4 className="video-list__title">Recommended for you</h4>
      {entries.map((movie, index) => {
        if (!movie.isTrending) {
          return (
            <div key={index} className="video-card">
              <p>{movie.isTrending && "trending"}</p>
              <LazyLoadImage
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
