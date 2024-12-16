import { useState } from "react";
import { updateOne } from "../../helpers/CRUD";
import "./BookmarkButton.css";

function BookmarkButton({ id, initialIsBookmarked, onToggle }) {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const handleToggle = async () => {
    const newBookmarkState = !isBookmarked;

    try {
      await updateOne("videos", id, { isBookmarked: newBookmarkState });

      setIsBookmarked(newBookmarkState);
      onToggle(newBookmarkState);
    } catch (error) {
      console.error("Error updating bookmark status:", error);
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
