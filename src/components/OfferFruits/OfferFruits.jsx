import React from 'react';
import bg from '../../assets/Bg.png';
import bgClip from '../../assets/bg-clip.png';
import bgClip1 from '../../assets/bg-clip-1.png';
import leaf from "../../assets/Group-1.png";
import frutis from "../../assets/fruits.png";
import group3 from "../../assets/Group 3.png";
import bgClip3 from "../../assets/bg-leaf-3.png";


const OfferFruits = () => {
    return (
       <section className='relative w-full h-[640px] overflow-hidden'>
            <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="">
                <img src={bgClip} alt="" className='absolute right-0' />
                <img src={bgClip1} alt="" className='absolute left-0 bottom-0' />
                <img src={bgClip3} alt="" className='absolute left-0 bottom-0' />
            </div>
            <div className="">
                <img src={leaf} alt="" className='absolute right-[22%] top-[8%] rotate-240' />
                <img src={leaf} alt="" className='absolute -right-16 bottom-5  rotate-360 w-40' />
            </div>
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="absolute top-25">
                    <div className="flex items-center justify-center md:justify-start">
                        <h2 className='bg-[#ecf0e6] px-2 py-1.5 rounded-md rubik-font font-semibold ml-4 w-fit'><span className='text-[#749b3f]'>Special Offer</span></h2>
                    </div>
                    <h1 className='text-[#212337] text-5xl  md:text-[80px] font-medium md:w-220 mt-5 rubik-font ml-4 md:text-left text-center'>Seasonal Fruit Bundle</h1>
                    <p className='text-[#212337] text-4xl  md:text-[48px] font-semibold mt-5 ml-4 md:text-left text-center'>Discount up to <span className='text-[#ff6a19]'>80% OFF</span></p>
                    <div className="flex items-center gap-6 mt-4 ml-4">
                        <div className="bg-white w-[70px] h-[100px] md:w-[98px] md:h-[122px] rounded-md rubik-font shadow">
                            <h1 className='text-4xl text-center pt-7 pb-2 font-semibold'>03</h1>
                            <p className='text-center text-sm'>Days</p>
                        </div>
                        <div className="bg-white w-[70px] h-[100px] md:w-[98px] md:h-[122px] rounded-md rubik-font shadow">
                            <h1 className='text-4xl text-center pt-7 pb-2 font-semibold'>18</h1>
                            <p className='text-center text-sm'>Hour</p>
                        </div>
                        <div className="bg-white w-[70px] h-[100px] md:w-[98px] md:h-[122px] rounded-md rubik-font shadow">
                            <h1 className='text-4xl text-center pt-7 pb-2 font-semibold'>54</h1>
                            <p className='text-center text-sm'>Min</p>
                        </div>
                        <div className="bg-white w-[70px] h-[100px] md:w-[98px] md:h-[122px] rounded-md rubik-fon shadow">
                            <h1 className='text-4xl text-center pt-7 pb-2 font-semibold'>21</h1>
                            <p className='text-center text-sm'>Second</p>
                        </div>
                    </div>
                    <div className="bg-[#176D38] px-6 py-2 w-fit ml-4 mt-6 rounded-full">
                        <h2 className='text-[32px] rubik-font font-bold text-white'>CODE : <span className='text-[#FAC714] font-bold rubik-font'>FRESH28</span></h2>
                    </div>
                </div>
                <img src={group3} alt="" className='absolute right-[15%] top-[23%] md:block hidden'/>
                <img src={frutis} alt="" className='absolute right-[10%] top-[25%] w-[627px] h-[380px] md:block hidden' />
            </div>
       </section>
    );
};

export default OfferFruits;