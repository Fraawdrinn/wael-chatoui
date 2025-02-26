"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Données des outils (ajoute ce que tu veux)
const devTools = [
  { name: "React", description: "Bibliothèque JS pour les interfaces web.", icon: "⚛️" },
  { name: "TypeScript", description: "Superset de JavaScript avec typage.", icon: "🟦" },
  { name: "Next.js", description: "Framework React pour le SSR et SSG.", icon: "⏭️" },
  { name: "Node.js", description: "Exécute du JS côté serveur.", icon: "🌱" },
  { name: "Python", description: "Langage polyvalent utilisé pour l'IA, le web et l'automatisation.", icon: "🐍" },
  { name: "C", description: "Langage de programmation bas niveau performant et utilisé en systèmes embarqués.", icon: "🔵" },
  { name: "Git", description: "Système de contrôle de version distribué.", icon: "🔗" },
  { name: "Tailwind CSS", description: "Framework CSS utilitaire pour un design rapide et flexible.", icon: "🎨" },
  { name: "PostgreSQL", description: "Base de données relationnelle avancée et open-source.", icon: "🐘" },
];


export default function DevToolsCarousel() {
  const [selectedTool, setSelectedTool] = useState(devTools[0]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Swiper pour afficher les outils */}
      <Swiper
        effect="fade"
        modules={[EffectFade, Navigation, Pagination]}
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        className="w-full max-w-lg"
      >
        {devTools.map((tool) => (
          <SwiperSlide key={tool.name} className="flex justify-center">
            <button
              onClick={() => setSelectedTool(tool)}
              className="flex flex-col content-center p-6 rounded-xl shadow-lg bg-white/10 hover:bg-white/20 transition duration-300 w-64 h-64 my-6 ml-28"
            >
              <span className="text-5xl">{tool.icon}</span>
              <span className="mt-3 text-xl font-bold">{tool.name}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Affichage de la description de l'outil sélectionné */}
      <motion.div
        key={selectedTool.name}
        className="my-12 p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold">{selectedTool.name}</h3>
        <p className="mt-2">{selectedTool.description}</p>
      </motion.div>
    </div>
  );
}
