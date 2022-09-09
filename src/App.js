import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CustomLoader from './components/CustomLoader';
import SideBar from "./components/SideBar";
import Home from './pages/Home';
// import About from './pages/About';
import SideEmail from './components/SideEmail';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import pMinDelay from 'p-min-delay';

import "./static/css/App.css";

const About = lazy(() => pMinDelay(import('./pages/About'), 2000));

const App = () => {
  return (
    <Router>
      <SideBar />
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <SideEmail />
    </Router>
  )
}

export default App;