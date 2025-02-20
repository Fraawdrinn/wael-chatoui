import { motion } from "framer-motion";
import React, { ReactNode } from "react";


interface AnimatedContainerProps {
  children: ReactNode;
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

export default AnimatedContainer;