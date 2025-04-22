"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const devTools = [
  { name: "React", description: "Bibliothèque JS pour les interfaces web.", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "HTML", description: "Langage de balisage natif pour le développement web.", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", description: "Langage de style natif, complémentaire au HTML.", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "TypeScript", description: "Superset de JavaScript avec typage.", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Next JS", description: "Framework React pour le SSR et SSG.", level: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node JS", description: "Exécute du JS côté serveur.", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", description: "Langage polyvalent utilisé pour l'IA, le web et l'automatisation.", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C", description: "Langage de programmation bas niveau performant et utilisé en systèmes embarqués.", level: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "Git", description: "Système de contrôle de version distribué.", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Bash", description: "Shell Unix puissant pour l'automatisation des tâches et le contrôle système.", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
  { name: "Tailwind CSS", description: "Framework CSS utilitaire pour un design rapide et flexible.", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "SQL", description: "Langage de requête pour interagir avec des bases de données relationnelles, optimisation des performances et gestion avancée des données.", level: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", description: "Base de données relationnelle open-source robuste, idéale pour les applications complexes nécessitant de la scalabilité et des performances optimisées.", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", description: "Plateforme open-source qui fournit des API RESTful et une gestion de base de données PostgreSQL en temps réel, idéale pour les applications modernes.", level: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Prisma", description: "ORM moderne et type-safe pour Node.js, optimisé pour interagir avec des bases de données relationnelles comme PostgreSQL, MySQL, etc.", level: 2  , icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
];


export default function DevToolsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const indicatorRef = useRef<HTMLImageElement>(null);
  const toolIconSize = 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(false), 3000);
        }
      },
      { threshold: 1 }
    );

    if (indicatorRef.current) {
      observer.observe(indicatorRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full p-6">
      {/* Swipe Indicator (Hidden after 3s) */}
      {isVisible && (
        <div className="flex justify-center">
          <img
            ref={indicatorRef}
            width={64}
            height={64}
            src="/image.png"
            alt="swipe indicator"
            className="transition-opacity duration-500"
          />
        </div>
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        loop={false}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-lg"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {devTools.map((tool) => (
          <SwiperSlide key={tool.name} className="flex justify-center">
            <div className="w-full flex flex-col items-center p-6 rounded-xl h-64 mt-6 bg-white">
              <span className="text-2xl">
                <img width={toolIconSize} height={toolIconSize} src={tool.icon} alt={tool.name} />
              </span>
              <span className="mt-3 text-xl font-bold">{tool.name}</span>
              <span className="">{tool.level}/5</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Affichage dynamique du texte du slide actif */}
      <motion.div
        key={devTools[activeIndex].name}
        className="relative bottom-2 p-4 rounded-lg shadow-xl bg-white"
        initial={{ opacity: 0.5, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold">{devTools[activeIndex].name}</h3>
        <p className="mt-2">{devTools[activeIndex].description}</p>
      </motion.div>
    </div>
  );
}
