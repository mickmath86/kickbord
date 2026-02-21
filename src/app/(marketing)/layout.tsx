import type { Metadata } from 'next'
import Header from '@/components/header-simple'
import FooterSection from '@/components/footer'
import { BookingModalProvider } from '@/components/booking-modal-provider'

export const metadata: Metadata = {
    title: 'Kickbord - AI Phone Receptionist | Never Miss a Lead Again',
    description: 'Kickbord answers every call 24/7, qualifies your leads, and books appointments automatically. Your AI receptionist that ensures you never lose another customer.',
    keywords: ['AI receptionist', 'automated phone answering', 'lead qualification', 'appointment booking', 'business phone system', '24/7 answering service'],
    authors: [{ name: 'Kickbord' }],
    openGraph: {
        title: 'Kickbord - AI Phone Receptionist',
        description: 'Never miss a lead again. AI-powered phone answering that qualifies leads and books appointments automatically.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Kickbord',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kickbord - AI Phone Receptionist',
        description: 'Never miss a lead again. AI-powered phone answering that qualifies leads and books appointments automatically.',
    },
}

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <BookingModalProvider>
            <Header />
            <main
                role="main"
                className="bg-muted [--color-primary:var(--color-indigo-500)]">
                {children}
            </main>
            <FooterSection />
        </BookingModalProvider>
    )
}