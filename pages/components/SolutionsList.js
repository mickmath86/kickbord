/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, CubeIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, CubeTransparentIcon, ChipIcon, ArrowsExpandIcon, TrendingUpIcon, ViewGridAddIcon } from '@heroicons/react/outline'

import { useState } from 'react'
// import BarChart from './BarChart'
import { IconOne, IconTwo, IconThree, FacebookIcon } from '../../icons'

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
        headline: "Media Advertising", 
        mainIcon: ArrowsExpandIcon, 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit", 
        subConent: [
            {
                 mainicon: FacebookIcon, 
                 head: "Competetive Exchange Rates", 
                 description: "Lorem Ipasdfsum"
            }, 
            {
                mainicon: ScaleIcon, 
                head: "Competetive Exchange Rates", 
                description: "Lorem Ipasdfsum"
           }, 
           {
                mainicon: LightningBoltIcon, 
                head: "Competetive Exchange Rates", 
                description: "Lorem Ipasdfsum"
            }, 
            
        ]

    }, 
    {
        id: 2, 
        headline: "Media Advertising", 
        mainIcon: TrendingUpIcon, 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit", 
        subConent: [
            {
                 mainicon: GlobeAltIcon, 
                 head: "Competetive Exchange Rates", 
                 description: "Lorem Ipasdfsum"
            }, 
            {
                mainicon: ScaleIcon, 
                head: "Competetive Exchange Rates", 
                description: "Lorem Ipasdfsum"
           }, 
           {
                mainicon: LightningBoltIcon, 
                head: "Competetive Exchange Rates", 
                description: "Lorem Ipasdfsum"
            }, 
            
        ]

    }
]

export default function SolutionsList() {
  // const [userData, setUserData] = useState({
  //   labels: , 
  //   datasets: []
  // })

  return (
    
    <div  className=" bg-white overflow-hidden mb-16 md:mb-32 ">
      <div className="relative grid bg-white max-w-xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-5xl lg:max-w-7xl ">
        {/* Section Start */}
        <div id="media-advertising" className="relative mt-12 bg-white md:w-full lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative">
            <div className="flex place-items-start">       
            <div className="w-full lg:w-3/4">
                   <ArrowsExpandIcon className="text-sky-500 h-24 w-24 mr-5"/>
            </div> 
               
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Media Advertising
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Paid media advertising is where Kickbord specializes, and it will drive your product campaign to new ROI heights. 
                     Facebook and Google Ads are two of the most effective media advertising platforms, and Kickbord
                      will make sure that your product is getting in front of the right people, at the right time. 
                      With experienced Facebook and Google Ads managers, you can trust that your product campaign is 
                      in good hands.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
             </div>    
           </div>

          <div className="mt-10 -mx-4 rounded-md h-3/4 relative lg:mt-0" aria-hidden="true">
            
            <svg
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
            </svg>
            
            <img
                className="relative mx-auto rounded-xl drop-shadow-lg shadow-lg"
                width={490}
                src="/images/media.png"
                alt=""
            />
            </div>
        </div> 
        
        {/* section end */}


        {/* <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg> */}


        {/* Section Two */}
        <div id="ecommerce-strategy" className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center  xl:items-start xl:min-h-[65vh] ">
          <div className="relative order-last">
            <div className="flex place-items-start">        
                 <div className="w-full lg:w-3/4">
                   <TrendingUpIcon className="text-sky-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        eCommerce Strategy <span className="text-sky-500 font-semibold">(M4)</span>
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Kickbord's <span className="font-extrabold text-sky-500">M4</span> strategy is built on four fundamental pillars of eCommerce. Sending the appropriate <span className="font-extrabold text-sky-500">message</span> to the proper <span className="font-extrabold text-sky-500">market</span> at the right <span className="font-extrabold text-sky-500">moment</span> and then using leading indicators, <span className="font-extrabold text-sky-500">measuring</span> where little changes might produce large results. Combined with a deep understanding of Facebook & Google Ads, this makes for a lethal combination that will result in your product getting the attention it deserves. 
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-23 w-12 rounded-md bg-sky-500 text-white">
                                <item.icon className="h-12 w-12" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
             </div>    
           </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
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
            </svg>
            <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
            />
            </div>
        </div> 
        
        {/* section 2 end */}

        {/* section 3 start */}
        <div id="cvr-optimization" className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative">
            <div className="flex place-items-start">        
                <div className="w-full lg:w-3/4">
                   <ViewGridAddIcon className="text-sky-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                       Conversion Rate Optimization
                    </h3>
                    <p className="mt-3 text-lg text-gray-900">
                    Run at full efficiency at every stage of your funnel.                  </p>
                    <p className="mt-3 text-lg text-gray-500">Every stage of your funnel is an opportunity to optimize for conversions. Kickbord offers strategies to create frictionless experiences and can even help with redesigning your cart to encourage users to engage and convert without distractions.    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>    
           </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
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
            </svg>
            <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
            />
            </div>
        </div> 
        {/* section 3 end */}

        {/* section 4 start */}
        <div id="analytics" className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative order-last">
            <div className="flex place-items-start">        
                 <div className="w-full md:w-1/4 lg:w-3/4">
                   <CubeTransparentIcon className="text-sky-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Analytics
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                     By tracking your brand awareness, traffic, conversion rate, and other key metrics, you'll be able to identify areas where you can improve your funnel efficiency. And when you're able to improve your funnel efficiency, you'll be able to increase your return on ad spend. So don't wait - start tracking your metrics today and see how much more efficient your funnel can be.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
             </div>    
           </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
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
            </svg>
            <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
            />
            </div>
        </div> 
        {/* section 4 end */}

        {/* section 5 start */}
        <div id="integrations" className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative">
            <div className="flex place-items-start">        
                  <div className="w-full md:w-1/4 lg:w-3/4">
                    <ChipIcon className="text-sky-500  mr-5"/>
                  </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Integrations
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Looking to integrate Kickboard with the tools you already use? We've got you covered. Our integration abilities make it easy to connect Kickboard with the apps and systems you rely on every day.



Kickboard enables you to quickly set up and get started using data-driven decision-making to improve brand performance. 
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>    
           </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
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
            </svg>
            <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
            />
            </div>
        </div>           
        {/* section 5 end */}

        {/* section 6 start */}
        <div id="automations" className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative order-last">
            <div className="flex place-items-start">        
                 <div className="w-full md:w-1/4 lg:w-3/4">
                   <LightningBoltIcon className="text-sky-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Automations
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                   

Want to automate your content delivery and sales process? We can make it happen. 



At Kickbord, we automate everything so you don't have to lift a finger. Contact us today to see how we can help you automate your business processes.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
             </div>    
           </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
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
            </svg>
            <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
            />
            </div>
        </div> 
        {/* section 6 end */}
      </div>
    </div>
  )
}
