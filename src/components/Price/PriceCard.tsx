import React from "react";
import ButtonRed from "../Button/ButtonRed";
import ButtonBlue from "../Button/ButtonBlue";

interface Props {
  bg: string;
  price: string;
  num: string;
  plan: string;
}

const PriceCard = ({ bg, price, num, plan }: Props) => {
  const large = num == "2" ? "lg:scale-110 scale-100 z-[100]" : "";
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div
        className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md `}
      >
        <p className="text-white text-[20px] font-[500] mb-[1.5rem] ">{plan}</p>
        <h1 className="text-white text-[20px]">
          <span className="text-yellow-300 text-[20px] font-bold">
            ${price}/
          </span>
          per month
        </h1>
      </div>
      <div className="p-4 mt-[1rem] text-center">
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-100 pb-2 text-black opacity-80 mb-[1rem] ">
          Full Access Library
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-100 pb-2 text-black opacity-80 mb-[1rem] ">
          Multiple Website 
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-100 pb-2 text-black opacity-80 mb-[1rem] ">
          NextJS project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-100 pb-2 text-black opacity-80 mb-[1rem] ">
          MERN Stack Project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-100 pb-2 text-black opacity-80 mb-[1rem] ">
          TypeScript Project
        </p>
        <div className="mt-[1.5rem] mb-[1.5rem] text-center">
            {num!="2" && <ButtonRed text="Choose Plan"/>}
            {num=="2" && <ButtonBlue text="Choose Plan"/>}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
