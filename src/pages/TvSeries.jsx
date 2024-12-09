import { useEffect } from "react";
import { useNavigate } from "react-router";
import SeriesList from "../components/TvSeries/SeriesList";

const TvSeries = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <>
        <h1>TV SERIES</h1>
        <SeriesList />
      </>
    </>
  );
};

export default TvSeries;
