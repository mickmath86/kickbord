/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, CubeIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, CubeTransparentIcon, ChipIcon } from '@heroicons/react/outline'

import { useState } from 'react'
// import BarChart from './BarChart'


const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
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

// Icons
function IconOne() {
    return (
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <rect width="8rem" height="8rem" rx="8" fill="#FFEDD5" /> */}
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#ea580c"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#ea580c"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconTwo() {
    return (
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <rect width="8rem" height="8rem" rx="8" fill="#FFEDD5" /> */}
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#ea580c"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconThree() {
    return (
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="auto" height="auto" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#ea580c" />
      </svg>
    )
  }

const content = [
    {
        id: 1, 
        headline: "Media Advertising", 
        mainIcon: IconOne, 
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

    }, 
    {
        id: 2, 
        headline: "Media Advertising", 
        mainIcon: IconOne, 
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
    
    <div className=" bg-white overflow-hidden mb-16 md:mb-32 ">
      <div className="relative grid bg-white max-w-xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-5xl lg:max-w-7xl ">
        {/* Section Start */}
        <div className="relative mt-12 bg-white md:w-full lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative">
            <div className="flex place-items-start">       
            <div className="w-100 lg:w-3/4">
                   <IconOne className="text-orange-500  mr-5"/>
                </div> 
               
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Media Advertising
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                        officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                        Totam, velit.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
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
        <div className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center  xl:items-start xl:min-h-[65vh] ">
          <div className="relative order-last">
            <div className="flex place-items-start">        
                 <div className="w-100 lg:w-3/4">
                   <IconThree className="text-orange-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        eCommerce Strategy
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                        officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                        Totam, velit.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
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
        
        {/* section 2 end */}

        {/* section 3 start */}
        <div className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative">
            <div className="flex place-items-start">        
                <div className="w-100 lg:w-3/4">
                   <IconTwo className="text-orange-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                       Conversion Rate Optimization
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                        officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                        Totam, velit.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
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
        <div className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative order-last">
            <div className="flex place-items-start">        
                 <div className="w-3/4 md:w-1/4 lg:w-3/4">
                   <CubeTransparentIcon className="text-orange-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Analytics
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                        officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                        Totam, velit.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
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
                  <div className="w-3/4 md:w-1/4 lg:w-3/4">
                    <ChipIcon className="text-orange-500  mr-5"/>
                  </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Integrations
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                        officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                        Totam, velit.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
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
        <div className="relative mt-12 bg-white lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center xl:items-start xl:min-h-[65vh]">
          <div className="relative order-last">
            <div className="flex place-items-start">        
                 <div className="w-3/4 md:w-1/4 lg:w-3/4">
                   <LightningBoltIcon className="text-orange-500  mr-5"/>
                </div> 
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Automations
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                        officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                        Totam, velit.
                    </p>
                    <dl className="mt-10 space-y-10">
                        {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
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
