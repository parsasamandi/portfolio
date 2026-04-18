/**
 * Experience.jsx
 * Professional experience section — rendered as a vertical timeline.
 * Uses section--alt (bg-secondary) to alternate from Skills above.
 *
 * Data source: data/experience.js (array, most recent first)
 * Each entry renders as a card with: role, company, period, badge, bullets, tech tags.
 *
 * Timeline visual: a vertical line runs down the left with dot markers per entry.
 * To add or edit an experience: modify data/experience.js only — do not change this component.
 * Period format must be: 'Mon YYYY — Present' or 'Mon YYYY — Mon YYYY' (em dash, not hyphen).
 */
import FadeIn from './FadeIn';
import { experiences } from '../data/experience';

export default function Experience() {
    return (
        <section id="experience" className="section section--alt">
            <div className="container">
                <FadeIn>
                    <h2 className="section__title">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                </FadeIn>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <FadeIn key={index} delay={index * 0.15}>
                            <div className="timeline__item">
                                <div className="timeline__dot" />
                                <div className="card timeline__card">
                                    <div className="timeline__header">
                                        <div>
                                            <h3 className="timeline__role">{exp.role}</h3>
                                            <p className="timeline__company">
                                                {exp.company} · {exp.location}
                                            </p>
                                        </div>
                                        <div className="timeline__meta">
                                            <span className="timeline__period">{exp.period}</span>
                                            <span
                                                className={`badge badge--${exp.badge === 'Hands-On' ? 'primary' : 'secondary'}`}
                                            >
                                                {exp.badge}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="timeline__list">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="tag-list">
                                        {exp.tech.map((t) => (
                                            <span key={t} className="tag tag--subtle">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
