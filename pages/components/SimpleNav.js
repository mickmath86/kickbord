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
      width="auto"
      height="auto"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      
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
      {/* <rect width="48" height="48" rx="8" fill="#FFEDD5" /> */}
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
      {/* <rect width="48" height="48" rx="8" fill="#FFEDD5" /> */}
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
  <svg id="way"  className="bg-sky-100 rounded-md p-2 h-12 w-12" viewBox="0 0 300 300" width="48" xmlns="http://www.w3.org/2000/svg">
    
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
    <svg version="1.1" className="bg-sky-100 rounded-md p-2 h-12 w-12" id="way2" xmlns="http://www.w3.org/2000/svg">

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
    href: '/solutions#ecommerce-strategy',
    description: "Speak directly to your customers in a more meaningful way",
    icon: IconThree,
  },
  {
    name: 'Conversion Rate Optimization',
    href: '/solutions#cvr-optimization',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: IconTwo,
  },
  {
    name: 'Analytics',
    href: '/solutions#analytics',
    description: 'Get a better understanding of where your traffic is coming from and how its performing',
    icon: CubeTransparentIcon,

  },
  {
    name: 'Integrations',
    href: '/solutions#integrations',
    description: "Connect with third-party tools that youre already using.",
    icon: ChipIcon,
  },
  {
    name: 'Automations',
    href: '/solutions#automations',
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


export default function Nav() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start  lg:w-0 lg:flex-1">
          
            <span className="sr-only">Workflow</span>
            <Link href="/">
            <img
              className="h-8 w-auto border-2 border-black rounded-md p-1 sm:h-10"
              src="/images/logo.png"
              alt=""
            />
          </Link>
        </div>

      </div> 
    </Popover>
  )
}
