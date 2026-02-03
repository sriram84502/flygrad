"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "../ui/animations";

export default function StepsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="mb-20 text-center">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest">
                            Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                            5 Easy Steps to Study in Malaysia
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Your journey to global education simplified.
                        </p>
                    </div>
                </FadeIn>

                <div className="mt-12 relative max-w-5xl mx-auto py-12">
                    {/* Progress Line Background */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 md:-translate-x-1/2" />

                    {/* Animated Progress Line Fill */}
                    <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b md:-translate-x-1/2 from-brand-orange via-brand-navy to-brand-orange"
                    />

                    <div className="space-y-16 md:space-y-32">
                        {[
                            {
                                step: "01",
                                title: "Discover Malaysia",
                                description: "Explore Malaysia’s advantages: quality education, diverse culture, safe environment, and global networking opportunities."
                            },
                            {
                                step: "02",
                                title: "Choose Your Study Course",
                                description: "Identify the right program and institution based on your interests, career goals, and institution accreditation."
                            },
                            {
                                step: "03",
                                title: "Plan Your Budget",
                                description: "Estimate tuition, living costs, travel, and other expenses to ensure your finances are in order."
                            },
                            {
                                step: "04",
                                title: "Check Requirements",
                                description: "Review academic eligibility, English language tests, visa criteria, and documentation needed for admission."
                            },
                            {
                                step: "05",
                                title: "Start to Prepare",
                                description: "Get ready for arrival: secure accommodation, complete health checks, organise your travel plans, and liaise with the institution for student support."
                            }
                        ].map((item, index) => (
                            <div key={index} className={`relative flex flex-col items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                                <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? "pl-20 md:pl-24 md:pr-0" : "pl-20 md:pr-24 md:pl-0"}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="relative group cursor-default"
                                    >
                                        <div className={`absolute top-6 w-4 h-4 border-2 rounded-full hidden md:block bg-white border-brand-orange group-hover:scale-125 transition-transform duration-300 ${index % 2 === 0 ? "-right-[54px]" : "-left-[54px]"}`}></div>
                                        <div className={`absolute top-8 h-0.5 w-12 hidden md:block bg-brand-orange/30 origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100 ${index % 2 === 0 ? "-right-12 origin-right" : "-left-12 origin-left"}`}></div>

                                        <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1 transition-all duration-300 relative z-10">
                                            <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed font-medium opacity-90">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full border-4 shadow-xl z-10 bg-white border-brand-orange text-brand-navy group"
                                >
                                    <span className="text-xl font-bold">{item.step}</span>
                                </motion.div>
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
