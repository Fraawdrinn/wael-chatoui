"use client"

import Link from 'next/link';

import AnimatedContainer from "@/components/ui/animated-container";

export default function AboutMe() {

  return (
    <>
      <article 
      className="">
        <AnimatedContainer>
          <h1 id="about-me" className="main-title">
            À propos de moi
          </h1>
          <p>
            Étudiant curieux et motivé, amateur de développement web et programmation. <br />

          </p>
          <h2 className="main-subtitle">Par le passé</h2>
          <p>
            En tant que développeur je n&apos;ai aucune expérience (j&apos;ai 18 ans 😆). <br /> Cependant, mon&nbsp;
            <Link href={"https://github.com/Fraawdrinn"} target='_BLANK' className='link'>Github</Link> ou mes projets
            sauront satisfaire votre curiosité.
          </p>
          <h2 className="main-subtitle">Actuellement</h2>
          <p>
            Étudiant en première année de bachelor chez Sup de Vinci Bordeaux !
            <br /> <br />
            J&apos;aime aussi apprendre en autodidacte lorsque j&apos;ai le temps.
            Par exemple, j&apos;apprends React JS ⚛️ à l&apos;aide par exemple de leur documentation,
            puis je m&apos;exerce à travers des projets tels que ce site web.
          </p>
          <h2 className="main-subtitle">Dans le futur</h2>
          <p>
            Je suis assez indécis concernant le domaine de l&apos;informatique que je dois choisir. 
            J&apos;ai eu comme projet d&apos;étude d’intégrer une école d’ingénieur en filière informatique&nbsp; 
            <span className='mark'>(App&nbsp;&&nbsp;IA)</span>.
            Cependant, la pendule penche plus du côté <span className='mark'>Software&nbsp;Enineering</span> en ce moment.
            Ce sont principalement les deux domaines qui m&apos;attirent le plus, en supplément du web que j&apos;apprends
            en autodidacte
          </p>
        </AnimatedContainer>
      </article>
    </>
  );
}