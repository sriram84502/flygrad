export interface CourseProgram {
    degree: string;              // e.g., "Bachelor of Computer Science (Honours)"
    university: string;          // e.g., "Taylor's University"
    universitySlug: string;      // e.g., "taylors-university"
    link: string;               // e.g., "/study/taylors-university"
    duration?: string;          // e.g., "3 Years"
    intake?: string;            // e.g., "Mar, Aug"
    studyLevel?: string; // e.g. UG, PG
    school?: string;     // e.g. Faculty of Arts
    awardingBody?: string; // e.g. Lancaster University
}

export interface CourseCategory {
    id: string;                 // e.g., "computing"
    title: string;              // e.g., "Computing & IT"
    description: string;        // Short blurb
    iconName: string;           // Icon identifier for mapping in component
    keywords?: string[];
    programs: CourseProgram[];
}
