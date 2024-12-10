import movieLogo from "/assets/icon-category-movie.svg";
import seriesLogo from "/assets/icon-category-tv.svg";

function Recommended({entries, shows}) {



  return (
    <>
      <h1>Recommended</h1>
      {entries.map((movie, index) => {
        // console.log(shows);
        // console.log(movie);
        
        
        if (!movie.isTrending
          //  && shows === movie
          ) {
          return (
            <div key={index}>
              <p>{movie.isTrending && "trending"}</p>
              <img
                src={movie.thumbnail.regular.small.substring(1)}
                alt={movie.title + "'s image"}
              />
              <p>{movie.year}</p>
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
