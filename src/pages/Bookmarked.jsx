import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import EntryList from "../components/EntryList";

const Bookmarked = ({ user, setUser, entries }) => {
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
          page="Bookmarked"
        />
        {!searching && (
          <EntryList
            title="Bookmarked Movies"
            entries={entries.filter((entry) => {
              return entry.isBookmarked && entry.category === "Movie";
            })}
          />
        )}
        {!searching && (
          <EntryList
            title="Bookmarked TV Series"
            entries={entries.filter((entry) => {
              return entry.isBookmarked && entry.category === "TV Series";
            })}
          />
        )}
      </div>
    </>
  );
};

export default Bookmarked;
