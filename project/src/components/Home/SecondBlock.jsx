import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import myImage from "../../assets/images/6aedb0f7fd91444306aedde679c72011.png";

function SecondBlock() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-100px 0px" });

    const [shrinkOffset, setShrinkOffset] = useState(0);
    const originalWidth = 1440; // Set to your original full-screen width
    const baseMargin = 40; // Base margin between elements

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const shrinkAmount = Math.max(0, originalWidth - screenWidth);
            setShrinkOffset(shrinkAmount * 0.5);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Run once at mount

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const dynamicMarginBottom = `${Math.max(20, baseMargin - shrinkOffset * 0.05)}px`;

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            ref={sectionRef}
            className="min-h-screen overflow-hidden relative bg-transparent"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
        > 
            <motion.img 
                src={myImage} 
                alt="Background" 
                className="w-[650px] mb-[10px] h-[850px] absolute top-[-120px] mt-25 ml-6 z-[10] object-cover"
                variants={{
                    hidden: { x: -200, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                    exit: { x: -300, opacity: 0, transition: { duration: 3} }
                }}
            />

            <div className="relative flex flex-col">
                <motion.div 
                    style={{ left: `${806 - shrinkOffset * 1.64}px`, marginBottom: dynamicMarginBottom }}
                    className="w-[386px] bg-[#28b30e] p-[10.99px_14.65px] gap-[10.07px] h-[206.05px] absolute top-[30.73px] left-[757px] rounded-[11.91px] z-[30]"
                    variants={fadeInUp}
                >
                    <p className="font-bold text-[87.92px] leading-[100%] uppercase">3x</p>
                    <p className="tophead5 font-normal text-[35.31px] text-[#2D2D2D] leading-[100%] capitalize pt-[10px]">
                        ESG high performers deliver a higher total shareholder return
                    </p>
                </motion.div>

                <motion.div 
                    style={{ left: `${506 - shrinkOffset * 1.1}px`, marginBottom: dynamicMarginBottom }}
                    className={`w-[492px] mb-[10px] mb-${5} h-[173.53px] absolute top-[calc(130.73px+100px-5px)] left-[506px] rounded-[11.24px] bg-[#3A3A3A] p-[9.51px_13.83px] gap-[9.51px] text-white shadow-md z-[20] -mt-[5px]`}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    <p className="font-bold text-[87.92px] leading-[100%] uppercase">98%</p>
                    <p className="tophead5 font-normal text-[31.13px] text-[#E2E2E2] leading-[100%] capitalize">
                        Of CEOs agree sustainability is their responsibility
                    </p>
                </motion.div>

                <motion.div 
                    style={{ left: `${857 - shrinkOffset * 1.76}px`, marginBottom: dynamicMarginBottom }}
                    className="w-[380.02px] h-[186.12px] mt-3 absolute left-[857px] top-[calc(30.73px+180px+170px-10px)] rounded-[12.85px] bg-[#2D2D2D] p-[8.84px_12.85px] gap-[10.44px] text-white flex flex-col justify-between z-[11] -mt-[10px]"
                    variants={fadeInUp}
                    transition={{ delay: 0.4 }}
                >
                    <p className="font-bold text-[51.42px] leading-[100%] uppercase self-end">18%</p>
                    <p className="tophead5 font-normal text-[31.13px] text-[#E2E2E2] leading-[100%] text-right self-end capitalize">
                        Of companies are cutting emissions fast enough to reach net zero by 2050
                    </p>
                </motion.div>

               <motion.div 
                    style={{ left: `${475 - shrinkOffset}px`, marginBottom: dynamicMarginBottom }}
                    className={`mt-${6} w-[446px] h-[181px]  absolute  top-[calc(130.73px+400px-5px)] left-[475px] rounded-[10px] bg-white z-[10] -mt-[10px] p-[11px_22px] gap-[11px]`}
                    variants={fadeInUp}
                    transition={{ delay: 0.6 }}
                >
                   <div>
                   <p className="font-bold text-[#28B30E] text-[51.42px] leading-[100%] uppercase">37%</p>
                    <p className="tophead5 font-normal text-[#28B30E] text-[31.13px] pt-5 leading-[100%] capitalize">
                        Of the world's largest companies have a public net zero target.<br/> Nearly all are off track.
                    </p>
                   </div>
                </motion.div>
               
            </div>
        </motion.div>
    );
}

export default SecondBlock;
