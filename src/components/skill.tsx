import React, { ReactNode } from "react";

interface SkillProps {
  element: ReactNode; // Allows any JSX inside the component
}

const Skill: React.FC<SkillProps> = ({ element }) => {
  return (
    <section>
      {element}
    </section>
  );
};

export default Skill;
