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
  ArrowNarrowRightIcon, 
  ArrowsExpandIcon, 
  TrendingUpIcon, 
  ViewGridAddIcon, 
  MailOpenIcon
} from '@heroicons/react/outline'
import Link from 'next/link'



  const solutions = [
    {
      id:1, 
      name: 'Media Advertising',
      href: '/solutions#media-advertising',
      description: 'Get a better understanding of where your traffic is coming from.',
      icon: ArrowsExpandIcon,
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
      href: '/solutions#ecommerce-strategy',
      description: "Speak directly to your customers in a more meaningful way",
      icon: TrendingUpIcon,
    },
    {
      id: 3, 
      name: 'Email Marketing',
      href: '/solutions#email-marketing',
      description: "Perfectly time customer engagement with well-placed email campaigns",
      icon: MailOpenIcon,
    },
    {
      id: 4, 
        name: 'Conversion Rate Optimization',
      href: '/solutions#cvr-optimization',
      description: 'Build strategic funnels that will drive your customers to convert',
      icon: ViewGridAddIcon,
    },
    {
        id: 5, 
      name: 'Analytics',
      href: '/solutions#analytics',
      description: 'Get a better understanding of where your traffic is coming from and how its performing',
      icon: CubeTransparentIcon,
  
    },
   
    {
        id: 6, 
      name: 'Automations',
      href: '/solutions#automations',
      description: "Build strategic funnels that will drive your customers to convert",
      icon: LightningBoltIcon,
    },
    
  ]

function ServicesTwo() {
  return (
    <div className="min-h-screen bg-gray-900 py-24">
        <div className="mx-auto text-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-sky-600">Grow Faster</h2>
            <p className="mt-2 mb-24 text-3xl px-8 font-extrabold tracking-tight text-sky-100 sm:text-4xl">
                Everything you need to scale your brand
            </p>
            {/* <p className="mx-auto my-5 px-5 max-w-prose text-xl text-gray-400">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
            </p> */}
        </div>
        <div className="container mx-auto max-w-6xl flex-col bg-grey-100">
            {solutions.map((item) => (
              <Link key={item.id} href={item.href}>
              <div  className=" flex text-sky-200 cursor-pointer rounded-md items-center p-6 group hover:bg-gray-800 backdrop-blur-m transition ease-in-out duration-200">
                    <div className="min-w-32">
                        <div className="h-16 w-16 lg:h-32 lg:w-32 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-white ease-in-out duration-300">
                            <item.icon className="h-10 w-10 lg:h-20 lg:w-20 text-sky-600 ease-in-out duration-300"/>
                        </div>
                    </div>
                    
                    <div className="ml-5 flex justify-between">
                      <div>
                        <h1 className="text-2xl  font-bold group-hover:text-sky-500 ease-in-out duration-300 lg:text-5xl ">{item.name}</h1>
                        <div className="flex items-center mt-2">
                           
                            <div className="hidden group-hover:inline transition ease-in-out duration:500">
                              <div className="flex">
                              <p className="text-gray-900 inline text-sm md:text-xl font-thin group-hover:text-white ease-in-out duration-300">{item.description}</p>
                                
                              </div>
                              
                            </div>
                            
                    
                        </div>

                      </div>
                       
                      <ArrowNarrowRightIcon className="hidden group-hover:inline text-gray-900 w-12 md:w-32 group-hover:text-sky-500 animate-pulse ml-4 " />

                    </div>
                   
              </div>
              </Link>
                
                
                
            ))}
        </div>
    </div>
  )
}

export default ServicesTwo