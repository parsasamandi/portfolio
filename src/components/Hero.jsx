import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="hero__greeting">Hi, I&apos;m</p>
                    <h1 className="hero__name">
                        Parsa Samandi<span>.</span>
                    </h1>
                    <h2 className="hero__title">Software Developer</h2>
                    <p className="hero__subtitle">
                        I build production web applications with {' '}
                        <strong>Laravel</strong> expertise and deliver full-stack products at
                        high velocity using <strong>AI-native</strong> workflows.
                    </p>

                    <div className="hero__actions">
                        <a href="#projects" className="btn btn--primary">
                            View My Work <ArrowDown size={16} />
                        </a>
                        <a
                            href="/ParsaSamandiResume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn--secondary"
                        >
                            <FileDown size={16} /> Resume
                        </a>
                        <a
                            href="mailto:parsasamandizadeh@gmail.com"
                            className="btn btn--ghost"
                        >
                            <Mail size={16} /> Contact
                        </a>
                    </div>

                    <div className="hero__socials">
                        <a
                            href="https://github.com/parsasamandi"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/parsa-samandi/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
