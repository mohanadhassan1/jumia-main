import React, { useState, useEffect } from "react";

export default function CarouselMain() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const images = [
    {
      src: "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Fashion/Shein/DesktopEN.png",
      alt: "1",
    },
    {
      src: "https://eg.jumia.is/cms/Week7-8-2024/ADS/Aman/DesktopENc.png",
      alt: "2",
    },
    {
      src: "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Fashion/Defacto/DesktopEN.png",
      alt: "3",
    },
    {
      src: "https://eg.jumia.is/cms/Week2-2024/Clearance/DesktopENClearance.jpg",
      alt: "4",
    },
    {
      src: "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Appliances-TVs/DesktopEN.gif",
      alt: "5",
    },
    {
      src: "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Home/DesktopEN.png",
      alt: "6",
    },
    {
      src: "https://eg.jumia.is/cms/Week2-2024/OPT/22-01/KitchenEssential/DesktopEN.png",
      alt: "7",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    let intervalId;
    if (!autoplayPaused) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [autoplayPaused, activeIndex]);


  return (
    <div
      id="indicators-carousel"
      className="relative w-full h-full pb-24"
      data-carousel="static"
      onMouseEnter={() => setAutoplayPaused(true)}
      onMouseLeave={() => setAutoplayPaused(false)}
    >
      <div className="relative h-56 md:h-96  overflow-hidden rounded-lg">
      {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item={index === activeIndex ? "active" : null}
            >
              <img
                src={image.src}
                className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={image.alt}
              />
            </div>
          ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-white" : "bg-gray-500"}`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => goToSlide(index)}

          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}