"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FadeIn } from "../ui/animations";
import { MapPin } from "lucide-react";
import DottedMap from "dotted-map";

type StudentPlace = {
    id: number;
    name: string;
    origin: string;
    uni: string;
    lat: number;
    lng: number;
    targetLat: number;
    targetLng: number;
    delay: number;
};

// Coordinates - Focused on South India primarily
const COORDS = {
    // South India (Primary focus - 70% of students)
    BANGALORE: { lat: 12.9716, lng: 77.5946 },
    CHENNAI: { lat: 13.0827, lng: 80.2707 },
    HYDERABAD: { lat: 17.3850, lng: 78.4867 },
    KOCHI: { lat: 9.9312, lng: 76.2673 },
    COIMBATORE: { lat: 11.0168, lng: 76.9558 },
    VISAKHAPATNAM: { lat: 17.6868, lng: 83.2185 },
    MYSORE: { lat: 12.2958, lng: 76.6394 },

    // West India
    MUMBAI: { lat: 19.0760, lng: 72.8777 },
    PUNE: { lat: 18.5204, lng: 73.8567 },

    // North India
    DELHI: { lat: 28.6139, lng: 77.2090 },

    // Malaysia
    KL: { lat: 3.1390, lng: 101.6869 },
};

const students: StudentPlace[] = [
    // South India - Primary focus (70% of students)
    { id: 1, name: "Rajesh", origin: "Bangalore", uni: "APU", ...COORDS.BANGALORE, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 0 },
    { id: 2, name: "Priya", origin: "Chennai", uni: "Sunway", ...COORDS.CHENNAI, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 0.8 },
    { id: 3, name: "Karthik", origin: "Hyderabad", uni: "MAHSA", ...COORDS.HYDERABAD, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 1.5 },
    { id: 4, name: "Divya", origin: "Kochi", uni: "Taylor's", ...COORDS.KOCHI, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 2.2 },
    { id: 5, name: "Arun", origin: "Coimbatore", uni: "Monash", ...COORDS.COIMBATORE, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 0.5 },
    { id: 6, name: "Lakshmi", origin: "Bangalore", uni: "UM", ...COORDS.BANGALORE, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 3.0 },
    { id: 7, name: "Sriram", origin: "Chennai", uni: "UCSI", ...COORDS.CHENNAI, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 1.8 },
    { id: 8, name: "Meera", origin: "Visakhapatnam", uni: "IMU", ...COORDS.VISAKHAPATNAM, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 2.5 },
    { id: 9, name: "Vivek", origin: "Mysore", uni: "INTI", ...COORDS.MYSORE, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 3.5 },
    { id: 10, name: "Ananya", origin: "Hyderabad", uni: "Nottingham", ...COORDS.HYDERABAD, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 1.2 },

    // West India (20%)
    { id: 11, name: "Rahul", origin: "Mumbai", uni: "APU", ...COORDS.MUMBAI, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 2.8 },
    { id: 12, name: "Sneha", origin: "Pune", uni: "Sunway", ...COORDS.PUNE, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 0.3 },

    // North India (10%)
    { id: 13, name: "Rohan", origin: "Delhi", uni: "Taylor's", ...COORDS.DELHI, targetLat: COORDS.KL.lat, targetLng: COORDS.KL.lng, delay: 3.8 },
];

