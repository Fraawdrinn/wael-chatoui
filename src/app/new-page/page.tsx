"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 mt-2 w-48 bg-gray-800 text-white p-4 rounded-md shadow-lg"
        >
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-gray-300">Home</a></li>
            <li><a href="#" className="block hover:text-gray-300">About</a></li>
            <li><a href="#" className="block hover:text-gray-300">Services</a></li>
            <li><a href="#" className="block hover:text-gray-300">Contact</a></li>
          </ul>
        </motion.nav>
      )}
    </div>
  );
}
