import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import myImage from "../../assets/images/6aedb0f7fd91444306aedde679c72011.png";

function SecondBlock() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-100px 0px" });

    const [shrinkOffset, setShrinkOffset] = useState(0);
    const originalWidth = 1440; // Set to your original full-screen width

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const shrinkAmount = Math.max(0, originalWidth - screenWidth);
            setShrinkOffset(shrinkAmount * 0.5); // Reduce proportionally
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Run once at mount

        return () => window.removeEventListener("resize", handleResize);
    }, []);

  
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
            {/* Background Image */}
            <motion.img 
                src={myImage} 
                alt="Background" 
                className="w-[650px] h-[850px] absolute top-[-120px] left-6 z-[10] object-cover"
                variants={{
                    hidden: { x: -200, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                    exit: { x: -300, opacity: 0, transition: { duration: 3 } }
                }}
            />

            <div className="relative">
                
                {/* First Div */}
                <motion.div 
                    style={{ left: `${306 - shrinkOffset*1}px` }}  // Adjust left proportionally
                    className="absolute top-[30.73px] bg-[#28b30e] rounded-[11.91px] z-[30] 
                        w-[386px] h-[206px] p-[10px] md:p-[15px] sm:p-[20px] transition-all duration-300"
                    variants={fadeInUp}
                >
                    <p className="font-bold text-[87px] leading-[100%] uppercase">
                        3x
                    </p>
                    <p className="text-[35px] text-[#2D2D2D] leading-[100%] pt-[10px] capitalize">
                        ESG high performers deliver a higher total shareholder return
                    </p>
                </motion.div>

                {/* Second Div */}
                <motion.div 
                    style={{ left: `${506 - shrinkOffset*1.1}px` }} // Adjust left proportionally
                    className="absolute top-[calc(130.73px+100px-5px)] bg-[#3A3A3A] text-white rounded-[11px] z-[20] 
                        w-[492px] h-[173px] p-[10px] md:p-[15px] sm:p-[20px] transition-all duration-300"
                    variants={fadeInUp}
                >
                    <p className="font-bold text-[87px] leading-[100%] uppercase">
                        98%
                    </p>
                    <p className="text-[31px] text-[#E2E2E2] leading-[100%] capitalize">
                        Of CEOs agree sustainability is their responsibility
                    </p>
                </motion.div>

                {/* Third Div */}
                <motion.div 
                    style={{ left: `${857 - shrinkOffset*1.76}px` }} // Adjust left proportionally
                    className="absolute top-[calc(30.73px+180px+170px-10px)] bg-[#2D2D2D] text-white rounded-[12.85px] z-[11] 
                        w-[380px] h-[186px] p-[10px] md:p-[15px] sm:p-[20px] transition-all duration-300"
                    variants={fadeInUp}
                >
                    <p className="font-bold text-[51px] leading-[100%] uppercase self-end">
                        18%
                    </p>
                    <p className="text-[31px] text-[#E2E2E2] leading-[100%] text-right self-end capitalize">
                        Of companies are cutting emissions fast enough to reach net zero by 2050
                    </p>
                </motion.div>

                {/* Fourth Div */}
                <motion.div 
                    style={{ left: `${475 - shrinkOffset}px` }} // Adjust left proportionally
                    className="absolute top-[calc(130.73px+400px-5px)] bg-white rounded-[10px] z-[10] 
                        w-[446px] h-[181px] p-[10px] md:p-[15px] sm:p-[20px] transition-all duration-300"
                    variants={fadeInUp}
                >
                    <p className="font-bold text-[#28B30E] text-[51px] leading-[100%] uppercase">
                        37%
                    </p>
                    <p className="text-[31px] text-[#28B30E] leading-[100%] capitalize">
                        Of the world's largest companies have a public net zero target. Nearly all are off track.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SecondBlock;
