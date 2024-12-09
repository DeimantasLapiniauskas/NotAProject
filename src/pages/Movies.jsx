import { useEffect } from "react";
import { useNavigate } from "react-router";
import MoviesList from "../components/Movies/MoviesList";

const Movies = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <>
        <h1>MOVIES</h1>
        <MoviesList />
      </>
    </>
  );
};

export default Movies;
