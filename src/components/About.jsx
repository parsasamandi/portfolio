import FadeIn from './FadeIn';
import { MapPin, Briefcase, BrainCircuit } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section__title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </FadeIn>

                <div className="about__grid">
                    <FadeIn delay={0.1}>
                        <div className="about__text">
                            <p>
                                I&apos;m a software developer based in Burnaby, BC with a
                                Computer Science diploma from Douglas College. My core strength
                                is in <strong>PHP and Laravel</strong> — I&apos;ve built admin
                                dashboards, REST APIs, and database-driven platforms that manage
                                real data for real organizations.
                            </p>
                            <p>
                                Beyond my foundational skills, I embrace{' '}
                                <strong>AI-native development</strong> as a force multiplier.
                                Using AI-assisted workflows, I deliver full-stack applications
                                across React, Next.js, Python, and more — shipping
                                production-quality products with speed and precision.
                            </p>
                            <p>
                                I actively build with LLMs and AI — developing RAG pipelines,
                                semantic search engines, and chatbots in production. My{' '}
                                <a
                                    href="https://github.com/parsasamandi/llm-learnings"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="about__inline-link"
                                >
                                    llm-learnings
                                </a>{' '}
                                repository documents my learning and experimentation.
                            </p>
                            <p>
                                I&apos;m currently seeking opportunities where I can contribute
                                to meaningful software projects while continuing to grow as an
                                engineer.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="about__details">
                            <div className="about__detail">
                                <MapPin size={18} />
                                <div>
                                    <strong>Location</strong>
                                    <span>Burnaby, BC, Canada</span>
                                </div>
                            </div>
                            <div className="about__detail">
                                <BrainCircuit size={18} />
                                <div>
                                    <strong>Building With</strong>
                                    <span>RAG pipelines, semantic search &amp; LLM integration</span>
                                </div>
                            </div>
                            <div className="about__detail">
                                <Briefcase size={18} />
                                <div>
                                    <strong>Status</strong>
                                    <span>Open to full-time, contract &amp; remote roles</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
