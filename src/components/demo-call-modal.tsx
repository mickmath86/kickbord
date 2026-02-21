'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

interface DemoCallModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function DemoCallModal({ open, onOpenChange }: DemoCallModalProps) {
    const phoneNumber = '+1 (805) 716-6513'
    const telLink = 'tel:+18057166513'

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                        <Phone className="w-6 h-6 text-sky-500" />
                        Call Our AI Voice Agent
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                        Experience Kickbord's AI receptionist in action
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <p className="text-sm text-gray-600 mb-3">Phone Number</p>
                        <a 
                            href={telLink}
                            className="text-3xl font-semibold text-gray-900 hover:text-sky-600 transition-colors"
                        >
                            {phoneNumber}
                        </a>
                    </div>
                    
                    <div className="space-y-3">
                        <Button 
                            asChild 
                            className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                            size="lg"
                        >
                            <a href={telLink}>
                                <Phone className="w-5 h-5 mr-2" />
                                Call from Computer
                            </a>
                        </Button>
                        
                        <p className="text-sm text-gray-500 text-center">
                            Or dial the number above from your phone
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
