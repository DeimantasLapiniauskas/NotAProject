import movieLogo from "/assets/icon-category-movie.svg";
import seriesLogo from "/assets/icon-category-tv.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
function VideoCard({ movie, index }) {
  return (

      <div className="video-card" key={index}>
      <LazyLoadImage
                src={movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
                className="video-card__img"
              />
        <div className="video-card__details">
          <p className="video-card__year">{movie.year}</p>
          <span>&#8226;</span>
          <p className="video-card__icon">
            <img src={movie.category == "Movie" ? movieLogo : seriesLogo} />
            {movie.category}
          </p>
          <span>&#8226;</span>
          <p className="video-card__rating">{movie.rating}</p>
        </div>
        <h6 className="video-card__title">{movie.title}</h6>
      </div>

  );
}
export default VideoCard;
