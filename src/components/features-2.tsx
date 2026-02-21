export default function FeaturesSection() {
    return (
        <section className="bg-gray-50 @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                        THE DIFFERENCE IS CLEAR
                    </div> */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your Business, Before and After Kickbord
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See what changes when your phone never goes unanswered again.
                    </p>
                </div>

                {/* Cards */}
                <div className="ring-gray-200 @4xl:grid-cols-2 @max-4xl:divide-y @4xl:divide-x bg-white relative grid overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                    {/* Without Kickbord Card */}
                    <div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
                        <div className="mx-auto max-w-xs self-center">
                            {/* Missed Calls Phone Mockup */}
                            <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl max-w-[200px] mx-auto">
                                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                                    {/* Phone Screen */}
                                    <div className="bg-black px-4 py-8 space-y-3">
                                        {/* Missed Call Notifications */}
                                        <div className="bg-red-900/40 backdrop-blur-sm rounded-xl p-3 border border-red-500/30">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-white text-xs font-medium">Missed Call</div>
                                                    <div className="text-gray-400 text-[10px]">Sarah M. • 6:45 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-red-900/40 backdrop-blur-sm rounded-xl p-3 border border-red-500/30">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-white text-xs font-medium">Missed Call</div>
                                                    <div className="text-gray-400 text-[10px]">John D. • 5:22 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-red-900/40 backdrop-blur-sm rounded-xl p-3 border border-red-500/30">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-white text-xs font-medium">Missed Call</div>
                                                    <div className="text-gray-400 text-[10px]">Mike R. • 4:18 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-red-900/40 backdrop-blur-sm rounded-xl p-3 border border-red-500/30">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-white text-xs font-medium">Missed Call</div>
                                                    <div className="text-gray-400 text-[10px]">Lisa K. • 2:05 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold text-gray-900 text-xl">Without Kickbord</h3>
                            <p className="text-gray-600 mt-3 text-balance">Calls go to voicemail after hours. Leads call your competitor instead. Your front desk is overwhelmed during busy periods. You have no idea how many customers you're losing.</p>
                        </div>
                    </div>

                    {/* With Kickbord Card */}
                    <div className="row-span-2 grid grid-rows-subgrid gap-8 p-8 relative">
                        <div className="@4xl:px-8 mx-auto max-w-sm">
                            {/* Appointment Confirmed Phone Mockup */}
                            <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl max-w-[200px] mx-auto">
                                <div className="bg-white rounded-2xl overflow-hidden">
                                    {/* Phone Screen */}
                                    <div className="bg-gradient-to-b from-blue-50 to-white px-4 py-8">
                                        <div className="bg-white rounded-2xl p-4 shadow-lg border border-green-200">
                                            {/* Success Icon */}
                                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            
                                            <div className="text-center space-y-3">
                                                <h4 className="text-sm font-bold text-gray-900">Appointment Confirmed</h4>
                                                
                                                <div className="space-y-2 text-xs">
                                                    <div className="flex items-center justify-center gap-2 text-gray-700">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                        <span className="font-medium">Sarah Miller</span>
                                                    </div>
                                                    
                                                    <div className="flex items-center justify-center gap-2 text-gray-700">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>Tomorrow</span>
                                                    </div>
                                                    
                                                    <div className="flex items-center justify-center gap-2 text-gray-700">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>2:00 PM</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="pt-2 border-t border-gray-200">
                                                    <div className="text-[10px] text-gray-500">Booked by Kickbord AI</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold text-gray-900 text-xl">With Kickbord</h3>
                            <p className="text-gray-600 mt-3 text-balance">Every call answered instantly, 24/7. Leads are qualified and booked while you sleep. Your calendar fills automatically. You see every call, every lead, every booking in one place.</p>
                        </div>
                        
                        {/* Subtle gradient at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}