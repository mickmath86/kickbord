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
function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
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
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
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
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
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
  <svg id="way"  className="bg-orange-100 rounded-md p-2 h-12 w-12" viewBox="0 0 300 300" width="48" xmlns="http://www.w3.org/2000/svg">
    
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

function IconSix(){
  return (
    <svg version="1.1" className="bg-orange-100 rounded-md p-2 h-12 w-12" id="way2" xmlns="http://www.w3.org/2000/svg">

      <path fill="#FB923C"  d="M213.3,85.3c70.7,0,128,57.3,128,128h34.1c0-89.5-72.6-162.1-162.1-162.1c-89.6,0-162.1,72.6-162.1,162.1
        c0,89.6,72.6,162.1,162.1,162.1H266l-27,27.1l24.1,24.1l56.2-56.2c6.7-6.7,6.7-17.5,0-24.1l-56.2-56.2l-24.1,24.1l26.9,26.8v0.2
        h-52.5c-70.7,0-128-57.3-128-128C85.3,142.6,142.6,85.3,213.3,85.3L213.3,85.3z"/>
      <path fill="#FDBA74"  d="M358.4,256c-22.9,0-43.9,7.6-60.9,20.2l24.6,24.6c10.6-6.7,23-10.7,36.4-10.7c37.7,0,68.3,30.6,68.3,68.3
        c0,37.7-30.6,68.3-68.3,68.3c-13.4,0-25.8-4-36.4-10.7l-24.6,24.6c17,12.7,38.1,20.2,60.9,20.2c56.6,0,102.4-45.8,102.4-102.4
        C460.8,301.8,415,256,358.4,256L358.4,256z"/>
    
    </svg>
  )
  

}
const solutions = [
  {
    name: 'Media Advertising',
    href: '/solutions',
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
    href: '#',
    description: "Speak directly to your customers in a more meaningful way",
    icon: IconThree,
  },
  {
    name: 'Conversion Rate Optimization',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: IconTwo,
  },
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from and how its performing',
    icon: CubeTransparentIcon,

  },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that youre already using.",
    icon: ChipIcon,
  },
  {
    name: 'Automations',
    href: '#',
    description: "Build strategic funnels that will drive your customers to convert",
    icon: LightningBoltIcon,
  },
  
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <div>test</div>
    // <Popover className="relative bg-white">
    //   <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
    //     <div className="flex justify-start  lg:w-0 lg:flex-1">
    //       <Link href="/">
    //         <span className="sr-only">Workflow</span>
    //         <img
    //           className="h-8 w-auto border-2 border-black rounded-md p-1 sm:h-10"
    //           src="/images/logo.png"
    //           alt=""
    //         />
    //       </Link>
    //     </div>
    //     <div className="-mr-2 -my-2 md:hidden">
    //       <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
    //         <span className="sr-only">Open menu</span>
    //         <MenuIcon className="h-6 w-6" aria-hidden="true" />
    //       </Popover.Button>
    //     </div>
    //     <Popover.Group as="nav" className="hidden md:flex space-x-10">
    //       <Popover className="relative">
    //         {({ open }) => (
    //           <>
    //             <Popover.Button
    //               className={classNames(
    //                 open ? 'text-gray-900' : 'text-gray-500',
    //                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
    //               )}
    //             >
    //               <span>Solutions</span>
    //               <ChevronDownIcon
    //                 className={classNames(
    //                   open ? 'text-gray-600' : 'text-gray-400',
    //                   'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                 )}
    //                 aria-hidden="true"
    //               />
    //             </Popover.Button>

    //             <Transition
    //               as={Fragment}
    //               enter="transition ease-out duration-200"
    //               enterFrom="opacity-0 translate-y-1"
    //               enterTo="opacity-100 translate-y-0"
    //               leave="transition ease-in duration-150"
    //               leaveFrom="opacity-100 translate-y-0"
    //               leaveTo="opacity-0 translate-y-1"
    //             >
    //               <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                   <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
    //                     {solutions.map((solution) => (
    //                       <a
    //                         key={solution.name}
    //                         href={solution.href}
    //                         className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    //                       >
    //                         <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-orange-100 text-orange-600 sm:h-12 sm:w-12">
    //                           <solution.icon className="h-6 w-6" aria-hidden="true" />
    //                         </div>
    //                         <div className="ml-4">
    //                           <p className="text-base font-medium text-gray-900">{solution.name}</p>
    //                           <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
    //                         </div>
    //                       </a>
    //                     ))}
    //                   </div>
    //                   <div className="p-5 bg-gray-50 sm:p-8">
    //                     <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
    //                       <div className="flex items-center">
    //                         <div className="text-base font-medium text-gray-900">Enterprise</div>
    //                         <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-orange-100 text-orange-800">
    //                           New
    //                         </span>
    //                       </div>
    //                       <p className="mt-1 text-sm text-gray-500">
    //                         Empower your entire team with even more advanced tools.
    //                       </p>
    //                     </a>
    //                   </div>
    //                 </div>
    //               </Popover.Panel>
    //             </Transition>
    //           </>
    //         )}
    //       </Popover>

    //       <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
    //         Pricing
    //       </a>
    //       <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
    //         Docs
    //       </a>

    //       <Popover className="relative">
    //         {({ open }) => (
    //           <>
    //             <Popover.Button
    //               className={classNames(
    //                 open ? 'text-gray-900' : 'text-gray-500',
    //                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
    //               )}
    //             >
    //               <span>More</span>
    //               <ChevronDownIcon
    //                 className={classNames(
    //                   open ? 'text-gray-600' : 'text-gray-400',
    //                   'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                 )}
    //                 aria-hidden="true"
    //               />
    //             </Popover.Button>

    //             <Transition
    //               as={Fragment}
    //               enter="transition ease-out duration-200"
    //               enterFrom="opacity-0 translate-y-1"
    //               enterTo="opacity-100 translate-y-0"
    //               leave="transition ease-in duration-150"
    //               leaveFrom="opacity-100 translate-y-0"
    //               leaveTo="opacity-0 translate-y-1"
    //             >
    //               <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
    //                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                   <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                     {resources.map((resource) => (
    //                       <a
    //                         key={resource.name}
    //                         href={resource.href}
    //                         className="-m-3 p-3 block rounded-md hover:bg-gray-50"
    //                       >
    //                         <p className="text-base font-medium text-gray-900">{resource.name}</p>
    //                         <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
    //                       </a>
    //                     ))}
    //                   </div>
    //                 </div>
    //               </Popover.Panel>
    //             </Transition>
    //           </>
    //         )}
    //       </Popover>
    //     </Popover.Group>
    //     <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
         
    //       <a
    //         href="#"
    //         className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
    //       >
    //         Get Started
    //       </a>
    //     </div>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="duration-200 ease-out"
    //     enterFrom="opacity-0 scale-95"
    //     enterTo="opacity-100 scale-100"
    //     leave="duration-100 ease-in"
    //     leaveFrom="opacity-100 scale-100"
    //     leaveTo="opacity-0 scale-95"
    //   >
    //     <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    //       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
    //         <div className="pt-5 pb-6 px-5">
    //           <div className="flex items-center justify-between">
    //             <div>
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/workflow-mark-orange-600.svg"
    //                 alt="Workflow"
    //               />
    //             </div>
    //             <div className="-mr-2">
    //               <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
    //                 <span className="sr-only">Close menu</span>
    //                 <XIcon className="h-6 w-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="mt-6">
    //             <nav className="grid grid-cols-1 gap-7">
    //               {solutions.map((solution) => (
    //                 <a
    //                   key={solution.name}
    //                   href={solution.href}
    //                   className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
    //                 >
    //                   <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white">
    //                     <solution.icon className="h-6 w-6" aria-hidden="true" />
    //                   </div>
    //                   <div className="ml-4 text-base font-medium text-gray-900">{solution.name}</div>
    //                 </a>
    //               ))}
    //             </nav>
    //           </div>
    //         </div>
    //         <div className="py-6 px-5">
    //           <div className="grid grid-cols-2 gap-4">
    //             <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
    //               Pricing
    //             </a>

    //             <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
    //               Docs
    //             </a>

    //             <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
    //               Enterprise
    //             </a>
    //             {resources.map((resource) => (
    //               <a
    //                 key={resource.name}
    //                 href={resource.href}
    //                 className="text-base font-medium text-gray-900 hover:text-gray-700"
    //               >
    //                 {resource.name}
    //               </a>
    //             ))}
    //           </div>
    //           <div className="mt-6">
    //             <a
    //               href="#"
    //               className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
    //             >
    //               Sign up
    //             </a>
    //             <p className="mt-6 text-center text-base font-medium text-gray-500">
    //               Existing customer?{' '}
    //               <a href="#" className="text-orange-600 hover:text-orange-500">
    //                 Sign in
    //               </a>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
  )
}
