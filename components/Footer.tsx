"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-navy border-t border-slate-800 pt-20 pb-10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.05]">
                <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-brand-orange rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-cyan rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <Link href="/" className="inline-block">
                            <img
                                src="/images/logo2.png"
                                alt="Fly Graduate"
                                className="h-14 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
                            Strategic consulting for ambitious graduates and growing businesses.
                            We help you design your next big move.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                                { icon: <Facebook className="w-5 h-5" />, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-orange/20"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Study in", href: "#", isHeader: true }, // Placeholder logic if needed, or just link
                                { label: "About", href: "/about" },
                                { label: "Contact", href: "/contact" }
                            ].map((link, index) => (
                                <li key={index}>
                                    {link.isHeader ? (
                                        <div className="group relative cursor-pointer">
                                            <span className="text-slate-400 hover:text-brand-orange transition-colors text-base flex items-center gap-2">
                                                Study in <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            </span>
                                        </div>
                                    ) : (
                                        <Link
                                            className="text-slate-400 hover:text-brand-orange transition-colors text-base flex items-center gap-2 group"
                                            href={link.href}
                                        >
                                            <span className="relative">
                                                {link.label}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                                            </span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact</h3>
                        <ul className="space-y-6 text-slate-400">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-slate-800/50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <a
                                    href="mailto:info@flygraduate.com"
                                    className="hover:text-white transition-colors pt-1 block"
                                >
                                    info@flygraduate.com
                                </a>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-slate-800/50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="pt-1 leading-relaxed">
                                    Fly Graduate, 7, 1-636/40, near ESI Hospital, Model Colony, Sundar Nagar, Erragadda, Hyderabad, Telangana 500038
                                </span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-slate-800/50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                    <span className="font-bold text-lg text-brand-orange group-hover:text-white">📞</span>
                                </div>
                                <div className="pt-1 leading-relaxed flex flex-col">
                                    <a href="tel:+917995959515" className="hover:text-white transition-colors">+91 79959 59515</a> / <a href="tel:+917995959516" className="hover:text-white transition-colors">+91 79959 59516</a> / <a href="tel:+917995959517" className="hover:text-white transition-colors">+91 79959 59517</a>
                                </div>
                            </li>
                            <li className="text-sm text-slate-500 font-medium pl-14 pt-2 border-t border-slate-800/50 mt-4">
                                Mon - Sat: 10:00 AM - 06:30 PM IST
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
                    <p>© 2025 FlyGraduate Consulting. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link className="hover:text-white transition-colors relative group" href="/privacy">
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link className="hover:text-white transition-colors relative group" href="/terms">
                            Terms of Service
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
