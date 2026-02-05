"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn, StaggerContainer } from "../ui/animations";
import { ArrowRight, Trophy, Play } from "lucide-react";
import LeadModal from "./LeadModal";

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        // Auto-open modal after 2 seconds on first visit
        const hasSeenModal = sessionStorage.getItem('hasSeenLeadModal');
        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                sessionStorage.setItem('hasSeenLeadModal', 'true');
            }, 2000); // 2 second delay

            return () => {
                mediaQuery.removeEventListener('change', handleChange);
                clearTimeout(timer);
            };
        }

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
            {/* Animated Background Elements */}
            {!prefersReducedMotion && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        style={{ willChange: "transform, opacity" }}
                        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            x: [0, 50, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        style={{ willChange: "transform, opacity" }}
                        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[100px]"
                    />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-xs font-bold text-brand-navy uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-default group">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange group-hover:bg-orange-500 transition-colors"></span>
                            </span>
                            THE FUTURE OF EDUCATION CONSULTING
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-6">
                            Smarter Study Abroad
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy leading-[1.2] mb-4">
                            Don&#x27;t Just Study Abroad. <br />
                            <span className="text-brand-orange">Study Smart in Malaysia.</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
                            Affordable global education designed for strong career outcomes and high ROI.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center justify-center rounded-full font-bold bg-brand-orange text-white px-8 py-4 text-lg w-full sm:w-auto transition-all btn-interactive shadow-lg hover:shadow-brand-orange/30"
                            >
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.button>

                            <Link href="/how-it-works" className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center rounded-full font-bold bg-white text-brand-navy border border-slate-200 px-8 py-4 text-lg w-full transition-all shadow-sm hover:shadow-md hover:bg-slate-50"
                                >
                                    <Play className="w-5 h-5 mr-2 fill-current" />
                                    How We Work
                                </motion.button>
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="pt-8 flex items-center gap-8 border-t border-slate-200/60">
                            {[
                                { value: "100+", label: "Visa Success" },
                                { value: "450+", label: "Partner Unis" },
                                { value: "$5M+", label: "Scholarships" }
                            ].map((stat, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="text-3xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-300">{stat.value}</div>
                                    <div className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </StaggerContainer>

                {/* Right Side Image Composition */}
                <div className="relative w-full flex items-center justify-center">
                    <ScaleIn delay={0.2} className="relative z-10 w-full max-w-lg lg:max-w-full">
                        <div className="relative w-full max-w-lg lg:max-w-full">
                            {/* Main Image Container */}
                            <div className="relative z-10 w-full h-[600px] sm:h-[650px]">
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-navy/10 border-8 border-white">
                                    <Image
                                        src="/images/hero-meeting.png"
                                        alt="Professional Meeting - Education Consulting"
                                        fill
                                        priority
                                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
                                </div>

                                {/* Floating Card 1: Offer Accepted (Top Left) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="absolute top-12 -left-4 sm:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-[220px] hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-brand-navy">Offer Accepted</div>
                                            <div className="text-xs text-green-600 font-medium">Just now</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-slate-500 leading-snug">
                                        Taylor's University <br />
                                        <span className="font-semibold text-brand-navy">BSc Computer Science</span>
                                    </div>
                                </motion.div>

                                {/* Floating Card 2: Scholarship (Bottom Right) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute bottom-20 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <div className="text-xs text-slate-500 mb-1 font-medium tracking-wide uppercase">Scholarship Secured</div>
                                            <div className="text-2xl font-bold text-brand-navy">$12,000</div>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-sm shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet w-6 h-6" aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Card 3: Global Ranking (Bottom Left) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4, duration: 0.5 }}
                                    className="absolute bottom-8 left-0 sm:left-8 bg-brand-navy text-white p-4 rounded-2xl shadow-xl shadow-brand-navy/20 hover:scale-105 transition-transform duration-300 flex items-center gap-3 z-20"
                                >
                                    <div className="bg-white/10 p-2 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy w-6 h-6 text-brand-yellow" aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-300 uppercase tracking-wider font-medium">Global Ranking</div>
                                        <div className="font-bold">Top 1% Worldwide</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </ScaleIn>
                </div>

                <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </section>
    );
}
