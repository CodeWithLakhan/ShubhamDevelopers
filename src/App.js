import React, { useState, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage/home';
import About from './pages/AboutPage/about';
import Projects from './pages/ProjectsPage/projects';
import Services from './pages/ServicesPage/services';
import Contact from './pages/ContactPage/contact';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);

    // Determine if this is the initial load or a route change
    setLoading(true);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay for animation

    return () => clearTimeout(timer);
  }, [location]); // Re-run effect when location changes

  return (
    <div className="App min-h-screen flex flex-col">
      <Preloader loading={loading} />
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
