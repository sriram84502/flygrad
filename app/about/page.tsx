import Image from "next/image";
import StorySection from "@/components/about/StorySection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[100px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-bold text-brand-orange uppercase tracking-wider mb-8">
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="currentColor"
                                    className="w-4 h-4"
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
                                About Us
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-brand-navy leading-[1.1] mb-8">
                                About Fly Graduate
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
                                To make global education accessible to every Indian student
                                through trusted universities, transparent guidance, and
                                affordable pathways.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-brand-navy">
                                        2020
                                    </span>
                                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">
                                        Founded
                                    </span>
                                </div>
                                <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-brand-navy">
                                        12+
                                    </span>
                                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">
                                        Countries
                                    </span>
                                </div>
                                <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-brand-navy">
                                        500+
                                    </span>
                                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">
                                        Students
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative animate-fade-in-up delay-100">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] lg:aspect-square">
                                <Image
                                    alt="About Fly Graduate"
                                    src="/Website images/APU new campus_sky3.JPG"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-8 -left-8 md:bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] hidden md:block animate-fade-in-up delay-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-sm font-bold text-brand-navy">
                                        Our Mission
                                    </span>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Empowering students to achieve their global education dreams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <StorySection />

            {/* Mission/Vision Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="currentColor"
                                    className="w-48 h-48 text-brand-navy transform rotate-12"
                                >
                                    <path
                                        d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-brand-navy/10 flex items-center justify-center mb-6 text-brand-navy">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="currentColor"
                                        className="w-7 h-7"
                                    >
                                        <path
                                            d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-brand-navy mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                    To make global education accessible to every Indian student
                                    through trusted universities, transparent guidance, and
                                    affordable pathways.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-1 bg-brand-navy rounded-3xl p-10 border border-brand-navy shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group text-white">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="currentColor"
                                    className="w-32 h-32 text-brand-orange transform -rotate-12"
                                >
                                    <path
                                        d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="currentColor"
                                        className="w-7 h-7"
                                    >
                                        <path
                                            d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-lg text-slate-200 leading-relaxed flex-grow">
                                    To be India’s most trusted global education brand, empowering
                                    students to build international careers and cross-cultural
                                    understanding.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-1 bg-brand-orange rounded-3xl p-8 shadow-sm text-white relative overflow-hidden group">
                            <div className="absolute -bottom-4 -right-4 opacity-20">
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="currentColor"
                                    className="w-32 h-32 text-white"
                                >
                                    <path
                                        d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                                        stroke="currentColor"
                                    ></path>
                                    <path
                                        d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <div className="text-5xl font-bold mb-2">12+</div>
                                <div className="text-lg font-medium opacity-90">
                                    Countries Served
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex items-center justify-between group hover:border-brand-orange/50 transition-colors">
                            <div>
                                <h4 className="text-xl font-bold text-brand-navy mb-2">
                                    Global Standards
                                </h4>
                                <p className="text-slate-600">
                                    We adhere to the highest international education consulting
                                    standards.
                                </p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-orange group-hover:text-white transition-colors">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Fly Graduate */}
            <section className="py-20 bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-12 md:mb-20 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Why Choose Fly Graduate
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto">
                            We are committed to your success from day one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {[
                            "Pioneers of the American Degree Transfer Program (ADTP) in India",
                            "Official partners of 15+ Malaysian universities",
                            "Transparent & affordable admission process",
                            "Proven student success in global universities",
                            "Personalized guidance from experienced counsellors",
                            "Comprehensive pre- and post-admission support",
                            "Indian food & support services in Malaysia"
                        ].map((feature, idx) => (
                            <div key={idx} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-brand-orange">
                                            <path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-slate-200 group-hover:text-white transition-colors leading-relaxed">
                                        {feature}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto">
                            Fly Graduate is powered by a passionate team of international
                            education experts and counsellors with firsthand global
                            experience. With offices in Hyderabad, Vijayawada, Bengaluru,
                            Mumbai, and Delhi, and an on-ground support team in Malaysia, we
                            ensure every student receives continuous mentorship and guidance
                            from admission to graduation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                            <Image
                                alt="M. Nithin Reddy"
                                src="/Website images/Building.JPG"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    M. Nithin Reddy
                                </h3>
                                <p className="text-brand-orange font-medium mb-4">
                                    Founder & Director
                                </p>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                                        MBA graduate from the University of Northampton (UK).
                                        Founded Fly Graduate to make global education accessible to
                                        everyone, inspired by his own challenges while studying
                                        abroad.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                            <Image
                                alt="Admissions Team"
                                src="/Website images/Library 1.JPG"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    Admissions Team
                                </h3>
                                <p className="text-brand-orange font-medium mb-4">
                                    Counselling Experts
                                </p>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                                        Our team of experienced counsellors guide you through every
                                        step of the application process, from university selection
                                        to visa approval.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                            <Image
                                alt="Support Team"
                                src="/Website images/Cafeteria 1.JPG"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    Support Team
                                </h3>
                                <p className="text-brand-orange font-medium mb-4">
                                    Student Success
                                </p>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                                        Dedicated to ensuring your transition to life abroad is
                                        smooth, with support for accommodation, travel, and settling
                                        in.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
