import { default as React, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomLoader from './components/CustomLoader';
import SideBar from "./components/SideBar";
import SideEmail from './components/SideEmail';
// import About from './pages/About';
// import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

import "./static/css/App.css";

import pMinDelay from 'p-min-delay';
const About = lazy(() => pMinDelay(import('./pages/About'), 3000));

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <SideEmail />
    </Router>
  )
}

export default App;