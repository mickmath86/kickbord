/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, CubeIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, CubeTransparentIcon, ChipIcon, ArrowsExpandIcon,ArrowCircleRightIcon, TrendingUpIcon, ViewGridAddIcon } from '@heroicons/react/outline'

import { useState } from 'react'
// import BarChart from './BarChart'
import { IconOne, IconTwo, IconThree, FacebookIcon } from '../../icons'
import Link from 'next/link'
const transferFeatures = [
  {
    id: 1,
    name: 'Message',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FacebookIcon,
  },
  {
    id: 2,
    name: 'Market',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Measure',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon,
  },
]



const content = [
 
    {
        id: 1, 
        idLabel: "media-advertising", 
        headline: "Media Advertising", 
        mainIcon: ArrowsExpandIcon, 
        description: "Paid media advertising is where Kickbord specializes, and it will drive your product campaign to new ROI heights. Facebook and Google Ads are two of the most effective media advertising platforms, and Kickbord will make sure that your product is getting in front of the right people, at the right time. With experienced Facebook and Google Ads managers, you can trust that your product campaign is in good hands.", 
        subConent: ["Facebook Ads", "Google Ads"], 
        linkText: "Get Started", 
        getStartedUrl: "/schedule-a-call", 
        image: "/images/media.png"

    }, 
    {
      id: 2, 
      idLabel: "ecommerce-strategy", 
      headline: "eCommerce Strategy", 
      mainIcon: TrendingUpIcon, 
      description: " Kickbord's"  +"strategy is built on four fundamental pillars of eCommerce. Sending the appropriate message to the proper market at the right moment and then using leading indicators, measuring where little changes might produce large results. Combined with a deep understanding of Facebook & Google Ads, this makes for a lethal combination that will result in your product getting the attention it deserves. ", 
      subConent: ["Market", "Message", "Moment", "Measure"], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/media.png"

    },
    {
      id: 3, 
      idLabel: "cvr-optimization", 
      headline: "Conversion Rate Optimization", 
      mainIcon: ViewGridAddIcon, 
      subHeadline: "Run at full efficiency at every stage of your funnel.", 
      description: " Every stage of your funnel is an opportunity to optimize for conversions. Kickbord offers strategies to create frictionless experiences and can even help with redesigning your cart to encourage users to engage and convert without distractions.", 
      subConent: [], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/media.png"

    },  
    {
      id: 4, 
      idLabel: "analytics", 
      headline: "Analytics", 
      mainIcon: CubeTransparentIcon, 
      subHeadline: "", 
      description: " By tracking your brand awareness, traffic, conversion rate, and other key metrics, you'll be able to identify areas where you can improve your funnel efficiency. And when you're able to improve your funnel efficiency, you'll be able to increase your return on ad spend. So don't wait - start tracking your metrics today and see how much more efficient your funnel can be.", 
      subConent: [], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/media.png"

    }, 
    {
      id: 5, 
      idLabel: "integrations", 
      headline: "Integrations", 
      mainIcon: ChipIcon, 
      subHeadline: "", 
      description: "Looking to integrate Kickboard with the tools you already use? We've got you covered. Our integration abilities make it easy to connect Kickboard with the apps and systems you rely on every day. Kickboard enables you to quickly set up and get started using data-driven decision-making to improve brand performance.", 
      subConent: [], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/media.png"

    },   
    {
      id: 6, 
      idLabel: "automations", 
      headline: "Automations", 
      mainIcon: ChipIcon, 
      subHeadline: "", 
      description: "Want to automate your content delivery and sales process? We can make it happen. At Kickbord, we automate everything so you don't have to lift a finger. Contact us today to see how we can help you automate your business processes.", 
      subConent: [], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/media.png"

    },   
   
]

export default function SolutionsList() {
 

  return (
    
    <div  className=" bg-white overflow-hidden mb-16 md:mb-32 ">
      <div className="relative grid bg-white max-w-xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-5xl lg:max-w-7xl ">
        {/* Section Start */}
        {content.map((item) => 
         <div key={item.id} id={item.idLabel} className="relative pt-12 bg-white md:w-full lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
         <div className="relative">
           <div className="flex relative place-items-start">       
              <div className="w-auto lg:w-3/4 z-20">
                      <item.mainIcon className="text-sky-500 h-12 w-12  mr-5 xl:w-24 xl:h-24"/>
              </div> 
              
              <div className="flex-row justify-items-start">
                  <h3 className="text-2xl z-100 font-extrabold text-gray-900 tracking-tight sm:text-3xl xl:text-7xl">
                      {item.headline}
                  </h3>
                  <p className="mt-3 text-lg font-bold text-sky-900 xl:text-lg">
                    {item.subHeadline}      
                  </p>
                  <p className="mt-3 text-lg text-gray-500 xl:text-2xl xl:font-light">
                    {item.description}
                  </p>
                  <div className="flex space-x-5 text-sm mt-6 italic xl:text-xl">
                      {item.subConent.map(snap => 
                        <p>{snap}</p>
                      )}
                  </div>
                  <Link href={item.getStartedUrl}>
      
                    <div className="flex items-center cursor-pointer group mt-6">
                      <p className="text-sky-500 text-lg font-normal xl:text-2xl xl:font-light group-hover:text-sky-700 transition ease-in-out duration:300">{item.linkText}</p>
                      <ArrowCircleRightIcon className=" w-6 text-sky-500 ml-3 group-hover:text-sky-700 transition group-hover:transform:x-2 ease-in-out duration:300"/>
                    </div>

                  </Link>

                
              </div>
            </div>    
          </div>

         {/* Image */}
         <div className="mt-10 -mx-4 rounded-md h-3/4 relative lg:mt-0" aria-hidden="true">
           
           {/* <svg
               className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
               width={784}
               height={404}
               fill="none"
               viewBox="0 0 784 404"
           >
               <defs>
               <pattern
                   id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                   x={0}
                   y={0}
                   width={20}
                   height={20}
                   patternUnits="userSpaceOnUse"
               >
                   <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
               </pattern>
               </defs>
               <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
           </svg> */}
           
           <img
               className="relative mx-auto rounded-xl drop-shadow-lg shadow-lg"
               width={490}
               src={item.image}
               alt=""
           />
           </div>
       </div> 
        )}
       
        
        {/* section end */}
      </div>
    </div>
  )
}
