/**
 * projects.js
 * Source of truth for the Projects section card grid.
 * Rendered by components/Projects.jsx in array order.
 *
 * Each entry shape:
 *   title       {string}       — project name
 *   subtitle    {string}       — format: 'What it is · One key detail'
 *   description {string}       — 1–2 sentences in product voice (no "I")
 *   tech        {string[]}     — technologies used
 *   badge       {string}       — 'Hands-On' | 'AI-Native'
 *   liveUrl     {string|null}  — live demo URL, or null if not publicly deployed
 *   githubUrl   {string|null}  — GitHub repo URL, or null if private
 *   featured    {boolean}      — true = shown prominently in the main grid
 *
 * To add a new project: prepend to this array (most recent/prominent first).
 */
export const projects = [
    {
        title: 'Community Platform',
        subtitle: 'rasoulallah.ca — Live Production Site',
        description:
            'A bilingual (English/Farsi) community website and admin dashboard for an Islamic center in Greater Vancouver. Features prayer times, events, courses, library, membership registration, and a comprehensive content management system powered by Filament 3.',
        tech: ['Laravel 12', 'Filament 3', 'Laravel Octane', 'FrankenPHP', 'Docker', 'Railway'],
        badge: 'Hands-On',
        liveUrl: 'https://www.rasoulallah.ca/',
        githubUrl: null,
        featured: true,
    },
    {
        title: 'Organization Dashboard',
        subtitle: 'Multi-Organization Finance Platform',
        description:
            'A scalable multi-user admin panel streamlining financial data management for 19 charitable organizations. Replaced manual Google Forms workflows with structured database operations, RBAC, and REST-style APIs.',
        tech: ['PHP', 'Laravel 8', 'MySQL', 'REST APIs', 'RBAC'],
        badge: 'Hands-On',
        liveUrl: null,
        githubUrl: 'https://github.com/parsasamandi/laravel-multi-organization-dashboard-fa',
        featured: true,
    },
    {
        title: 'Semantic Search Engine',
        subtitle: 'AI-Powered Vector Search API',
        description:
            'A FastAPI service that converts documents and queries into 384-dimensional sentence embeddings and performs fast similarity search using FAISS. Returns semantically related results based on meaning, not just keywords. Deployed on Railway.',
        tech: ['Python', 'FastAPI', 'FAISS', 'Sentence Transformers', 'NumPy', 'Railway'],
        badge: 'AI-Native',
        liveUrl: null,
        githubUrl: 'https://github.com/parsasamandi/semantic-search-engine',
        featured: true,
    },
    {
        title: 'PDF Chatbot',
        subtitle: 'RAG-Powered Document Q&A',
        description:
            'A chatbot that ingests PDF documents and answers questions about their contents using a Retrieval-Augmented Generation pipeline. Chunks documents into embeddings stored in a vector database, then retrieves relevant context before generating answers via an LLM.',
        tech: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'FastAPI'],
        badge: 'AI-Native',
        liveUrl: null,
        githubUrl: 'https://github.com/parsasamandi/pdf-chatbot',
        featured: true,
    },
    {
        title: 'CoralSend',
        subtitle: 'P2P File Transfer · Open Source Contributor',
        description:
            'Contributed to an open-source peer-to-peer file transfer application where files travel directly browser-to-browser via WebRTC — no server-side storage. Submitted code improvements and bug fixes as a community contributor.',
        tech: ['Next.js', 'Go', 'WebRTC', 'Docker', 'WebSockets'],
        badge: 'AI-Native',
        liveUrl: null,
        githubUrl: 'https://github.com/twomodo/coralsend',
        featured: false,
    },
    {
        title: 'Gmail → Telegram Notifier',
        subtitle: 'Automation Bridge',
        description:
            'A utility that monitors a Gmail inbox and forwards incoming emails to a Telegram chat in real time using the Gmail API and Telegram Bot API. Useful for consolidating notifications without exposing an email address.',
        tech: ['Python', 'Gmail API', 'Telegram Bot API', 'OAuth2'],
        badge: 'AI-Native',
        liveUrl: null,
        githubUrl: 'https://github.com/parsasamandi/gmail-to-telegram',
        featured: false,
    },
    {
        title: 'IT Business Portfolio',
        subtitle: 'Full-Stack Business Website',
        description:
            'A portfolio website for an IT company featuring a landing page, AI chat widget, blog, and full admin panel for content management. Includes dark/light theme toggle and Cal.com booking integration.',
        tech: ['Next.js 16', 'TypeScript', 'React 19', 'Supabase', 'Tailwind CSS'],
        badge: 'AI-Native',
        liveUrl: 'https://it-tech-portfolio.pages.dev/',
        githubUrl: 'https://github.com/parsasamandi/IT-tech-portfolio',
        featured: false,
    },
];
