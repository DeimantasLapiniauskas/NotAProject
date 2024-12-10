import { useEffect } from "react";
import { getAll } from "../../helpers/CRUD";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SeriesList() {
  const [series, setSeries] = useState([]);
  const getSeries = async () => {
    try {
      const series = await getAll("videos");
      setSeries(series);
    } catch (error) {
      console.error("Error in Serie component:", error);
    }
  };

  useEffect(() => {
    getSeries();
  }, []);
  return (
    <>
      {series.map((series, index) => {
        if (series.category === "TV Series") {
          return (
            <div key={index}>
              <LazyLoadImage
                src={series.thumbnail.regular.small.substring(1)}
                alt={series.title + "'s image"}
              />
              <p>{series.year}</p>

              <p style={{ backgroundColor: "#999999" }}>
                <img src="/assets/icon-category-tv.svg" />
                {series.category}
              </p>
              <p>{series.rating}</p>
              <h1>{series.title}</h1>
            </div>
          );
        }
        return;
      })}
    </>
  );
}

export default SeriesList;
