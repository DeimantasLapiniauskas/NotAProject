import Recommended from "../components/Recommended";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar"
import { useState } from "react";

const Home = ({ user, setUser, entries }) => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  // useEffect(() => {
  //   if (!user?.isLoggedIn) navigate(`/login`);
  // }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <SearchBar entries={entries} setShows= {setShows}/>
        <h1>HOME</h1>
        <Recommended entries={entries} shows={shows}/>
      </div>
    </>
  );
};

export default Home;
