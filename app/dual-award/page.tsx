import Link from "next/link";
import { ArrowLeft, Award, Globe } from "lucide-react";

export default function DualAwardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">Dual Award Programs</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Earn degrees from two prestigious universities simultaneously
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 mb-8">
                    <Award className="w-16 h-16 text-brand-orange mb-6" />
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">What is a Dual Award?</h2>
                    <p className="text-lg text-slate-600 mb-4">
                        Dual award programs allow you to earn degrees from both a Malaysian university and an international partner university,
                        giving you globally recognized qualifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                        <Globe className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold text-brand-navy mb-2">Global Recognition</h3>
                        <p className="text-slate-600">Degrees recognized worldwide by employers and institutions</p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                        <Award className="w-10 h-10 text-orange-600 mb-4" />
                        <h3 className="text-xl font-bold text-brand-navy mb-2">Cost-Effective</h3>
                        <p className="text-slate-600">Get international qualifications at Malaysian tuition rates</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
