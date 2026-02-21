'use client'

import { useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface BookingModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
    useEffect(() => {
        if (open) {
            const script = document.createElement('script')
            script.src = 'https://links.kickbord.com/js/form_embed.js'
            script.type = 'text/javascript'
            script.async = true
            document.body.appendChild(script)

            return () => {
                document.body.removeChild(script)
            }
        }
    }, [open])

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden p-0">
                <DialogHeader className="px-6 pt-6 pb-4 border-b">
                    <DialogTitle>Book Your Free Call</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[calc(90vh-80px)]">
                    <div className="px-6 pb-6">
                        <iframe
                            src="https://links.kickbord.com/widget/booking/PA9BL9KS5PxCkzn4C6f4"
                            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                            scrolling="no"
                            id="PA9BL9KS5PxCkzn4C6f4_1771647978182"
                        />
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
