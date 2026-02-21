'use client'

import { useState, useEffect } from 'react'
import { FadeInView } from '@/components/fade-in-view'

export default function TermsPage() {
    const [activeSection, setActiveSection] = useState('terms')

    useEffect(() => {
        const handleScroll = () => {
            const termsSection = document.getElementById('terms-of-service')
            const privacySection = document.getElementById('privacy-policy')
            
            if (termsSection && privacySection) {
                const termsTop = termsSection.getBoundingClientRect().top
                const privacyTop = privacySection.getBoundingClientRect().top
                
                if (privacyTop <= 200) {
                    setActiveSection('privacy')
                } else if (termsTop <= 200) {
                    setActiveSection('terms')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 120
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sticky Navigation */}
            <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
                <div className="max-w-3xl mx-auto px-6 py-4">
                    <nav className="flex gap-8">
                        <button
                            onClick={() => scrollToSection('terms-of-service')}
                            className={`text-sm font-medium transition-colors ${
                                activeSection === 'terms'
                                    ? 'text-sky-600 border-b-2 border-sky-600 pb-1'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Terms of Service
                        </button>
                        <button
                            onClick={() => scrollToSection('privacy-policy')}
                            className={`text-sm font-medium transition-colors ${
                                activeSection === 'privacy'
                                    ? 'text-sky-600 border-b-2 border-sky-600 pb-1'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Privacy Policy
                        </button>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
                <FadeInView>
                    <div className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
                            Legal Information
                        </h1>
                        <p className="text-gray-600">
                            Last Updated: February 21, 2026
                        </p>
                    </div>
                </FadeInView>

                {/* Terms of Service Section */}
                <FadeInView>
                    <section id="terms-of-service" className="mb-20 scroll-mt-32">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                            Terms of Service
                        </h2>

                        <div className="prose prose-gray max-w-none space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    1. Agreement to Terms
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    These Terms of Service ("Terms") govern your use of services provided by Fleet Ventures Inc., doing business as Kickbord ("Kickbord," "we," "us," or "our"). By using our services or booking an appointment through a Kickbord-powered system, you agree to be bound by these Terms.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    2. Services Provided
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Kickbord provides AI-powered receptionist and appointment booking services on behalf of small business clients ("Business Clients"). Our services include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Automated phone answering and call handling</li>
                                    <li>Lead qualification and customer inquiry management</li>
                                    <li>Appointment scheduling and calendar management</li>
                                    <li>SMS and email appointment confirmations and reminders</li>
                                    <li>Integration with Business Client systems and calendars</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    Kickbord acts as a service provider to Business Clients. When you interact with our AI receptionist or book an appointment, you are ultimately engaging with the Business Client, and Kickbord facilitates that interaction.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    3. User Responsibilities
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    When booking appointments through a Kickbord-powered system, you agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Provide accurate and complete information, including your name, phone number, email address, and appointment details</li>
                                    <li>Arrive on time for scheduled appointments or provide reasonable notice of cancellation</li>
                                    <li>Comply with the Business Client's own terms, policies, and cancellation requirements</li>
                                    <li>Use the service only for lawful purposes and in accordance with these Terms</li>
                                    <li>Not attempt to disrupt, damage, or interfere with the proper functioning of Kickbord's services</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    4. Data Sharing with Business Clients
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You acknowledge and agree that appointment data you provide (including your name, contact information, and appointment details) will be shared with the relevant Business Client for whom you are booking an appointment. This data sharing is necessary to fulfill the appointment booking service. The Business Client may use this information in accordance with their own privacy policies and practices.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    5. Appointment Availability and Modifications
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    While Kickbord strives to provide accurate, real-time appointment availability, we do not guarantee that all displayed time slots will remain available. Business Clients reserve the right to modify, reschedule, or cancel appointments due to unforeseen circumstances, scheduling conflicts, or business needs. Kickbord will make reasonable efforts to notify you of any changes to your appointment.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    6. No Warranties
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Kickbord's services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                                    <li>The service will be uninterrupted, timely, secure, or error-free</li>
                                    <li>Appointment availability information will always be accurate or up-to-date</li>
                                    <li>Any errors or defects in the service will be corrected</li>
                                    <li>The service will meet your specific requirements or expectations</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    7. Limitation of Liability
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    To the maximum extent permitted by law, Fleet Ventures Inc. and Kickbord shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    8. Modifications to Terms
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the "Last Updated" date at the top of this page. Your continued use of Kickbord's services after such modifications constitutes your acceptance of the updated Terms.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    9. Governing Law
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of Kickbord's services shall be subject to the exclusive jurisdiction of the state and federal courts located in California.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    10. Contact Information
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-gray-900 font-medium">Fleet Ventures Inc. (dba Kickbord)</p>
                                    <p className="text-gray-700 mt-2">141 Eugenia Drive</p>
                                    <p className="text-gray-700">Ventura, CA 93003</p>
                                    <p className="text-gray-700 mt-2">
                                        Phone:{' '}
                                        <a href="tel:+18057166513" className="text-sky-600 hover:text-sky-700 underline">
                                            (805) 716-6513
                                        </a>
                                    </p>
                                    <p className="text-gray-700">
                                        Email:{' '}
                                        <a href="mailto:mike@kickbord.com" className="text-sky-600 hover:text-sky-700 underline">
                                            mike@kickbord.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInView>

                {/* Privacy Policy Section */}
                <FadeInView>
                    <section id="privacy-policy" className="mb-20 scroll-mt-32">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                            Privacy Policy
                        </h2>

                        <div className="prose prose-gray max-w-none space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    1. Introduction
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Fleet Ventures Inc., doing business as Kickbord ("we," "us," or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI receptionist and appointment booking services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    2. Information We Collect
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We collect the following types of information when you interact with our services:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Personal Information:</strong> Name, phone number, and email address</li>
                                    <li><strong>Appointment Details:</strong> Preferred appointment times, service type requested, and any notes or special requests you provide</li>
                                    <li><strong>Communication Records:</strong> Records of phone calls, text messages, and emails exchanged through our system</li>
                                    <li><strong>Technical Information:</strong> Device information, IP address, and usage data to improve our services</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    3. How We Collect Information
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We collect information through the following methods:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                                    <li><strong>Booking Forms:</strong> Information you provide when scheduling an appointment through our online booking interface</li>
                                    <li><strong>Phone Calls:</strong> Information you provide during conversations with our AI receptionist</li>
                                    <li><strong>SMS and Email:</strong> Information exchanged through text message and email communications</li>
                                    <li><strong>Automated Collection:</strong> Technical data collected automatically when you interact with our services</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    4. How We Use Your Information
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We use the information we collect for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Appointment Management:</strong> To schedule, confirm, modify, and manage your appointments</li>
                                    <li><strong>Communication:</strong> To send appointment confirmations, reminders, and updates via SMS and email</li>
                                    <li><strong>Business Client Sharing:</strong> To share your appointment information with the relevant small business you are booking with</li>
                                    <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our AI receptionist capabilities</li>
                                    <li><strong>Customer Support:</strong> To respond to your inquiries and provide assistance</li>
                                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    5. SMS Communication and Opt-In
                                </h3>
                                <div className="bg-blue-50 border-l-4 border-sky-500 p-4 mb-3">
                                    <p className="text-gray-800 font-medium">
                                        Important SMS Disclosure:
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        By providing your phone number when booking an appointment, you consent to receive appointment-related SMS text messages from Kickbord on behalf of the business you are booking with. These messages may include appointment confirmations, reminders, and updates. Message frequency varies.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Message and data rates may apply. You can opt out at any time by replying <strong>STOP</strong> to any text message. For help, reply <strong>HELP</strong>.
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    We respect your communication preferences. Opting out of SMS messages will not affect your ability to book appointments, but you may not receive important appointment reminders.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    6. Information Sharing and Disclosure
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We share your information in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>With Business Clients:</strong> We share your appointment information with the small business you are booking with so they can fulfill your appointment</li>
                                    <li><strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating our services, such as Go High Level (GHL) CRM platform for data storage and management</li>
                                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental authority</li>
                                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3 font-medium">
                                    We do not sell your personal information to third parties for marketing purposes.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    7. Data Storage and Security
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Your information may be stored in the Go High Level (GHL) CRM platform and other secure cloud-based systems. We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    8. Data Retention
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Appointment records are typically retained for business and legal compliance purposes. Business Clients may have their own data retention policies that govern how long they keep your information.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    9. Your Rights and Choices
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    You have the following rights regarding your personal information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Access:</strong> You may request access to the personal information we hold about you</li>
                                    <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete information</li>
                                    <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain legal exceptions</li>
                                    <li><strong>Opt-Out:</strong> You may opt out of SMS communications by replying STOP to any text message</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    To exercise any of these rights or submit a data deletion request, please contact us at{' '}
                                    <a href="mailto:mike@kickbord.com" className="text-sky-600 hover:text-sky-700 underline">
                                        mike@kickbord.com
                                    </a>
                                    . We will respond to your request within a reasonable timeframe.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    10. Children's Privacy
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete it.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    11. Changes to This Privacy Policy
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    12. Contact Us
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-gray-900 font-medium">Fleet Ventures Inc. (dba Kickbord)</p>
                                    <p className="text-gray-700 mt-2">141 Eugenia Drive</p>
                                    <p className="text-gray-700">Ventura, CA 93003</p>
                                    <p className="text-gray-700 mt-2">
                                        Phone:{' '}
                                        <a href="tel:+18057166513" className="text-sky-600 hover:text-sky-700 underline">
                                            (805) 716-6513
                                        </a>
                                    </p>
                                    <p className="text-gray-700">
                                        Email:{' '}
                                        <a href="mailto:mike@kickbord.com" className="text-sky-600 hover:text-sky-700 underline">
                                            mike@kickbord.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInView>

                {/* Footer Note */}
                <FadeInView>
                    <div className="border-t border-gray-200 pt-8">
                        <p className="text-sm text-gray-500 text-center">
                            © {new Date().getFullYear()} Fleet Ventures Inc. (dba Kickbord). All rights reserved.
                        </p>
                    </div>
                </FadeInView>
            </div>
        </div>
    )
}
