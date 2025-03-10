import AnimatedContainer from "@/components/ui/animated-container";
import DevToolsCarousel from "@/components/dev-tools-carousel";

const Skills = () => {
  return (
    <div>
      <AnimatedContainer>
          <h1 id="about-me" className="main-title">
            Mes Compétences
          </h1>
          <p className="w-full text-center pl-12 leading-relaxed">
            Une liste des outils dev que je maîtrise, ainsi qu&apos;une liste de projets montrant la pratique derrière: 
          </p>
          <DevToolsCarousel />
      </AnimatedContainer>
    </div>
  )
};

export default Skills;