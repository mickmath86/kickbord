import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  ChipIcon,
  XIcon,
  ArrowCircleRightIcon, 
  CubeTransparentIcon, 
  LightningBoltIcon, 
  ArrowNarrowRightIcon
} from '@heroicons/react/outline'



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
  
  function IconFour(){
    return (
    <svg id="way"  className="bg-green-100 rounded-md p-2 h-12 w-12" viewBox="0 0 300 300" width="48" xmlns="http://www.w3.org/2000/svg">
      
      <g >
     
        <path d="m133.794 111.265c0-2.502-2.028-4.53-4.529-4.53s-4.529 2.028-4.529 4.53c0 2.501 2.028 4.529 4.529 4.529s4.529-2.028 4.529-4.529z" fill="#FB923C" />
        <path d="m93.265 39.794c2.501 0 4.529-2.028 4.529-4.529 0-2.502-2.028-4.53-4.529-4.53s-4.529 2.028-4.529 4.53c-.001 2.501 2.027 4.529 4.529 4.529z" fill="#FDBA74"/>
        <path d="m37.265 130.735c-2.501 0-4.529 2.028-4.529 4.53 0 2.501 2.028 4.529 4.529 4.529s4.529-2.028 4.529-4.529c0-2.502-2.028-4.53-4.529-4.53z" fill="#FDBA74"/>
        <path d="m75.265 185.265c13.234 0 24-10.766 24-24s-10.766-24-24-24-24 10.766-24 24 10.765 24 24 24zm0-40c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16 7.175-16 16-16z" fill="#FDBA74"/>
        <path d="m243.265 137.265c-13.234 0-24 10.766-24 24s10.766 24 24 24 24-10.766 24-24-10.766-24-24-24zm0 40c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16-7.176 16-16 16z"fill="#FDBA74" />
        <path d="m243.265 221.265c-11.869 0-21.726 8.667-23.639 20h-36.723c-1.913-11.333-11.77-20-23.639-20s-21.726 8.667-23.639 20h-36.722c-.614-3.637-2.04-6.996-4.098-9.884l50.575-50.575c3.924 2.796 8.709 4.459 13.884 4.459 13.234 0 24-10.766 24-24 0-5.175-1.663-9.96-4.459-13.884l50.575-50.575c3.924 2.796 8.709 4.459 13.884 4.459 13.234 0 24-10.766 24-24s-10.766-24-24-24c-11.869 0-21.726 8.667-23.639 20h-36.723c-1.913-11.333-11.77-20-23.639-20s-21.726 8.667-23.639 20h-36.721c-1.913-11.333-11.77-20-23.639-20-13.234 0-24 10.766-24 24s10.766 24 24 24c11.869 0 21.726-8.667 23.639-20h36.723c1.913 11.333 11.77 20 23.639 20s21.726-8.667 23.639-20h36.723c.614 3.637 2.04 6.996 4.098 9.884l-50.575 50.575c-3.924-2.796-8.709-4.459-13.884-4.459-13.234 0-24 10.766-24 24 0 5.175 1.663 9.96 4.459 13.884l-50.575 50.575c-3.924-2.796-8.709-4.459-13.884-4.459-13.234 0-24 10.766-24 24s10.766 24 24 24c11.869 0 21.726-8.667 23.639-20h36.723c1.913 11.333 11.77 20 23.639 20s21.726-8.667 23.639-20h36.723c1.913 11.333 11.77 20 23.639 20 13.234 0 24-10.766 24-24s-10.769-24-24.003-24zm-168-128c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16-7.176 16-16 16zm84 0c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16-7.176 16-16 16zm84-32c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16 7.175-16 16-16zm-84 84c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16 7.175-16 16-16zm-84 116c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16-7.176 16-16 16zm84 0c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16-7.176 16-16 16zm84 0c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16-7.176 16-16 16z " fill="#FB923C"/>
        
     
       
      </g>
      
    </svg>
    )
  }
  const solutions = [
    {
      id:1, 
      name: 'Media Advertising',
      href: '#',
      description: 'Get a better understanding of where your traffic is coming from.',
      icon: IconOne,
    },
    // {
    //   name: 'Google Advertising',
    //   href: '#',
    //   description: 'Speak directly to your customers in a more meaningful way.',
    //   icon: IconTwo,
    // },
   
    {
      id: 2, 
      name: 'ECommerce Strategy',
      href: '#',
      description: "Speak directly to your customers in a more meaningful way",
      icon: IconThree,
    },
    {
      id: 3, 
        name: 'Conversion Rate Optimization',
      href: '#',
      description: 'Build strategic funnels that will drive your customers to convert',
      icon: IconTwo,
    },
    {
        id: 4, 
      name: 'Analytics',
      href: '#',
      description: 'Get a better understanding of where your traffic is coming from and how its performing',
      icon: CubeTransparentIcon,
  
    },
    {
        id: 5, 
      name: 'Integrations',
      href: '#',
      description: "Connect with third-party tools that youre already using.",
      icon: ChipIcon,
    },
    {
        id: 6, 
      name: 'Automations',
      href: '#',
      description: "Build strategic funnels that will drive your customers to convert",
      icon: LightningBoltIcon,
    },
    
  ]

function ServicesTwo() {
  return (
    <div className="min-h-screen bg-gray-900 py-24">
        <div className="mx-auto text-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-green-600">Deploy faster</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-green-100 sm:text-4xl">
                Everything you need to deploy your app
            </p>
            <p className="mx-auto my-5 px-5 max-w-prose text-xl text-gray-400">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
            </p>
        </div>
        <div className="container mx-auto max-w-6xl flex-col bg-grey-100">
            {solutions.map((item) => (
                <div key={item.id} className=" flex text-white cursor-pointer rounded-md items-center p-6 group hover:bg-gray-800 backdrop-blur-m transition ease-in-out duration-200">
                    <div className="min-w-32">
                        <div className="h-16 w-16 lg:h-32 lg:w-32 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-white ease-in-out duration-300">
                            <item.icon className="h-10 w-10 lg:h-20 lg:w-20 text-green-600 ease-in-out duration-300"/>
                        </div>
                    </div>
                    
                    <div className="ml-5">
                        <h1 className="text-2xl mt-5 font-bold group-hover:text-green-500 ease-in-out duration-300 lg:text-5xl ">{item.name}</h1>
                        <div className="flex items-center mt-2">
                            <p className="text-gray-900 text-sm md:text-xl inline font-thin group-hover:text-white ease-in-out duration-300">{item.description}</p>
                            <ArrowNarrowRightIcon className="text-gray-900 w-8 group-hover:text-green-500 animate-pulse ml-4 " />
                            {/* <div className="hidden group-hover:inline px-4 py-2 ml-2 rounded bg-white text-black hover:bg-green-500">Learn More</div> */}
                        </div>
                     
                    </div>
                </div>
                
                
            ))}
        </div>
    </div>
  )
}

export default ServicesTwo