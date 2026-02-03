const XLSX = require('xlsx');
const fs = require('fs');

const FILE_PATH = 'data/Malaysia Universities Courses (2026).xlsx';

// Mapping keywords to Categories
const CATEGORY_MAP = [
    {
        id: "engineering",
        title: "Engineering",
        iconName: "Wrench",
        description: "Design, build, and innovate with professional engineering and technology degrees.",
        keywords: [
            "engineering",
            "civil",
            "mechanical",
            "electrical",
            "electronic",
            "chemical",
            "mechatronic",
            "architecture",
            "quantity surveying"
        ]
    },
    {
        id: "computing-it",
        title: "Computing & IT",
        iconName: "Laptop",
        description: "Build digital systems and intelligent solutions with computing and software-focused degrees.",
        keywords: [
            "computer",
            "computing",
            "information technology",
            "software",
            "multimedia",
            "data science",
            "artificial intelligence",
            "cyber",
            "network",
            "information system"
        ]
    },
    {
        id: "medicine-health",
        title: "Medicine & Health Sciences",
        iconName: "Stethoscope",
        description: "Prepare for careers in healthcare, diagnostics, therapy, and medical sciences.",
        keywords: [
            "medicine",
            "medical",
            "nursing",
            "pharmacy",
            "health",
            "biomedical",
            "optometry",
            "dietetics",
            "nutrition",
            "physiotherapy",
            "occupational therapy",
            "audiology",
            "speech",
            "radiography",
            "diagnostic imaging"
        ]
    },
    {
        id: "business-management",
        title: "Business & Management",
        iconName: "Briefcase",
        description: "Develop leadership, entrepreneurial, and economic expertise for the business world.",
        keywords: [
            "business",
            "management",
            "entrepreneur",
            "marketing",
            "finance",
            "accounting",
            "commerce",
            "economics",
            "logistics",
            "supply chain"
        ]
    },
    {
        id: "science-math",
        title: "Science & Mathematics",
        iconName: "Microscope",
        description: "Explore fundamental and applied sciences driving research, innovation, and discovery.",
        keywords: [
            "science",
            "biology",
            "chemistry",
            "physics",
            "mathematics",
            "statistics",
            "actuarial",
            "biotechnology",
            "microbiology",
            "genetics",
            "nuclear",
            "materials",
            "environmental",
            "marine",
            "geology",
            "food science"
        ]
    },
    {
        id: "social-sciences-education",
        title: "Social Sciences & Education",
        iconName: "GraduationCap",
        description: "Understand society, human behaviour, education, and social development.",
        keywords: [
            "education",
            "teaching",
            "tesl",
            "special education",
            "psychology",
            "sociology",
            "anthropology",
            "political",
            "geography",
            "social work",
            "developmental",
            "linguistics"
        ]
    },
    {
        id: "arts-design",
        title: "Arts & Design",
        iconName: "Palette",
        description: "Unleash creativity in design, fashion, media, and the arts.",
        keywords: [
            "art",
            "design",
            "creative",
            "fashion",
            "textile",
            "visual",
            "animation",
            "film",
            "music",
            "theatre",
            "media",
            "communication",
            "liberal studies",
            "history",
            "language",
            "literature"
        ]
    },
    {
        id: "hospitality-tourism",
        title: "Hospitality & Tourism",
        iconName: "Hotel", // Note: Need to support this in frontend
        description: "Join a global industry in hospitality, tourism, and event management.",
        keywords: [
            "hospitality",
            "tourism",
            "hotel",
            "culinary",
            "event",
            "travel"
        ]
    },
    {
        id: "law",
        title: "Law",
        iconName: "Scale",
        description: "Professional legal education for aspiring lawyers.",
        keywords: [
            "law",
            "legal",
            "llb",
            "juris"
        ]
    },
    {
        id: "islamic-studies",
        title: "Islamic Studies",
        iconName: "Scroll",
        description: "Deepen your understanding of Islamic theology and law.",
        keywords: [
            "islam",
            "islamic",
            "shariah",
            "quran",
            "sunnah",
            "da’wah",
            "arabic"
        ]
    },
    {
        id: "foundation-general",
        title: "General & Interdisciplinary",
        iconName: "Layers",
        description: "Broad, interdisciplinary and general studies programs.",
        keywords: [
            "liberal",
            "general studies",
            "interdisciplinary",
            "foundation"
        ]
    }
];

function getCategory(school, courseName) {
    // Sanitize and prepare text
    const text = (school + " " + courseName).trim();

    for (const cat of CATEGORY_MAP) {
        // Use regex for word boundary matching
        for (const k of cat.keywords) {
            // Escape special regex chars if any (though most keywords are simple letters)
            const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // 'i' flag for case insensitive
            const regex = new RegExp(`\\b${escapedK}\\b`, 'i');

            if (regex.test(text)) {
                return cat;
            }
        }
    }
    return null;
}

