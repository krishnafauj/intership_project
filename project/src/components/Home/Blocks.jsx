import React from 'react';
import myImage2 from './image.png';
const data = [
    {
        "title": "Automated Data Collection",
        "description": "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting."
    },
    {
        "title": "Monitoring & Reporting",
        "description": "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
    },
    {
        "title": "Monitoring & Reporting",
        "description": "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
    },
    {
        "title": "Simplified Certification Process",
        "description": "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance."
    },
    {
        "title": "AI-Driven Insights",
        "description": "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
    },
    {
        "title": "AI-Driven Insights",
        "description": "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
    }
];

function Blocks() {
    return (
        <div className="flex justify-center items-center px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1320px] w-full">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="border p-6 min-h-[280px] sm:min-h-[300px] lg:min-h-[321px] 
                        border-none rounded-[12px] bg-white  transition-all duration-300 ease-in-out"
                    >
                        <p className='p-2  bg-[#D1EFCC] w-[60px] h-[60px] rounded-[23px]'>
                            <img 
                                            src={myImage2} 
                                            alt="Background" 
                                            className="w-[56px] h-[45px] "
                                        />
                        </p>
                        <h3 className="text-[#28B30E] leading-tight font-bold my-5 text-lg sm:text-xl lg:text-2xl">{item.title}</h3>
                        <p className="tophead2 text-[#2D2D2D] leading-tight font-sans text-sm sm:text-base lg:text-lg">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blocks;
