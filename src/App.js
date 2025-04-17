import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CaseStudyDetail from "./components/CaseStudyDetail";
import CaseStudies from "./components/CaseStudies";
import WhyConsulting from "./components/WhyConsulting";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (pathname === "/" && state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

const MainLayout = () => (
  <>
    <ThemeSwitcher />
    <Header />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/why-consulting" element={
            <>
              <ThemeSwitcher />
              <Header />
              <WhyConsulting />
              <Footer />
            </>
          } />
          <Route path="/case-studies" element={
            <>
              <ThemeSwitcher />
              <Header />
              <CaseStudies />
              <Footer />
            </>
          } />
          <Route path="/case-study/:id" element={
            <>
              <ThemeSwitcher />
              <Header />
              <CaseStudyDetail />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
