"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Library, Globe2, Award, BookOpen } from "lucide-react";

// Placeholder icons since we don't have the logos
const universities = [
    { name: "Asia Pacific University (APU)", icon: Building2 },
    { name: "INTI International University", icon: Globe2 },
    { name: "International Medical University", icon: GraduationCap },
    { name: "MAHSA University", icon: Library },
    { name: "MILA University", icon: Award },
    { name: "Sunway University", icon: BookOpen },
    { name: "Taylor’s University", icon: GraduationCap },
    { name: "UCSI University", icon: Building2 },
    { name: "University of Cyberjaya", icon: Globe2 },
    { name: "Universiti Kebangsaan Malaysia", icon: Library },
];

export default function TrustedUniversitiesSection() {
    // Duplicate the array to ensure seamless scrolling
    const scrollingUniversities = [...universities, ...universities];

    return (
        <section className="bg-slate-50 border-b border-slate-200 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                        Trusted by Top Universities
                    </p>
                </div>

                <div className="relative w-full mask-linear-fade">
                    <motion.div
                        className="flex gap-12 md:gap-20 w-max"
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {scrollingUniversities.map((uni, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 group cursor-pointer opacity-60 grayscale hover:grayscale-0 transition-all duration-300 pointer-events-auto"
                            >
                                {/* Using Lucide icons as placeholders for logos */}
                                <uni.icon
                                    className="w-10 h-10 text-slate-600 group-hover:text-brand-navy"
                                    strokeWidth={1.5}
                                />
                                <span className="text-lg font-bold text-slate-600 group-hover:text-brand-navy hidden md:block whitespace-nowrap">
                                    {uni.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
