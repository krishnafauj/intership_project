import React from 'react';
import myImage from '../../assets/images/6aedb0f7fd91444306aedde679c72011.png'; 

function SecondBlock() {
    return (
        <div className="min-h-screen relative bg-transparent"> {/* Set bg to transparent */}
            
            {/* Background Image - Inside the div but positioned absolutely */}
            <img 
                src={myImage} 
                alt="Background" 
                className="w-[818px] h-[996px] absolute top-[-47px] left-[26px] z-[1] object-cover"
            />

            <div className="relative">
                {/* First Div - Highest on Top */}
                <div className="w-[446px] bg-[#28b30e] h-[246.05px] absolute top-[130.73px] left-[857px] 
                    rounded-[11.91px] p-[10.99px_14.65px] gap-[10.07px] shadow-md z-[30]">
                    <p className="font-[Aeonik TRIAL] font-bold text-[87.92px] leading-[100%] tracking-[1%] uppercase">
                        3x
                    </p>
                    <p className="font-[DM Sans] font-normal text-[29.31px] leading-[100%] tracking-[1%] capitalize">
                        ESG high performers deliver a higher total shareholder return
                    </p>
                </div>

                {/* Second Div - Below First */}
                <div className="w-[492px] h-[173.53px] absolute top-[calc(130.73px+220px-5px)] left-[596px] 
                    rounded-[11.24px] p-[9.51px_13.83px] gap-[9.51px] bg-[#3A3A3A] shadow-md z-[20] -mt-[5px]">
                    <p className="font-[Aeonik TRIAL] text-white font-bold text-[87.92px] leading-[100%] tracking-[1%] uppercase">
                        98%
                    </p>
                    <p className="font-[DM Sans] font-normal text-[31.13px] text-[#E2E2E2] leading-[100%] tracking-[1%] capitalize">
                        Of CEOs agree sustainability is their responsibility
                    </p>
                </div>

                {/* Third Div - Below Second */}
                <div className="w-[380.02px] h-[186.12px] absolute left-[857px] top-[calc(130.73px+220px+170px-10px)] 
                    rounded-[12.85px] bg-[#3A3A3A] p-[8.84px_12.85px] gap-[10.44px] shadow-md flex flex-col justify-between z-[10] -mt-[10px]">

                    <p className="font-[Aeonik TRIAL] text-white font-bold text-[51.42px] leading-[100%] tracking-[1%] uppercase self-end">
                        18%
                    </p>
                    <p className="font-[DM Sans] font-normal text-[31.13px] text-[#E2E2E2] leading-[100%] tracking-[1%] text-right self-end capitalize">
                        Of companies are cutting emissions fast enough to reach net zero by 2050
                    </p>

                </div>

                {/* Fourth Div - Below Third */}
                <div className="w-[446px] h-[181px] absolute top-[calc(130.73px+220px+170px+180px-10px)] 
                    left-[559px] rounded-[10px] p-[11px_16px] gap-[11px] bg-white shadow-md  z-[1] -mt-[10px]">
                    <p className="font-[Aeonik TRIAL] text-[#28B30E] font-bold text-[51.42px] leading-[100%] tracking-[1%] uppercase">
                        37%
                    </p>
                    <p className="font-[DM Sans] font-normal text-[#28B30E] text-[31.13px] w-full text-[#3A3A3A] leading-[100%] tracking-[1%] capitalize">
                        Of the world's largest companies have a public net zero target. Nearly all are off track.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default SecondBlock;
