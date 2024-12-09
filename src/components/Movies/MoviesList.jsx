import { useEffect, useState } from "react";
import Movie from "./Movie";

export const MoviesList = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:5000/videos")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => setVideos(json));
  // }, []);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:5000/videos");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setVideos(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display error if there's any
  }

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

export default MoviesList;
