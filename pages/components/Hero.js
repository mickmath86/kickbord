/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
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
  LightningBoltIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
// Icons

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto ">
              <div className="relative mx-auto shadow-xl  sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/background.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute mx-auto inset-0 bg-sky-900 mix-blend-multiply" />
                </div>
                <div className="relative flex-col px-4 mx-auto py-8 sm:px-6 sm:py-24 lg:py-8 lg:px-8">
                 
                  <img className="mx-auto" src="/images/UI/headline.png" alt="" />
                  {/* <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                   
                    <span className="block text-sky-400">Take control of your</span>
                    <span className="block  text-white">online brand</span>
                  </h1> */}
                  <p className="mt-2 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
                       Kickbord helps brands scale their online businesses by giving owners the tools they need to take control of their eCommerce brand and maximize return on ad spend.                 
                  </p>

                  
                
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className=" mx-auto">
                      <Link
                        href="/schedule-a-call"
                        
                      >
                        <div className="flex mb-4 cursor-pointer items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                          Schedule a call
                        </div>
                       
                      </Link>
                      {/* <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-500  hover:bg-opacity-70 sm:px-8"
                      >
                       Contact
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          {/* <div className="bg-gray-100 mx-auto">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="/images/google-grey.png" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="/images/linkedin-grey.png" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="/images/fx-grey.png"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="/images/pg-grey.png"
                    alt="Transistor"
                  />
                </div>
               
              </div>
            </div>
          </div> */}
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
