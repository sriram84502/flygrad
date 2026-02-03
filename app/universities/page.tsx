"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { ArrowRight, MapPin, Award } from "lucide-react";

export default function UniversitiesPage() {
    const universities = [
        {
            name: "Asia Pacific University (APU)",
            location: "Kuala Lumpur",
            rating: "5-Star Plus",
            qsRank: "#597 Globally",
            specialty: "Tech & Innovation",
            slug: "apu", // Links to actual page
            logo: "bg-red-50 text-red-600" // Placeholder style
        },
        {
            name: "Taylor's University",
            location: "Subang Jaya",
            rating: "5-Star",
            qsRank: "#284 Globally",
            specialty: "Hospitality & Business",
            slug: "taylors",
            logo: "bg-red-50 text-red-900"
        },
        {
            name: "Sunway University",
            location: "Bandar Sunway",
            rating: "5-Star",
            qsRank: "#500-600",
            specialty: "Business & Arts",
            slug: "sunway",
            logo: "bg-orange-50 text-orange-600"
        },
        {
            name: "UCSI University",
            location: "Kuala Lumpur",
            rating: "5-Star",
            qsRank: "#300",
            specialty: "Music & Medicine",
            slug: "ucsi",
            logo: "bg-blue-50 text-blue-600"
        },
        {
            name: "INTI International University",
            location: "Nilai",
            rating: "5-Star",
            qsRank: "Top Private",
            specialty: "Business & Computing",
            slug: "inti",
            logo: "bg-blue-50 text-blue-800"
        },
        {
            name: "University of Cyberjaya",
            location: "Cyberjaya",
            rating: "5-Star",
            qsRank: "Specialist",
            specialty: "Medical & Health",
            slug: "cyberjaya",
            logo: "bg-green-50 text-green-700"
        },
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Partner Universities</h1>
                        <p className="text-slate-600 text-lg">
                            Explore Malaysia's top-rated institutions. We guide you to the one that fits your career goals best.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {universities.map((uni, index) => (
                        <FadeIn key={index}>
                            <Link
                                href={uni.slug === 'apu' ? '/universities/apu' : '#'}
                                className={`block bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:border-brand-orange/30 transition-all group relative ${uni.slug !== 'apu' ? 'cursor-default opacity-80' : ''}`}
                                onClick={e => uni.slug !== 'apu' && e.preventDefault()}
                            >
                                {uni.slug !== 'apu' && (
                                    <div className="absolute top-4 right-4 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                        Coming Soon
                                    </div>
                                )}

                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl mb-4 ${uni.logo}`}>
                                    {uni.name.substring(0, 1)}
                                </div>

                                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                                    {uni.name}
                                </h3>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <MapPin className="w-4 h-4 text-slate-400" /> {uni.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Award className="w-4 h-4 text-slate-400" /> {uni.qsRank} • {uni.rating}
                                    </div>
                                </div>

                                {uni.slug === 'apu' ? (
                                    <div className="flex items-center text-brand-orange font-bold text-sm">
                                        View Full Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                ) : (
                                    <div className="text-slate-400 text-sm font-medium">
                                        Details Coming Soon
                                    </div>
                                )}
                            </Link>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </main>
    );
}
