import { useEffect, useState } from "react";
import "./searchBar.css";
import SearchResults from "./SearchResults";

function SearchBar({ entries, searching, setSearching, page }) {
  // value = what's typed in the search bar.
  // Suggestions = What in the entries fits the criteria
  // hideSuggestions = used to hide everything except the bar itself onblur, and unhide it on focus.
  // searchEntries = Array containing all suggestions that we pass over to SearchResults
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [searchEntries, setSearchEntries] = useState("");
  useEffect(() => {
    const suggestionData = () => {
      setSuggestions(entries);
    };
    suggestionData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let Vals = e.target.querySelector("input").value.trim();
    if (Vals.length > 2) {
      setValue(Vals.toLowerCase());
      setSearchEntries(
        entries.filter((entry) =>
          entry.title.toLowerCase().includes(Vals.toLowerCase())
        )
      );
      setSearching(true);
    } else {
      setValue("");
      setSearching(false);
    }
    return;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search__container">
        {/* The input field */}
        <div className="search__bar">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
              fill="#FFF"
            />
          </svg>
          <input
            onFocus={() => setHideSuggestions(false)}
            onBlur={() => setHideSuggestions(true)}
            type="text"
            placeholder={`Search for ${
              page === "Home"
                ? "movies or TV series"
                : page === "Bookmarked"
                ? "bookmarked shows"
                : page === "Movies"
                ? "movies"
                : "TV series"
            }`}
          />
        </div>
        {/* Counts suggestions */}
        {value && (
          <div
            className={`suggestion ${hideSuggestions && "suggestion-hidden"}`}
          >
            {"found " +
              suggestions.filter((item) => {
                const result = Object.values(item)
                  .join("")
                  .toLowerCase()
                  .includes(value.toLowerCase());
                // If page cares about category, check that. If it cares about being Bookmarked, check that. Otherwise, assume everything is correct
                if (page !== "Home" && page !== "Bookmarked")
                  return (
                    (result && item.category === page.slice(0, -1)) ||
                    (result && item.category === page)
                  );
                if (page === "Bookmarked") return result && item.isBookmarked;
                return result;
              }).length +
              " results for " +
              value}
          </div>
        )}
        {/* Displays suggestion titles directly under the search bar. Probably. 
        I mean it worked when it was uncommented, but I changed a few things elsewhere afterwards 
        so who knows.

        <div>
          {suggestions
            .filter((item) => {
              const result = Object.values(item)
                .join("")
                .toLowerCase()
                .includes(value.toLowerCase());
              if (page != "Home")
                return (
                  (result && item.category === page.slice(0, -1)) ||
                  item.category === page
                );
                return result
            })
            .map((suggestion, index) => (
              <div
                key={index}
                className={`suggestion ${
                  hideSuggestions && "suggestion-hidden"
                }`}
              >
                {page !== "Home" &&
                  suggestion["category"] === "Movie" &&
                  suggestion["title"]}
                {page === "Home" && suggestion["title"]}
              </div>
            ))}
        </div> */}
      </form>
      {/* Displays all results */}
      {searching && <SearchResults searchEntries={searchEntries} page={page} />}
    </>
  );
}

export default SearchBar;
