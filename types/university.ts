export interface University {
    slug: string;
    name: string;
    description: string;
    heroImage: string;
    stats: {
        qsRanking?: string;
        qsStars?: string;
        internationalStudents?: string;
        employability?: string;
        tier?: string;
    };
    overview: string;
    history?: string; // Optional for now to avoid breaking if data missing, but I will populate it
    location?: string;
    established?: string;
    rankingsList?: string[]; // Detailed list of rankings
    keyFacts?: string[]; // For bullet points like student count etc if needed, or put in overview
    courses: string[];
    campusLife: {
        description: string;
        images: string[];
    };
    admissions: {
        requirements: string[];
        intakes: string[];
    };
    fees?: {
        undergraduate: string;
        postgraduate: string;
        other?: string;
    };
}
