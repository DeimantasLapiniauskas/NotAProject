import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";

function Recommended({ entries }) {
  const [ recc, setRecc ] = useState([]);
  const getRecc = async () => {
    try {
      setRecc(entries);
    } catch (error) {
      console.error("Error in Recommended component:", error);
    }
  };

  useEffect(() => {
    getRecc();
  }, []);

  return (
    <section className="video-list">
      <h4 className="video-list__title">Recommended for you</h4>
      {recc.map((video, index) => {
        if (video.isTrending) return;
        return <VideoCard key={index} movie={video} />;
      })}
    </section>
  );
}

export default Recommended;
