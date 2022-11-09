import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./components/Project/Project.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
