import VideoCard from "./VideoCard";

function SearchResults({ searchEntries, page }) {
  // console.log(searchEntries);
  // console.log(page);
  
  return (
    <>
      <section className="video-list">
        {searchEntries.map((video, index) => {
          // console.log(movie);
          
          // if page is the attention whore known as "Bookmarked", make a special exception
          if (video.isBookmarked === true && page === "Bookmarked") {
            
            return <VideoCard video={video} key={index} />;
          }
          if (
            video.category === page ||
            video.category === page.slice(0, -1) ||
            page === "Home"
          ) {
            return <VideoCard video={video} key={index} search="search" />;
          }
        })}
      </section>
    </>
  );
}

export default SearchResults;
