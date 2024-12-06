import { useEffect } from "react";
import { getAllData } from "./helpers/get";
import { useState } from "react";
import movieLogo from "../assets/icon-category-movie.svg";
import seriesLogo from "../assets/icon-category-tv.svg";
function Recommended() {
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  const getMovies = async () => {
    const movies = await getAllData();
    setMovies(movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h1>Recommended</h1>
      {movies.map((movie, index) => {
        if (!movie.isTrending) {
          return (
            <div key={index}>
              <p>{movie.isTrending && "trending"}</p>
              <img
                src={"src" + movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
              />
              <p>{movie.year}</p>
              {/* {console.log(movie.category)} */}
              <p style={{ backgroundColor: "#999999" }}>
                <img src={movie.category == "Movie" ? movieLogo : seriesLogo} />
                {movie.category}
              </p>
              <p>{movie.rating}</p>
              <h1>{movie.title}</h1>
            </div>
          );
        }
        return;
      })}
    </>
  );
}
export default Recommended;
