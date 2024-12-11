import movieLogo from "/assets/icon-category-movie.svg";
import seriesLogo from "/assets/icon-category-tv.svg";
function Fuck ({movie, index}){
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
export default Fuck