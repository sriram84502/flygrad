import Link from "next/link";
import { ArrowLeft, MapPin, Building2 } from "lucide-react";

export default function BranchCampusesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">Branch Campuses</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Study at international branch campuses in Malaysia
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-600 mb-8">
                        Many prestigious international universities have established branch campuses in Malaysia,
                        offering the same quality education at a more affordable cost.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                            <Building2 className="w-12 h-12 text-brand-orange mb-4" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">UK Branch Campuses</h3>
                            <p className="text-slate-600">University of Nottingham Malaysia, University of Reading Malaysia</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                            <MapPin className="w-12 h-12 text-brand-orange mb-4" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Australian Branch Campuses</h3>
                            <p className="text-slate-600">Monash University Malaysia, Swinburne University of Technology Sarawak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
