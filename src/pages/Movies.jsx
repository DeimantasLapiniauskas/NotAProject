import MoviesList from "../components/Movies/MoviesList";
import Nav from "../components/Nav";

const Movies = () => {
  return (
    <>
      <Nav/>
      <div className="pagecontent">
        <h1>MOVIES</h1>
        <MoviesList />
      </div>
    </>
  );
};

export default Movies;
