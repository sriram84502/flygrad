import Link from "next/link";

export default function PartnerUniversitiesSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                        Partner Universities
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto">
                        Study at top-ranked institutions with global recognition.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 perspective-1000">
                    {/* Asia Pacific University */}
                    <div className="relative h-[400px] w-full rounded-xl bg-white group hover:z-10">
                        <Link className="block h-full w-full" href="/universities/apu">
                            <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg border border-slate-100 transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="absolute inset-0 rounded-xl overflow-hidden">
                                    <div className="h-1/2 bg-slate-100 relative overflow-hidden">
                                        <img
                                            src="/Website images/Front 1.JPG"
                                            alt="Asia Pacific University Campus"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-1/2 p-6 bg-white">
                                        <h3 className="text-xl font-bold text-brand-navy mb-2">
                                            Asia Pacific University
                                        </h3>
                                        <p className="text-sm text-slate-500 line-clamp-3">
                                            APU is one of Malaysia&#x27;s premier private universities, where students are transformed into highly skilled, employable, and future-proof professionals via a unique blend of technology, innovation, and creativity.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Taylor's University */}
                    <div className="relative h-[400px] w-full rounded-xl bg-white group hover:z-10">
                        <Link className="block h-full w-full" href="/study/taylors-university">
                            <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg border border-slate-100 transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="absolute inset-0 rounded-xl overflow-hidden">
                                    <div className="h-1/2 bg-slate-100 relative overflow-hidden">
                                        <img
                                            src="/Website images/Library 1.JPG"
                                            alt="Taylor's University Campus"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-1/2 p-6 bg-white">
                                        <h3 className="text-xl font-bold text-brand-navy mb-2">
                                            Taylor&#x27;s University
                                        </h3>
                                        <p className="text-sm text-slate-500 line-clamp-3">
                                            Ranked #1 private university in Malaysia and Southeast
                                            Asia. Known for its Lakeside Campus and strong rankings in
                                            Hospitality, Marketing, and Design.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* INTI International University */}
                    <div className="relative h-[400px] w-full rounded-xl bg-white group hover:z-10">
                        <Link
                            className="block h-full w-full"
                            href="/study/inti-international-university"
                        >
                            <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg border border-slate-100 transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="absolute inset-0 rounded-xl overflow-hidden">
                                    <div className="h-1/2 bg-slate-100 relative overflow-hidden">
                                        <img
                                            src="/Website images/Classroom 6.JPG"
                                            alt="INTI International University Campus"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-1/2 p-6 bg-white">
                                        <h3 className="text-xl font-bold text-brand-navy mb-2">
                                            INTI International University
                                        </h3>
                                        <p className="text-sm text-slate-500 line-clamp-3">
                                            Known for its American Degree Transfer Program (ADTP) and
                                            strong industry linkages. Offers a multicultural campus
                                            environment with students from 60+ countries.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
