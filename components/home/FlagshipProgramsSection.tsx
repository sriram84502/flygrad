"use client";

import Link from "next/link";
import { ArrowRight, Plane, GraduationCap, Building2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "../ui/animations";

const programs = [
    {
        title: "American Degree Transfer Program",
        description: "Study 1–3 years in Malaysia and complete the remaining degree years in the USA or Canada. Save costs while earning a full North American bachelor’s degree.",
        step: "01",
        href: "/programs/adtp",
        icon: Plane,
    },
    {
        title: "Dual Award Degree Programs",
        description: "Study entirely in Malaysia and graduate with two degrees from partner universities. One program, global recognition, and strong value for money.",
        step: "02",
        href: "/programs/dual-award",
        icon: GraduationCap,
    },
    {
        title: "International Branch Campus Degree Pathway",
        description: "Study bachelor’s and/or master’s degrees at UK, Australia, or Ireland branch campuses in Malaysia. Earn the same foreign degree at significantly lower cost.",
        step: "03",
        href: "/programs/branch-campuses",
        icon: Building2,
    },
    {
        title: "Malaysian Universities: Bachelor & Master’s Pathway",
        description: "Complete a 3–4 year bachelor’s degree in Malaysia followed by a 1–2 year master’s abroad. An ROI-focused pathway to earn globally recognised undergraduate and postgraduate degrees.",
        step: "04",
        href: "/programs/bachelor-master",
        icon: BookOpen,
    }
];

export default function FlagshipProgramsSection() {
    return (
        <section className="bg-[#003366] py-24 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="mb-12 md:mb-20 text-center text-white [&_p]:text-slate-300">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Flagship Programs
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto">
                            Diverse pathways to your dream career.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-7xl mx-auto">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative h-[420px] rounded-[2rem] overflow-hidden cursor-pointer bg-brand-navy"
                        >
                            {/* Top Right Orange Gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/30 transition-colors duration-500"></div>

                            {/* Bottom Left Blue Gradient */}
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/30 transition-colors duration-500"></div>

                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] border border-white/10 transition-colors duration-500 group-hover:bg-white/10"></div>

                            {/* Large Background Number */}
                            <div className="absolute -right-4 top-20 text-[12rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-white/[0.05]">
                                {program.step}
                            </div>

                            {/* Content Container */}
                            <div className="relative h-full p-8 flex flex-col justify-between z-20">
                                <div className="flex justify-between items-start">
                                    <div className="relative">
                                        {/* Icon Glow */}
                                        <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        {/* Icon Container */}
                                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:border-brand-orange/50 transition-all duration-500">
                                            <program.icon className="w-7 h-7" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    {/* Step Badge */}
                                    <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                        <span className="text-xs font-medium text-brand-orange tracking-wider">
                                            STEP {program.step}
                                        </span>
                                    </div>
                                </div>

                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight min-h-[3.5rem]">
                                        {program.title}
                                    </h3>

                                    <div className="space-y-6">
                                        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
                                            {program.description}
                                        </p>

                                        <Link href={program.href} className="flex items-center gap-3 text-brand-orange font-semibold text-sm group/btn">
                                            <span className="relative">
                                                Explore Program
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover/btn:w-full"></span>
                                            </span>
                                            <span className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover/btn:bg-brand-orange group-hover/btn:text-white transition-all duration-300">
                                                <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Border Overlay */}
                            <div className="absolute inset-0 rounded-[2rem] border border-white/10 group-hover:border-brand-orange/50 transition-colors duration-500 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
