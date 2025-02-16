import React, { useRef, useState, useEffect } from "react";
import { ic1Img, ic2Img, ic3Img, ic4Img } from "../utils/index";

const Slider = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -532 : 532; // Adjust based on image width
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex w-full mx-auto overflow-x-auto scrollbar-hide"
        style={{
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          borderRadius: "12px",
          margin: "0 auto",
          background: "transparent",
          width: "100vw",
          paddingLeft: "180px",
        }}
      >
        <div className="flex w-full flex-nowrap">
          {[ic1Img, ic2Img, ic3Img, ic4Img].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-0"
              style={{
                marginLeft: index === 0 ? "0px" : "16px",
              }}
            >
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  height: "532px",
                  width: "532px",
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-left text-[#fafafa] ml-12 mt-4 text-lg font-normal leading-tight max-w-[532px]">
                {index === 0 && (
                  <>
                    You never lose with viral Casino highlight reels mapped to a W3W addy. 
                  </>
                )}
                {index === 1 && "Increase your positive Playa juju by recording a Reel mapped to 3 word address."}
                {index === 2 &&
                  "Enter to win Casino W3W Aircomps with a Phantom wallet username and a Casino W3W reel."}
                {index === 3 && (
                  <>
                    Watch the Casino W3W livestream to see winners in reel time.
                  </>
                )}
              </p>
            </div>
          ))}
          <div className="flex-shrink-0" style={{ width: "780px" }}></div>
        </div>
      </div>

      <div className="absolute top-0 right-0 mt-[700px] mr-6 flex space-x-4">
        <button
          onClick={() => scroll("left")}
          className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#1c1c1e] text-white ${
            isAtStart ? "opacity-50" : "opacity-100"
          }`}
          disabled={isAtStart}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#1c1c1e] text-white ${
            isAtEnd ? "opacity-50" : "opacity-100"
          }`}
          disabled={isAtEnd}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
