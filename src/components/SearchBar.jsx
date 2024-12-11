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
    let Vals = e.target.querySelector("input").value;
    if(Vals.length>3){
    setValue(Vals.toLowerCase());
    setSearchEntries(entries.filter((entry) => entry.title.toLowerCase().includes(Vals.toLowerCase())));
    setSearching(true);}
    else setSearching(false)
    return;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* The input field */}
        <input
        style={{"color":"#999999"}}
          onFocus={() => setHideSuggestions(false)}
          onBlur={() => setHideSuggestions(true)}
          type="text"
          placeholder={`Search for ${
            page === "Home"
              ? "Movies and TV series"
              : page !== "Bookmarked"
              ? page
              : "Bookmarked shows"
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
