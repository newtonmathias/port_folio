"use client";
import React, { useState, useEffect } from "react";

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["Craft.", "Enhance.", "Perfect."];
  const gradients = [
    "from-pink-500 via-red-500 to-yellow-500",
    "from-pink-300 via-purple-300 to-indigo-400",
    "from-yellow-200 via-green-200 to-green-500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="flex flex-col md:flex-row justify-center items-center font-extrabold text-7xl md:text-8xl">
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
