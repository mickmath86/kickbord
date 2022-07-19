import React from 'react'
import Link from 'next/link'
import Nav from './components/Nav'
import SolutionsList from './components/SolutionsList'
import HeroCta from './components/HeroCta'
import Footer from './components/Footer'
import { IconOne, IconTwo, IconThree } from '../icons'



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


  
  const solutionList = [
    {
      name: 'Media Advertising',
      href: '/solutions#media-advertising',
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
      name: 'ECommerce Strategy',
      href: '#ecommerce-strategy',
      description: "Speak directly to your customers in a more meaningful way",
      icon: IconThree,
    },
    {
      name: 'CVR Optimization',
      href: '#cvr-optimization',
      description: 'Build strategic funnels that will drive your customers to convert',
      icon: IconTwo,
    },
    {
      name: 'Analytics',
      href: '#analytics',
      description: 'Get a better understanding of where your traffic is coming from and how its performing',
      icon: CubeTransparentIcon,
  
    },
    {
      name: 'Integrations',
      href: '#integrations',
      description: "Connect with third-party tools that youre already using.",
      icon: ChipIcon,
    },
    {
      name: 'Automations',
      href: '#automations',
      description: "Build strategic funnels that will drive your customers to convert",
      icon: LightningBoltIcon,
    },
    
  ]

function solutions() {
  return (

    
    <>
    <Nav />
    <header>
    <div className="mx-auto ">
              <div className="relative shadow-xl ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/background.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-sky-900 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-sky-100">Time tested </span>
                    <span className="block underline underline-offset-4  text-sky-500">solutions</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-sky-200 sm:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                 
                </div>
              </div>
            </div>
        
    </header>
    
    <div className="bg-white ">
        <div className="max-w-7xl flex mx-auto md:-translate-y-14  z-100 px-4 sm:px-6  lg:px-8">
          <div className="grid grid-cols-2 border-2 bg-white items-center z-100 rounded-md  md:shadow gap-8 md:grid-cols-6 lg:grid-cols-6 lg:gap-3 xl:gap-8">
            {solutionList.map((item) => 
            <>  
                <Link href={item.href}>
                    <div className="col-span-1 w-auto flex items-center m-2 hover:bg-gray-50 cursor-pointer rounded p-2 justify-center md:col-span-2 lg:col-span-1">
                        <item.icon className="w-full md:w-100 lg:inline xl:w-1/4 text-sky-500 mr-1"/>
                        <h1 className="font-bold text-sm text-gray-500" >{item.name}</h1>
                    </div>
                </Link>
              
            </>
                
            )}
            
            
          </div>
        </div>
    </div>
      
      <SolutionsList />
      <HeroCta />
      <Footer />
    </>
   
  )
}

export default solutions


  