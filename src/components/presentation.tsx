"use client";

import React, { useState } from "react";
import Link from "next/link";

const Presentation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="h-screen">
      <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-4xl radley-regular-italic text-center">Bonjour&nbsp;👋,</h2> <br />
        <h1 className="text-6xl text-[#9b4819] hover:cursor-pointer cabin-regular font-semibold text-center">
          <i>
            Je&nbsp;m'appelle&nbsp;
            <span
              className="hover:cursor-pointer cabin-regular font-semibold text-center transform transition-transform duration-300 ease-in-out hover:scale-110"
              onMouseEnter={() => setIsHovered(true)} // Trigger hover effect when hovered
              onMouseLeave={() => setIsHovered(false)} // Reset when hover ends
            >
              Wael
            </span>
            &nbsp;!
          </i>
        </h1>
        <AnimatedPath isHovered={isHovered} /> {/* Pass hover state to the path */}
      </div>
    </header>
  );
};

interface AnimatedPathProps {
  isHovered: boolean;
}

function AnimatedPath({ isHovered }: AnimatedPathProps) {
  return (
    <svg
      width="900"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30 50 450 100"
    >
      <path
        className={`path ${isHovered ? "hide" : ""}`} // Toggle visibility based on hover state
        d="M50,75 C100,50 200,100 250,75 C300,50 400,100 450,75"
        fill="none"
        stroke="black"
      />
    </svg>
  );
};

export default Presentation;
