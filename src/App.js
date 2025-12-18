import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/portfolio/Navigation';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Education from './components/portfolio/Education';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';
import Chatbot from './components/portfolio/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Skills />
  
        <Projects />
        <Education />
        <Contact />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
