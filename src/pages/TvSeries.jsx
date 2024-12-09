import SeriesList from "../components/TvSeries/SeriesList";
import Nav from "../components/Nav";

const TvSeries = () => {

  return (
    <>
      <Nav/>
      <div className="pagecontent">
        <h1>TV SERIES</h1>
        <SeriesList />
      </div>
    </>
  );
};

export default TvSeries;
