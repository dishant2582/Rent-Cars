import React, { useState } from "react";

const TopCities = () => {
    const carouselItems = [
        {
          id: 1,
          imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2024/01/India-Gate.webp",
          title: "Exciting Road Trips from Delhi: Steering Through Scenic Routes",
          subtitle: "Discover the best road trips from Delhi & create memories that will last a lifetime.",
        },
        {
          id: 2,
          imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2024/01/Thiksey-Monastery-Gompa.webp",
          title: "On the Road to Serenity: A Delhi to Ladakh Road Trip",
          subtitle: "Experience the thrill of a lifetime with our guide to the Delhi to Ladakh road trip.",
        },
        {
          id: 4,
          imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2023/12/places-to-visit-in-mathura.jpg",
          title: "In the Footsteps of Lord Krishna: Delhi to Mathura",
          subtitle: "Plan a perfect getaway! Discover hidden gems, divine temples, and local cuisine.",
        },
        {
          id: 5,
          imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2023/12/mike-blank-28s5r-zA6Lw-unsplash-1.jpg",
          title: "Exploring India's Hidden Gems",
          subtitle: "Discover the hidden gems in India for your next vacation with Zoomcar.",
        },
        {
            id: 6,
            imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2024/01/India-Gate.webp",
            title: "Exciting Road Trips from Delhi: Steering Through Scenic Routes",
            subtitle: "Discover the best road trips from Delhi & create memories that will last a lifetime.",
          },
          {
            id: 7,
            imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2024/01/Thiksey-Monastery-Gompa.webp",
            title: "On the Road to Serenity: A Delhi to Ladakh Road Trip",
            subtitle: "Experience the thrill of a lifetime with our guide to the Delhi to Ladakh road trip.",
          },
          {
            id: 9,
            imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2023/12/places-to-visit-in-mathura.jpg",
            title: "In the Footsteps of Lord Krishna: Delhi to Mathura",
            subtitle: "Plan a perfect getaway! Discover hidden gems, divine temples, and local cuisine.",
          },
          {
            id: 10,
            imageUrl: "https://www.zoomcar.com/blogs/wp-content/uploads/2023/12/mike-blank-28s5r-zA6Lw-unsplash-1.jpg",
            title: "Exploring India's Hidden Gems",
            subtitle: "Discover the hidden gems in India for your next vacation with Zoomcar.",
          }
    ];
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of items to show at once

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If currentIndex is the last group of items, start from the first group
      if (prevIndex >= carouselItems.length - itemsPerPage) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If currentIndex is the first group, go to the last group
      if (prevIndex === 0) {
        return carouselItems.length - itemsPerPage;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="home-carousel mt-20">
      <div className="home-carousel-header flex justify-between items-center py-4">
        <div className="needle"></div>
        <div className="home-carousel-header-text text-2xl font-semibold font-serif my-5">Our Center in the Top Cities to Explore Around Delhi</div>
        <div className="needle-2"></div>
      </div>
      <div className="home-carousel-container relative">
        {/* Left Arrow */}
        <div
          className="ml-10 home-carousel-container-arrow-left absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={prevSlide}
        >
          <img
                    className="w-20 h-20 rounded-full"
                    src="https://www.svgrepo.com/show/181989/left-arrow-arrows.svg"
                  />
        </div>

        {/* Carousel Items */}
        <div className="home-carousel-container-visible overflow-hidden">
          <div
            className="home-carousel-container-carousel flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 340}px)`,
            }}
          >
            {carouselItems.map((item) => (
              <div
                key={item.id}
                className="home-carousel-container-carousel-element flex-shrink-0 w-[340px] mx-2"
              >
                <div className="blog-card bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    className="w-full h-[256px] object-cover"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className="blog-card-title text-lg font-semibold p-4">{item.title}</div>
                  <div className="blog-card-subtitle p-4 text-sm text-gray-600">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div
          className="mr-10 home-carousel-container-arrow-right absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={nextSlide}
        >
            <img
                    className="w-20 h-20 rounded-full"
                    src="https://www.svgrepo.com/show/183566/right-arrow-next.svg"
                  />
        </div>
      </div>
    </div>
  );
};

export default TopCities;
