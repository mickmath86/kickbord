import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Nav from './components/Nav'

function ScheduleCall() {
  return (
    <div>
      <>
      <Script src="https://assets.calendly.com/assets/external/widget.js"  />
   
      {/* <Nav/> */}
      <Nav />
      <div>
      <div className="calendly-inline-widget w-100 h-screen " data-url="https://calendly.com/mickmath86/15min" ></div>

      </div>
      </>
       
     

    </div>
  )
}

export default ScheduleCall