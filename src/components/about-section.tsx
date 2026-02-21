import { Button } from '@/components/ui/button'
import { ChevronRight, Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { DropdownIllustration } from "@/components/ui/illustrations/dropdown-illustration"
import Link from 'next/link'

export default function FeaturesSection() {
    return (
        <section className="bg-background overflow-hidden py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
                    <div>
                        <div className="max-w-md">
                            <h2 className="text-foreground text-balance text-4xl font-semibold">Big Agency Thinking. Built for Small Business.</h2>
                            <p className="my-6 text-balance text-lg">Why Kickbord exists</p>
                            <p className="text-muted-foreground mb-4">
                                For over a decade I worked inside some of the world's leading digital agencies — including R/GA, a Madison Avenue agency — producing campaigns and building digital products for brands like Google, Nike, Samsung, BBC, Verizon, and many others.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                I watched these companies invest millions into systems, technology, and infrastructure that made them impossible to compete with. Smart automation, always-on customer experiences, data-driven everything.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                Then I got into real estate. And I saw the other side — talented, hardworking business owners who were losing customers simply because they couldn't answer the phone fast enough. Not because they weren't good at what they do. Because they didn't have the tools.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                That gap bothered me. The technology exists. It just wasn't being packaged in a way that small businesses could actually use.
                            </p>
                            <p className="text-muted-foreground">
                                Kickbord is my answer to that. I built it to take everything I learned from a decade of agency work at the highest level and make it accessible to the businesses that need it most — so you can compete, grow, and stop leaving money on the table.
                            </p>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="space-y-1">
                                    <div className="font-semibold text-gray-900">Mike Mathias</div>
                                    <div className="text-sm text-gray-600">Kickbord Founder</div>
                                    {/* <div className="mt-3 h-12 flex items-center">
                                        <div className="text-2xl font-signature text-gray-400 italic">Mike Mathias</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <DropdownIllustration />
                </div>

            
            </div>
        </section>
    )
}