import Link from 'next/link';

import AnimatedContainer from "@/components/ui/animated-container";

const Projects = () => {
  return (
    <div>
      <AnimatedContainer>
          <h1 id="about-me" className="main-title">
            Mes Projets
          </h1>
          <p className="w-[52vw] text-center pl-12 leading-relaxed">
            Ayez un aperçu général en regardant directement sur mon &nbsp;
            <Link href={"https://github.com/Fraawdrinn"} target='_BLANK' className='text-secondary underline'>Github</Link>
          </p>
      </AnimatedContainer>
    </div>
  )
};

export default Projects;