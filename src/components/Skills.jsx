/**
 * Skills.jsx
 * Technical skills section — three category cards driven by data/skills.js.
 * Uses bg-primary (no section--alt) to alternate from the About section above.
 *
 * Categories defined in data/skills.js:
 *   1. Core Engineering  — hands-on expertise (accent-1 / blue)
 *   2. AI-Native Stack   — delivered via AI-augmented workflows (accent-2 / purple)
 *   3. AI / ML          — LLM integration & intelligent systems (accent-3 / green)
 *
 * iconMap translates the string `iconType` field from the data file to Lucide
 * icon elements, keeping the data layer free of JSX/React imports.
 *
 * To add a new skill: edit data/skills.js — do not hardcode skills here.
 * To add a new category: add to data/skills.js AND add the icon to iconMap below.
 */
import FadeIn from './FadeIn';
import { Database, Cpu, BrainCircuit } from 'lucide-react';
import { skillCategories } from '../data/skills';

// Maps iconType string keys (from data) to actual Lucide icon elements
const iconMap = {
    database: <Database size={28} />,
    cpu: <Cpu size={28} />,
    brain: <BrainCircuit size={28} />,
};

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section__title">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                </FadeIn>

                <div className="skills__grid">
                    {skillCategories.map((category, index) => (
                        <FadeIn key={category.key} delay={index * 0.1}>
                            <div className="card skills__card">
                                <div
                                    className={`skills__icon skills__icon--${category.accentColor}`}
                                >
                                    {iconMap[category.iconType]}
                                </div>
                                <h3 className="skills__title">{category.title}</h3>
                                <p className="skills__subtitle">{category.subtitle}</p>
                                <div className="tag-list">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`tag ${category.key === 'core' ? 'tag--accent' : ''}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
