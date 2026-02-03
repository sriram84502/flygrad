"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MapPin, GraduationCap, BookOpen, Globe, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function LeadForm({ className = "" }: { className?: string }) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        whatsapp: "",
        place: "",
        studyLevel: "Postgraduate (PG)",
        field: "School of Computing & IT",
        destination: "Malaysia",
        intake: "",
        message: "",
        consent: true
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormState(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const studyLevels = [
        "Undergraduate",
        "Postgraduate",
        "Foundation"
    ];

    const fields = [
        "School of Engineering & Technology",
        "School of Computing & IT",
        "School of Business, Fintech & Entrepreneurship",
        "School of Biosciences & Health Sciences",
        "School of Design, Creative Media & Performing Arts",
        "School of Hospitality, Culinary Arts & Tourism",
        "School of Law",
        "School of Media & Communication",
        "School of Education",
        "School of Psychology & Social Sciences",
        "School of International Pathways & Transfer Programs"
    ];

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

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className={`text-center py-12 ${className}`}
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">You're All Set!</h3>
                <p className="text-slate-600">
                    We've received your request. One of our experts will be reaching out to you shortly to kickstart your Malaysia journey.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
            className={`space-y-5 ${className}`}
        >
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
                    <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all placeholder:text-slate-400 font-medium text-brand-navy"
                        placeholder="Full Name"
                    />
                </div>
                <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
                    <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all placeholder:text-slate-400 font-medium text-brand-navy"
                        placeholder="Email Address"
                    />
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
                    <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formState.whatsapp}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all placeholder:text-slate-400 font-medium text-brand-navy"
                        placeholder="WhatsApp Number"
                    />
                </div>
                <div className="relative group">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
                    <input
                        type="text"
                        name="place"
                        value={formState.place}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all placeholder:text-slate-400 font-medium text-brand-navy"
                        placeholder="City"
                    />
                </div>
            </motion.div>

            {/* Modern Segmented Control for Study Level */}
            <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Study Level</label>
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                    {studyLevels.map((level) => (
                        <label
                            key={level}
                            className={`cursor-pointer rounded-lg py-2 text-center text-xs font-bold transition-all ${formState.studyLevel.includes(level) || (level === "Foundation" && formState.studyLevel.includes("Foundation"))
                                ? 'bg-white text-brand-orange shadow-sm scale-[1.02]'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <input
                                type="radio"
                                name="studyLevel"
                                value={level === "Foundation" ? "Foundation / Diploma" : (level === "Undergraduate" ? "Undergraduate (UG)" : "Postgraduate (PG)")}
                                checked={formState.studyLevel.includes(level) || (level === "Foundation" && formState.studyLevel.includes("Foundation"))}
                                onChange={handleChange}
                                className="sr-only"
                            />
                            {level}
                        </label>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
                <select
                    name="field"
                    value={formState.field}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all font-medium text-brand-navy appearance-none cursor-pointer"
                >
                    {fields.map(f => (
                        <option key={f} value={f}>{f}</option>
                    ))}
                </select>
                {/* Custom Chevron */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
                    <input
                        type="text"
                        name="destination"
                        value={formState.destination}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all placeholder:text-slate-400 font-medium text-brand-navy"
                        placeholder="Destination"
                    />
                </div>
                <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
                    <input
                        type="text"
                        name="intake"
                        value={formState.intake}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all placeholder:text-slate-400 font-medium text-brand-navy"
                        placeholder="Intake (e.g. Sept '26)"
                    />
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
                <label className="relative flex items-center p-0.5 rounded-full cursor-pointer">
                    <input
                        name="consent"
                        type="checkbox"
                        checked={formState.consent}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 rounded border-slate-300 text-brand-orange focus:ring-brand-orange"
                    />
                </label>
                <span className="text-xs text-slate-500 leading-tight">
                    I agree to receive updates via WhatsApp / Call
                </span>
            </motion.div>

            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 px-6 bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Submitting...' : 'Get My Free Plan'}
                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </motion.button>
        </motion.form>
    );
}
