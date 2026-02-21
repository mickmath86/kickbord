import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { CardTitle, CardDescription } from '@/components/ui/card'

export default function Pricing() {
    return (
        <section className="bg-background relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl lg:tracking-tight">Simple Pricing. Serious Results.</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">No contracts. No setup fees. Cancel anytime.</p>

                    <div className="my-12">
                        <div className="text-center text-sm text-muted-foreground">
                            Month-to-month · No contracts · Cancel anytime
                        </div>
                    </div>
                </div>
                <div className="@container">
                    <div className="@3xl:max-w-2xl mx-auto max-w-sm">
                        <div className="@3xl:grid-cols-2 grid gap-6 *:p-8">
                            <div className="rounded-(--radius) row-span-4 grid grid-rows-subgrid gap-8 border">
                                <div className="self-end">
                                    <CardTitle className="text-lg font-medium">AI Receptionist</CardTitle>
                                    <div className="text-muted-foreground mt-1 text-balance text-sm">For businesses that want to stop missing calls immediately</div>
                                </div>

                                <div>
                                    <div className="text-3xl font-semibold">$497</div>
                                    <div className="text-muted-foreground text-sm">per month</div>
                                </div>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full">
                                    <Link href="#booking">Book a Free Call</Link>
                                </Button>

                                <ul
                                    role="list"
                                    className="space-y-3 text-sm">
                                    {['24/7 AI phone answering', 'Lead qualification on every call', 'Automatic appointment booking', 'Calendar integration', 'Call analytics dashboard', 'Weekly performance report', 'Custom trained on your business', 'Setup in 48 hours'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check
                                                className="text-muted-foreground size-3"
                                                strokeWidth={3.5}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ring-border bg-card rounded-(--radius) shadow-black/6.5 row-span-4 grid grid-rows-subgrid gap-8 shadow-xl ring-1 relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                                </div>
                                <div className="self-end">
                                    <CardTitle className="text-lg font-medium">Complete Bundle</CardTitle>
                                    <CardDescription className="text-muted-foreground mt-1 text-balance text-sm">For businesses that want the full digital foundation</CardDescription>
                                </div>

                                <div>
                                    <div className="text-3xl font-semibold">$996</div>
                                    <div className="text-muted-foreground text-sm">per month</div>
                                </div>
                                <Button
                                    asChild
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    <Link href="#booking">Book a Free Call</Link>
                                </Button>

                                <ul
                                    role="list"
                                    className="space-y-3 text-sm">
                                    {['Everything in AI Receptionist, plus:', 'Professional website built for you', 'Mobile optimized and SEO ready', 'Integrated online booking system', 'Hosting included', 'Content written for your business', 'Google Business Profile optimization', 'You own everything'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="group flex items-center gap-2 first:font-medium">
                                            <Check
                                                className="text-muted-foreground size-3 group-first:hidden"
                                                strokeWidth={3.5}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}