"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const devTools = [
  { name: "React", description: "Bibliothèque JS pour les interfaces web.", icon: "⚛️" },
  { name: "Node.js", description: "Exécute du JS côté serveur.", icon: "🌱" },
  { name: "Python", description: "Langage polyvalent pour l'IA et le web.", icon: "🐍" },
  { name: "C", description: "Langage bas niveau performant.", icon: "🔵" },
  { name: "Git", description: "Système de contrôle de version.", icon: "🔗" },
  { name: "Tailwind CSS", description: "Framework CSS rapide et flexible.", icon: "🎨" },
  { name: "PostgreSQL", description: "Base de données relationnelle.", icon: "🐘" },
];

export default function DevToolsSwiper() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Outils de Développement</h2>
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
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg text-white rounded-xl shadow-xl hover:bg-white/20 transition duration-300 w-64 h-64"
            >
              <span className="text-5xl">{tool.icon}</span>
              <span className="mt-3 text-xl font-bold">{tool.name}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
