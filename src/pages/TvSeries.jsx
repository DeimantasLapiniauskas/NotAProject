import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SeriesList from "../components/TvSeries/SeriesList";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";

const TvSeries = ({ user, setUser, entries }) => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false)
  // useEffect(() => {
  //   if (!user?.isLoggedIn) navigate(`/login`);
  // }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
<SearchBar entries ={entries} searching={searching} setSearching={setSearching} page="TV Series"/>
        <SeriesList entries={entries} />
      </div>
    </>
  );
};

export default TvSeries;
