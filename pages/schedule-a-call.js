import React from 'react'
import Link from 'next/link'
import Nav from './components/SimpleNav'
import Typeform from './components/Typeform'


export default function scheduleACall() {
  return (
    <>  
     <Nav />
      <div className="mt-32 mb-16">
          <h1 className="max-w-4xl  mx-auto text-center text-7xl">Book a free 30 minute discovery call</h1>
          <Link href="/conversion"><button className="bg-blue-500 px-4 py-2">Conversion</button></Link>
      </div>
      <div className="max-w-5xl mx-auto h-[50vh] lg:h-[75vh]">
        <Typeform />
      </div>
     
    
    </>
   
  )
}
