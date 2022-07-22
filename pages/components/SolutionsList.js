/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, CubeIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, CubeTransparentIcon, ChipIcon, ArrowsExpandIcon,ArrowCircleRightIcon, TrendingUpIcon, ViewGridAddIcon, MailOpenIcon } from '@heroicons/react/outline'

import { useState } from 'react'
// import BarChart from './BarChart'
import { IconOne, IconTwo, IconThree, FacebookIcon } from '../../icons'
import Link from 'next/link'



function Background(color){
return (
  <span className="font-bold text-sky-500">{text}</span>
)
}



const content = [
 
    {
        id: 1, 
        idLabel: "media-advertising", 
        headline: "Media Advertising", 
        mainIcon: ArrowsExpandIcon, 
        description: "Paid media advertising is where Kickbord specializes, and it will drive your product campaign to new ROI heights. Facebook and Google Ads are two of the most effective media advertising platforms, and Kickbord will make sure that your product is getting in front of the right people, at the right time. With experienced Facebook and Google Ads managers, you can trust that your product campaign is in good hands.", 
        subConent: ["Google Ads", "Facebook Ads", "Instagram"], 
        linkText: "Get Started", 
        getStartedUrl: "/schedule-a-call", 
        image: "/images/UI/ga-fb.png"

    }, 
    {
      id: 2, 
      idLabel: "ecommerce-strategy", 
      headline: `eCommerce Strategy `,
      tag: '(M4)',
      mainIcon: TrendingUpIcon, 
      description: `Kickbord's strategy is built on four fundamental pillars of eCommerce. Sending the appropriate message to the proper market at the right moment and then using leading indicators, measuring where little changes might produce large results. Combined with a deep understanding of Facebook & Google Ads, this makes for a lethal combination that will result in your product getting the attention it deserves. `, 
      subConent: ["Market", "Message", "Moment", "Measure"], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/UI/M4.png", 
      specialColor: "text-sky-500"

    },
    {
      id: 3, 
      idLabel: "email-marketing", 
      headline: "Email Marketing", 
      mainIcon: MailOpenIcon, 
      subHeadline: "Perfectly time your customer engagement", 
      description: "Email is a powerful marketing tool, and Kickbord makes it easy to automate your email campaigns to ensure that you're always engaging with your audience at the perfect time. Whether you're trying to reach prospective buyers or repeat customers, email marketing can help you achieve your goals. ", 
      subConent: [], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/UI/email.png"

    },   
    {
      id: 4, 
      idLabel: "cvr-optimization", 
      headline: "Conversion Rate Optimization", 
      mainIcon: ViewGridAddIcon, 
      subHeadline: "Run at full efficiency at every stage of your funnel.", 
      description: " Every stage of your funnel is an opportunity to optimize for conversions. Kickbord offers strategies to create frictionless experiences and can even help with redesigning your cart to encourage users to engage and convert without distractions.", 
      subConent: ["Cart Redesign"], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/UI/cvr.png"

    },  
    {
      id: 5, 
      idLabel: "analytics", 
      headline: "Analytics", 
      mainIcon: CubeTransparentIcon, 
      subHeadline: "", 
      description: " By tracking your brand awareness, traffic, conversion rate, and other key metrics, you'll be able to identify areas where you can improve your funnel efficiency. And when you're able to improve your funnel efficiency, you'll be able to increase your return on ad spend. So don't wait - start tracking your metrics today and see how much more efficient your funnel can be.", 
      subConent: [], 
      linkText: "Get Started", 
      getStartedUrl: "/schedule-a-call", 
      image: "/images/UI/charts.png"

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
      image: "/images/UI/automations.png"

    },   
   
]

export default function SolutionsList() {
 

  return (
    
    <div  className=" bg-white overflow-hidden ">
      <div className="relative grid bg-white mx-auto  ">
        {/* Section Start */}
        {content.map((item) => 
        <div key={item.id}  id={item.idLabel} className="w-full pt-12 odd:bg-white even:bg-gray-50 flex items-center mx-auto">
          <div   data-aos="fade-up" className="relative flex-col  mx-auto  pb-24 px-4 max-w-2xl sm:max-w-3xl lg:max-w-7xl  lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start ">
          
        
          <div className="relative ">
            <div className="flex relative place-items-start">       
               <div className="w-auto lg:w-3/4 z-20">
                       <item.mainIcon className="text-sky-500 h-12 w-12  mr-5 xl:w-16 xl:h-16 font-thin"/>
               </div> 
               
               <div className="flex-row justify-items-start">
                   <h3 className="text-2xl z-100 font-extrabold odd:text-gray-800 even:text-white tracking-tight sm:text-3xl md:text-5xl xl:text-6xl">
                       {item.headline} <span className={`font-bold text-sky-500 bg-${item.backgroundColor}`}>{item.tag}</span>   
                   </h3>
                   <p className="mt-3 text-lg font-bold text-sky-900 xl:text-lg">
                     {item.subHeadline}      
                   </p>
                   <p className="mt-3 text-lg text-gray-700 xl:text-2xl xl:font-light">
                     {item.description}
                   </p>
                   <div className="flex space-x-5 text-sm mt-6 italic xl:text-xl">
                       {item.subConent.map(snap => 
                         <p key={snap}>{snap}</p>
                       )}
                   </div>
                   <Link href={item.getStartedUrl}>
       
                     <div className="flex items-center cursor-pointer group mt-6">
                       <p className="text-sky-500 text-base font-bold xl:text-xl xl:font-light group-hover:text-sky-700 transition ease-in-out duration:300">{item.linkText}</p>
                       <ArrowCircleRightIcon className=" w-6 text-sky-500 ml-3 group-hover:text-sky-700 transition group-hover:transform:x-2 ease-in-out duration:300"/>
                     </div>
 
                   </Link>
 
                 
               </div>
             </div>    
           </div>
 
          {/* Image */}
          <div className="my-10 -mx-2 w-full  items-center justify-center rounded-md relative lg:mt-0" aria-hidden="true">
          
            <img
                className="relative mx-auto rounded-xl w-full  "
                
                src={item.image}
                alt=""
            />
            
            </div>

          
          
          
        </div> 

        </div>
         
        )}
       
        
        {/* section end */}
      </div>
    </div>
  )
}
