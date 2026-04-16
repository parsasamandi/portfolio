import FadeIn from './FadeIn';
import { Database, Cpu, BrainCircuit } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
    database: <Database size={28} />,
    cpu: <Cpu size={28} />,
    brain: <BrainCircuit size={28} />,
};

export default function Skills() {
    return (
        <section id="skills" className="section section--alt">
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
