import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
function VideoCard({ movie, index }) {
  const [screenWidth, setScreenWidth] = useState(window.visualViewport.width);
  const [imgSize, setImgSize] = useState("");

  useEffect(() => {
    setScreenWidth(window.visualViewport.width);
    screenWidth < 640
      ? setImgSize("small")
      : screenWidth < 1024
      ? setImgSize("medium")
      : setImgSize("large");
  }, []);

  return (
    <div className="video-card" key={index}>
      <LazyLoadImage
        src={movie.thumbnail.regular[`${imgSize}`]?.substring(1)}
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
            alt="icon"
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
export default VideoCard;
