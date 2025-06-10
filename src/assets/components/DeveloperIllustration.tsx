// components/DeveloperIllustration.tsx
import React from "react";
import { motion } from "framer-motion";

const DeveloperIllustration: React.FC = () => {
  return (
    <motion.div
      className="w-72 h-72 md:w-96 md:h-96"
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        className="w-full h-full"
        fill="none"
      >
        <circle cx="150" cy="150" r="140" fill="#1f2937" stroke="#10B981" strokeWidth="4" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#10B981"
          fontSize="20"
          fontFamily="monospace"
          dy=".3em"
        >
          &lt;coder/&gt;
        </text>
      </svg>
    </motion.div>
  );
};

export default DeveloperIllustration;
