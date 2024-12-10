import React, { useRef, useEffect } from "react";
import "./TrendingCarousel.css";
import data from "../../data.json"; // Import JSON data

const TrendingCarousel = () => {
  const carouselRef = useRef(null);
  let isDragging = false; // Track if the mouse is dragging
  let startX; // Starting X position of the mouse
  let scrollLeft; // Initial scroll position

  useEffect(() => {
    const carousel = carouselRef.current;

    const onMouseDown = (e) => {
      if (e.button !== 0) return; // Only trigger for left mouse button
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX - carousel.offsetLeft; // Calculate start position
      scrollLeft = carousel.scrollLeft; // Save initial scroll position
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault(); // Prevent default behavior (e.g., text selection)
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5; // Adjust scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    };

    const onMouseUpOrLeave = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    // Add mouse event listeners
    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("mousemove", onMouseMove);
    carousel.addEventListener("mouseup", onMouseUpOrLeave);
    carousel.addEventListener("mouseleave", onMouseUpOrLeave);

    // Clean up event listeners on component unmount
    return () => {
      carousel.removeEventListener("mousedown", onMouseDown);
      carousel.removeEventListener("mousemove", onMouseMove);
      carousel.removeEventListener("mouseup", onMouseUpOrLeave);
      carousel.removeEventListener("mouseleave", onMouseUpOrLeave);
    };
  }, []);

  // Filter trending items from JSON data
  const trendingData = data.filter((item) => item.isTrending);

  return (
    <div className="trending-carousel" ref={carouselRef}>
      {trendingData.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.thumbnail.trending.small} alt={item.title} />
          <div className="item-info">
            <p>
              {item.year} • {item.category}
            </p>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCarousel;
