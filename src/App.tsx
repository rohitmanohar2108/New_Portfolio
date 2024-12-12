import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Skills } from './components/Skills';
import './styles/theme.css';
import { Certifications } from './components/Certifications';
import { ScrollProgress } from './components/ScrollProgress';
import { useSmoothScroll } from './components/useSmoothScroll';

function App() {
  useSmoothScroll()
  return (
    <ThemeProvider>
      
      <div className="min-h-screen bg-background text-text-body transition-colors duration-200">
        <Header />
        <ScrollProgress />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;