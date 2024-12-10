import { useEffect, useState } from "react";
import "./searchBar.css";
import SearchResults from "./SearchResults";

function SearchBar({ entries, searching, setSearching, page }) {
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
    let Vals = e.target.querySelector("input").value;
    setValue(Vals);
    setSearchEntries(entries.filter((entry) => entry.title.includes(Vals)));
    setSearching(true);
    return;
  }

  // THE DAMN COUNT AND SUGGESTION TITLES DON'T WORK ON TV SERIES??? also make it work on bookmarked.
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* The input field */}
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={() => setHideSuggestions(true)}
          type="text"
          placeholder={`Search for ${
            page === "Home" ? "Movies and TV series" : page
          }`}
        />
        {/* Counts suggestions */}
        <div className={`suggestion ${hideSuggestions && "suggestion-hidden"}`}>
          {"found " +
            suggestions.filter((item) => {
              const result = Object.values(item)
                .join("")
                .toLowerCase()
                .includes(value.toLowerCase());
              if (page != "Home")
                return (
                  (result && item.category === page.slice(0, -1)) ||
                  item.category === page
                );
              return result;
            }).length +
            " results for " +
            value}
        </div>
        {/* Displays suggestion titles */}
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
        </div>
      </form>
      {/* Displays all results */}
      {searching && <SearchResults searchEntries={searchEntries} page={page} />}
    </>
  );
}

export default SearchBar;
