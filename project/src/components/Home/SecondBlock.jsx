import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import myImage from "../../assets/images/6aedb0f7fd91444306aedde679c72011.png";

function SecondBlock() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-100px 0px" });

    // Variants for animation (enter & exit)
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            ref={sectionRef}
            className="min-h-screen relative bg-transparent"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
        > 
            {/* Background Image - Slides in/out */}
            <motion.img 
                src={myImage} 
                alt="Background" 
                className="w-[650px] h-[850px] absolute top-[-120px] mt-10 ml-6 z-[10] object-cover"
                variants={{
                    hidden: { x: -200, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                    exit: { x: -300, opacity: 0, transition: { duration: 3} }
                }}
            />

            <div className="relative">
                {/* First Div */}
                <motion.div 
                    className="w-[386px] bg-[#28b30e] h-[206.05px] absolute top-[30.73px] left-[757px] 
                        rounded-[11.91px] p-[10.99px_14.65px] gap-[10.07px]  z-[30]"
                    variants={fadeInUp}
                >
                    <p className="font-[Aeonik TRIAL] font-bold text-[87.92px] leading-[100%] tracking-[1%] uppercase">
                        3x
                    </p>
                    <p className="tophead5 font-normal text-[35.31px] text-[#2D2D2D] leading-[100%] tracking-[1%] pt-[10px] capitalize">
                        ESG high performers deliver a higher total shareholder return
                    </p>
                </motion.div>

                {/* Second Div */}
                <motion.div 
                    className="w-[492px] h-[173.53px] absolute top-[calc(130.73px+100px-5px)] left-[506px] 
                        rounded-[11.24px] p-[9.51px_13.83px] gap-[9.51px] bg-[#3A3A3A] shadow md z-[20] -mt-[5px]"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    <p className="font-[Aeonik TRIAL] text-white font-bold text-[87.92px] leading-[100%] tracking-[1%] uppercase">
                        98%
                    </p>
                    <p className="tophead5 font-normal text-[31.13px] text-[#E2E2E2] leading-[100%] tracking-[1%] capitalize">
                        Of CEOs agree sustainability is their responsibility
                    </p>
                </motion.div>

                {/* Third Div */}
                <motion.div 
                    className="w-[380.02px] h-[186.12px] absolute left-[857px] top-[calc(30.73px+180px+170px-10px)] 
                        rounded-[12.85px] bg-[#2D2D2D] p-[8.84px_12.85px] gap-[10.44px] flex flex-col justify-between z-[11] -mt-[10px]"
                    variants={fadeInUp}
                    transition={{ delay: 0.4 }}
                >
                    <p className="font-[Aeonik TRIAL] text-white font-bold text-[51.42px] leading-[100%] tracking-[1%] uppercase self-end">
                        18%
                    </p>
                    <p className="tophead5 font-normal text-[31.13px] text-[#E2E2E2] mt-[-10px] pt-[-10px] leading-[100%] tracking-[1%] text-right self-end capitalize">
                        Of companies are cutting emissions fast enough to reach net zero by 2050
                    </p>
                </motion.div>

                {/* Fourth Div */}
                <motion.div 
                    className="tophead5 text-[25.71px] w-[446px] h-[181px] absolute top-[calc(130.73px+400px-5px)]  
                        left-[475px] rounded-[10px] p-[11px_16px] gap-[11px] bg-white -mt-[10px] z-[10]"
                    variants={fadeInUp}
                    transition={{ delay: 0.6 }}
                >
                    <p className="font-[Aeonik TRIAL] text-[#28B30E] font-bold text-[51.42px] leading-[100%] tracking-[1%] uppercase">
                        37%
                    </p>
                    <p className="tophead5 font-normal l-[250px] text-[#28B30E] text-[31.13px] w-full  pt-5 leading-[100%] tracking-[1%] capitalize">
                        Of the world's largest companies have a public net zero target.<br/> Nearly all are off track.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SecondBlock;