export default function LiveAdmissionMap() {
    const [activeStudent, setActiveStudent] = useState<number | null>(null);
    const [svgMap, setSvgMap] = useState<string>("");

    // Generate Map only once
    useEffect(() => {
        // Create map with tighter grid for higher detail
        const map = new DottedMap({ height: 60, grid: "diagonal" });
        const svg = map.getSVG({
            radius: 0.22,
            color: "#475569", // Slate-600
            shape: "circle",
            backgroundColor: "transparent",
        });
        setSvgMap(svg);
    }, []);

    // Project coordinates to SVG space (Simplified projection for DottedMap)
    // DottedMap uses a Mercator-like projection where:
    // x = (lng + 180) * (width / 360)
    // y = (lat * -1 + 90) * (height / 180)
    // Given height=60 and assuming width=120 (aspect ratio 2:1 typically), 
    // we map to percentage (0-100) for responsive overlay.
    const project = (lat: number, lng: number) => {
        const x = (lng + 180) * (100 / 360);
        const y = ((-lat) + 90) * (100 / 180);
        return { x, y };
    };

    return (
        <section className="py-24 bg-brand-navy overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-orange rounded-full blur-[180px] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Global Ambitions, <span className="text-brand-orange">Malaysian Destination</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Join the wave of students from over 40 countries choosing Malaysia for world-class education.
                        </p>
                    </div>
                </FadeIn>

                {/* Map Container - Glass Effect */}
                <div className="relative w-full aspect-[2/1] md:aspect-[2.2/1] bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden group">

                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    {/* The Dotted Map - Zoomed into Asia */}
                    <div
                        className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen transition-opacity duration-700 group-hover:opacity-80"
                        dangerouslySetInnerHTML={{
                            __html: svgMap.replace(
                                /<svg([^>]*)>/,
                                '<svg$1 viewBox="120 25 60 35" preserveAspectRatio="xMidYMid slice">'
                            )
                        }}
                    />

                    {/* Overlay: Students & Flight Paths */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        {students.map((student) => {
                            const start = project(student.lat, student.lng);
                            const end = project(student.targetLat, student.targetLng);

                            // Adjust Bezier control point for curve height based on distance
                            const midX = (start.x + end.x) / 2;
                            const dist = Math.abs(end.x - start.x);
                            const controlY = Math.min(start.y, end.y) - (dist * 0.5); // Arch higher for longer flights

                            return (
                                <div key={student.id} className="absolute inset-0 w-full h-full">
                                    {/* Flight Path SVG Layer */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <motion.path
                                            d={`M${start.x} ${start.y} Q ${midX} ${controlY} ${end.x} ${end.y}`}
                                            fill="none"
                                            stroke="url(#gradient-line)"
                                            strokeWidth="0.2"
                                            strokeDasharray="1 1"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 0.6 }}
                                            transition={{ duration: 2, delay: student.delay, ease: "easeOut" }}
                                        />
                                        <defs>
                                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
                                                <stop offset="100%" stopColor="#fb923c" stopOpacity="1" />
                                            </linearGradient>
                                        </defs>

                                        {/* Moving Plane/Dot */}
                                        <motion.circle
                                            r="0.4"
                                            fill="#fff"
                                            animate={{
                                                offsetDistance: "100%",
                                                opacity: [0, 1, 0]
                                            }}
                                            style={{
                                                offsetPath: `path("M${start.x} ${start.y} Q ${midX} ${controlY} ${end.x} ${end.y}")`,
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                repeatDelay: 1,
                                                ease: "easeInOut",
                                                delay: student.delay
                                            }}
                                        />
                                    </svg>

                                    {/* Origin Dot (Pulse) */}
                                    <div
                                        className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group/pin"
                                        style={{ left: `${start.x}%`, top: `${start.y}%` }}
                                        onMouseEnter={() => setActiveStudent(student.id)}
                                        onMouseLeave={() => setActiveStudent(null)}
                                    >
                                        <span className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-75" />
                                        <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                                        {/* Tooltip */}
                                        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl z-50 transition-all duration-300 ${activeStudent === student.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}>
                                            <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">Incoming Student</p>
                                            </div>
                                            <p className="text-white font-bold text-sm truncate">{student.name}</p>
                                            <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                                                <span>{student.origin}</span>
                                                <span className="text-slate-600">➝</span>
                                                <span className="text-brand-orange/90">{student.uni}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}

                        {/* Destination Pulse (Malaysia) */}
                        <div
                            className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${project(COORDS.KL.lat, COORDS.KL.lng).x}%`, top: `${project(COORDS.KL.lat, COORDS.KL.lng).y}%` }}
                        >
                            <div className="absolute inset-0 bg-brand-orange/30 rounded-full animate-ping" />
                            <div className="absolute inset-0 bg-brand-orange/50 rounded-full blur-md" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
