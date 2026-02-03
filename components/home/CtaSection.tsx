import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-navy px-6 py-20 md:px-20 md:py-24 text-center">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-brand-orange backdrop-blur-sm animate-fade-in-up">
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
                                    d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <span>Limited slots available for this intake</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Ready to design your future?
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Book a free strategy call with our experts. No generic advice,
                            just a clear roadmap to your dream university.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link className="w-full sm:w-auto" href="/contact">
                                <button className="inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 bg-brand-orange text-white hover:bg-orange-600 px-10 py-5 text-xl w-full shadow-xl shadow-brand-orange/20">
                                    Book Your Strategy Call
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="currentColor"
                                        className="w-5 h-5 ml-2"
                                    >
                                        <path
                                            d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                            <Link className="w-full sm:w-auto" href="/about">
                                <button className="inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 border-2 bg-transparent px-10 py-5 text-xl w-full text-white border-white/20 hover:bg-white/10 hover:text-white">
                                    Read Success Stories
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
