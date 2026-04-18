import { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const THEME_META = {
    light: { icon: <Sun size={16} />, label: 'Light', next: 'Dark' },
    dark: { icon: <Moon size={16} />, label: 'Dark', next: 'System' },
    system: { icon: <Monitor size={16} />, label: 'System', next: 'Light' },
};

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { mode, cycle } = useTheme();
    const meta = THEME_META[mode] ?? THEME_META.light;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setIsOpen(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#" className="navbar__logo">
                    PS<span>.</span>
                </a>

                {/* Overlay for mobile */}
                {isOpen && (
                    <div className="navbar__overlay" onClick={() => setIsOpen(false)} />
                )}

                <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="navbar__link"
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/ParsaSamandiResume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--sm btn--outline"
                    >
                        <FileDown size={14} /> Resume
                    </a>
                </div>

                <div className="navbar__controls">
                    <button
                        className="navbar__theme-toggle"
                        onClick={cycle}
                        aria-label={`Theme: ${meta.label} — click for ${meta.next}`}
                        title={`Theme: ${meta.label} — click for ${meta.next}`}
                    >
                        {meta.icon}
                    </button>
                    <button
                        className="navbar__toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
