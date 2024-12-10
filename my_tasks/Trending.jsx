import React, { useRef } from "react";
import "./TrendingCarousel.css";
import data from "./data.json"; // Import JSON data

const TrendingCarousel = () => {
  const carouselRef = useRef(null);

  // Filter trending items from the JSON file
  const trendingData = data.filter((item) => item.isTrending);

  // Scroll the carousel horizontally
  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = carousel.offsetWidth / 2; // Scroll by half the carousel width
    carousel.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  // Handle drag-to-scroll
  const handleDrag = (event) => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    const carousel = carouselRef.current;

    const onDragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
    };

    const onDragging = (e) => {
      if (!isDragging) return;
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      carousel.scrollLeft = scrollLeft - walk;
    };

    const onDragEnd = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    // Add event listeners
    carousel.addEventListener("mousedown", onDragStart);
    carousel.addEventListener("mousemove", onDragging);
    carousel.addEventListener("mouseup", onDragEnd);
    carousel.addEventListener("mouseleave", onDragEnd);

    // For touch devices
    carousel.addEventListener("touchstart", onDragStart);
    carousel.addEventListener("touchmove", onDragging);
    carousel.addEventListener("touchend", onDragEnd);

    return () => {
      carousel.removeEventListener("mousedown", onDragStart);
      carousel.removeEventListener("mousemove", onDragging);
      carousel.removeEventListener("mouseup", onDragEnd);
      carousel.removeEventListener("mouseleave", onDragEnd);

      carousel.removeEventListener("touchstart", onDragStart);
      carousel.removeEventListener("touchmove", onDragging);
      carousel.removeEventListener("touchend", onDragEnd);
    };
  };

  return (
    <div
      className="trending-carousel"
      ref={carouselRef}
      onMouseDown={handleDrag}
      onTouchStart={handleDrag}
    >
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