function getSlug(name) {
    if (!name) return "";
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

try {
    const workbook = XLSX.readFile(FILE_PATH);
    const sheetNames = workbook.SheetNames;

    console.warn("DEBUG: Found Sheets:", sheetNames);

    // Group by Category
    const categoryData = {};
    CATEGORY_MAP.forEach(cat => {
        categoryData[cat.id] = { ...cat, programs: [] };
    });
    categoryData['other'] = {
        id: 'other',
        title: 'Other Programs',
        description: 'Explore other diverse programs.',
        iconName: 'BookOpen',
        programs: []
    };

    let totalProcessed = 0;

    sheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        let headerRow = [];
        let firstDataRow = [];

        // Find header and first data
        for (let i = 0; i < rows.length; i++) {
            const r = rows[i];
            if (r && r.some(c => typeof c === 'string' && (c.includes('Course') || c.includes('Degree') || c.includes('University')))) {
                headerRow = r;
                if (rows[i + 1]) firstDataRow = rows[i + 1];
                break;
            }
        }

        console.warn(`\nDEBUG: Sheet "${sheetName}"`);
        console.warn(`   Headers: ${JSON.stringify(headerRow)}`);
        console.warn(`   Sample Data: ${JSON.stringify(firstDataRow)}`);

        let lastUniName = "";
        let startIndex = 0;
        if (rows[0] && rows[0][0] && typeof rows[0][0] === "string" && rows[0][0].includes("University")) {
            startIndex = 1;
        }

        for (let i = startIndex; i < rows.length; i++) {
            const row = rows[i];
            if (!row || row.length === 0) continue;

            if (row[0]) {
                lastUniName = row[0];
            }
            let uniName = lastUniName || sheetName;
            // Clean up UniName (remove brackets etc if needed, or keep as is)
            uniName = uniName.trim();

            const studyLevel = (row[1]) || "";
            const school = (row[2]) || "";
            const courseName = row[3];
            const link = (row[4]) || "#";
            // Column 5 is "Degree" in Excel, which often means Awarding Body (e.g. Lancaster Uni)
            // or sometimes just repeats the University Name if own degree.
            const awardingBody = (row[5]) || "";

            const degree = courseName;

            if (!courseName) continue;

            totalProcessed++;

            const cat = getCategory(school, courseName);
            const catId = cat ? cat.id : 'other';

            categoryData[catId].programs.push({
                degree: degree.toString().replace(/"/g, '\\"'),
                university: uniName.toString().replace(/"/g, '\\"'),
                universitySlug: getSlug(uniName),
                link: link,
                studyLevel: studyLevel.toString().replace(/"/g, '\\"'),
                school: school.toString().replace(/"/g, '\\"'),
                awardingBody: awardingBody.toString().replace(/"/g, '\\"'),
            });
        }
    });

    console.warn(`DEBUG: Total valid programs found: ${totalProcessed}`);
    Object.keys(categoryData).forEach(k => {
        console.warn(`DEBUG: Category ${k}: ${categoryData[k].programs.length} programs`);
        if (k === 'other' && categoryData[k].programs.length > 0) {
            console.warn("DEBUG: 'Other' items sample:", JSON.stringify(categoryData[k].programs.slice(0, 10), null, 2));
        }
    });

    // Generate Output
    let output = `import { CourseCategory } from "@/types/course";\n\nexport const courseCategories: CourseCategory[] = [\n`;
    const sortedKeys = [...CATEGORY_MAP.map(c => c.id), 'other'];

    sortedKeys.forEach(key => {
        const cat = categoryData[key];
        // Skip empty categories
        if (!cat || cat.programs.length === 0) return;

        output += `    {\n`;
        output += `        id: "${cat.id}",\n`;
        output += `        title: "${cat.title}",\n`;
        output += `        description: "${cat.description}",\n`;
        output += `        iconName: "${cat.iconName}",\n`;
        output += `        programs: [\n`;

        cat.programs.forEach(prog => {
            output += `            {\n`;
            output += `                degree: "${prog.degree}",\n`;
            output += `                university: "${prog.university}",\n`;
            output += `                universitySlug: "${prog.universitySlug}",\n`;
            output += `                link: "${prog.link}",\n`;
            output += `                studyLevel: "${prog.studyLevel}",\n`;
            output += `                school: "${prog.school}",\n`;
            output += `                awardingBody: "${prog.awardingBody}",\n`;
            output += `            },\n`;
        });

        output += `        ]\n`;
        output += `    },\n`;
    });
    output += `];\n`;

    console.log(output);

} catch (e) {
    console.error("Critical Error:", e);
}
