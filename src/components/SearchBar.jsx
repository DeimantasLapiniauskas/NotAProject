import { useEffect, useState } from "react";
import "./searchBar.css";
import SearchResults from "./SearchResults";

function SearchBar({ entries, searching, setSearching, page }) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [searchEntries, setSearchEntries] = useState("");
  useEffect(() => {
    const suggestionData = async () => {
      setSuggestions(entries);
    };
    suggestionData();
  }, []);
  function handleSubmit(e) {
    let Vals = e.target.querySelector("input").value;
    e.preventDefault();
    setValue(Vals);

    setSearchEntries(entries.filter((entrie) => entrie.title.includes(Vals)));

    setSearching(true);
    return;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={() => setHideSuggestions(true)}
          type="text"
          placeholder={`Search for ${
            page === "Home" ? "Movies and TV series" : page
          }`}
        />
        <div className={`suggestion ${hideSuggestions && "suggestion-hidden"}`}>
          {"found " +
            suggestions.filter((item) => {
              const result = Object.values(item)
                .join("")
                .toLowerCase()
                .includes(value.toLowerCase());
              if (page != "Home")
                return result && item.category === page.slice(0, -1) || item.category === page;
              return result;
            }).length +
            " results for " +
            value}
        </div>
        <div>
          {suggestions
            .filter((item) => {
              return Object.values(item)
                .join("")
                .toLowerCase()
                .includes(value.toLowerCase());
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
      {searching && <SearchResults searchEntries={searchEntries} />}
    </>
  );
}
export default SearchBar;
