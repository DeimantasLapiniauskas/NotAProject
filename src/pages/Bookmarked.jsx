import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import EntryList from "../components/EntryList";

const Bookmarked = ({ user, setUser, entries, onBookmarkToggle }) => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  const bookmarkedMovies = entries.filter(
    (entry) => entry.isBookmarked && entry.category === "Movie"
  );
  const bookmarkedTVSeries = entries.filter(
    (entry) => entry.isBookmarked && entry.category === "TV Series"
  );
  return (
    <>
      <Nav
        user={user}
        setUser={setUser}
        setSearching={setSearching}
        setSearchValue={setSearchValue}
      />
 <div className="pagecontent">
        <SearchBar
          entries={entries}
          searching={searching}
          setSearching={setSearching}
          page="Bookmarked"
          onBookmarkToggle={onBookmarkToggle}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {!searching && (
          <>
            <h4 className="bookmark-title">Bookmarked Movies</h4>   
            {bookmarkedMovies.length > 0 ? (
              <EntryList
                className="mb"
                entries={bookmarkedMovies}
                onBookmarkToggle={onBookmarkToggle}
              />
            ) : (
              <h6 className="bookmark-title__error">No bookmarks found. Add movies to your bookmarks to see them here!</h6>
            )}
          </>
        )}
        {!searching && (
          <>
            <h4 className="bookmark-title">Bookmarked TV series</h4>          
            {bookmarkedTVSeries.length > 0 ? (
              <EntryList
                className="mb"
                entries={bookmarkedTVSeries}
                onBookmarkToggle={onBookmarkToggle}
              />
            ) : (
              <h6 className="bookmark-title__error">No bookmarks found. Add TV series to your bookmarks to see them here!</h6>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Bookmarked;
