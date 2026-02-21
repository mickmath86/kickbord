'use client'

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { AnalyticsFeatures } from '@/app/(marketing)/(home)/sections/analytics-features'
import FeaturesSection from '@/components/features-2'
import { CallToAction } from '@/components/call-to-action'
import HowItWorksSection from '@/components/how-it-works-4'
import AboutSection from '@/components/about-section'
import { FadeInView } from '@/components/fade-in-view'
import Link from 'next/link'

export default function FormPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        smsConsent: false
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        setSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return (
        <>
            <section>
                <div className="bg-gray-50 p-10 pt-32 lg:pt-44 pb-20">
                    <FadeInView>
                        <div className="relative z-10 mx-auto max-w-6xl px-6">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Column - Headline and Copy */}
                                <div>
                                    <h1 className="text-gray-900 text-balance text-4xl font-semibold lg:text-5xl mb-4">
                                        Your Business Is Open. <br />Is Your Phone?
                                    </h1>
                                    <p className="text-gray-600 text-balance text-lg lg:text-xl mb-6">
                                        Kickbord answers every call 24/7, qualifies your leads, and books appointments automatically — so you never lose another customer.
                                    </p>
                                    <p className="text-gray-600 text-balance">
                                        Fill out the form to get started and see how Kickbord can transform your business communications.
                                    </p>
                                </div>

                                {/* Right Column - Form or Success Message */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                                    {!submitted ? (
                                        <>
                                            {/* Business Name */}
                                            <div className="text-center mb-6">
                                                <h2 className="text-gray-900 text-2xl font-semibold mb-2">
                                                    Get Started with Kickbord
                                                </h2>
                                                <p className="text-sm text-gray-600">
                                                    Fleet Ventures Inc. (dba Kickbord)
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* First Name */}
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                                        />
                                    </div>

                                    {/* SMS Consent Checkbox - NOT MANDATORY */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <input
                                                type="checkbox"
                                                id="smsConsent"
                                                name="smsConsent"
                                                checked={formData.smsConsent}
                                                onChange={handleChange}
                                                className="mt-1 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                                            />
                                            <label htmlFor="smsConsent" className="text-sm text-gray-700 leading-relaxed">
                                                I agree to receive appointment confirmation and reminder SMS messages from Fleet Ventures Inc. on behalf of Kickbord. These messages may include appointment confirmations, reminders, and updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help.
                                            </label>
                                        </div>
                                        
                                        <div className="text-xs text-gray-600 space-y-1 pl-7">
                                            <p><strong>Message Type:</strong> Appointment confirmations, reminders, and updates</p>
                                            <p><strong>Message Frequency:</strong> Varies based on your appointments</p>
                                            <p><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe</p>
                                            <p><strong>Help:</strong> Reply HELP for assistance</p>
                                            <p><strong>Rates:</strong> Message and data rates may apply</p>
                                        </div>
                                    </div>

                                    {/* Terms & Privacy Policy Link */}
                                    <div className="text-sm text-gray-600 text-center">
                                        By submitting this form, you agree to our{' '}
                                        <Link href="/terms" className="text-sky-600 hover:text-sky-700 underline">
                                            Terms of Service & Privacy Policy
                                        </Link>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                                        Submit
                                    </Button>

                                                {/* Fleet Ventures DBA Notice */}
                                                <p className="text-xs text-gray-500 text-center">
                                                    Kickbord is a dba of Fleet Ventures Inc.
                                                </p>
                                            </form>
                                        </>
                                    ) : (
                                        /* Success Message */
                                        <div className="text-center py-12">
                                            <div className="mb-6">
                                                <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                                Thank You!
                                            </h2>
                                            <p className="text-lg text-gray-600 mb-6">
                                                We've received your information and will be in touch soon.
                                            </p>
                                            <p className="text-gray-600 mb-8">
                                                A member of our team will reach out to you shortly to discuss how Kickbord can help your business never miss another call.
                                            </p>
                                            <Button
                                                onClick={() => setSubmitted(false)}
                                                variant="outline"
                                                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                                                Submit Another Response
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </FadeInView>
                </div>
            </section>
           
            <FadeInView>
                <AnalyticsFeatures />
            </FadeInView>
            <FadeInView>
                <FeaturesSection />
            </FadeInView>
            <FadeInView>
                <HowItWorksSection />
            </FadeInView>
            <FadeInView>
                <AboutSection />
            </FadeInView>
            <FadeInView>
                <CallToAction />
            </FadeInView>
        </>
    )
}
