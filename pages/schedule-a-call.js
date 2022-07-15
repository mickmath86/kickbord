import React from 'react'
import Nav from './components/SimpleNav'
import Typeform from './components/Typeform'


export default function scheduleACall() {
  return (
    <>  
     <Nav />
      <div className="mt-32 mb-16">
          <h1 className="max-w-4xl  mx-auto text-center text-7xl">Book a free 30 minute discovery call</h1>
      </div>
      <div className="max-w-5xl mx-auto h-[50vh] lg:h-[75vh]">
        <Typeform />
      </div>
     
    
    </>
   
  )
}
