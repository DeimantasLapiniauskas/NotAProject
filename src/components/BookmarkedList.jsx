import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

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
            return <VideoCard key={index} movie={video} />;
          }
          return;
        })}
      </section>

      <section className="video-list mt-6">
        <h4 className="video-list__title">Bookmarked TV Series</h4>
        {bookmarked.map((video, index) => {
          if (video.isBookmarked && video.category === "TV Series") {
            return <VideoCard key={index} movie={video} />;
          }
          return;
        })}
      </section>
    </>
  );
}

export default MoviesList;
