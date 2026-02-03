"use client";

import { FadeIn, StaggerContainer } from "../ui/animations";
import { User, Star, GraduationCap, Globe } from "lucide-react";
import Image from "next/image";

const mentors = [
    {
        name: "Dr. Ayesha",
        title: "Senior Education Consultant",
        specialty: "PhD & Research Pathways",
        stats: "800+ Students Placed",
        funFact: "Coffee addict & former professor.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        name: "Mr. Raj",
        title: "Visa & Immigration Expert",
        specialty: "Visa Documentation",
        stats: "100% Visa Success Rate",
        funFact: "Knows immigration laws by heart.",
        color: "bg-orange-100 text-orange-600"
    },
    {
        name: "Sarah Lim",
        title: "Student Success Manager",
        specialty: "Accommodation & Settlement",
        stats: "Top Rated Mentor 2024",
        funFact: "Knows every good food spot in KL.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        name: "David Chen",
        title: "Career Strategist",
        specialty: "Part-time Jobs & Internships",
        stats: "50+ Corporate Partners",
        funFact: "Helped students earn RM 500k+ total.",
        color: "bg-green-100 text-green-600"
    }
];

export default function MentorsSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <FadeIn>
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">
                                Meet Your <span className="text-brand-orange">Dream Team</span>
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Real humans, real expertise. We don't just process applications; we mentor you for life.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <button className="bg-brand-navy text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                            Book a Free Session <Globe className="w-4 h-4" />
                        </button>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mentors.map((mentor, index) => (
                        <FadeIn key={index}>
                            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className={`w-20 h-20 rounded-full ${mentor.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                                    <User className="w-8 h-8" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-brand-navy mb-1">{mentor.name}</h3>
                                    <p className="text-sm font-medium text-brand-orange mb-4">{mentor.title}</p>

                                    <div className="bg-slate-50 rounded-xl p-4 mb-4">
                                        <div className="flex items-center justify-center gap-2 text-sm text-slate-700 font-semibold mb-1">
                                            <Star className="w-4 h-4 fill-brand-orange text-brand-orange" /> {mentor.stats}
                                        </div>
                                        <p className="text-xs text-slate-500">{mentor.specialty}</p>
                                    </div>

                                    <p className="text-xs text-slate-400 italic">
                                        &quot;{mentor.funFact}&quot;
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
