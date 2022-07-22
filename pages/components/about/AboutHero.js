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
   
    </>
    
    
  )
}
