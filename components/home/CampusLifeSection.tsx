"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "../ui/animations";
import { Library, GraduationCap, Coffee, Home, Trophy, Users } from "lucide-react";
import { useState } from "react";

const facilities = [
    {
        icon: Library,
        title: "World-Class Library",
        description: "State-of-the-art library with over 100,000 books and digital resources",
        images: [
            "/Website images/Library 1.JPG",
            "/Website images/Library 2.JPG",
            "/Website images/Library.JPG"
        ]
    },
    {
        icon: GraduationCap,
        title: "Modern Classrooms",
        description: "Technology-enabled learning spaces designed for collaborative education",
        images: [
            "/Website images/Classroom 6.JPG",
            "/Website images/Classroom 8.JPG",
            "/Website images/Computer Lab 2.JPG"
        ]
    },
    {
        icon: Coffee,
        title: "Vibrant Social Spaces",
        description: "Multiple cafeterias and courtyards for relaxation and networking",
        images: [
            "/Website images/Cafeteria 1.JPG",
            "/Website images/Courtyard 1.JPG",
            "/Website images/Cafe 1.JPG"
        ]
    },
    {
        icon: Users,
        title: "Event Venues",
        description: "Professional auditoriums for conferences, performances, and gatherings",
        images: [
            "/Website images/Auditorium 1.JPG",
            "/Website images/Audi 1.JPG"
        ]
    },
    {
        icon: Home,
        title: "Premium Accommodation",
        description: "Comfortable living spaces with modern amenities near campus",
        images: [
            "/Website images/Single Premium Room.JPG",
            "/Website images/Twin Sharing Room.JPG"
        ]
    },
    {
        icon: Trophy,
        title: "Sports & Recreation",
        description: "Comprehensive sports facilities for health and wellness",
        images: [
            "/Website images/Sports Area.JPG"
        ]
    }
];

export default function CampusLifeSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
                <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-brand-orange rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[700px] h-[700px] bg-brand-navy rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                            Experience Campus Life
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Explore world-class facilities designed to enhance your learning experience and campus life.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                {facility.images.map((image, imgIndex) => (
                                    <motion.img
                                        key={imgIndex}
                                        src={image}
                                        alt={`${facility.title} - View ${imgIndex + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        initial={{ opacity: imgIndex === 0 ? 1 : 0 }}
                                        animate={{
                                            opacity: hoveredIndex === index
                                                ? (imgIndex === (Math.floor(Date.now() / 2000) % facility.images.length) ? 1 : 0)
                                                : (imgIndex === 0 ? 1 : 0)
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                ))}

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Icon Overlay */}
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300">
                                    <facility.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>

                                {/* Image Count Indicator */}
                                {facility.images.length > 1 && (
                                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                                        {facility.images.length} Photos
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors duration-300">
                                    {facility.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {facility.description}
                                </p>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* Bottom CTA */}
                <FadeIn delay={0.5}>
                    <div className="mt-16 text-center">
                        <p className="text-slate-600 mb-6 text-lg">
                            Want to see more? Schedule a virtual campus tour with our team.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center rounded-full font-bold bg-brand-orange text-white px-8 py-4 text-lg transition-all shadow-lg hover:shadow-brand-orange/30"
                        >
                            Book Virtual Tour
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </motion.button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
