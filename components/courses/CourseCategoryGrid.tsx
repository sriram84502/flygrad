"use client";

import { useState, useMemo } from "react";
import {
    Search, ArrowRight, ArrowLeft,
    Stethoscope, Laptop, Wrench, Briefcase,
    Utensils, Palette, Scale, Microscope,
    BookOpen, Scroll, GraduationCap,
    Hotel, Layers,
    School, Award, Calendar, ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { courseCategories } from "@/data/courses";
// import { CourseProgram } from "@/types/course"; // Unused in this file directly? Keep just in case or remove if verified unused.
import Link from "next/link";
import Image from "next/image";

// ... existing maps ...

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

// ... inside main component ...
// Replace CategoryDetailView and ProgramCard contents

const ICON_MAP: Record<string, any> = {
    "Stethoscope": Stethoscope,
    "Laptop": Laptop,
    "Wrench": Wrench,
    "Briefcase": Briefcase,
    "Utensils": Utensils,
    "Palette": Palette,
    "Scale": Scale,
    "Microscope": Microscope,
    "BookOpen": BookOpen,
    "Scroll": Scroll,
    "GraduationCap": GraduationCap,
    "Hotel": Hotel,
    "Layers": Layers
};

const IMAGE_MAP: Record<string, string> = {
    "medicine-health": "/images/categories/medicine-health.png",
    "computing-it": "/images/categories/computing-it.png",
    "engineering": "/images/categories/engineering_students.png",
    "business-management": "/images/categories/business-management.png",
    "science-math": "/images/categories/science-math.png",
    "social-sciences-education": "/images/categories/social-sciences-education.png",
    "arts-design": "/images/categories/arts_students.png",
    "hospitality-tourism": "/images/categories/hospitality-tourism.png",
    "law": "/images/categories/law.png",
    "islamic-studies": "/images/categories/islamic-studies.png",
    "foundation-general": "/images/categories/foundation-general.png",
    "other": "/images/categories/other_students.png",
};

// Gradient Mapping for distinct category feel
const GRADIENT_MAP: Record<string, string> = {
    "medicine-health": "from-teal-50 to-emerald-50 text-teal-600",
    "computing-it": "from-violet-50 to-purple-50 text-violet-600",
    "engineering": "from-orange-50 to-amber-50 text-orange-600",
    "business-management": "from-blue-50 to-indigo-50 text-blue-600",
    "arts-design": "from-pink-50 to-rose-50 text-pink-600",
    "hospitality-tourism": "from-yellow-50 to-orange-50 text-yellow-600",
    "law": "from-slate-50 to-gray-50 text-slate-700",
    "science-math": "from-cyan-50 to-sky-50 text-cyan-600",
    "social-sciences-education": "from-lime-50 to-green-50 text-lime-600",
    "islamic-studies": "from-emerald-50 to-teal-50 text-emerald-600",
    "foundation-general": "from-gray-50 to-slate-50 text-slate-600",
};

export default function CourseCategoryGrid() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Memoize stats
    const categoryStats = useMemo(() => {
        const stats: Record<string, number> = {};
        courseCategories.forEach(cat => {
            stats[cat.id] = cat.programs.length;
        });
        return stats;
    }, []);

    const activeCategory = courseCategories.find(c => c.id === selectedCategory);

    // Filter Logic
    const filteredCategories = useMemo(() => {
        if (!searchQuery) return courseCategories;
        return courseCategories.filter(cat =>
            cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.keywords?.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery]);

    const handleCategoryClick = (id: string) => {
        setSelectedCategory(id);
        setSearchQuery("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBack = () => {
        setSelectedCategory(null);
        setSearchQuery("");
    };

    return (
        <div className="min-h-screen bg-transparent">
            {/* Sticky Header / Search Section */}
            <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-slate-100/50 mb-10 transition-all">
                <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <div className="flex-1 w-full md:w-auto flex items-center gap-4">
                            {selectedCategory ? (
                                <button
                                    onClick={handleBack}
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    <span className="font-semibold text-sm">Back to Categories</span>
                                </button>
                            ) : (
                                <div>
                                    <h2 className="text-2xl font-bold text-brand-navy tracking-tight">Explore by Discipline</h2>
                                    <p className="text-slate-500 text-sm hidden md:block">Select a field to view available programs</p>
                                </div>
                            )}
                        </div>

                        {/* Modern Search */}
                        <div className="relative w-full md:w-[400px]">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder={selectedCategory ? `Search in ${activeCategory?.title}...` : "Search degrees, universities..."}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:bg-white shadow-sm transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 pb-20">
                <AnimatePresence mode="wait">

                    {/* VIEW 1: IMMERSIVE IMAGE GRID */}
                    {!selectedCategory && !searchQuery ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredCategories.map((category) => {
                                const Icon = ICON_MAP[category.iconName] || BookOpen;
                                // const gradientClass = GRADIENT_MAP[category.id] || "from-slate-50 to-gray-50 text-slate-600"; // No longer used for background

                                return (
                                    <motion.div
                                        key={category.id}
                                        layoutId={`card-${category.id}`}
                                        onClick={() => handleCategoryClick(category.id)}
                                        whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
                                        className="relative group cursor-pointer rounded-2xl overflow-hidden h-[320px] shadow-sm transform transition-all duration-300"
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0 bg-slate-200">
                                            <Image
                                                src={IMAGE_MAP[category.id] || "/images/placeholder.jpg"}
                                                alt={category.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                quality={75}
                                                loading="lazy"
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                        {/* Content */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">

                                            {/* Top Badge (Count) */}
                                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors">
                                                {categoryStats[category.id] || 0} Programs
                                            </div>

                                            {/* Icon & Title */}
                                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>

                                                <h3 className="text-xl font-bold mb-2 leading-tight">
                                                    {category.title}
                                                </h3>

                                                <p className="text-sm text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    ) : (
                        /* VIEW 2: PROGRAM LIST (DETAIL) */
                        <motion.div
                            key="list"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            {selectedCategory ? (
                                <CategoryDetailView
                                    category={activeCategory!}
                                    courseCount={categoryStats[selectedCategory]}
                                    searchQuery={searchQuery}
                                />
                            ) : (
                                <SearchResultsView
                                    query={searchQuery}
                                    allCategories={courseCategories}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

// Sub-components
function CategoryDetailView({ category, courseCount, searchQuery }: { category: any, courseCount: number, searchQuery: string }) {
    const programs = category.programs
        .filter((p: any) =>
            !searchQuery ||
            p.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.university.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a: any, b: any) => a.university.localeCompare(b.university));

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            {/* Modern Header */}
            <div className="relative rounded-3xl overflow-hidden bg-brand-navy p-8 md:p-12 text-white shadow-2xl">
                {/* Background Image with Blur */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={IMAGE_MAP[category.id] || "/images/placeholder.jpg"}
                        alt=""
                        fill
                        sizes="100vw"
                        quality={60}
                        priority
                        className="object-cover opacity-40 blur-sm scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/40" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md">
                                {category.id.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold shadow-lg shadow-brand-orange/20">
                                {programs.length} Programs
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{category.title}</h2>
                        <p className="text-lg text-slate-200 max-w-2xl">{category.description}</p>
                    </div>
                </div>
            </div>

            {/* Program Grid/List */}
            <div className="grid grid-cols-1 gap-3">
                {programs.map((program: any, idx: number) => (
                    <ProgramCard key={idx} program={program} />
                ))}
                {programs.length === 0 && (
                    <div className="p-16 text-center text-slate-500 bg-white rounded-3xl border border-dashed border-slate-200">
                        <Search className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                        <h3 className="text-lg font-semibold text-slate-700">No programs found</h3>
                        <p>Try adjusting your search for &quot;{searchQuery}&quot;</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

function SearchResultsView({ query, allCategories }: { query: string, allCategories: any[] }) {
    const allPrograms = allCategories.flatMap(c => c.programs);
    const results = allPrograms.filter(p =>
        p.degree.toLowerCase().includes(query.toLowerCase()) ||
        p.university.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-brand-navy">Search Results</h2>
                <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold">
                    {results.length} found for &quot;{query}&quot;
                </span>
            </div>
            <div className="grid grid-cols-1 gap-3">
                {results.map((program, idx) => (
                    <ProgramCard key={idx} program={program} />
                ))}
            </div>
        </motion.div>
    );
}

function ProgramCard({ program }: { program: any }) {
    return (
        <motion.a
            variants={itemVariants}
            href={program.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block bg-white border border-slate-100 rounded-2xl hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
            <div className="flex flex-col md:flex-row md:items-center p-5 gap-4 md:gap-6">
                {/* Left: Content */}
                <div className="flex-1 min-w-0">
                    {/* Title & Uni */}
                    <div className="mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-brand-navy truncate group-hover:text-brand-orange transition-colors">
                            {program.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                            <School className="w-4 h-4 text-brand-orange/60" />
                            <span className="font-medium text-slate-700">{program.university}</span>
                            {program.school && (
                                <>
                                    <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300" />
                                    <span className="hidden md:inline opacity-80">{program.school}</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Badges - Desktop: Inline, Mobile: Stack */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 border border-slate-100">
                            <BookOpen className="w-3 h-3 text-slate-400" />
                            {program.studyLevel}
                        </span>
                        {program.awardingBody && (
                            <span className="inline-flex items-center gap-1.5 bg-indigo-50 px-2.5 py-1 rounded-md text-xs font-semibold text-indigo-600 border border-indigo-100">
                                <Award className="w-3 h-3" />
                                {program.awardingBody}
                            </span>
                        )}
                    </div>
                </div>

                {/* Right: Meta & Action */}
                <div className="flex items-center justify-between md:justify-end gap-4 md:border-l md:border-slate-100 md:pl-6 shrink-0 mt-2 md:mt-0">
                    {program.intake && (
                        <div className="flex bg-slate-50 rounded-lg px-3 py-1.5 md:bg-transparent md:p-0 items-center gap-2 md:block text-right">
                            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold hidden md:block">Intake</div>
                            <div className="text-sm font-medium text-brand-navy flex items-center gap-2 md:block">
                                <Calendar className="w-3 h-3 md:hidden text-slate-400" />
                                {program.intake}
                            </div>
                        </div>
                    )}
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 group-hover:bg-brand-orange group-hover:text-white group-hover:border-transparent transition-all duration-300 flex items-center justify-center shadow-sm">
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </div>
                </div>
            </div>
        </motion.a>
    );
}
