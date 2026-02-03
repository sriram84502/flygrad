import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <Shield className="w-12 h-12" />
                        <h1 className="text-5xl font-bold">Privacy Policy</h1>
                    </div>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Your privacy is important to us
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 prose prose-lg max-w-none">
                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, including name, email address, phone number, and educational background when you use our services.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process your university applications</li>
                        <li>Communicate with you about our services</li>
                        <li>Send you updates and marketing communications (with your consent)</li>
                    </ul>

                    <h2>3. Information Sharing</h2>
                    <p>
                        We may share your information with universities and educational institutions for the purpose of processing your applications.
                        We do not sell your personal information to third parties.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal information at any time. Contact us to exercise these rights.
                    </p>

                    <h2>6. Cookies</h2>
                    <p>
                        We use cookies to enhance your browsing experience and analyze website traffic. You can control cookies through your browser settings.
                    </p>

                    <h2>7. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                    </p>

                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy, please contact us at privacy@flygrad.com
                    </p>

                    <p className="text-sm text-slate-500 mt-8">
                        Last updated: February 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
