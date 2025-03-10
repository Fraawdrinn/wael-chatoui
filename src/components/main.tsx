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

const Aside: React.FC<{ handleButtonClick: (component: string) => void; isOpen: boolean }> = ({ handleButtonClick, isOpen }) => {
  return (
    <nav className={`fixed md:static top-0 left-0 h-full w-[60vw] md:w-[25vw] bg-white md:bg-background 
      transform transition-transform duration-300 z-30 md:z-10
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
      <div className="mt-20 md:mt-0 sticky">
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

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'À propos de moi':
        return <AboutMe />;
      case 'Mes projets':
        return <Projects />;
      case 'Mes compétences':
        return <Skills />;
      default:
        return <AboutMe />;
    }
  };

  const handleButtonClick = (component: string) => {
    setSelectedComponent(component);
    setIsOpen(false);
  };

  return (
    <>
      {/* Barre de navigation supérieure */}
      <div className='fixed z-50 top-0 bg-gradient-to-b from-[#adaaa2] to-transparent w-screen flex justify-between pointer-events-none'>
        <Image 
            src="/WaelLogo.png"
            alt="Logo" 
            width={logoSize}
            height={logoSize}
            className='cursor-pointer p-2'
        />
        {/* Bouton menu burger pour le responsive */}
        <div className="md:hidden absolute right-0 translate-y-[40%] p-2 pointer-events-auto">
          <input 
            type="checkbox" 
            role="button" 
            aria-label="Display the menu" 
            className="menu cursor-pointer"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Contenu principal */}
      <main className={`${fonts.inter.className} flex min-h-[100vh]`}>
        {/* Sidebar (menu latéral) */}
        <Aside handleButtonClick={handleButtonClick} isOpen={isOpen} />

        {/* Contenu sélectionné */}
        <div className='w-screen md:w-[75vw] text-lg shadow-lg shadow-gray-500/50 py-12 pt-16 px-8 z-20'>
          {renderSelectedComponent()}
        </div>
      </main>
    </>
  );
};

export default Main;
