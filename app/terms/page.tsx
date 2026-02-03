import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Please read these terms carefully before using our services
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 prose prose-lg max-w-none">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using FlyGrad's services, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h2>2. Use of Services</h2>
                    <p>
                        FlyGrad provides educational consultancy services to help students find and apply to universities. All information provided is for guidance purposes only.
                    </p>

                    <h2>3. User Responsibilities</h2>
                    <p>
                        Users are responsible for providing accurate information and maintaining the confidentiality of their account credentials.
                    </p>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, and images, is the property of FlyGrad and protected by copyright laws.
                    </p>

                    <h2>5. Limitation of Liability</h2>
                    <p>
                        FlyGrad shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                    </p>

                    <h2>6. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
                    </p>

                    <p className="text-sm text-slate-500 mt-8">
                        Last updated: February 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
