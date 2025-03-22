import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Topblock() {
  const { scrollYProgress } = useScroll();

  // Move elements up as user scrolls down
  const moveUp = useTransform(scrollYProgress, [0, 0.3], ["0px", "-100px"]); // Moves up 100px smoothly

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Features Button */}
      <motion.div
        style={{ y: moveUp }} // Apply smooth upward motion
        className="bingo flex justify-center items-center mt-6 md:mt-10"
      >
        <h1 className="tophead font-bold text-base w-[216px] md:text-lg lg:text-2xl bg-white py-[10px] rounded-full px-[35px] text-[#239c0c] text-center">
          FEATURES
        </h1>
      </motion.div>

      {/* Heading */}
      <motion.div style={{ y: moveUp }} className="flex justify-center items-center">
        <h5 className="tophead3 bingo4 text-[#2D2D2D] font-bold px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-16 lg:mb-20">
          Why Carbon Crunch?
        </h5>
      </motion.div>
    </div>
  );
}

export default Topblock;
