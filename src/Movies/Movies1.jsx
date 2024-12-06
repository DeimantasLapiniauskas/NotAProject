import { useEffect, useState } from "react";
import Movie from "./Movie";

export const Movies1 = () => {
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
          <Movie key={index} video={video} />
        ))}
      </div>
    </>
  );
};

export default Movies1;
