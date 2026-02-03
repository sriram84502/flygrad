import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { ArrowRight, Clock, User } from "lucide-react";

export default function BlogPage() {
    const articles = [
        {
            title: "How to Survive Your First Week in Kuala Lumpur",
            category: "Student Life",
            excerpt: "From navigating the MRT to finding the best Nasi Lemak, here is your essential starter pack for KL life.",
            date: "Oct 12, 2025",
            readTime: "5 min read",
            author: "Sarah J.",
            image: "bg-blue-100" // Placeholder color
        },
        {
            title: "Part-Time Job Rules for International Students",
            category: "Work & Career",
            excerpt: "Understanding the legal limits and best opportunities for students working while studying in Malaysia.",
            date: "Sep 28, 2025",
            readTime: "7 min read",
            author: "FlyGrad Team",
            image: "bg-orange-100"
        },
        {
            title: "Cost of Living Breakdown: KL vs. Cyberjaya",
            category: "Budgeting",
            excerpt: "Real numbers on rent, food, and transport in Malaysia's two most popular student hubs.",
            date: "Nov 03, 2025",
            readTime: "6 min read",
            author: "Michael T.",
            image: "bg-green-100"
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Knowledge Hub</h1>
                        <p className="text-slate-600 text-lg">
                            Guides, tips, and insights to help you navigate your study abroad journey like a pro.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <FadeIn key={index}>
                            <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                                <div className={`h-48 w-full ${article.image} relative`}>
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold opacity-20">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-3">
                                        {article.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6 flex-grow">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Clock className="w-3 h-3" /> {article.readTime}
                                        </div>
                                        <button className="text-sm font-bold text-brand-navy flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </main>
    );
}
