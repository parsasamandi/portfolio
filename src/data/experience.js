/**
 * experience.js
 * Source of truth for the Experience section timeline.
 * Rendered by components/Experience.jsx in array order (most recent first).
 *
 * Each entry shape:
 *   role        {string}   — job title
 *   company     {string}   — organisation name
 *   location    {string}   — city / region
 *   period      {string}   — 'Mon YYYY — Present' or 'Mon YYYY — Mon YYYY' (em dash)
 *   description {string[]} — max 3 bullets, each starting with a past-tense action verb
 *   tech        {string[]} — technologies used
 *   badge       {string}   — 'Hands-On' | 'AI-Native'
 *
 * To add a new entry: prepend to this array (most recent at index 0).
 */
export const experiences = [
    {
        role: 'Lead Developer',
        company: 'Community Platform Development',
        location: 'Greater Vancouver, BC',
        period: 'Feb 2026 — Present',
        description: [
            'Architected and deployed a bilingual (English/Farsi) community platform live at rasoulallah.ca using Laravel 12, Filament 3, and Laravel Octane with FrankenPHP.',
            'Implemented content management, membership registration, prayer times, and event scheduling with role-based admin controls via Filament dashboard.',
            'Deployed via Docker on Railway with multi-environment R2 object storage and 30-day rolling backups.',
        ],
        tech: ['Laravel 12', 'PHP', 'Filament 3', 'Docker', 'Railway', 'AWS R2'],
        badge: 'AI-Native',
    },
    {
        role: 'Web Developer (Volunteer)',
        company: 'Golestan Foundation',
        location: 'Remote',
        period: 'Jan 2024 — Present',
        description: [
            'Developed a scalable multi-user Laravel platform with admin dashboard and API layer, streamlining financial data management for 19 organizations.',
            'Replaced a manual Google Forms-based workflow with a structured Laravel database solution, reducing data entry errors and improving reporting accuracy.',
            'Engineered full-stack CRUD operations with secure authentication, granular RBAC, and normalized relational database design.',
        ],
        tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'RBAC'],
        badge: 'Hands-On',
    },
    {
        role: 'Web Developer Intern',
        company: 'Almas Teb Rayan',
        location: 'Tehran, Iran',
        period: 'Mar 2020 — Jan 2021',
        description: [
            'Contributed to production Django and Laravel applications in a professional team environment.',
            'Worked on database design and query optimization tasks with relational databases.',
            'Designed and taught Java and Scratch programming curriculum to pre-teen students.',
        ],
        tech: ['Python', 'Django', 'PHP', 'Laravel', 'MySQL', 'Java'],
        badge: 'Hands-On',
    },
];
