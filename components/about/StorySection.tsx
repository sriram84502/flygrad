"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const stories = [
    {
        title: "From humble beginnings.",
        tag: "Our Story",
        description: "Fly Graduate is India’s pioneering overseas education company dedicated to making international education accessible, affordable, and achievable for every student especially those from Tier-2 and Tier-3 cities.",
        image: "/images/hero-meeting.png",
        imgText: "Our Story",
        imgTitle: "From humble beginnings."
    },
    {
        title: "The Spark",
        tag: "The Beginning",
        description: "Founded by M. Nithin Reddy, an MBA graduate from the University of Northampton (UK), Fly Graduate was born from the belief that “Now Everyone Can Study Abroad” inspired by AirAsia’s vision that everyone can fly. During his studies abroad, Nithin witnessed the real challenges students face limited budgets, exam barriers, and visa hurdles. Fly Graduate was created to overcome these through practical pathways such as the American Degree Transfer Program (ADTP), Dual Award Degrees (UK), and Full-Time Study in Malaysia’s top-ranked universities.",
        image: "/images/team-1.png",
        imgText: "The Beginning",
        imgTitle: "The Spark"
    },
    {
        title: "Where we are today.",
        tag: "Present Day",
        description: "Today, Fly Graduate proudly partners with 15+ leading Malaysian universities, enabling Indian students to start their global education journey affordably without compromising on quality or global recognition.",
        image: "/images/office-map.png",
        imgText: "Present Day",
        imgTitle: "Where we are today."
    }
];

export default function StorySection() {
    const [activeStory, setActiveStory] = useState(0);
    const storyRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = stories.map((_, index) => {
            const el = storyRefs.current[index];
            if (!el) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveStory(index);
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: "-20% 0px -20% 0px"
                }
            );
            observer.observe(el);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <section className="relative bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Sticky Image Section */}
                <div className="hidden lg:block flex-1 relative h-[300vh]"> {/* Increased height to allow scrolling */}
                    <div className="sticky top-32 h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                        {stories.map((story, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
                                    activeStory === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                )}
                            >
                                <Image
                                    alt={story.imgTitle}
                                    src={story.image}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
                                <div className={cn(
                                    "absolute bottom-10 left-10 right-10 text-white transform transition-transform duration-500",
                                    activeStory === index ? "translate-y-0" : "translate-y-4"
                                )}>
                                    <div className="text-sm font-medium opacity-80 uppercase tracking-wider mb-2">
                                        {story.imgText}
                                    </div>
                                    <div className="text-2xl font-bold">
                                        {story.imgTitle}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scrolling Text Section */}
                <div className="flex-1 pb-20 lg:pb-32">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            ref={(el) => { storyRefs.current[index] = el; }}
                            className="min-h-[80vh] flex flex-col justify-center space-y-6 py-20"
                        >
                            <div className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider w-fit">
                                {story.tag}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight">
                                {story.title}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {story.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
