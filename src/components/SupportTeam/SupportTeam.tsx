import React from "react";
import icon1 from "@/../public/ic1.png"
import icon2 from "@/../public/ic2.png"
import supportPic from "@/../public/support2img.jpg"
import Image from "next/image";
const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="mx-auto w-[80%] items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        {/* for text  */}
        <div>
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-purple-950 leading-[2.4rem] md:leading-[4rem] ">
            Do you need help?Our support team is ready to help you
          </h1>
          <p className="text-gray-900 opacity-90 tetx-[17px] mt-[1rem] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quo ex
            molestiae! Id consequuntur laboriosam, veritatis accusantium
            voluptas quas eius!
          </p>
          <div className="flex items-center space-x-6 mt-[2rem] ">
            <Image src={icon1} className="h-auto w-auto" alt="icon" width={60} height={60}/>
            <div>
                <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem] ">Email Client Support</h1>
                <p className="w-[90%] md:w-[70%] text-[15px] text-black opacity-85 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, est?</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem] ">
            <Image src={icon2} alt="icon" className="h-auto w-auto" width={60} height={60}/>
            <div>
                <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem] ">Live Ticket Support</h1>
                <p className="w-[90%] md:w-[70%] text-[15px] text-black opacity-85 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, est?</p>
            </div>
          </div>
        </div>
        {/* forimage  */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
            <Image src={supportPic} alt="supprt"/>
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
