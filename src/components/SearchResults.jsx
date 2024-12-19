import VideoCard from "./VideoCard";

function SearchResults({ searchEntries, page, onBookmarkToggle }) {
  return (
    <>
      <section className="video-list">
        {searchEntries.map((video, index) => {
          if (video.isBookmarked === true && page === "Bookmarked")
            return (
              <VideoCard
                video={video}
                key={index}
                onBookmarkToggle={onBookmarkToggle}
              />
            );
            // page.slice is needed, since the page is "movies", but the category is "movie"
          if (
            video.category === page ||
            video.category === page.slice(0, -1) ||
            page === "Home"
          )
            return (
              <VideoCard
                video={video}
                key={index}
                search="search"
                onBookmarkToggle={onBookmarkToggle}
              />
            );
        })}
      </section>
    </>
  );
}

export default SearchResults;
