import { universities } from "@/data/universities";
import UniversityHero from "@/components/study/UniversityHero";
import UniversityContent from "@/components/study/UniversityContent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return universities.map((uni) => ({
        university: uni.slug,
    }));
}

export default async function UniversityPage({
    params,
}: {
    params: Promise<{ university: string }>;
}) {
    const { university: slug } = await params;
    const university = universities.find((u) => u.slug === slug);

    if (!university) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <UniversityHero university={university} />
            <UniversityContent university={university} />
        </main>
    );
}
