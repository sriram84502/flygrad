"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "../ui/animations";
import { TrendingUp, Globe, Award, ShieldCheck, Users } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        title: "Kuala Lumpur, Top 12th Student City Worldwide",
        description: "Ranked among the world’s best student cities (QS 2026), KL offers quality education, affordable living, and vibrant multicultural life.",
        colSpan: "md:col-span-2",
        color: "brand-orange",
    },
    {
        icon: Globe,
        title: "Asia’s Fastest-Rising Education Destination",
        description: "Ranked as the 11th most preferred study destination worldwide by UNESCO. Malaysia is rapidly emerging as Asia’s leading global education hub.",
        colSpan: "md:col-span-1",
        color: "brand-orange",
    },
    {
        icon: Award,
        title: "World-Class Global Universities",
        description: "Home to 13+ international universities from the UK, Australia, China, Ireland, India, and beyond.",
        colSpan: "md:col-span-1",
        color: "brand-orange",
    },
    {
        icon: ShieldCheck,
        title: "Safety, Trust, and Global Diversity",
        description: "Ranked 12th globally for safety under the Global Peace Index 2025. Home to 170,000+ international students from over 110 countries.",
        colSpan: "md:col-span-2",
        color: "brand-orange",
    },
    {
        icon: Users,
        title: "Top 4 Globally for Ranked Universities",
        description: "Out of 64 Malaysian universities, 24 are ranked among the world’s top 1,000 universities meaning nearly 1 in every 3 universities in Malaysia holds a global top-1,000 ranking.",
        colSpan: "md:col-span-3",
        color: "brand-orange",
    }
];

export default function WhyStudySection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration with Campus Image */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-navy rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-orange rounded-full blur-[120px]" />
            </div>

            {/* Campus Image Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <img
                    src="/Website images/campus_saturated3a-copy.JPG"
                    alt="Campus Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                            Why Study in Malaysia?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto">
                            Asia&#x27;s emerging education hub offering world-class degrees at affordable costs.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto" staggerDelay={0.1}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            layout
                            className={`group relative overflow-hidden rounded-3xl bg-slate-50 p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${feature.colSpan}`}
                        >
                            {/* Watermark Icon */}
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <feature.icon strokeWidth={1.5} className="w-32 h-32 text-brand-orange transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold text-brand-navy mb-3 pr-8">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
