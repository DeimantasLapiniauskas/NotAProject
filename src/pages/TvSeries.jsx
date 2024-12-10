import { useEffect } from "react";
import { useNavigate } from "react-router";
import SeriesList from "../components/TvSeries/SeriesList";
import Nav from "../components/Nav";

const TvSeries = ({ user, setUser, entries }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user?.isLoggedIn) navigate(`/login`);
  // }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <h1>TV SERIES</h1>
        <SeriesList entries={entries} />
      </div>
    </>
  );
};

export default TvSeries;
