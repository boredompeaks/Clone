import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SYJCITPractice from './pages/SYJCITPractice';
import Downloads from './pages/Downloads';
import CyberAwareness from './pages/CyberAwareness';
import MScIT from './pages/MScIT';
import ICSE9 from './pages/ICSE9';
import JavaBasics from './pages/topics/JavaBasics';
import OOP from './pages/topics/OOP';
import PracticeProblems from './pages/topics/PracticeProblems';
import Grade7HTML from './pages/Grade7HTML';
import HTMLBasics from './pages/topics/HTMLBasics';
import HTMLTags from './pages/topics/HTMLTags';
import HTMLProjects from './pages/topics/HTMLProjects';
import Grade8ICSE from './pages/Grade8ICSE';
import Programming8 from './pages/topics/Programming8';
import DataTypes8 from './pages/topics/DataTypes8';
import Projects8 from './pages/topics/Projects8';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ASLevel from './pages/ASLevel';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
            <Header />
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <Features />
                  <Testimonials />
                  <Contact />
                </main>
              } />
              <Route path="/syjc-it" element={<SYJCITPractice />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/cyber-awareness" element={<CyberAwareness />} />
              <Route path="/msc-it" element={<MScIT />} />
              <Route path="/icse-9" element={<ICSE9 />} />
              <Route path="/icse-9/java-basics" element={<JavaBasics />} />
              <Route path="/icse-9/oop" element={<OOP />} />
              <Route path="/icse-9/practice" element={<PracticeProblems />} />
              <Route path="/grade-7-html" element={<Grade7HTML />} />
              <Route path="/grade-7-html/basics" element={<HTMLBasics />} />
              <Route path="/grade-7-html/tags" element={<HTMLTags />} />
              <Route path="/grade-7-html/projects" element={<HTMLProjects />} />
              <Route path="/grade-8" element={<Grade8ICSE />} />
              <Route path="/grade-8/programming" element={<Programming8 />} />
              <Route path="/grade-8/data-types" element={<DataTypes8 />} />
              <Route path="/grade-8/projects" element={<Projects8 />} />
              <Route path="/as-level" element={<ASLevel />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
