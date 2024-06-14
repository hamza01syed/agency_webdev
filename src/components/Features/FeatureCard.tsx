import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const FeatureCard = ({ image, title }: Props) => {
  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-100 cursor-pointer">
      <Image src={image} alt="icon" width={70} height={70} className="mx-auto h-auto w-auto"/>
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-purple-900 ">{title}</h1>
      <p className="mt-[1rem] text-black opacity-90 text-[15px] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maxime!
      </p>
      <p className="mt-[1.4rem] text-red-600 font-[500] cursor-pointer hover:text-red-800">
        Learn More
      </p>
    </div>
  );
};

export default FeatureCard;
