import { useEffect, useState } from "react";
import SerieSet from "./SerieSet";

export const SeriesList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/videos")
      .then((response) => {
        return response.json();
      })
      .then((json) => setVideos(json));
  }, []);

  return (
    <>
      <div>
        {videos.map((video, index) => (
          <SerieSet key={index} video={video} />
        ))}
      </div>
    </>
  );
};

export default SeriesList;