'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import { LogoCloud } from '@/components/logo-cloud'

import { PlatformFeatures } from '@/app/(marketing)/(home)/sections/platform-features'
import FeaturesSection from '@/components/features-2'
import { AnalyticsFeatures } from '@/app/(marketing)/(home)/sections/analytics-features'
import { TestimonialsSection } from '@/app/(marketing)/(home)/sections/testimonials-section'
import { CallToAction } from '@/components/call-to-action'
import { HeroIllustration } from '@/components/illustrations/hero-illustration'
import { ProductDirectionFeaturesSection } from '@/app/(marketing)/(home)/sections/product-direction-features'
import { MoreFeatures } from '@/app/(marketing)/(home)/sections/more-features'
import HowItWorksSection from '@/components/how-it-works-4'
import AboutSection from '@/components/about-section'
import Pricing from '@/components/pricing'
import { useBookingModal } from '@/components/booking-modal-provider'
import { FadeInView } from '@/components/fade-in-view'

export default function Home() {
    const { openBookingModal, openDemoCallModal } = useBookingModal()
    
    const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Check if desktop (screen width >= 768px)
        if (window.innerWidth >= 768) {
            e.preventDefault()
            openDemoCallModal()
        }
        // On mobile, let the default tel: link work
    }
    
    return (
        <>
            <section>
                <div className="bg-gray-50 p-10 pt-32 lg:pt-44">
                    <FadeInView>
                        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
                            <div className="text-center">
                                <h1 className="text-gray-900 mx-auto text-balance text-5xl font-semibold lg:text-6xl xl:tracking-tight">
                                    Your Business Is Open. <br />Is Your Phone?
                                </h1>

                                <div className="mx-auto mb-20 mt-4 max-w-2xl">
                                    <p className="text-gray-600 mb-8 text-balance text-lg lg:text-xl">
                                        Kickbord answers every call 24/7, qualifies your leads, and books appointments automatically — so you never lose another customer.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-sky-500 hover:bg-sky-600 text-white px-8 w-full sm:w-auto">
                                            <a href="tel:+18057166513" onClick={handleDemoClick as any}>Hear the Live Demo</a>
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            onClick={openBookingModal}
                                            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 w-full sm:w-auto">
                                            Book a Free Call
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInView>
                    <FadeInView delay={0.2}>
                        <HeroIllustration />
                    </FadeInView>
                </div>
                {/* <LogoCloud /> */}
            </section>
           
            <FadeInView>
                <AnalyticsFeatures />
            </FadeInView>
            <FadeInView>
                <FeaturesSection />
            </FadeInView>
            {/* <PlatformFeatures />
            <ProductDirectionFeaturesSection /> */}
            <FadeInView>
                <HowItWorksSection />
            </FadeInView>
            <FadeInView>
                <AboutSection />
            </FadeInView>
            {/* <Pricing /> */}
            {/* <MoreFeatures /> */}
            {/* <TestimonialsSection /> */}
            <FadeInView>
                <CallToAction />
            </FadeInView>
        </>
    )
}