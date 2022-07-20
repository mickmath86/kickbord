import React from 'react'

export default function AboutHero() {
  return (
    <>
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
                  <h1 className="text-center  text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    
                    <span className="inline  underline underline-offset-4  text-sky-500">About</span>
                    <span className="inline  text-sky-100"> Us </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-sky-200 sm:max-w-3xl">
                  If you're looking to scale your ecommerce business, you need time-tested solutions that will help you grow.  At Kickbord, we have experts who have worked with some of the biggest brands in the world that can help you scale your business quickly and efficiently.  We'll help you create a roadmap to success and ensure that your business is on the right track for growth.

                  </p>
                 
                </div>
              </div>
            </div>
        
    </header>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Used by the world's most average companies
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
                >
                  Create Account
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 text-xl cursor-pointer group hover:bg-white flex items-center justify-center py-8 px-8 bg-gray-50 transition ease-in-out duration:300">
              <h1 className="font-bold uppercase group-hover:text-sky-500 text-gray-600">Introduction</h1>
            </div>
            <div className="col-span-1 text-xl cursor-pointer group hover:bg-white flex items-center justify-center py-8 px-8 bg-gray-50 transition ease-in-out duration:300">
              <h1 className="font-bold uppercase group-hover:text-sky-500 text-gray-600">Our Philosophy</h1>
            </div>
            <div className="col-span-1 text-xl cursor-pointer group hover:bg-white flex items-center justify-center py-8 px-8 bg-gray-50 transition ease-in-out duration:300">
              <h1 className="font-bold uppercase group-hover:text-sky-500 text-gray-600">Our Story</h1>
            </div>
            <div className="col-span-1 text-xl cursor-pointer group hover:bg-white flex items-center justify-center py-8 px-8 bg-gray-50 transition ease-in-out duration:300">
              <h1 className="font-bold uppercase group-hover:text-sky-500 text-gray-600">Our Story</h1>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
    
  )
}
