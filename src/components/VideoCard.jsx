import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import BookmarkButton from "./BookmarkButton";

function VideoCard({ video, key }) {
  const [screenWidth, setScreenWidth] = useState(window.visualViewport.width);
  const [imgSize, setImgSize] = useState("");
  const [currentVideo, setCurrentVideo] = useState(video);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.visualViewport.width);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    screenWidth < 640
      ? setImgSize("small")
      : screenWidth < 1024
      ? setImgSize("medium")
      : setImgSize("large");
  }, [screenWidth]);

  const handleBookmarkToggle = async (id, newBookmarkState) => {
    try {
      const response = await fetch(`http://localhost:5000/videos/${id}`);
      if (response.ok) {
        const updatedVideo = await response.json();
        setCurrentVideo(updatedVideo); // Update the video with the latest data
      } else {
        console.error("Failed to fetch updated video data.");
      }
    } catch (error) {
      console.error("Error fetching updated video:", error);
    }
  };

  return (
    <div className="video-card" key={key}>
      <LazyLoadImage
        src={currentVideo.thumbnail.regular[imgSize]?.substring(1)}
        alt={`${currentVideo.title}'s image`}
        className="video-card__img"
      />
      <div className="video-card__details">
        <BookmarkButton
          id={currentVideo.id}
          initialIsBookmarked={currentVideo.isBookmarked}
          onToggle={(newBookmarkState) =>
            handleBookmarkToggle(currentVideo.id, newBookmarkState)
          }
        />
        <p className="video-card__year">{currentVideo.year}</p>
        <span>&#8226;</span>
        <p className="video-card__icon">
          <img
            src={
              currentVideo.category === "Movie"
                ? "/assets/icon-category-movie.svg"
                : "/assets/icon-category-tv.svg"
            }
            alt="icon"
          />
          {currentVideo.category}
        </p>
        <span>&#8226;</span>
        <p className="video-card__rating">{currentVideo.rating}</p>
      </div>
      <h6 className="video-card__title">{currentVideo.title}</h6>
    </div>
  );
}

export default VideoCard;
