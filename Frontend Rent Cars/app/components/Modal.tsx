/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";

interface SliderData {
  image: string;
  title: string;
  description: string;
}

interface BannerProps {
  data: SliderData[];
}

const Modal: React.FC<BannerProps> = ({ data }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const sliderInterval = useRef<NodeJS.Timeout | null>(null);

  const timeInterval = 7000; // 7 seconds for each slide

  const moveToSlide = (index: number) => {
    setCurrentIndex(index);

    // Progress bar animation reset and start
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";
      setTimeout(() => {
        progressBarRef.current!.style.transition = `width ${timeInterval}ms linear`;
        progressBarRef.current!.style.width = "100%";
      }, 50);
    }
  };

  // Auto-slide every 7 seconds
  const startAutoSlide = () => {
    sliderInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, timeInterval);
  };

  const stopAutoSlide = () => {
    if (sliderInterval.current) clearInterval(sliderInterval.current);
  };

  useEffect(() => {
    moveToSlide(currentIndex);
    startAutoSlide();

    return () => {
      if (sliderInterval.current) clearInterval(sliderInterval.current);
    };
  }, [currentIndex]);

  return (
    <div className="overflow-hidden relative w-full h-96 lg:h-[800px]">
      {/* Progress Bar */}
      <div
        className="hidden h-1 absolute bottom-0 left-0 bg-gray-500 w-full z-10"
        ref={progressBarRef}
      ></div>

      {/* Slider Content */}
      <ul
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          width: `${100}%`,
        }}
      >
        {data.map((slider, index) => (
          <li key={index} className="flex-none w-full h-96 lg:h-[800px] relative">
            {/* Slide Image */}
            <img
              src={slider.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 lg:h-[800px] object-cover"
            />
            {/* Overlay with Title and Subtitle */}
            <div className="absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center bg-black/50 text-white z-20">
              <h2 className="text-4xl font-bold text-center">{slider.title}</h2>
              {slider.description && <p className="text-lg mt-4 text-center">{slider.description}</p>}
            </div>
          </li>
        ))}
      </ul>

      {/* Navigation Dots */}
      <div className="absolute left-0 bottom-8 w-full flex justify-center space-x-3 z-10">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              stopAutoSlide();
              moveToSlide(index);
            }}
            className={`block h-3 w-3 rounded-full border-2 ${
              index === currentIndex ? "bg-gray-700 border-gray-500" : "bg-white border-neutral-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Modal;
