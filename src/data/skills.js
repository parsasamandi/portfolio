/**
 * skills.js
 * Source of truth for the Skills section category cards.
 * Rendered by components/Skills.jsx.
 *
 * Each entry shape:
 *   key         {string}   — unique identifier used as React key
 *   title       {string}   — category heading
 *   subtitle    {string}   — honest proficiency description
 *   items       {string[]} — individual skill names
 *   iconType    {string}   — key into the iconMap in Skills.jsx ('database'|'cpu'|'brain')
 *   accentColor {number}   — 1 | 2 | 3 — maps to CSS --accent-1/2/3 for icon colour
 *
 * Rules:
 *   - Only list skills you can speak to in an interview
 *   - Do not add a skill you have only read about but never used in a project
 *   - To add a new category with a new icon, also add the icon to iconMap in Skills.jsx
 */
export const skillCategories = [
    {
        key: 'core',
        title: 'Core Engineering',
        subtitle: 'Hands-on expertise',
        items: [
            'PHP', 'Laravel', 'MySQL', 'REST APIs',
            'RBAC', 'MVC Architecture', 'Database Design', 'Git'
        ],
        iconType: 'database',
        accentColor: 1
    },
    {
        key: 'aiNative',
        title: 'AI-Native Stack',
        subtitle: 'Delivered via AI-augmented workflows',
        items: [
            'Python', 'FastAPI', 'React', 'TypeScript',
            'Next.js', 'Tailwind CSS', 'Docker', 'Node.js'
        ],
        iconType: 'cpu',
        accentColor: 2
    },
    {
        key: 'aiMl',
        title: 'AI / ML',
        subtitle: 'LLM integration & intelligent systems',
        items: [
            'RAG Pipelines', 'Semantic Search', 'LLM APIs',
            'ChromaDB', 'LangChain', 'OpenAI', 'Gemini'
        ],
        iconType: 'brain',
        accentColor: 3
    }
];
