import { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchResults from "./SearchResults";
import { useSearchParams } from "react-router";


function SearchBar({ entries, searching, setSearching, page, searchValue, setSearchValue, onBookmarkToggle }) {
  // value = what's typed in the search bar.
  // Suggestions = What in the entries fits the criteria
  // hideSuggestions = used to hide everything except the bar itself onblur, and unhide it on focus.
  // searchEntries = Array containing all suggestions that we pass over to SearchResults
  const [value, setValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [searchEntries, setSearchEntries] = useState("");
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchRegex = /^[A-Za-z0-9 ]*$/g;
  useEffect(() => {
    const suggestionData = () => {
      setSuggestions(entries);
      if (searchParams.get("search")) {
        setSearchValue(searchParams.get("search"));
        handleSubmit();
      }
    };
    suggestionData();
  }, []);

  function handleSubmit(e) {
    if (e?.target) e.preventDefault();
    let Vals = "";
    if (e?.target) Vals = e.target.querySelector("input").value.trim();
    else Vals = searchParams.get("search");
    let AgeVals = "";
    if (e?.target) AgeVals = e.target.querySelector("select").value;


    setAgeValue(AgeVals);
    if (!Vals.match(searchRegex)) {
      setError("Search query contains invalid characters!");
      setSearching(true);
    } else if (Vals.length >= 100) {
      setError("Search query too long!");
      setSearching(true);
    } else if (Vals.length > 2) {
      setError("");
      setSearchParams(
        e
          ? { search: e.target.querySelector("input").value.trim() }
          : { search: Vals }
      );

      setValue(Vals.toLowerCase());
      setSearchEntries(
        entries.filter((entry) => {
          return (
            // filters based on if the show matches the requested age rating, and if it either includes the search query as a title or as its release year.
            (entry.title.toLowerCase().includes(Vals.toLowerCase()) &&
              entry.rating.includes(AgeVals)) ||
            (entry.year.toString().includes(Vals) &&
              entry.rating.includes(AgeVals))
          );
        })
      );
      setSearching(true);
    } else {
      setSearchParams({});
      setValue("");
      setSearching(false);
      setError("");
    }
    return;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="search__container">
        {/* The input field */}
        <div className="search__params">
          <div className="search__bar">
          <img src="assets/icon-search.svg" alt="search"></img>
            <input
              onFocus={() => setHideSuggestions(false)}
              onBlur={() => setHideSuggestions(true)}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              value={searchValue}
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
          {/* The age rating field */}
          {/* Inline style for label is required, otherwide lighthouse cries about us not having a label. */}
          <label htmlFor="ageRating" style={{width:"0px", height:"0px", overflow:"hidden"}}>Age rating</label>
          <select name="ageRating" id="ageRating">
            <option value="">Rating</option>
            <option value="E">E</option>
            <option value="PG">PG</option>
            <option value="18+">18+</option>
          </select>
        </div>
        <p className="error">{error}</p>

        {/* Counts suggestions */}
        {value && searchValue && (
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
                // Update: Now also checks if age rating matches.

                if (page !== "Home" && page !== "Bookmarked")
                  return (
                    (result &&
                      item.category === page.slice(0, -1) &&
                      item.rating.includes(ageValue)) ||
                    (result &&
                      item.category === page &&
                      item.rating.includes(ageValue))
                  );
                if (page === "Bookmarked")
                  return (
                    result &&
                    item.isBookmarked &&
                    item.rating.includes(ageValue)
                  );
                return result && item.rating.includes(ageValue);
              }).length +
              " results for " +
              value}
          </div>
        )}
      </form>
      {/* Displays all results */}
      {searching && !error && (
        <SearchResults searchEntries={searchEntries} page={page} onBookmarkToggle={onBookmarkToggle}  />
      )}
    </>
  );
}

export default SearchBar;
