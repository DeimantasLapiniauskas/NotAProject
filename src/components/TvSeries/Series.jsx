import { useEffect, useState } from "react";
import Serie from "./Serie";

export const Series = () => {
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
          <Serie key={index} video={video} />
        ))}
      </div>
    </>
  );
};

export default Series;