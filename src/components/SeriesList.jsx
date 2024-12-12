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
      <section className="video-list">
        <h4 className="video-list__title">TV Series</h4>
        {series.map((series, index) => {
          if (series.category === "TV Series") {
            return (
              <div key={index} className="video-card">
                <LazyLoadImage
                  src={series.thumbnail.regular.small.substring(1)}
                  alt={series.title + "'s image"}
                  className="video-card__img"
                />
                <div className="video-card__details">
                  <p className="video-card__year">{series.year}</p>
                  <span>&#8226;</span>
                  <p className="video-card__icon">
                    <img src="/assets/icon-category-tv.svg" />
                    {series.category}
                  </p>
                  <span>&#8226;</span>
                  <p className="video-card__rating">{series.rating}</p>
                </div>
                <h6 className="video-card__title">{series.title}</h6>
              </div>
            );
          }
          return;
        })}
      </section>
    </>
  );
}

export default SeriesList;
