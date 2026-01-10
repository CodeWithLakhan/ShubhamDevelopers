import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage/home';
import About from './pages/AboutPage/about';
import Projects from './pages/ProjectsPage/projects';
import Services from './pages/ServicesPage/services';
import Contact from './pages/ContactPage/contact';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
