import { useRef, useEffect, useState } from "react";
import "./Trending.css";
import movieLogo from "../../public/assets/icon-category-movie.svg";
import seriesLogo from "../../public/assets/icon-category-tv.svg";

const Trending = ({entries}) => {
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

  const getMovies = async () => {
setMovies(entries)
  };
  useEffect(() => {
    getMovies();
  }, []);

  const trendingMovie = movies.filter((item) => item.isTrending);

  return (
    <>
      <h4 className="video-list__title">Trending</h4>
      <div className="trending" ref={carouselRef}>
        {trendingMovie.map((item, index) => (
          <div key={index} className="carousel">
            <img
              className="carousel__image"
              src={item.thumbnail.trending.small.substring(1)}
              srcSet={`${item.thumbnail.trending.large.substring(1)} 768w`}
              sizes="(min-width: 768) 768px, 100vw"
              alt={item.title}
            />
            {/* IMG gali kilti bedu su pasikeitimu i mazesnius ekranus. */}
            {/* Use bookmark as another component */}
            {/* <div>
              <button className="trending__bookmark">
                
              </button>
            </div> */}
            <div className="trending__content">
              <div className="trending__content--data">
                <span className="categories">{item.year}</span>
                <span className="dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                  >
                    <circle
                      opacity="0.5"
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      fill="white"
                    />
                  </svg>
                </span>
                <span>
                  {item.category === "Movie" ? (
                    <img
                      className="movie"
                      src={movieLogo}
                      alt="Movie Logo"
                    />
                  ) : (
                    <img
                      className="series"
                      src={seriesLogo}
                      alt="Series Logo"
                    />
                  )}
                </span>
                <span className="categories">{item.category}</span>
                <span className="dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                  >
                    <circle
                      opacity="0.5"
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="categories">{item.rating}</span>
              </div>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
