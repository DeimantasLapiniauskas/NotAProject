import movieLogo from "/assets/icon-category-movie.svg";

function Movie({ index, entry }) {
  function movieEntry() {
    if (entry.category === "Movie") {
      return (
        <div key={index}>
          <img
            src={entry.thumbnail.regular.small.substring(1)}
            alt={entry.title + "'s image"}
          />
          <p>{entry.year}</p>
          <p style={{ backgroundColor: "#999999" }}>
            <img src={movieLogo} />
            {entry.category}
          </p>
          <p>{entry.rating}</p>
          <h1>{entry.title}</h1>
        </div>
      );
    }

    return;
  }
  return <>{movieEntry()}</>;
}

export default Movie;
