import { useState, useEffect } from "react";
import { updateOne } from "../../helpers/CRUD";
import "./BookmarkButton.css";

function BookmarkButton({ id, initialIsBookmarked, onToggle }) {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  useEffect(() => {
    setIsBookmarked(initialIsBookmarked);
  }, [initialIsBookmarked]);

  const handleToggle = async () => {
    const newBookmarkState = !isBookmarked;
    setIsBookmarked((newBookmarkState)=>!newBookmarkState);

    try {
        await updateOne("videos", id, { isBookmarked: newBookmarkState });
        if (onToggle) {
          onToggle(newBookmarkState);
        }
      } catch (error) {
        console.error("Error updating bookmark status:", error);
        setIsBookmarked((newBookmarkState)=>!newBookmarkState);
      }
    };

  return (
    <button
      onClick={handleToggle}
      className="bookmark-button"
      aria-label={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
    >
      <img
        src={
          isBookmarked
            ? "/assets/icon-bookmark-full.svg" // Active
            : "/assets/icon-bookmark-empty.svg" // Inactive
        }
        alt={isBookmarked ? "Bookmarked" : "Not Bookmarked"}
        className="bookmark-icon"
      />
    </button>
  );
}

export default BookmarkButton;
