import Fuck from "./Fuck";

function SearchResults({ searchEntries, page }) {
  return (
    <>
      <h1>Search Results</h1>
      {searchEntries.map((movie, index) => {
        if (page !== "Bookmarked") {
          if (
            movie.category === page ||
            movie.category === page.slice(0, -1) ||
            page === "Home"
          )
            return (
              <>
                {" "}
                <Fuck movie={movie} index={index} />
              </>
            );
        }
        // if page is the attention whore known as "Bookmarked", make a special exception 
        if (movie.isBookmarked === true)
          return (
            <>
              <Fuck movie={movie} index={index} />
            </>
          );
      })}
    </>
  );
}

export default SearchResults;
