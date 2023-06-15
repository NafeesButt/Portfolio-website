import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const Testimonials = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
  return (
    <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-4-p-e-1 rellax" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-4-p-e-2 rellax" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Client Says
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
            Reviews on my Portfolio as follows.
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* CAROUSEL START */}
        <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
          <Carousel>
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.pravatar.cc/300"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">John Doy</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Client
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                Working with Nafees Butt was an absolute pleasure! Their
                attention to detail and creative problem-solving skills truly
                impressed me. They delivered exceptional results and exceeded my
                expectations. I highly recommend Nafees Butt for their
                professionalism and top-notch work!
              </div>
            </div>
            {/* SLIDE END */}
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.pravatar.cc/300"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">Mickey yan</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Client
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                I couldn't be happier with the work [Your Name] did for us. They
                brought our vision to life flawlessly and added their own
                artistic flair. The communication was excellent, and they met
                all deadlines. I would definitely work with [Your Name] again
                and recommend them without hesitation.
              </div>
            </div>
            {/* SLIDE END */}
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.pravatar.cc/300"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">Jarry Bob</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Client
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                I was thoroughly impressed with [Your Name]'s work. Their design
                expertise and ability to understand our brand resulted in a
                stunning final product. They were responsive to feedback,
                maintained excellent communication throughout the project, and
                delivered outstanding results. I highly recommend [Your Name]
                for any design needs.
              </div>
            </div>
            {/* SLIDE END */}
          </Carousel>
        </Div>
        {/* CAROUSEL END */}
      </Wrapper>
    </div>
  );
};

export default Testimonials;
