import { useEffect, useState } from "react";
import "./searchBar.css";

function SearchBar({ entries, setShows }) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  useEffect(() => {
    const suggestionData = async () => {
      setSuggestions(entries);
    };
    suggestionData();
  }, []);
  function handleSubmit(e){
    e.preventDefault();
    setValue(e.target.querySelector('input').value)
    console.log(e.target.querySelector('input').value);
    return};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={() => setHideSuggestions(true)}
          type="text"
          placeholder="Search for movies or TV series"
          onChange={(e) => {
            // e.preventDefault();
            // setValue(e.target.value);
          }}
        />
        <div className={`suggestion ${hideSuggestions && "suggestion-hidden"}`}>
          {
            suggestions.filter((item) => {
              const result = Object.values(item)
                .join("")
                .toLowerCase()
                .includes(value.toLowerCase());
              return result;
            }).length
          }
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
                {suggestion["title"]}
              </div>
            ))}
        </div>
        
      </form>
    </>
  );
}
export default SearchBar;
