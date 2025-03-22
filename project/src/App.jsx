import React, { useEffect, useState } from 'react';
import Blocks from './components/Home/Blocks';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import Topblock from './components/Home/Topblock';
import SecondBlock from './components/Home/SecondBlock';
import ThirdBlock from './components/Home/ThirdBlock';
import './App.css';
import Lenis from "@studio-freight/lenis";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1300);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f5f5f8]">
      {/* Top Section */}
      <div className="min-h-screen flex flex-col  pb-10">
        <Topblock />
        <Blocks />
      </div>

      {/* Conditional Rendering for Blocks */}
      <div className="w-full max-w-[1440px] mx-auto mt-20 md:mt-40 px-4 sm:px-8">
        {isMobile ? <ThirdBlock /> : <SecondBlock />}
      </div>

      {/* Empty Div - Can be used for footer later */}
      <div className="pt-100"></div>
    </div>
  );
}

export default App;
