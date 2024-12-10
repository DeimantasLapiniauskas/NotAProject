import { useEffect } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import SeriesList from "../components/SeriesList";
const TvSeries = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <SeriesList />
      </div>
    </>
  );
};

export default TvSeries;
