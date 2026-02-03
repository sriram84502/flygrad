import Link from "next/link";
import { ArrowLeft, BookOpen, Award } from "lucide-react";

export default function ADTPPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">American Degree Transfer Program (ADTP)</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Start in Malaysia, transfer to top US universities
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 mb-8">
                    <BookOpen className="w-16 h-16 text-brand-orange mb-6" />
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">What is ADTP?</h2>
                    <p className="text-lg text-slate-600 mb-4">
                        The American Degree Transfer Program allows you to complete your first 1-2 years in Malaysia at a fraction of the cost,
                        then transfer to partner universities in the United States to complete your degree.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                        <Award className="w-10 h-10 text-brand-orange mb-4" />
                        <h3 className="text-xl font-bold text-brand-navy mb-2">Cost Savings</h3>
                        <p className="text-slate-600">Save up to 50% on tuition by starting in Malaysia</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                        <BookOpen className="w-10 h-10 text-brand-orange mb-4" />
                        <h3 className="text-xl font-bold text-brand-navy mb-2">US Degree</h3>
                        <p className="text-slate-600">Graduate with a degree from a US university</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
