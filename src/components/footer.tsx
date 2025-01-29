import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#adaaa2] h-[30vh] w-screen py-4 px-6 text-center relative z-10 backdrop-blur-sm
    border-t-4 border-[#d0cebe]
    ">
        
      <p className="text-center">
        &copy; 2025 Wael CHATOUI. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
