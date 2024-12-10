import seriesLogo from "/assets/icon-category-tv.svg";

function SerieSet({ index, entry }) {
  function movieEntry() {
    if (entry.category === "TV Series") {
      return (
        <div key={index}>
          <img
            src={entry.thumbnail.regular.small.substring(1)}
            alt={entry.title + "'s image"}
          />
          <p>{entry.year}</p>
          <p style={{ backgroundColor: "#999999" }}>
            <img src={seriesLogo} />
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

export default SerieSet;
