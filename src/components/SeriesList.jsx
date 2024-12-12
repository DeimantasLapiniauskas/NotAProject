import { useEffect } from "react";
import { useState } from "react";
import SearchVideoCard from "./SearchVideoCard";

function SeriesList({ entries }) {
  const [series, setSeries] = useState([]);
  const getSeries = async () => {
    try {
      setSeries(entries);
    } catch (error) {
      console.error("Error in Serie component:", error);
    }
  };

  useEffect(() => {
    getSeries();
  }, []);
  return (
    <section className="video-list">
      <h4 className="video-list__title">TV Series</h4>
      {series.map((series, index) => {
        if (series.category === "TV Series") {
          return <SearchVideoCard key={index} movie={series} />;
        }
        return;
      })}
    </section>
  );
}

export default SeriesList;
