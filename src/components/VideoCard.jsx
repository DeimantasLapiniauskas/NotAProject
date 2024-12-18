import BookmarkButton from "./BookmarkButton";

function VideoCard({ video, index, onBookmarkToggle }) {
  return (
    <div key={index} className="video-card">
      <div className="video-card__main">
        <div className="video-card__img-container">
          <picture>
            <source
              srcSet={video.thumbnail.regular.small?.substring(1)}
              media="(width < 640px)"
            />
            <source
              srcSet={video.thumbnail.regular.medium?.substring(1)}
              media="(width < 1024px)"
            />
            <img
              className="video-card__img"
              src={video.thumbnail.regular.large?.substring(1)}
              alt={video.title + "'s image"}
            />
          </picture>
          <BookmarkButton
            id={video.id}
            initialIsBookmarked={video.isBookmarked}
            onToggle={(newBookmarkState) =>
              onBookmarkToggle(video.id, newBookmarkState)
            }
          />

          <div className="video-card__overlay">
            <div className="play">
              <img
                alt="Play button"
                src="assets/icon-play.svg"
                className="play-icon"
              />
              <span className="play-text">Play</span>
            </div>
          </div>
        </div>
      </div>
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
