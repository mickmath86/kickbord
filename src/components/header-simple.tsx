'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/components/booking-modal-provider'

export default function Header() {
  const { openDemoCallModal } = useBookingModal()
  
  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if desktop (screen width >= 768px)
    if (window.innerWidth >= 768) {
      e.preventDefault()
      openDemoCallModal()
    }
    // On mobile, let the default tel: link work
  }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/kickbord-text-logo.png" 
              alt="Kickbord" 
              width={140} 
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          
          <Button asChild className="bg-sky-500 hover:bg-blue-700 text-white">
            <a href="tel:+18057166513" onClick={handleDemoClick}>Demo Our Voice Agent</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
