"use client";
import React, { useState, useEffect } from "react";

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["Build.", "Optimize.", "Scale."];
  const gradients = [
    "from-blue-500 via-green-500 to-yellow-500",
    "from-blue-300 via-teal-300 to-blue-400",
    "from-yellow-200 via-green-200 to-orange-500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div>
      <h1 className="flex flex-col lg:flex-row justify-center items-center font-extrabold text-7xl md:text-8xl lg:text-[80px] xl:text-8xl">
        {words.map((word, index) => (
          <span key={index}>
            {index === currentIndex ? (
              <span
                className={`bg-clip-text text-transparent transition-all ease-out   bg-300% animate-gradient bg-gradient-to-r ${gradients[currentIndex]}`}
              >
                {word}
              </span>
            ) : (
              <span className="text-black dark:text-white">{word}</span>
            )}
            {index < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
