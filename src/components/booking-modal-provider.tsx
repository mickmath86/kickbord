'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { BookingModal } from '@/components/booking-modal'
import { DemoCallModal } from '@/components/demo-call-modal'

interface BookingModalContextType {
    openBookingModal: () => void
    closeBookingModal: () => void
    openDemoCallModal: () => void
    closeDemoCallModal: () => void
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined)

export function BookingModalProvider({ children }: { children: ReactNode }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [isDemoCallOpen, setIsDemoCallOpen] = useState(false)

    const openBookingModal = () => setIsBookingOpen(true)
    const closeBookingModal = () => setIsBookingOpen(false)
    const openDemoCallModal = () => setIsDemoCallOpen(true)
    const closeDemoCallModal = () => setIsDemoCallOpen(false)

    return (
        <BookingModalContext.Provider value={{ 
            openBookingModal, 
            closeBookingModal,
            openDemoCallModal,
            closeDemoCallModal
        }}>
            {children}
            <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
            <DemoCallModal open={isDemoCallOpen} onOpenChange={setIsDemoCallOpen} />
        </BookingModalContext.Provider>
    )
}

export function useBookingModal() {
    const context = useContext(BookingModalContext)
    if (!context) {
        throw new Error('useBookingModal must be used within BookingModalProvider')
    }
    return context
}
