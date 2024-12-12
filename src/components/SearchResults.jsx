import VideoCard from "./VideoCard";

function SearchResults({ searchEntries, page }) {
  return (
    <>
      <section className="video-list">
        {searchEntries.map((movie, index) => {
          // if page is the attention whore known as "Bookmarked", make a special exception
          if (movie.isBookmarked === true && page === "Bookmarked") {
            return <VideoCard movie={movie} key={index} />;
          }
          if (
            movie.category === page ||
            movie.category === page.slice(0, -1) ||
            page === "Home"
          ) {
            return <VideoCard movie={movie} key={index} />;
          }
        })}
      </section>
    </>
  );
}

export default SearchResults;
