import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import myImage from "../../assets/images/6aedb0f7fd91444306aedde679c72011.png";

function ThirdBlock() {
  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 relative">
      {/* Background Image */}
      <motion.img 
        src={myImage} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      {/* Content Blocks */}
      <div className="relative z-10 w-full max-w-lg bg-white p-6 rounded-xl shadow-lg text-gray-900 text-center">
        <p className="text-5xl font-bold text-green-600">3x</p>
        <p className="text-xl font-medium">ESG high performers deliver a higher total shareholder return</p>
      </div>
      <div className="relative z-10 w-full max-w-lg bg-gray-800 p-6 rounded-xl shadow-lg mt-6 text-white text-center">
        <p className="text-5xl font-bold">98%</p>
        <p className="text-xl">Of CEOs agree sustainability is their responsibility</p>
      </div>
      <div className="relative z-10 w-full max-w-lg bg-gray-700 p-6 rounded-xl shadow-lg mt-6 text-white text-center">
        <p className="text-4xl font-bold">18%</p>
        <p className="text-lg">Of companies are cutting emissions fast enough to reach net zero by 2050</p>
      </div>
    </motion.div>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f5f5f8]">
      <div className="min-h-screen flex flex-col pb-10">
        {isMobile ? <ThirdBlock /> : <SecondBlock />}
      </div>
    </div>
  );
}

export default App;
