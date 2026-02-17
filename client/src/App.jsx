import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-slate-900 font-body selection:bg-accent selection:text-black">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
