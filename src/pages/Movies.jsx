import { useNavigate } from "react-router";
import { useEffect } from "react";
import MoviesList from "../components/Movies/MoviesList";
import Nav from "../components/Nav";

const Movies = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isLoggedIn) navigate(`/login`);
  }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <h1>MOVIES</h1>
        <MoviesList />
      </div>
    </>
  );
};

export default Movies;
