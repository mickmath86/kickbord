import {React , useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Nav from './components/Nav'
import Typeform from './components/Typeform'

import Footer from './components/Footer'




export default function scheduleACall() {
  
  return (
    <>  
    <Head>
    <title>Kickbord | Schedule a Call</title>
      {/* <Script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async /> */}
     
    </Head>
     <Nav />
      <div className="mt-32 mb-16">
          <h1 className="max-w-4xl  mx-auto text-center text-7xl">Book a free 30 minute discovery call</h1>
          {/* <Link href="/conversion"><button className="bg-blue-500 px-4 py-2">Conversion</button></Link> */}
      </div>
      {/* <div className="h-auto">
        <Calendly />
      </div> */}
      
      
     

      <div className="max-w-5xl mx-auto h-[75vh] lg:h-[75vh]">
        <Typeform />
       
      </div>  
     <Footer />
    
    </>
   
  )
}

