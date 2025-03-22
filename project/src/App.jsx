import React, { useEffect } from 'react';
import Blocks from './components/Home/Blocks';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import Topblock from './components/Home/Topblock';
import SecondBlock from './components/Home/SecondBlock';
import './App.css';
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust smoothness speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-[#f5f5f8]">
      {/* Top Section */}
      <div className="min-h-screen flex flex-col  pb-10">
        <Topblock />
        <Blocks />
      </div>

      {/* Second Section */}
      <div className="w-full max-w-[1440px] mx-auto mt-20 md:mt-40 px-4 sm:px-8">
        <SecondBlock />
      </div>

      {/* Empty Div - Can be used for footer later */}
      <div className="pt-100"></div>
    </div>
  );
}

export default App;
