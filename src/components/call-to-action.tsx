'use client'

import { Button } from '@/components/ui/button'
import { CtaIllustration } from '@/components/illustrations/cta-illustration'
import { useBookingModal } from '@/components/booking-modal-provider'

export function CallToAction() {
    const { openBookingModal, openDemoCallModal } = useBookingModal()
    
    const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Check if desktop (screen width >= 768px)
        if (window.innerWidth >= 768) {
            e.preventDefault()
            openDemoCallModal()
        }
        // On mobile, let the default tel: link work
    }
    
    return (
        <section className="relative border-b">
            <div className="mask-b-from-65% absolute inset-0">
                <CtaIllustration />
            </div>
            <div className="relative mx-auto max-w-5xl px-6">
                <div className="relative overflow-hidden p-8 md:px-32 md:py-20">
                    <div className="relative text-center">
                        <h2 className="text-balance text-4xl font-semibold md:text-5xl">Never Miss a Lead Again</h2>
                        <p className="text-muted-foreground mb-6 mt-4 text-balance">Your AI receptionist answers every call, qualifies every lead, and books appointments automatically — 24/7.</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white w-full sm:w-auto">
                                <a href="tel:+18057166513" onClick={handleDemoClick}>Demo the Voice Agent</a>
                            </Button>
                            <Button variant="outline" onClick={openBookingModal} className="w-full sm:w-auto">
                                Book a Call Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}