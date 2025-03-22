import React from 'react';

function Topblock() {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      {/* Features Button */}
      <div className="bingo flex justify-center items-center   mt-6 md:mt-10">
  <h1 className="tophead font-bold text-base w-[216px] md:text-lg lg:text-2xl bg-white py-[10px] rounded-full px-[35px] text-[#239c0c] text-center ">
    FEATURES
  </h1>
</div>


      {/* Heading */}
      <div className="flex justify-center items-center">
        <h5 className="bingo4 text-[#2D2D2D] font-bold px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-16 lg:mb-20">
          Why Carbon Crunch?
        </h5>
      </div>
    </div>
  );
}

export default Topblock;
