import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import WhyHireMe from "./components/WhyHireMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhyConsulting from "./components/WhyConsulting";
import CaseStudies from "./components/CaseStudies";
import CaseStudyDetail from "./components/CaseStudyDetail";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  const location = useLocation();
  const showFooter = !['/why-consulting', '/case-studies', '/case-study'].some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <WhyHireMe />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/why-consulting" element={<WhyConsulting />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
