import Navbar from "./NavBar";
import Footer from "./Footer";
import "./App.css";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';


import Home from "./Home";
import Students from "./Students";
import AboutUs from "./pages/AboutUs";
import Life from "./pages/Life";
import Contact from "./pages/Contact";

import SAMPP from "./pages/SPONSOREDAPPLICATIONS";
import SII from "./pages/SII";
import ASEAN from "./pages/ASEAN";
import ICCR from "./pages/ICCR";
import EMBASSY from "./pages/EMBASSY";

import SEMESTEREXCHANGE from "./pages/SEMESTEREXCHANGE";
import RESEARCHWORK from "./pages/RESEARCHWORK";
import PROJECTWORK from "./pages/PROJECTWORK";
import RESEARCHINTERNSHIP from "./pages/RESEARCHINTERNSHIP";

import SPARC from "./pages/SPARC";
import GIAN from "./pages/GIAN";
import VAJRA from "./pages/VAJRA";
import MoUs from "./pages/MoUs";
import VISAtypes from "./pages/VISAtypes";
import VISAextensions from "./pages/VISAextensions";
import VISAprovision from "./pages/VISAprovision";
import './pages/common.css'
import SCHOLARSHIPS from "./pages/SCHOLARSHIPS";
import EXCHANGEPROGRAM from "./pages/EXCHANGEPROGRAM";
import RESEARCHPROGRAM from "./pages/RESEARCHPROGRAM";
import OPPORTUNITIESABROAD from "./pages/ABROAD";
import FACULTY from "./pages/Faculty";
import ClubMembers from "./pages/TechMembers";
import ManagementMembers from "./pages/ManagementMembers";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/life" element={<Life />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/students" element={<Students />} />
            <Route path="/applications" element={<SAMPP />} />
            <Route path="/sii" element={<SII />} />
            <Route path="/asean" element={<ASEAN />} />
            <Route path="/iccr" element={<ICCR />} />
            <Route path="/embassy" element={<EMBASSY />} />
            <Route path="/semexchange" element={<SEMESTEREXCHANGE />} />
            <Route path="/researchwork" element={<RESEARCHWORK />} />
            <Route path="/projectwork" element={<PROJECTWORK />} />
            <Route path="/researchinternship" element={<RESEARCHINTERNSHIP />} />
            <Route path="/exchangeprograms" element={<EXCHANGEPROGRAM />} />
            <Route path="/researchprograms" element={<RESEARCHPROGRAM />} />
            <Route path="/opportunitiesabroad" element={<OPPORTUNITIESABROAD />} />
            <Route path="/faculty" element={<FACULTY />} />
            <Route path="/sparc" element={<SPARC />} />
            <Route path="/vajra" element={<VAJRA />} />
            <Route path="/gian" element={<GIAN />} />
            <Route path="/scholarships" element={<SCHOLARSHIPS />} />
            <Route path="/MoUs" element={<MoUs />} />
            <Route path="/VISAtypes" element={<VISAtypes />} />
            <Route path="/VISAprovision" element={<VISAprovision />} />
            <Route path="/VISAextensions" element={<VISAextensions />} />
            <Route path="/TechClubMembers" element={<ClubMembers />} />
            <Route path="/ManagementClubMembers" element={<ManagementMembers />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
