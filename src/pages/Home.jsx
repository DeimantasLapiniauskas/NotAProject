import Trending from "../components/Trending";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import EntryList from "../components/EntryList";

const Home = ({ user, setUser, entries }) => {
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
          page="Home"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {!searching && (
          <div>
            <Trending entries={entries} />
            <EntryList
              title="Recommended for you"
              entries={entries.filter((entry) => {
                return !entry.isTrending;
              })}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
