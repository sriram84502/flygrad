"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// University logos
const universities = [
    { name: "Asia Pacific University (APU)", logo: "/images/universities/apu.png" },
    { name: "INTI International University", logo: "/images/universities/inti.png" },
    { name: "International Medical University", logo: "/images/universities/imu.png" },
    { name: "MAHSA University", logo: "/images/universities/mahsa.png" },
    { name: "MILA University", logo: "/images/universities/mila.png" },
    { name: "Sunway University", logo: "/images/universities/sunway.png" },
    { name: "Taylor's University", logo: "/images/universities/taylors.png" },
    { name: "UCSI University", logo: "/images/universities/ucsi.png" },
    { name: "University of Cyberjaya", logo: "/images/universities/cyberjaya.png" },
    { name: "Universiti Kebangsaan Malaysia", logo: "/images/universities/ukm.png" },
];

export default function TrustedUniversitiesSection() {
    // Duplicate the array to ensure seamless scrolling
    const scrollingUniversities = [...universities, ...universities];

    return (
        <section className="bg-slate-50 border-b border-slate-200 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                        Trusted by Top Universities of Malaysia
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
                                className="flex items-center gap-3 group cursor-pointer opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 pointer-events-auto"
                            >
                                {/* University Logo */}
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image
                                        src={uni.logo}
                                        alt={`${uni.name} logo`}
                                        fill
                                        className="object-contain"
                                        sizes="48px"
                                    />
                                </div>
                                <span className="text-base font-semibold text-slate-700 group-hover:text-brand-navy hidden md:block whitespace-nowrap">
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
