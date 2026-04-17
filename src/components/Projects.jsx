import FadeIn from './FadeIn';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section__title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section__desc">
                        Projects marked{' '}
                        <span className="badge badge--primary badge--inline">Hands-On</span>{' '}
                        were built with direct coding expertise. Projects marked{' '}
                        <span className="badge badge--secondary badge--inline">
                            AI-Native
                        </span>{' '}
                        were delivered using AI-augmented development workflows.
                    </p>
                </FadeIn>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div
                                className={`card projects__card ${project.featured ? 'projects__card--featured' : ''}`}
                            >
                                <div className="projects__card-header">
                                    <div>
                                        <h3 className="projects__title">{project.title}</h3>
                                        <p className="projects__subtitle">{project.subtitle}</p>
                                    </div>
                                    <span
                                        className={`badge badge--${project.badge === 'Hands-On' ? 'primary' : 'secondary'}`}
                                    >
                                        {project.badge}
                                    </span>
                                </div>

                                <p className="projects__desc">{project.description}</p>

                                <div className="projects__footer">
                                    <div className="tag-list">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tag tag--subtle">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="projects__links">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="GitHub"
                                                title="View Source"
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="Live site"
                                                title="View Live"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
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
