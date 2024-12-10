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
            <button className="trending__bookmark"></button>
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
