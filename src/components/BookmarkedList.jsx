import { useEffect } from "react";
import { getAll } from "../../helpers/CRUD";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MoviesList() {
  const [bookmarked, setBookmarked] = useState([]);

  const getBookmarked = async () => {
    try {
      const movies = await getAll("videos");
      setBookmarked(movies);
    } catch (error) {
      console.error("Error in Movies component:", error);
    }
  };

  useEffect(() => {
    getBookmarked();
  }, []);
  return (
    <>
      <section className="video-list">
        <h4 className="video-list__title">Bookmarked Movies</h4>
        {bookmarked.map((video, index) => {
          if (video.isBookmarked && video.category === "Movie") {
            return (
              <div key={index} className="video-card">
                <LazyLoadImage
                  src={video.thumbnail.regular.small.substring(1)}
                  alt={video.title + "'s image"}
                  className="video-card__img"
                />
                <div className="video-card__details">
                  <p className="video-card__year">{video.year}</p>
                  <span>&#8226;</span>
                  <p className="video-card__icon">
                    <img
                      src={
                        video.category == "Movie"
                          ? "/assets/icon-category-movie.svg"
                          : "/assets/icon-category-tv.svg"
                      }
                      alt=" "
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
          return;
        })}
      </section>

      <section className="video-list mt-6">
        <h4 className="video-list__title">Bookmarked TV Series</h4>
        {bookmarked.map((video, index) => {
          if (video.isBookmarked && video.category === "TV Series") {
            return (
              <div key={index} className="video-card">
                <img
                  src={video.thumbnail.regular.small.substring(1)}
                  alt={video.title + "'s image"}
                  className="video-card__img"
                />
                <div className="video-card__details">
                  <p className="video-card__year">{video.year}</p>
                  <span>&#8226;</span>
                  <p className="video-card__icon">
                    <img
                      src={
                        video.category == "Movie"
                          ? "/assets/icon-category-movie.svg"
                          : "/assets/icon-category-tv.svg"
                      }
                      alt=" "
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
          return;
        })}
      </section>
    </>
  );
}

export default MoviesList;
