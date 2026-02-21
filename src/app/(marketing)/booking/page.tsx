'use client'

import { useEffect } from 'react'
import { FadeInView } from '@/components/fade-in-view'

export default function BookingPage() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://links.kickbord.com/js/form_embed.js'
        script.type = 'text/javascript'
        script.async = true
        document.body.appendChild(script)

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-12 sm:py-20">
                <FadeInView>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
                            Book Your Free Call
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Schedule a time to speak with our team and learn how Kickbord can help you never miss another lead.
                        </p>
                    </div>
                </FadeInView>

                <FadeInView delay={0.2}>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                        <iframe
                            src="https://links.kickbord.com/widget/booking/PA9BL9KS5PxCkzn4C6f4"
                            style={{ 
                                width: '100%', 
                                border: 'none', 
                                overflow: 'hidden', 
                                minHeight: '700px' 
                            }}
                            scrolling="no"
                            id="PA9BL9KS5PxCkzn4C6f4_booking_page"
                        />
                    </div>
                </FadeInView>

                <FadeInView delay={0.3}>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            Have questions? Email us at{' '}
                            <a 
                                href="mailto:mike@kickbord.com" 
                                className="text-sky-600 hover:text-sky-700 underline"
                            >
                                mike@kickbord.com
                            </a>
                        </p>
                    </div>
                </FadeInView>
            </div>
        </div>
    )
}
