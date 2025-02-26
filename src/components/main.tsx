"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import fonts from '@/app/font';

import NavButton from "@/components/ui/nav-button";
import AboutMe from '@/app/(chapters)/about-me';
import Projects from '@/app/(chapters)/projects';
import Skills from '@/app/(chapters)/skills';

const pages = [
  { name: "À propos de moi", component: <AboutMe /> },
  { name: "Mes projets", component: <Projects /> },
  { name: "Mes compétences", component: <Skills /> },
];

const Aside: React.FC<{ handleButtonClick: (component: string) => void }> = ({ handleButtonClick }) => {
  return (
    <nav className='hidden w-0 top-0 md:block md:w-[25vw]'>
      <div className="buttons-container top-[5vh] sticky">
        {pages.map((page) => (
          <NavButton
            key={page.name}
            title={page.name}
            clickHandler={() => handleButtonClick(page.name)}
          />
        ))}
      </div>
    </nav>
  );
};

const Main: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const logoSize = 75;

  // Function to map string to component
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'À propos de moi':
        return <AboutMe />;
      case 'Mes projets':
        return <Projects />;
      case 'Mes compétences':
        return <Skills />;
      default:
        return <AboutMe />; // Default to AboutMe if nothing is selected
    }
  };

  const handleButtonClick = (component: string) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <div className='fixed z-50 top-0 bg-gradient-to-b from-[#adaaa2] to-transparent w-screen flex justify-between pointer-events-none'>
        <Image 
            src="/WaelLogo.png"
            alt="Logo" 
            width={logoSize}
            height={logoSize}
            className='cursor-pointer p-2'
          />
          <div className="md:hidden absolute right-0 py-[-50%] translate-y-[40%] p-2 pointer-events-auto">
            <input type="checkbox" role="button" aria-label="Display the menu" className="menu" 
            onClick={() => setIsOpen(!isOpen)}/>
          </div>
      </div>

      <main className={`${fonts.inter.className} flex min-h-[100vh]`}>
      <Aside handleButtonClick={handleButtonClick} />
      <div className='w-screen md:w-[75vw] text-lg shadow-lg shadow-gray-500/50 py-12 pt-16 px-8'>
        {renderSelectedComponent()}
      </div>
    </main>
    </>
  );
};

export default Main;
