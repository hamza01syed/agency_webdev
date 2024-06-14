import Image from "next/image";
import React from "react";
import customer from "@/../public/Clients.jpg"

const Company = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <h1 className="text-[22px] font-bold mb-[1.5rem] text-center md:text-[30px] text-gray-900 ">
        Company who also worked with us
      </h1>
      <p className="w-[80%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[65%] mx-auto text-[17px] text-center text-gray-950 opacity-80 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci
        accusantium exercitationem inventore numquam obcaecati magnam debitis
        reprehenderit at atque!
      </p>
      <p className="text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600">
        Explore Details
      </p>
      <div className="mt-[2rem] text-center w-[80%] md:w-[65%] mx-auto">
        <Image src={customer} alt="company"/>

      </div>
    </div>
  );
};

export default Company;
