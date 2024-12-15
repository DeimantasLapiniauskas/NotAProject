import { useState } from "react";
import "./BookmarkButton.css";

function BookmarkButton({ id, initialIsBookmarked, onToggle }) {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const handleToggle = async () => {
    const newBookmarkState = !isBookmarked;

    try {
      // Update isBookmarked status in the backend
      const response = await fetch(`http://localhost:5000/videos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isBookmarked: newBookmarkState,
        }),
      });

      if (response.ok) {
        setIsBookmarked(newBookmarkState); // Update local state
        onToggle(newBookmarkState); // Notify parent component
      } else {
        console.error("Failed to update bookmark status on the server.");
      }
    } catch (error) {
      console.error("Error updating bookmark:", error);
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
            ? "/assets/icon-bookmark-full.svg" // Active (filled) bookmark
            : "/assets/icon-bookmark-empty.svg" // Inactive (hollow) bookmark
        }
        alt={isBookmarked ? "Bookmarked" : "Not Bookmarked"}
        className="bookmark-icon"
      />
    </button>
  );
}

export default BookmarkButton;
