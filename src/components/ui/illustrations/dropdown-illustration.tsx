import { HelpCircle, LogOut, MessageCircle, Plus, Settings, Settings2, User } from 'lucide-react'
import Image from 'next/image'

type User = {
    id: number
    name: string
    avatar: string
}

const USERS: User[] = [
    { id: 1, name: 'Méschac Irung', avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4' },
    { id: 2, name: 'Bernard Ng', avatar: 'https://avatars.githubusercontent.com/u/31113941?v=4' },
    { id: 3, name: 'Theo Ng', avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4' },
    { id: 4, name: 'Glodie Ng', avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4' },
]

export const DropdownIllustration = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-black p-2">
            <div className="mask-r-from-50% absolute inset-0 items-center [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-emerald-500)_60%,var(--color-white)_100%)]"></div>
            <div className="mask-l-from-35% absolute inset-0 items-center [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-sky-500)_60%,var(--color-white)_100%)]"></div>

            <div className="relative overflow-hidden rounded-xl border border-dashed border-white/25 bg-white/10 pt-8 shadow-lg shadow-black/20">
                <div className="absolute inset-0 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] opacity-5 [background-size:12px_12px]"></div>
                <div className="absolute inset-0 translate-y-1/2 rounded-full border border-dotted bg-white/15"></div>

                <div className="flex items-center justify-center ">
                    
                        <Image src="/mike.png" alt="Mike Mathias" width={500} height={240} loading="lazy" className="z-10 grayscale"/>
                       
                </div>
                </div>
            </div>
       
    )
}