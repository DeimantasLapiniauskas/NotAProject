import Trending from "../components/Trending";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import EntryList from "../components/EntryList";

const Home = ({ user, setUser, entries, onBookmarkToggle }) => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);

  return (
    <>
      <meta
        itemProp="description"
        content="The main page of site"
      />

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
          onBookmarkToggle={onBookmarkToggle}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        {!searching && (
          <div>
            <Trending entries={entries} onBookmarkToggle={onBookmarkToggle} />
            <EntryList
              title="Recommended for you"
              entries={entries.filter((entry) => {
                return !entry.isTrending;
              })}
              onBookmarkToggle={onBookmarkToggle}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
