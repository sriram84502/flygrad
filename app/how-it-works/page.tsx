import Link from "next/link";
import { ArrowLeft, GraduationCap, Users, FileCheck, ShieldCheck } from "lucide-react";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">How FlyGrad Works</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Your journey to studying abroad, simplified in 4 easy steps
                    </p>
                </div>
            </div>

            {/* Steps */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
                            <GraduationCap className="w-8 h-8 text-brand-orange" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">1. Explore Programs</h3>
                        <p className="text-slate-600">
                            Browse our extensive database of courses and universities. Filter by discipline, location, and your preferences.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-brand-orange" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">2. Get Expert Guidance</h3>
                        <p className="text-slate-600">
                            Connect with our experienced education consultants who will guide you through the entire application process.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
                            <FileCheck className="w-8 h-8 text-brand-orange" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">3. Apply & Prepare</h3>
                        <p className="text-slate-600">
                            We help you prepare documents, submit applications, and coordinate with universities on your behalf.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
                            <ShieldCheck className="w-8 h-8 text-brand-orange" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">4. Secure Your Spot</h3>
                        <p className="text-slate-600">
                            Receive your offer letter, complete visa formalities, and get ready for your international education journey!
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-brand-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-orange/90 transition-colors"
                    >
                        Start Your Journey Today
                    </Link>
                </div>
            </div>
        </div>
    );
}
