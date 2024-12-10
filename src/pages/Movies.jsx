import { useEffect } from "react";
import { useNavigate } from "react-router";
import MoviesList from "../components/Movies/MoviesList";
import Nav from "../components/Nav";

const Movies = ({ user, setUser, entries }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user?.isLoggedIn) navigate(`/login`);
  // }, []);
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="pagecontent">
        <h1>MOVIES</h1>
        <MoviesList entries={entries}/>
      </div>
    </>
  );
};

export default Movies;
