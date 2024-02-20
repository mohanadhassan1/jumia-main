import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  // Function to switch to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  // Function to switch to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  // Effect to handle autoplay
  useEffect(() => {
    let intervalId;
    if (!autoplayPaused) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 1000); // Change slide every 3 seconds (adjust as needed)
    }

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [autoplayPaused]); // Re-run effect when autoplayPaused changes

  return (
    <>
      <div
        id="indicators-carousel"
        className="relative w-full  h-full z-0"
        data-carousel="static"
        onMouseEnter={() => setAutoplayPaused(true)}
        onMouseLeave={() => setAutoplayPaused(false)}
      >
        {/* Carousel wrapper */}
        <div className="relative h-full overflow-hidden rounded-lg">
          {/* Carousel items */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? '' : 'hidden'
              } duration-700 ease-in-out`}
              data-carousel-item={index === activeIndex ? 'active' : null}
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Slide${index + 1}`}
                className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
          onClick={prevSlide}
        >
          Previous 
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </>
  );
}
