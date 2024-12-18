import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import EntryList from "../components/EntryList";
import SearchBar from "../components/SearchBar";

const TvSeries = ({ user, setUser, entries, onBookmarkToggle }) => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <SearchBar
          entries={entries}
          searching={searching}
          setSearching={setSearching}
          page="TV Series"
        />
        {!searching && (
          <EntryList
            className="mb"
            title="TV Series"
            entries={entries.filter((entry) => {
              return entry.category === "TV Series";
            })}
            onBookmarkToggle={onBookmarkToggle}
          />
        )}
      </div>
    </>
  );
};

export default TvSeries;
