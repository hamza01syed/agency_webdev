import Image from "next/image";
import React from "react";
import customerimg from "@/../public/custCare.png";
import { CheckIcon } from "@heroicons/react/16/solid";

const CustomerSupport = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]  ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center ">
        {/* for image / */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="order-2 lg:order-1  ">
          <Image src={customerimg} className="rounded-3xl" alt="customer" />
        </div>
        {/* fortext  */}
        <div className="order-1 lg:order-2  ">
          <h1 data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="top-center" className="text-[20px] md:text-[25px] lg:text-[28px] text-purple-950 font-bold leading-[2rem] md:leading-[3rem]">
            Customer Support is Our Main Priority with their hunderd percent
            satisfaction
          </h1>
          <p data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center" className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dicta
            itaque dolore adipisci? Voluptatibus, aliquam nam rem nemo autem
            fugit.
          </p>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-center" className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className="w-[1.5rem] h-[1.3rem] text-red-600 "/>
                <p className="text-[17px] text-purple-950 font-[500]">Medical and Vision</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="top-center" className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className="w-[1.5rem] h-[1.3rem] text-red-600 "/>
                <p className="text-[17px] text-purple-950 font-[500]">Life Insurance</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="top-center" className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className="w-[1.5rem] h-[1.3rem] text-red-600 "/>
                <p className="text-[17px] text-purple-950 font-[500]">Savings</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200" data-aos-anchor-placement="top-center" className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className="w-[1.5rem] h-[1.3rem] text-red-600 "/>
                <p className="text-[17px] text-purple-950 font-[500]">HSAs and FSAs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
