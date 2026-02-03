import { University } from "@/types/university";
import Link from "next/link";

interface UniversityContentProps {
    university: University;
}

export default function UniversityContent({
    university,
}: UniversityContentProps) {
    return (
        <>
            <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300 py-4">
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-8 min-w-max">
                        <Link
                            href="#overview"
                            className="text-sm font-bold uppercase tracking-wider py-2 border-b-2 transition-colors text-brand-orange border-brand-orange"
                        >
                            Overview
                        </Link>
                        <Link
                            href="#courses"
                            className="text-sm font-bold uppercase tracking-wider py-2 border-b-2 transition-colors text-slate-500 border-transparent hover:text-brand-navy"
                        >
                            Key Courses
                        </Link>
                        <Link
                            href="#campus-life"
                            className="text-sm font-bold uppercase tracking-wider py-2 border-b-2 transition-colors text-slate-500 border-transparent hover:text-brand-navy"
                        >
                            Campus Life
                        </Link>
                        <Link
                            href="#admissions"
                            className="text-sm font-bold uppercase tracking-wider py-2 border-b-2 transition-colors text-slate-500 border-transparent hover:text-brand-navy"
                        >
                            Admissions
                        </Link>
                    </div>
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-20">
                            {/* Overview Section */}
                            <div id="overview" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-brand-navy mb-8">
                                    Overview
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                                    {university.overview}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                    {/* QS Ranking Card */}
                                    {university.stats.qsRanking && (
                                        <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group md:col-span-3 lg:col-span-1">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <svg
                                                    width="1.5em"
                                                    height="1.5em"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="currentColor"
                                                    className="w-24 h-24 text-brand-navy transform rotate-12"
                                                >
                                                    <path
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M2.5 12.5L8 14.5L7 18L8 21"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="relative z-10 flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                                                    <svg
                                                        width="1.5em"
                                                        height="1.5em"
                                                        strokeWidth="1.5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        color="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M2.5 12.5L8 14.5L7 18L8 21"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-brand-navy">
                                                        {university.stats.qsRanking}
                                                    </div>
                                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                                        QS World Ranking
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* International Students Card */}
                                    {university.stats.internationalStudents && (
                                        <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group md:col-span-1">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <svg
                                                    width="1.5em"
                                                    height="1.5em"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="currentColor"
                                                    className="w-24 h-24 text-brand-navy transform rotate-12"
                                                >
                                                    <path
                                                        d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M1 18V17C1 15.3431 2.34315 14 4 14V14"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M23 18V17C23 15.3431 21.6569 14 20 14V14"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="relative z-10 flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                                                    <svg
                                                        width="1.5em"
                                                        height="1.5em"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        color="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M1 18V17C1 15.3431 2.34315 14 4 14V14"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M23 18V17C23 15.3431 21.6569 14 20 14V14"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-brand-navy">
                                                        {university.stats.internationalStudents}
                                                    </div>
                                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                                        Intl. Students
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* QS Stars Card */}
                                    {university.stats.qsStars && (
                                        <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group md:col-span-1">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <svg
                                                    width="1.5em"
                                                    height="1.5em"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="currentColor"
                                                    className="w-24 h-24 text-brand-navy transform rotate-12"
                                                >
                                                    <path
                                                        d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="relative z-10 flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                                                    <svg
                                                        width="1.5em"
                                                        height="1.5em"
                                                        strokeWidth="1.5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        color="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-brand-navy">
                                                        {university.stats.qsStars}
                                                    </div>
                                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                                        QS Stars Rating
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Courses Section */}
                            <div id="courses" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-brand-navy mb-8">
                                    Key Courses
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {university.courses.map((course, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-orange/50 transition-colors group"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-circle-check w-5 h-5 text-brand-orange group-hover:text-white"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="m9 12 2 2 4-4"></path>
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-brand-navy">
                                                {course}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Campus Life Section */}
                            <div id="campus-life" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-brand-navy mb-8">
                                    Campus Life
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {university.campusLife.description}
                                </p>
                                {/* Image grid would go here if we had images */}
                            </div>

                            {/* Admissions Section */}
                            <div id="admissions" className="scroll-mt-32">
                                <h2 className="text-3xl font-bold text-brand-navy mb-8">
                                    Admissions
                                </h2>
                                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                                                <span className="w-8 h-8 rounded-lg bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-graduation-cap w-5 h-5"
                                                    >
                                                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                                        <path d="M22 10v6"></path>
                                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                                    </svg>
                                                </span>
                                                Entry Requirements
                                            </h3>
                                            <ul className="space-y-4">
                                                {university.admissions.requirements.map((req, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3 text-slate-600"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                                                <span className="w-8 h-8 rounded-lg bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-calendar w-5 h-5"
                                                    >
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                </span>
                                                Intakes
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {university.admissions.intakes.map((intake, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 font-medium"
                                                    >
                                                        {intake}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-6">
                                <div className="bg-brand-navy p-8 rounded-2xl text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4">
                                            Ready to apply?
                                        </h3>
                                        <p className="text-slate-300 mb-8 leading-relaxed">
                                            Get a free consultation with our education experts and start
                                            your journey to {university.name}.
                                        </p>
                                        <Link href="/contact">
                                            <button className="w-full py-4 rounded-xl bg-brand-orange text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20">
                                                Book Strategy Call
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-brand-navy mb-4">
                                        Need more info?
                                    </h4>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Download the official brochure for detailed course
                                        information and fees.
                                    </p>
                                    <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-brand-navy font-bold hover:border-brand-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-download w-4 h-4"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" x2="12" y1="15" y2="3"></line>
                                        </svg>
                                        Download Brochure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
