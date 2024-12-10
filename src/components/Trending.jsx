import { useRef, useEffect, useState } from "react";
import { getAll } from "../../helpers/CRUD";
import "./Trending.css";
import movieLogo from "/assets/icon-category-movie.svg";
import seriesLogo from "/assets/icon-category-tv.svg";

const Trending = () => {
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
      const walk = (x - startX) * 2.5;
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
  console.log(movies);
  const getMovies = async () => {
    const movies = await getAll("videos");
    setMovies(movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  const trendingMovie = movies.filter((item) => item.isTrending);

  return (
    <div className="trending" ref={carouselRef}>
      {trendingMovie.map((item, index) => (
        <div key={index} className="carousel">
          {console.log(item)}
          <img
            src={item.thumbnail.trending.small.substring(1)}
            alt={item.title}
          />
          <div>
            <button className="trending__bookmark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  opacity="0.500647"
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#10141E"
                />
                <path
                  d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
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
              <span className="movie">
                {/* KARTU NEVEIKIA CSS + SVG. SVG BALTAS */}
                {item.category === "Movie" ? (
                  <img src={movieLogo} alt="Movie Logo" className="movie" />
                ) : (
                  <img src={seriesLogo} alt="Series Logo" className="series" />
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
  );
};

export default Trending;
