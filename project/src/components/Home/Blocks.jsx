import React from 'react'

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
]

function Blocks() {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4 w-[1320px]  h-[659px] p-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="border p-4 h-[321.5px] border-none rounded-[12px] shadow-md  bg-white"
                    >
                        <h3 className="bingo4 text-[#28B30E] font-bold text-2xl">{item.title}</h3>
                        <p className="bingo1 text-[#2D2D2D] font-sans text-base">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Blocks;
