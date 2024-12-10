import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SeriesList from "../components/SeriesList";
import SearchBar from "../components/SearchBar";

const TvSeries = ({ user, setUser, entries }) => {
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
          page="TV Series"
        />
        {!searching && <SeriesList entries={entries} searching={searching}/>}
      </div>
    </>
  );
};

export default TvSeries;
