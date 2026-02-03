import Link from "next/link";
import { ArrowLeft, GraduationCap, TrendingUp } from "lucide-react";

export default function BachelorMasterPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">Bachelor to Master Programs</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Fast-track your academic journey with integrated programs
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 mb-8">
                    <TrendingUp className="w-16 h-16 text-brand-orange mb-6" />
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">Accelerated Learning Path</h2>
                    <p className="text-lg text-slate-600">
                        Integrated Bachelor to Master programs allow you to complete both degrees in less time,
                        saving you money and getting you career-ready faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                        <GraduationCap className="w-10 h-10 text-brand-orange mb-4" />
                        <h3 className="text-lg font-bold text-brand-navy mb-2">4+1 Programs</h3>
                        <p className="text-slate-600">Complete your Master's in just 1 additional year</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                        <TrendingUp className="w-10 h-10 text-brand-orange mb-4" />
                        <h3 className="text-lg font-bold text-brand-navy mb-2">Career Boost</h3>
                        <p className="text-slate-600">Stand out with advanced qualifications</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                        <GraduationCap className="w-10 h-10 text-brand-orange mb-4" />
                        <h3 className="text-lg font-bold text-brand-navy mb-2">Seamless Transition</h3>
                        <p className="text-slate-600">No separate applications needed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
