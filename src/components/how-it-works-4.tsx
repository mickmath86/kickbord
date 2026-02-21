'use client'

import { Button } from '@/components/ui/button'
import { ArrowBigRight, ClipboardList, Phone, CalendarCheck } from 'lucide-react'
import { useBookingModal } from '@/components/booking-modal-provider'

export default function HowItWorksSection() {
    const { openBookingModal } = useBookingModal()
    return (
        <section className="overflow-hidden">
            <div className="bg-background m-4 rounded-[2rem] py-24">
                <div className="@container relative mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-primary">OUR PROCESS</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Up and Running in 48 Hours</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">No technical setup on your end. We handle everything and hand you a fully trained AI receptionist ready to take calls.</p>
                    </div>

                    <div className="@3xl:grid-cols-3 my-20 grid gap-12">
                        <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
                            <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">1</span>

                            <div className="relative self-center">
                                <div className="mx-auto w-fit">
                                    <div className="bg-blue-100 rounded-2xl p-6">
                                        <ClipboardList className="w-16 h-16 text-blue-600" />
                                    </div>
                                </div>
                                <ArrowBigRight className="@3xl:block fill-illustration stroke-illustration absolute inset-y-0 right-0 my-auto hidden translate-x-[150%] drop-shadow" />
                            </div>

                            <div className="space-y-3 self-end">
                                <h3 className="text-foreground text-lg font-medium">Tell Us About Your Business</h3>
                                <p className="text-muted-foreground text-balance">Fill out a short onboarding form. Your services, your FAQs, your hours, your calendar link. Takes 10 minutes.</p>
                            </div>
                        </div>

                        <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
                            <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">2</span>

                            <div className="relative">
                                <div className="mx-auto w-fit self-center">
                                    <div className="bg-blue-100 rounded-2xl p-6">
                                        <Phone className="w-16 h-16 text-blue-600" />
                                    </div>
                                </div>
                                <ArrowBigRight className="@3xl:block fill-illustration stroke-illustration absolute inset-y-0 right-0 my-auto hidden translate-x-[150%] drop-shadow" />
                            </div>

                            <div className="space-y-3 self-end">
                                <h3 className="text-foreground text-lg font-medium">We Build and Train Your AI</h3>
                                <p className="text-muted-foreground text-balance">We configure your AI receptionist, train it on your business, and test it end to end. You approve before anything goes live.</p>
                            </div>
                        </div>

                        <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
                            <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">3</span>

                            <div className="mx-auto flex w-fit self-center">
                                <div className="bg-green-100 rounded-2xl p-6">
                                    <CalendarCheck className="w-16 h-16 text-green-600" />
                                </div>
                            </div>

                            <div className="space-y-3 self-end">
                                <h3 className="text-foreground text-lg font-medium">Calls Answered. Bookings Made.</h3>
                                <p className="text-muted-foreground text-balance">Your AI goes live and starts answering calls immediately. Appointments land in your calendar. You focus on the work.</p>
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={openBookingModal}
                        className="mx-auto flex w-full sm:w-fit bg-sky-500 hover:bg-blue-700 text-white">
                        Book a Free Call
                    </Button>
                </div>
            </div>
        </section>
    )
}