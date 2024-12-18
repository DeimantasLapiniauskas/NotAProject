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
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {!searching && (
          <EntryList
            className="mb"
            title="Bookmarked Movies"
            entries={entries.filter((entry) => {
              return entry.isBookmarked && entry.category === "Movie";
            })}
            onBookmarkToggle={onBookmarkToggle}
          />
        )}
        {!searching && (
          <EntryList
            className="mb"
            title="Bookmarked TV Series"
            entries={entries.filter((entry) => {
              return entry.isBookmarked && entry.category === "TV Series";
            })}
            onBookmarkToggle={onBookmarkToggle}
          />
        )}
      </div>
    </>
  );
};

export default Bookmarked;
