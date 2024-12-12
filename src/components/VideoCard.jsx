import { LazyLoadImage } from "react-lazy-load-image-component";
function VideoCard({ video, index }) {
  return (
    <div className="video-card" key={index}>
      <LazyLoadImage
        src={video.thumbnail.regular.small.substring(1)}
        alt={video.title + "'s image"}
        className="video-card__img"
      />
      <div className="video-card__details">
        <p className="video-card__year">{video.year}</p>
        <span>&#8226;</span>
        <p className="video-card__icon">
          <img src={video.category == "Movie" ? "/assets/icon-category-movie.svg" : "/assets/icon-category-tv.svg"} />
          {video.category}
        </p>
        <span>&#8226;</span>
        <p className="video-card__rating">{video.rating}</p>
      </div>
      <h6 className="video-card__title">{video.title}</h6>
    </div>
  );
}
export default VideoCard;
