import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import HeroBanner from './components/HeroBanner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer2 from './components/Footer2';
import AboutMe from './components/AboutMe';
import './App.css';

const App = () => {
  return (
    <Router> 
      <div className="app">
      
        <HeroBanner />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer2 />
      </div>
    </Router>
  );
};

export default App;
