import FadeIn from './FadeIn';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section__title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section__desc">
                        I&apos;m currently looking for new opportunities. Whether you have a
                        project in mind, a job opening, or just want to connect — I&apos;d
                        love to hear from you.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="contact__content">
                        <a
                            href="mailto:parsasamandizadeh@gmail.com"
                            className="btn btn--primary btn--lg"
                        >
                            <Mail size={20} /> Say Hello
                        </a>

                        <div className="contact__links">
                            <a
                                href="mailto:parsasamandizadeh@gmail.com"
                                className="contact__link"
                            >
                                <Mail size={18} />
                                <span>parsasamandizadeh@gmail.com</span>
                            </a>
                            <a
                                href="https://github.com/parsasamandi"
                                target="_blank"
                                rel="noreferrer"
                                className="contact__link"
                            >
                                <FaGithub size={18} />
                                <span>github.com/parsasamandi</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/parsa-samandi/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact__link"
                            >
                                <FaLinkedin size={18} />
                                <span>linkedin.com/in/parsa-samandi</span>
                            </a>
                            <div className="contact__link">
                                <MapPin size={18} />
                                <span>Burnaby, BC, Canada</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
