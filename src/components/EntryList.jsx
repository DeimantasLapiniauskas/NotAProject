import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

function EntryList({ entries, title }) {
  const [video, setVideo] = useState([]);
  const getVideo = async () => {
      setVideo(entries);
  };

  useEffect(() => {
    getVideo();
  }, []);
  return (
    <section className="video-list">
      <h4 className="video-list__title">{title}</h4>
      {video.map((entry, index) => {
          return <VideoCard key={index} video={entry} />;
      })}
    </section>
  );
}

export default EntryList;
