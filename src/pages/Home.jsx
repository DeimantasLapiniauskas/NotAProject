import Recommended from "../components/Recommended";
import Trending from "../components/Trending";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import EntryList from "../components/EntryList";

const Home = ({ user, setUser, entries }) => {
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
          page="Home"
        />
        {!searching && (
          <div>
            <Trending entries={entries}/>
            <EntryList entries={entries.filter((entry) => {
              return !entry.isTrending;
            })} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
