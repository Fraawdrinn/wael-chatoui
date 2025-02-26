import AnimatedContainer from "@/components/ui/animated-container";
import DevToolsCarousel from "@/components/dev-tools-carousel";

const Skills = () => {
  return (
    <div>
      <AnimatedContainer>
          <h1 id="about-me" className="main-title">
            Mes Compétences
          </h1>
          <p className="w-[52vw] text-center pl-12 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, reprehenderit aut perspiciatis, nesciunt illo officia quos veniam amet ut, aliquid alias. Assumenda dolores aliquid beatae sequi odit, repellat omnis nesciunt!
          </p>
          <DevToolsCarousel />
      </AnimatedContainer>
    </div>
  )
};

export default Skills;