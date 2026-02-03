import CourseCategoryGrid from "@/components/courses/CourseCategoryGrid";
import Image from "next/image";

export const metadata = {
    title: "Find Your Ideal Course | FlyGraduate",
    description: "Browse top-ranked courses and universities in Malaysia. Find your perfect degree in Medicine, Engineering, IT, and more.",
};

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-20">
            {/* Hero Section */}
            <div className="bg-brand-navy text-white py-16 mb-12 relative overflow-hidden">
                <Image
                    alt="Study Environment"
                    src="/Website images/Classroom 6.JPG"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Find Your Ideal Course
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Explore hundreds of accredited programs from Malaysia&apos;s top universities.
                    </p>

                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6">
                <CourseCategoryGrid />
            </div>
        </main>
    );
}
