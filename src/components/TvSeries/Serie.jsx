import { useEffect } from "react";
import { getAllData } from "../helpers/get";
import { useState } from "react";
// import movieLogo from "../../assets/icon-category-movie.svg";
import seriesLogo from "../../assets/icon-category-tv.svg";

function Serie() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const getMovies = async () => {
    const movies = await getAllData();
    setMovies(movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
    
      {movies.map((movie, index) => {
        if (movie.category==="TV Series") {
          return (
            <div key={index}>
             
              <img
                src={"src" + movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
              />
              <p>{movie.year}</p>
              {console.log(movie.category)}
              <p style={{ backgroundColor: "#999999" }}>
                <img src={seriesLogo} />
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
export default Serie;
