import React from "react";
import { motion } from "framer-motion";

const veggies = [
  { emoji: "🥕", delay: 0 },
  { emoji: "🥬", delay: 0.2 },
  { emoji: "🧅", delay: 0.4 },
];

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#faf7f6] to-[#c7e7fb] z-[9999]">
      {/* --- Veggies dropping animation --- */}
      <div className="relative h-20 w-full flex justify-center mb-0">
        {veggies.map((veg, index) => (
          <motion.div
            key={index}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: veg.delay,
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            }}
            className="text-5xl absolute"
          >
            {veg.emoji}
          </motion.div>
        ))}
      </div>

      {/* --- Fregcy Styled Text Logo --- */}
      <motion.h1
        className="mt-4 text-[58px] sm:text-[70px] font-extrabold tracking-wide flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{
          delay: 0.8,
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[#14213d]">FRE</span>
        <span
          className="text-[#14213d] relative"
          style={{
            background: "linear-gradient(135deg, #f68c1f 45%, #00a8e8 55%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          G
        </span>
        <span className="text-[#14213d]">C</span>
        <span className="text-[#14213d]">Y</span>
      </motion.h1>

      {/* --- Subtle Loading Dots --- */}
      <motion.div
        className="flex space-x-1 mt-1 text-2xl text-[#588157]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
