import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

function EntryList({ entries, title, onBookmarkToggle }) {
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    setVideo(entries);
  };

  useEffect(() => {
    getVideo();
  }, [entries]);

  return (
    <section className="video-list">
      <h4 className="video-list__title">{title}</h4>
      {video.map((entry, key) => {
        // console.log(index + "From entrylist");
        // console.log(key);

        return <VideoCard video={entry} index={key} key={entry.id} onBookmarkToggle={onBookmarkToggle} />;
      })}
    </section>
  );
}

export default EntryList;
