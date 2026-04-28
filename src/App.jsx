/**
 * App.jsx
 * Root component — composes all page sections in canonical order.
 * ThemeProvider wraps everything so all components can access theme state.
 * Section order here defines the visual order on the page.
 * To add a new section: import it and place it inside <main> in the correct position.
 * See docs/ARCHITECTURE.md — "How to Add a New Section" for the full process.
 */
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        // ThemeProvider must be the outermost wrapper — all components read theme via useTheme()
        <ThemeProvider>
            {/* Navbar sits outside <main> so it overlays all sections */}
            <Navbar />
            <main>
                {/* Sections alternate bg-primary / bg-secondary — do not break this pattern */}
                <Hero />        {/* bg-primary */}
                <About />       {/* bg-secondary (section--alt) */}
                <Skills />      {/* bg-primary */}
                <Experience />  {/* bg-secondary (section--alt) */}
                <Projects />    {/* bg-primary */}
                <Contact />     {/* bg-secondary (section--alt) */}
            </main>
            <Footer />
        </ThemeProvider>
  );
}

export default App;
