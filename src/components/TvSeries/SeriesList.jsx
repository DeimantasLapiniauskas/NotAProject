import { useEffect, useState } from "react";
import SerieSet from "./SerieSet";

export const SeriesList = () => {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/videos")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => setVideos(json));
  // }, []);

  const [error, setError] = useState(null);

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
        setError(error.message); // Set error message if there's an issue
        console.error("Failed to fetch videos:", error);
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
          <SerieSet key={index} video={video} />
        ))}
      </div>
    </>
  );
};

export default SeriesList;
