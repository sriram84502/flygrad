"use client";

import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "../ui/animations";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function SuccessStoriesSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-navy rounded-full blur-[80px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-brand-orange rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                        Success Stories
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of students who have successfully launched their global
                        careers with FlyGraduate.
                    </p>
                </FadeIn>
            </div>

            <div className="relative w-full overflow-hidden pb-12">
                {/* Marquee Container */}
                <div className="flex w-full">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        className="flex gap-8 pl-8 w-max hover:pause"
                    >
                        {[...stories, ...stories].map((story, i) => (
                            <div key={i} className="w-[350px] md:w-[450px] bg-white p-10 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 shrink-0 whitespace-normal relative group">
                                <div className="absolute top-8 right-8 text-brand-orange/10 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <Quote size={60} fill="currentColor" strokeWidth={0} />
                                </div>

                                <Quote className="w-8 h-8 text-brand-orange mb-6" />

                                <p className="text-lg text-slate-700 leading-relaxed mb-8 italic relative z-10 font-medium">
                                    &quot;{story.quote}&quot;
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-md relative">
                                        {story.image ? (
                                            <img
                                                src={story.image}
                                                alt={story.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-lg font-bold text-brand-navy">
                                                {story.initials}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-bold text-brand-navy text-lg">{story.name}</div>
                                        <div className="text-sm text-brand-emerald font-semibold uppercase tracking-wide">
                                            {story.role}
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1 font-medium">
                                            {story.course}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Gradient Fade Edges */}
                <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
}

const stories = [
    {
        quote: "Fly Graduate made my dream of studying in Malaysia a reality. The team was incredibly supportive throughout the entire process.",
        name: "Rahul Sharma",
        initials: "RS",
        role: "Student, Sunway University",
        course: "BSc Computer Science",
        image: "/Website images/IMG_1946.JPG"
    },
    {
        quote: "I was confused about which university to choose, but their counsellors helped me find the perfect fit for my budget and career goals.",
        name: "Priya Patel",
        initials: "PP",
        role: "Student, Taylor's University",
        course: "Bachelor of Business",
        image: "/Website images/IMG_1947.JPG"
    },
    {
        quote: "The visa process was so smooth. I didn't have to worry about a thing. Highly recommend Fly Graduate!",
        name: "Ahmed Khan",
        initials: "AK",
        role: "Student, APU",
        course: "MSc Data Science",
        image: "/Website images/IMG_1948.JPG"
    },
    {
        quote: "A truly professional team that cares about your future. They guided me not just for admission, but for my entire career path.",
        name: "Sneha Reddy",
        initials: "SR",
        role: "Student, Monash Malaysia",
        course: "BEng Mechatronics",
        image: "/Website images/IMG_1949.JPG"
    }
];
