import SearchVideoCard from "./SearchVideoCard";
function SearchResults({ searchEntries, page }) {
  return (
    <>
      {searchEntries.map((movie, index) => {
        // if page is the attention whore known as "Bookmarked", make a special exception
        if (movie.isBookmarked === true && page === "Bookmarked") {
          return <SearchVideoCard movie={movie} key={index} />;
        }
        if (
          movie.category === page ||
          movie.category === page.slice(0, -1) ||
          page === "Home"
        ) {
          return <SearchVideoCard movie={movie} key={index} />;
        }
      })}
    </>
  );
}

export default SearchResults;
// Search results returns entry if it's bookmarked, even if it doesn't fit the category.
