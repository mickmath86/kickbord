import React from 'react'
import Link from 'next/link'

import Nav from './components/Nav'
import AboutHero from './components/about/AboutHero'
import AboutContent from './components/about/AboutContent'
import About from './components/About'
import Footer from './components/Footer'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]
function about() {
  return (
   <>
   <Nav />
   <div id="about" className="py-24 max-w-3xl  text-7xl mx-auto md:max-w-6xl  font-light">
    <div className="relative ">
      <div className="hidden md:block absolute "><img src="/images/ui/headbg.png" alt="" /></div>
        
    </div>
    <div className="text-left lg:text-center max-w-5xl px-8 relative ">
        <h2 className="mb-4">
          <span className="font-bold text-7xl">Kickbord</span>  is
        </h2>
        <h3 className="text-4xl text-left lg:text-center lg:text-7xl">
        a group of agency lifers that get <span className="underline text-sky-500">supercharged</span> at the idea of helping brands grow and develop into their full potential. 
        </h3>
    </div>
   
    




   
    <div className="text-4xl lg:text-6xl lg:mt-24 px-8">
    <div id="purpose"className=" space-y-6">
        <h2 className="font-bold mt-24  ">
          Our Purpose
        </h2>
        <h3 className=""> 
          is to work with brands to develop strategies that will help them grow and succeed in the ecommerce space and to provide guidance and advice on how to navigate the ever-changing landscape of ecommerce.
        </h3>
   
        <p className="text-4xl">If you're a brand looking to take your place in the next generation of brand greatness, we'd love to help you get there. Contact us today to learn more about what we can do for you.</p>

    </div> 
    <div id="belief" className="space-y-6 ">
        <h2 className="font-bold mt-24 ">
          Our Belief
        </h2>
        <h3> 
           is that key to successful partnerships is making sure that there is an alignment of incentives between the client and agency. That's why we structure all of our agreements so that our success means your success.
        </h3>
        
        <p className="text-4xl">We also believe in always putting the client first. We'll never try to sell you something that we don't think is right for your brand. Our goal is always to help you grow and succeed.</p>

    </div> 
    




    

    </div>
    
   </div>
   {/* <AboutHero />
   <AboutContent /> */}
   {/* start */}
   <div id="background" className="relative bg-white mb-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/kb-about-img.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-sky-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-600 via-sky-600 opacity-50" />
              <div className="relative px-8">
                <div>
                  {/* <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                    alt="Workcation"
                  /> */}
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    {/* <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-sky-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg> */}
                    {/* <p className="relative">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                      Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                    </p> */}
                  </div>

                  {/* <footer className="mt-4">
                    <p className="text-base font-semibold text-sky-200">Sarah Williams, CEO at Workcation</p>
                  </footer> */}
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
            Background
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
              After working with some of the largest brands in the world <span className="font-bold">(Google, LinkedIn, FX, P&G)</span>, Kickbord founder Mike Mathias started decided to pull together a new team and focus in their skillset on helping new up-and-coming companies make their way into the next generation of brand greatness.  
              </p>
              <p className="text-base leading-7">
              At Kickbord, we understand that ecommerce is the future of brand growth and development. We also know that it can be difficult for new brands to make their way in this ever-changing landscape. That's why we're dedicated to helping next generation brands reach their full potential.

              </p>
         
            </div>
          </div>

          
        </div>
      </div>
    </div>
    {/* end */}
   
    <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto">
              <div className="relative shadow-xl sm:overflow-hidden">
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
                    <span className="block text-sky-400">Boost your brand awareness.</span>
                    <span className="block  text-white">Start working with Kickbord today.</span>
                  </h1>
                  
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className=" mx-auto">
                      <Link
                        href="/schedule-a-call"
                        
                      >
                        <div className="flex cursor-pointer items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sky-700 bg-white hover:bg-sky-50 sm:px-8">
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
   <Footer />

   </>
  )
}

export default about