import { University } from "@/types/university";

export const universities: University[] = [
    {
        slug: "taylors-university",
        name: "Taylor's University",
        location: "Subang Jaya, Selangor, Malaysia",
        established: "1969",
        description:
            "Ranked #1 private university in Malaysia and Southeast Asia. Known for its Lakeside Campus and strong rankings in Hospitality, Marketing, and Design.",
        heroImage: "/images/service-study.png", // Placeholder
        stats: {
            qsRanking: "#253",
            qsStars: "5-Star",
            internationalStudents: "1,704", // Updated from text
            employability: "99.5%", // Updated from text
        },
        overview:
            "Taylor's University is a leading private university in Malaysia and Southeast Asia, growing from a college in 1969 to full university status in 2010. It is renowned for its teaching excellence and strong graduate employability.",
        history: "Founded originally as Taylor's College in 1969 by George Leighton Taylor. It started as a coaching college and progressed to offering pre-university and twinning programs. Awarded University College status in 2006, and full university status in 2010. Has grown into a leading private university in Malaysia and Southeast Asia.",
        rankingsList: [
            "QS World University Rankings 2026: Ranked #253 globally.",
            "Ranked #1 private university in Malaysia and Southeast Asia for several years.",
            "QS Asia University Ranking 2024: Ranked #41.",
            "QS Graduate Employability Rankings: Top 1% globally.",
            "Hospitality & Leisure Management: #19 in the world.",
            "Marketing: Top 50 globally.",
            "Rated 5 Stars for Online Learning by QS."
        ],
        courses: [
            "Business (Admin, Banking, HRM, Intl Business, Marketing, Economics)",
            "Accounting & Finance",
            "Actuarial Studies",
            "Engineering (Chemical, Mechanical, Electrical, Civil, Software)",
            "Computer Science & IT (Security, Forensics)",
            "Design (Creative Media, Interior Architecture)",
            "Culinology & Patisserie Arts",
            "Hospitality, Tourism & Events Management",
            "Medicine (MBBS) & Pharmacy",
            "Mass Communication",
            "Biomedical Science",
            "Psychology",
            "Law",
            "Architecture",
            "Education (Masters)"
        ],
        campusLife: {
            description:
                "Main campus is the Lakeside Campus at Subang Jaya. Facilities are designed to support learning, innovation, and student comfort, providing a world-class environment.",
            images: [],
        },
        admissions: {
            requirements: [
                "Undergraduate: CGPA 2.0 or higher (General)",
                "MBBS: Foundation CGPA 3.0 or Diploma 3.5 + Interview/Medical",
                "Postgraduate: CGPA 2.5 - 2.75 + Work Experience (2-5 years)"
            ],
            intakes: ["March", "August (Undergraduate)", "Jan, Mar, Jun, Aug, Oct (Postgraduate)"],
        },
        fees: {
            undergraduate: "MYR 20,317 - 73,800 per year",
            postgraduate: "Check specifics (e.g., MBA approx INR 15.59 lakh)",
            other: "Hostel and other fees extra."
        }
    },
    {
        slug: "university-of-nottingham",
        name: "University of Nottingham Malaysia",
        location: "Semenyih, Selangor, Malaysia",
        established: "2000 (Malaysia Campus)", // Inferred context, main is 1881
        description:
            "A branch campus of the prestigious UK university. Offers the same degree and curriculum as the UK campus at a fraction of the cost.",
        heroImage: "/images/service-study.png", // Placeholder
        stats: {
            qsRanking: "#97", // Global 2026
            qsStars: "5-Star",
            internationalStudents: "Intl Cohort",
            employability: "High",
        },
        overview:
            "The University of Nottingham Malaysia offers world-class teaching and research, granting the same degree as its UK counterpart. It provides a global experience with a diverse student body.",
        history: "The University of Nottingham was founded in 1881 in the UK and established its Malaysia campus as one of the first foreign branch campuses. It is internationally recognized for research, teaching, and global partnerships.",
        rankingsList: [
            "QS World University Rankings 2026: Ranked #97 globally.",
            "QS Employability: 62nd globally.",
            "7th in the UK for research power (REF 2021).",
            "Typical top-tier UK university ranking profile."
        ],
        courses: [
            "Arts & Humanities (BA, BSc)",
            "Engineering (Chemical, Civil, Mechanical, Electrical)",
            "Sciences (BSc, Biosciences)",
            "Business & Management (BBA, MBA)",
            "Economics",
            "Education",
            "Psychology",
            "Computer Science",
            "Pharmacy",
            "International Relations"
        ],
        campusLife: {
            description:
                "A lush, green campus in Semenyih with comprehensive sports facilities, student village, and a global student body, mirroring the UK campus experience.",
            images: [],
        },
        admissions: {
            requirements: [
                "Foundation/Matriculation: CGPA 3.0+",
                "A-Levels: BBB or higher",
                "IELTS: 6.0 - 6.5 (Typical)",
                "Postgraduate: Bachelor’s degree with 2:1 or equivalent"
            ],
            intakes: ["Spring (January)", "Summer (May)", "Autumn (September)"],
        },
        fees: {
            undergraduate: "Contact for Malaysia Pricing (UK Fees: GBP 18k-36k)",
            postgraduate: "Contact for Pricing",
            other: "Living costs are significantly lower in Malaysia than UK."
        }
    },
    {
        slug: "swinburne-university",
        name: "Swinburne University of Technology",
        location: "Kuching, Sarawak, Malaysia",
        established: "2000 (Sarawak Campus)",
        description:
            "The Sarawak campus of the Australian university. Known for Engineering, IT, and Business. Graduates receive the same Australian testamur.",
        heroImage: "/images/service-study.png", // Placeholder
        stats: {
            qsRanking: "#294", // Global 2026
            qsStars: "5-Star",
            internationalStudents: "Diverse",
        },
        overview:
            "Swinburne Sarawak offers the same Australian education and degree at a fraction of the cost. It is known for its strong focus on technology, innovation, and industry engagement.",
        history: "Founded in 1908 in Australia, Swinburne established its Sarawak campus to offer international education. It has a strong history of industry-based learning.",
        rankingsList: [
            "QS World University Rankings 2026: Ranked #294 globally.",
            "Top 333 in Engineering and Technology.",
            "Winner in employability category at Australian Financial Review Awards 2024.",
            "Top 15 in Australia for overall quality."
        ],
        courses: [
            "Engineering (Civil, Mechanical, Robotics, Electrical)",
            "Computer Science & IT",
            "Business & Commerce",
            "Design & Multimedia",
            "Biotechnology",
            "Science",
            "Quantity Surveying"
        ],
        campusLife: {
            description:
                "Located in Kuching, Sarawak, offering a unique blend of modern education and rich cultural heritage with lower living costs.",
            images: [],
        },
        admissions: {
            requirements: [
                "Undergraduate: Year 12 or equivalent",
                "IELTS: 6.0 - 6.5"
            ],
            intakes: ["March (Semester 1)", "August (Semester 2)"],
        },
        fees: {
            undergraduate: "AUD 28,000–45,000/year (Reference)",
            postgraduate: "AUD 27,392–46,160/year (Reference)",
            other: "Malaysia campus fees are typically lower in MYR."
        }
    },
    {
        slug: "sunway-university",
        name: "Sunway University",
        location: "Bandar Sunway, Selangor, Malaysia",
        established: "2004",
        description:
            "A leading private university known for its 5-Star QS rating, strong industry partnerships, and integrated campus city.",
        heroImage: "/images/service-study.png",
        stats: {
            qsRanking: "#410", // QS 2026
            qsStars: "5-Star",
            internationalStudents: "2,000+",
        },
        overview:
            "Sunway University is a leading private university governed by the Jeffrey Cheah Foundation. It is part of the integrated Sunway City and offers a broad range of industry-relevant programs.",
        history: "Founded as Sunway University College in 2004 and upgraded to full university status in 2011. It operates as a not-for-profit social enterprise under the Jeffrey Cheah Foundation.",
        rankingsList: [
            "QS World University Rankings 2026: Ranked #410.",
            "5-Star QS Stars Rating (Teaching, Facilities, Employability, Intl).",
            "Talentbank’s Employers’ Choice of University (4 consecutive years)."
        ],
        courses: [
            "Business, Finance & Accounting",
            "Computer Science, IT & Data Analytics",
            "Engineering (Electronic, Civil)",
            "Life Sciences, Pharmacy & Biomedicine",
            "Hospitality & Culinary Arts",
            "Design & Communication",
            "Psychology",
            "American Degree Transfer Program (ADTP)"
        ],
        campusLife: {
            description:
                "Located in Sunway City, a fully integrated township with a mall, theme park, and hospital. The state-of-the-art campus offers a vibrant student lifestyle.",
            images: [],
        },
        admissions: {
            requirements: [
                "Foundation/Matriculation: CGPA 2.0+",
                "A-Levels/UEC: Program dependent",
                "IELTS: Typically 6.0"
            ],
            intakes: ["January", "March", "August (Degree)", "Multiple for Pre-U"],
        },
        fees: {
            undergraduate: "MYR 31,000 - 33,400 per year (Approx)",
            postgraduate: "Varies (e.g. Online MBA ~RM 47k total)",
            other: "ADTP ~RM 30,450/year"
        }
    },
    {
        slug: "inti-international-university",
        name: "INTI International University",
        location: "Nilai, Negeri Sembilan, Malaysia",
        established: "1986",
        description:
            "Renowned for its American Degree Transfer Program (ADTP) and global university networks. Offers a complete campus experience.",
        heroImage: "/images/service-study.png", // Placeholder
        stats: {
            qsRanking: "#509", // QS 2026
            qsStars: "5-Star",
            internationalStudents: "20%+",
        },
        overview:
            "INTI International University is a premier private university known for international exposure, the American Degree Transfer Program, and strong graduate outcomes.",
        history: "Founded in 1986, INTI has grown into a major education provider with multiple campuses. It has a 30+ year history of student transfers and global partnerships.",
        rankingsList: [
            "QS World University Rankings 2026: Ranked #509.",
            "Strong QS Asia performance.",
            "Known for International Research Networks."
        ],
        courses: [
            "American Degree Transfer Program (ADTP)",
            "Business, Accounting & Finance",
            "Computer Science & IT",
            "Engineering (Civil, etc.)",
            "Health Sciences & Biotechnology",
            "Mass Communication",
            "Art & Design",
            "Hospitality & Culinary Arts"
        ],
        campusLife: {
            description:
                "Flagship residential campus in Nilai offering a complete university town experience with modern facilities, sports, and diverse student clubs.",
            images: [],
        },
        admissions: {
            requirements: [
                "Foundation/Matriculation: CGPA 2.0",
                "A-Levels: 2 Passes",
                "UEC: 5 Bs"
            ],
            intakes: ["January", "March", "May", "August"],
        },
        fees: {
            undergraduate: "MYR 23,988 - 38,264 per year (Approx)",
            postgraduate: "Contact for specifics",
            other: "Foundation: RM 15k - 25k/year"
        }
    }
];
