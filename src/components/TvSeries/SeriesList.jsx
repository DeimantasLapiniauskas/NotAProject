import { useEffect, useState } from "react";
import SerieSet from "./SerieSet";

export const SeriesList = () => {
  const [videos, setVideos] = useState([]);
  // setError is used to store error messages in state, allowing the component to re-render
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
        // handles errors by updating the state with the error message and logging the error to the console.
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
          <SerieSet key={index} video={video} />
        ))}
      </div>
    </>
  );
};

export default SeriesList;
