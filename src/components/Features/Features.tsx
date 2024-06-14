import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
// import icon1 from "@/../public/ic5.png"
import icon1 from "@/../public/ic1.png"
import icon2 from "@/../public/ic2.png"
import icon4 from "@/../public/ic4.png"
// import icon6 from "@/../public/ic5.png"


const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* section heading  */}
        <SectionHeading headingMini="ideal Solution For You" headingPrimary="Explore Ultimate Features"/> 
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.4rem]">
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                {/* featre card  */}
                <FeatureCard title="Email Subscription" image={icon1.src}/>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center">
                {/* featre card  */}
                <FeatureCard title="Email Subscription" image={icon2.src}/>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" data-aos-anchor-placement="top-center">
                {/* featre card  */}
                <FeatureCard title="Email Subscription" image={icon4.src}/>
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" data-aos-anchor-placement="top-center">
                {/* featre card  */}
                <FeatureCard title="Email Subscription" image={icon1.src}/>
            </div>
            <div data-aos="zoom-in" data-aos-delay="800" data-aos-anchor-placement="top-center">
                {/* featre card  */}
                <FeatureCard title="Email Subscription" image={icon2.src}/>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1000" data-aos-anchor-placement="top-center">
                {/* featre card  */}
                <FeatureCard title="Email Subscription" image={icon4.src}/>
            </div>
        </div>
    </div>

  )
}

export default Features