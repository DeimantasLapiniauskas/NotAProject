import { useEffect } from "react";
import { useState } from "react";
import SearchVideoCard from "./SearchVideoCard";

function MoviesList({ entries }) {
  const [bookmarked, setBookmarked] = useState([]);

  const getBookmarked = async () => {
    try {
      setBookmarked(entries);
    } catch (error) {
      console.error("Error in Movies component:", error);
    }
  };

  useEffect(() => {
    getBookmarked();
  }, []);
  return (
    <>
      <section className="video-list">
        <h4 className="video-list__title">Bookmarked Movies</h4>
        {bookmarked.map((video, index) => {
          if (video.isBookmarked && video.category === "Movie") {
            return <SearchVideoCard key={index} movie={video} />;
          }
          return;
        })}
      </section>

      <section className="video-list mt-6">
        <h4 className="video-list__title">Bookmarked TV Series</h4>
        {bookmarked.map((video, index) => {
          if (video.isBookmarked && video.category === "TV Series") {
            return <SearchVideoCard key={index} movie={video} />;
          }
          return;
        })}
      </section>
    </>
  );
}

export default MoviesList;
