import { CalendarDays, Clock, Zap } from 'lucide-react'
import Image from 'next/image'

export function AnalyticsFeatures() {
    return (
        <section className="@container py-16 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="@3xl:grid-cols-3 @3xl:gap-12 relative grid">
                    <div className="@3xl:pb-3 flex flex-col justify-between gap-12">
                        <div>
                            <h2 className="relative z-10 text-balance text-4xl font-semibold md:text-5xl text-gray-900">Everything Running. While You're Working.</h2>
                            <p className="text-gray-600 my-6 max-w-2xl text-lg">Kickbord handles your phones so you can focus on the job. Every call answered, every lead qualified, every appointment booked — automatically.</p>
                        </div>

                        <div className="max-w-56 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="font-medium text-gray-900">24/7 Availability</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="font-medium text-gray-900">Instant Booking</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <CalendarDays className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="font-medium text-gray-900">Lead Qualification</span>
                            </div>
                        </div>
                    </div>
                    <div className="@3xl:col-span-2 mt-auto h-fit max-lg:-mx-6 max-lg:overflow-hidden max-lg:pb-16 max-lg:pl-6 max-lg:pt-12">
                        <div className="bg-white min-w-3xl ring-gray-200 overflow-hidden rounded-2xl p-1 shadow-2xl shadow-blue-900/20 ring-1 backdrop-blur">
                            <div className="relative aspect-video origin-top rounded-xl bg-gray-50 p-6">
                                {/* Dashboard Mockup */}
                                <Image 
                                    src="/feature-image-1.png" 
                                    alt="Kickbord Dashboard" 
                                    className="w-full h-full object-cover rounded-lg -ml-40 md:ml-0"
                                    width={800}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="@4xl:gap-12 @4xl:grid-cols-3 relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:mt-16">
                    <div className="space-y-1.5">
                        <Clock className="fill-blue-100 text-blue-600 size-6" />
                        <h3 className="mt-3 font-medium text-gray-900">Never Miss a Call</h3>
                        <p className="text-gray-600 text-sm">Your AI receptionist answers every call, day or night, even on weekends and holidays.</p>
                    </div>
                    <div className="space-y-1.5">
                        <Zap className="fill-blue-100 text-blue-600 size-6" />
                        <h3 className="mt-3 font-medium text-gray-900">Set Up in 48 Hours</h3>
                        <p className="text-gray-600 text-sm">We train your AI on your business and go live in two days. No technical knowledge required.</p>
                    </div>
                    <div className="space-y-1.5">
                        <CalendarDays className="fill-blue-100 text-blue-600 size-6" />
                        <h3 className="mt-3 font-medium text-gray-900">Bookings on Autopilot</h3>
                        <p className="text-gray-600 text-sm">Appointments land directly in your calendar. No back and forth, no missed opportunities.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}