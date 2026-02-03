import { University } from "@/types/university";
import Image from "next/image";

interface UniversityHeroProps {
    university: University;
}

export default function UniversityHero({ university }: UniversityHeroProps) {
    return (
        <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            <Image
                alt={university.name}
                src={university.heroImage}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-end pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange text-white text-sm font-bold uppercase tracking-wider mb-6">
                            Partner University
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {university.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-2xl">
                            {university.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
