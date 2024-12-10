import Recommended from "../components/Recommended";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Home = ({ user, setUser, entries }) => {
  const navigate = useNavigate();

  const [searching, setSearching] = useState(false);

  // useEffect(() => {
  //   if (!user?.isLoggedIn) navigate(`/login`);
  // }, []);
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
        {!searching && <Recommended entries={entries} searching={searching} />}
      </div>
    </>
  );
};

export default Home;
