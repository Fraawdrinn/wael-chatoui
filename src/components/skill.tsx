import React, { ReactNode } from "react";

interface SkillProps {
  element: ReactNode; 
}

const Skill: React.FC<SkillProps> = ({ element }) => {
  return (
    <section>
      {element}
    </section>
  );
};

export default Skill;
