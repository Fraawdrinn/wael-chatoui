"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import createIntersectionObserver from "@/scripts/observer";

const fromLeftObserver = createIntersectionObserver("left-show");
const fromLeftDisplay = document.querySelector(".from-left")

const Content:React.FC = () => {

  return (
    <div className="h-full w-[75vw] shadow-lg shadow-gray-500/50 py-12 pt-16 px-8">
      <article 
      className="">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // Trigger once when 20% visible
          className=""
        >
          <h1 id='about-me' className='chapter ubuntu-regular underline text-2xl font-bold pb-6'>
            À propos de moi
          </h1>
          <p className="w-[52vw] text-center pl-12 leading-6">
            Étudiant curieux et motivé, amateur de développement web et programmation. <br />
            J'ai comme projet d’étude d’intégrer une école d’ingénieur en filière informatique (application et intelligence artificelle) 
          </p>
        </motion.div>
      </article>
    </div>
  );
}

export default Content;