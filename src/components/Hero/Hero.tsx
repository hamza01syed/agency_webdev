import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import HeroImg from "@/../public/HeroPoster.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80-vh] sm:h-[75vh] flex items-center flex-col justify-center ">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center  mx-auto w-[80%]">
        {/* for text  */}
        <div className="col-span-2">
          <h1
            data-aos="fade-right"
            className="text-[27px] lg:text-[40px] md:text-[35px] font-bold mb-[1rem] text-black leading-[2.4rem] md:leading-[4rem] "
          >
            Exploring innovative path to cultivate business
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, accusantium ex unde eaque consequuntur, recusandae
            optio facilis quos, quidem dolores doloribus molestias accusamus
            earum iure!
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6"
          >
            <ButtonBlue text="Get Started" />
            <ButtonRed text="Explore Features" />
          </div>
        </div>
        {/* for images */}
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="col-span-2 hidden sm:block"
        >
          <Image src={HeroImg} priority alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
