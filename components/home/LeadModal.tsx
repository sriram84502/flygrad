"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";
import { useEffect } from "react";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            // Store original overflow value
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";

            return () => {
                // Restore original overflow value on cleanup
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen]);

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header / Close Button */}
                            <div className="absolute top-4 right-4 z-10">
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-brand-navy mb-2">Get Your Personalized Plan</h2>
                                    <p className="text-slate-600">Connect with our experts to start your study abroad journey.</p>
                                </div>
                                <LeadForm />
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
