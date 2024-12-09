import { useNavigate } from "react-router";
import { useEffect } from "react";
import SeriesList from "../components/TvSeries/SeriesList";
import Nav from "../components/Nav";

const TvSeries = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <h1>TV SERIES</h1>
        <SeriesList />
      </div>
    </>
  );
};

export default TvSeries;
