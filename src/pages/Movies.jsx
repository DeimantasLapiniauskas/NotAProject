import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import EntryList from "../components/EntryList";

const Movies = ({ user, setUser, entries }) => {
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
          page="Movies"
        />
        {!searching && (
          <EntryList
            title="Movies"
            className="mb"
            entries={entries.filter((entry) => {
              return entry.category === "Movie";
            })}
          />
        )}
      </div>
    </>
  );
};

export default Movies;
