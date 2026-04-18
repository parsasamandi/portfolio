/**
 * FadeIn.jsx
 * Reusable scroll-triggered fade-in animation wrapper.
 * Wraps any content in a Framer Motion div that animates into view once
 * when the element enters the viewport.
 *
 * Props:
 *   children   — content to animate
 *   delay      — animation delay in seconds (default: 0, max: 0.4 per standards)
 *   className  — optional extra CSS class on the wrapper div
 *
 * Usage:
 *   <FadeIn delay={0.1}><MyComponent /></FadeIn>
 *
 * All scroll-triggered animations in the project must use this component.
 * Do not re-implement fade logic directly in section components.
 */
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            // Start invisible and slightly below final position
            initial={{ opacity: 0, y: 24 }}
            // Animate to fully visible at natural position
            whileInView={{ opacity: 1, y: 0 }}
            // once: true — animate only the first time it enters view, never again
            // margin: '-80px' — trigger 80px before the element reaches the viewport edge
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
