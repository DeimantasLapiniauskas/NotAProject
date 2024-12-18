import { useRef, useEffect, useState } from "react";
import "./Trending.css";
import BookmarkButton from "./BookmarkButton";

const Trending = ({ entries, onBookmarkToggle }) => {
  const carouselRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const carousel = carouselRef.current;

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3;
      carousel.scrollLeft = scrollLeft - walk;
    };

    const onMouseUpOrLeave = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("mousemove", onMouseMove);
    carousel.addEventListener("mouseup", onMouseUpOrLeave);
    carousel.addEventListener("mouseleave", onMouseUpOrLeave);

    return () => {
      carousel.removeEventListener("mousedown", onMouseDown);
      carousel.removeEventListener("mousemove", onMouseMove);
      carousel.removeEventListener("mouseup", onMouseUpOrLeave);
      carousel.removeEventListener("mouseleave", onMouseUpOrLeave);
    };
  }, []);

  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    setMovies(entries);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const trendingMovie = movies.filter((item) => item.isTrending);

  return (
    <div className="video-list trending-list">
      <h4 className="video-list__title">Trending</h4>
      <div className="trending" ref={carouselRef}>
        {trendingMovie.map((item, index) => (
          <div key={index} className="carousel">
            <div className="carousel__image-change">
              <picture>
                <source
                  srcSet={item.thumbnail.trending.small}
                  media="(max-width: 640px)"
                />
                <img
                  className="carousel__image"
                  src={item.thumbnail.trending.large}
                  alt={item.title}
                />
              </picture>

              <div className="trending__overlay">
                <div className="plays">
                  <img
                    src="assets/icon-play.svg"
                    alt="Play Button"
                    className="play-icons"
                  />
                  <span className="play-texts">Play</span>
                </div>
              </div>
            </div>
            <BookmarkButton
              id={item.id}
              initialIsBookmarked={item.isBookmarked}
              onToggle={(newBookmarkState) =>
                onBookmarkToggle(item.id, newBookmarkState)
              }
            />
            <div className="trending__content">
              <div className="trending__content--data">
                <span className="categories">{item.year}</span>

                <span className="dot__color">&#8226;</span>
                <div>
                  <span>
                    {item.category === "Movie" ? (
                      <img
                        className="movie"
                        src="assets/icon-category-movie.svg"
                        alt="Movie Logo"
                      />
                    ) : (
                      <img
                        className="series"
                        src="assets/icon-category-tv.svg"
                        alt="Series Logo"
                      />
                    )}
                  </span>
                </div>
                <div>
                  <span className="categories">{item.category}</span>
                </div>

                <span className="dot__color">&#8226;</span>
                <span className="categories">{item.rating}</span>
              </div>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
