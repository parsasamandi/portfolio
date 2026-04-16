import FadeIn from './FadeIn';
import { experiences } from '../data/experience';

export default function Experience() {
    return (
        <section id="experience" className="section">
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
