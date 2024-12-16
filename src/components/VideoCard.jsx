import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import BookmarkButton from "./BookmarkButton";
function VideoCard({ video, key }) {
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
    <div className="video-card" key={key}>
      <LazyLoadImage
        src={video.thumbnail.regular[`${imgSize}`]?.substring(1)}
        alt={video.title + "'s image"}
        className="video-card__img"
      />
      <div className="video-card__details">
      <BookmarkButton
          id={video.id}
          initialIsBookmarked={video.isBookmarked}
          onToggle={(newBookmarkState) =>
            onBookmarkToggle(video.id, newBookmarkState)  }
        />
        <p className="video-card__year">{video.year}</p>
        <span>&#8226;</span>
        <p className="video-card__icon">
          <img
            src={
              video.category == "Movie"
                ? "/assets/icon-category-movie.svg"
                : "/assets/icon-category-tv.svg"
            }
            alt="icon"
          />
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
