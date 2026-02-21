import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    {
        group: 'Product',
        items: [
            {
                title: 'Features',
                href: '#',
            },
            {
                title: 'Solution',
                href: '#',
            },
            {
                title: 'Partnerships',
                href: '#',
            },
            {
                title: 'Mobile App',
                href: '#',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'About',
                href: '#',
            },
            {
                title: 'Licence',
                href: '#',
            },
            {
                title: 'Privacy',
                href: '#',
            },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer
            role="contentinfo"
            className="py-8 sm:py-20 lg:pt-32">
            <div className="mx-auto max-w-5xl  px-6">
                
                
                <div className="flex flex-wrap justify-between gap-4 items-center">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                        <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} Kickbord a Fleet Ventures Company, All rights reserved</span>
                        <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm underline transition-colors">
                            Terms & Privacy Policy
                        </Link>
                    </div>

                    <div className="ring-foreground/5 bg-card flex items-center gap-2 rounded-full border border-transparent py-1 pl-2 pr-4 shadow ring-1">
                        <div className="relative flex size-3">
                            <span className="duration-1500 absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100"></span>
                            <span className="relative m-auto block size-1 rounded-full bg-emerald-500"></span>
                        </div>
                        <span className="text-sm">All Systems Normal</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}