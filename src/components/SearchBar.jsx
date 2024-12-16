import { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchResults from "./SearchResults";
import { useSearchParams } from "react-router";

function SearchBar({ entries, searching, setSearching, page }) {
  // value = what's typed in the search bar.
  // Suggestions = What in the entries fits the criteria
  // hideSuggestions = used to hide everything except the bar itself onblur, and unhide it on focus.
  // searchEntries = Array containing all suggestions that we pass over to SearchResults
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [searchEntries, setSearchEntries] = useState("");
  const [error, setError] = useState("");
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const suggestionData = () => {
      setSuggestions(entries);
    };
    suggestionData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let Vals = e.target.querySelector("input").value.trim();
    if (Vals.length > 3 && Vals.length < 100) {
      setError('')
      setValue(Vals.toLowerCase());
      setSearchParams({search: Vals})
      setSearchEntries(
        entries.filter((entry) =>
          entry.title.toLowerCase().includes(Vals.toLowerCase())
        )
      );

      
      setSearching(true);
    } else if (Vals.length >= 100) {
      setSearchParams({})
      setError("Search query too long!");
      setValue("")
      setSearching(true);
    } else {
      setSearchParams({})
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
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m 21.711198,20.291333 -3.400025,-3.390279 a 7.9206496,7.9206485 0 0 0 1.689885,-4.900156 C 20.001058,7.5822924 16.419526,4 12.000912,4 7.582293,4 4,7.5822924 4,12.000898 c 0,4.417862 3.582293,8.000161 8.000912,8.000161 a 7.9206496,7.9206485 0 0 0 4.900141,-1.68989 l 3.390279,3.40003 a 0.99983134,0.99983125 0 0 0 1.419866,0 0.99983134,0.99983125 0 0 0 0,-1.419866 z M 6.0004141,12.000898 a 6.0004929,6.000491 0 1 1 12.0009849,0 6.0004929,6.0004909 0 0 1 -12.0009849,0 z"
              fill="#ffffff"
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
        <p className="error">{error}</p>

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
        {searching && !error && (
        <SearchResults searchEntries={searchEntries} page={page} />
      )}
    </>
  );
}

export default SearchBar;
