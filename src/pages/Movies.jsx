import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import EntryList from "../components/EntryList";

const Movies = ({ user, setUser, entries, onBookmarkToggle }) => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <meta itemProp="description" content="Movies page" />

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
          page="Movies"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {!searching && (
          <EntryList
            title="Movies"
            className="mb"
            entries={entries.filter((entry) => {
              return entry.category === "Movie";
            })}
            onBookmarkToggle={onBookmarkToggle}
          />
        )}
      </div>
    </>
  );
};

export default Movies;
