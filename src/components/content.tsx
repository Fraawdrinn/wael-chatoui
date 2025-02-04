"use client"

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
}

interface ContentProps {
  className?: string;
}

const Content:React.FC<ContentProps> = ({ className="" }) => {

  return (
    <div className={`${className} h-full text-lg shadow-lg shadow-gray-500/50 py-12 pt-16 px-8`}>
      <article 
      className="">
        <AnimatedContainer>
          <h1 id="about-me" className="chapter ubuntu-regular underline text-2xl font-bold pb-6">
            À propos de moi
          </h1>
          <p className="w-[52vw] text-center pl-12 leading-relaxed">
            Étudiant curieux et motivé, amateur de développement web et programmation. <br />
            J&apos;ai comme projet d&apos;étude d’intégrer une école d’ingénieur en filière informatique 
            (application et intelligence artificielle).
          </p>
        </AnimatedContainer>
      </article>
    </div>
  );
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default Content;