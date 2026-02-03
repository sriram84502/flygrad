"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { Trophy, Users, Star, BookOpen, GraduationCap, Calendar } from "lucide-react";

export default function APUPage() {
    const courses = [
        "Computing & Technology",
        "Engineering",
        "Business & Management",
        "Accounting & Finance",
        "Banking & Finance",
        "Design & Creative Media",
        "Digital Marketing & Media",
        "Animation & Visual Effects",
        "Actuarial Studies",
        "Hospitality & Tourism",
        "International Relations",
        "Cyber Security",
        "Psychology"
    ];

    return (
        <main className="bg-slate-50 min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative bg-brand-navy text-white py-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-orange rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Asia Pacific University <br />
                            <span className="text-brand-orange">Malaysia&#x27;s Best Technology University</span>
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                            APU is one of Malaysia's premier private universities, highly reputed for its focus on technology, innovation, and digital transformation. It is a top choice for students looking for industry-aligned education and global career opportunities.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: Trophy, text: "#597 QS World Ranking" },
                                { icon: Users, text: "7,000+ International Students" },
                                { icon: Star, text: "5 Star + in QS Star Ratings" },
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                    <badge.icon className="w-4 h-4 text-brand-orange" />
                                    <span className="text-sm font-medium">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <div className="relative">
                        {/* Placeholder for University Image - Creating a distinct visual block */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="aspect-video bg-gradient-to-br from-brand-orange/20 to-brand-navy/40 rounded-xl mb-6 flex items-center justify-center">
                                <Building2 className="w-20 h-20 text-white/50" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Innovation & Technology Hub</h3>
                                <p className="text-slate-400 text-sm">
                                    APU’s campus is a modern, technology-enabled environment designed to support innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Courses */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Key Courses</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Comprehensive programs designed to meet global industry demands.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-orange/30 transition-all cursor-default flex items-center gap-4"
                        >
                            <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-brand-navy">{course}</span>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </section>

            {/* Campus Life */}
            <section className="bg-white py-20 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn className="order-2 lg:order-1">
                        <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-orange/5" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                <Users className="w-32 h-32 opacity-20" />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-brand-navy mb-6">Vibrant Campus Life</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Asia Pacific University’s campus in Kuala Lumpur is a modern, technology-enabled environment designed to support innovation, collaboration, and hands-on learning.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            The campus features advanced labs, digital classrooms, student residences, and vibrant multicultural spaces for a complete university experience.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Admissions */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-center text-brand-navy mb-16">Admissions & Intakes</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Entry Requirements */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-brand-navy text-white rounded-xl">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy">Entry Requirements (Indian Students)</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-brand-orange mb-2 text-sm uppercase tracking-wide">Undergraduate (UG)</h4>
                                <p className="text-slate-600">
                                    Completed 12th standard with a minimum of <span className="font-bold text-brand-navy">55%</span> from CBSE, ICSE, or State Boards.
                                    <br /><span className="text-sm text-slate-500 italic mt-1 block">IELTS not required if previously studied in English medium.</span>
                                </p>
                            </div>
                            <div className="h-px bg-slate-100"></div>
                            <div>
                                <h4 className="font-bold text-brand-orange mb-2 text-sm uppercase tracking-wide">Postgraduate (PG)</h4>
                                <p className="text-slate-600">
                                    Bachelor’s degree with a minimum of <span className="font-bold text-brand-navy">55%</span> in a relevant discipline.
                                    <br /><span className="text-sm text-slate-500 italic mt-1 block">IELTS usually waived if previous education was in English.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Intakes */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-brand-orange text-white rounded-xl">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy">Intakes</h3>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-brand-navy mb-4">Undergraduate (UG)</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["March", "July", "September", "November"].map(month => (
                                        <span key={month} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-200">
                                            {month}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-brand-navy mb-4">Postgraduate (PG)</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["January", "March", "July", "September"].map(month => (
                                        <span key={month} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-200">
                                            {month}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

import { Building2 } from "lucide-react";
