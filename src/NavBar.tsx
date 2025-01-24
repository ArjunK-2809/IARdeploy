import { useEffect, useState } from "react";
import "./NavBar.css";
import image from "./assets/iar.png";
import {Link} from 'react-router-dom';
import FactSheet from './files/Factsheet IITPKD.pdf'
import Flyer from './files/Flyer_IITPKD.pdf'
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbar = () => {

  const [isMobileMenuOpenPrimary, setIsMobileMenuOpenPrimary] = useState(false);
  const [isMobileMenuOpenSecondary, setIsMobileMenuOpenSecondary] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const handleDropdown = (menu:any) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };


  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <a
          className="navbar-brand"
          href="/"
          
          rel="noopener noreferrer"
        >
          <img
            src={image}
            alt="IAR Logo"
            height="48"
          />
          
        </a>
        <div
          className={`navbar-links ${
            isMobileMenuOpenPrimary ? "active" : ""
          }`}
          onClick={() => setIsMobileMenuOpenPrimary(false)} // Close on click
        >

        <div className="search-container">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/life">Life @ IITPKD</Link>
          <Link to="/students"> Our Foreign students </Link>
          <a href="https://iitpkd.ac.in/" target="blank">IIT PKD main</a>
        </div>

        <div className="search-container">
         <h4>{currentTime.toLocaleString()} IST</h4>
        </div>
      </div>
      <button className="menu-toggle" onClick={handleShow}>
         ☰
      </button> 
      </nav>

      {/* Secondary Navbar */}
      <nav className="navbar navbar-secondary">

      
        <div
          className={`navbar-links ${
            isMobileMenuOpenSecondary ? "active" : ""
          }`}
          onClick={() => setIsMobileMenuOpenSecondary(false)}
        >
          
        <div className="temp">
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("visits")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <a href="/" className="nav-lk">
              VISITS
            </a>
            {activeDropdown === "visits" && (
              <div className="dropdown-menu">
                <a href="https://docs.google.com/document/d/1rdmSMg_zJv1EI03Hrf2OcQUGjH2Npk4u/edit">Visit Template</a>
      
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("download")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <a href="/" className="nav-lk">
              Downloads
            </a>
            {activeDropdown === "download" && (
              <div className="dropdown-menu">
                <a href="https://drive.google.com/file/d/1RUlAOd51KJPSR_uIU0GAcdLI-yba61Fn/view">IIT PKD PPT </a>
                <a href="https://drive.google.com/file/d/1v2t5ba3AaKej8jR6ACvaBczIUzs-5tT7/view"> MoU Template </a>
                <a href={FactSheet}>Factsheet</a>
                <a href="https://drive.google.com/file/d/1PjjlqNi9IIXaZodSfBf54mMGJOpgh34Y/view"> International Student Guide</a>
                <a href={Flyer}>IIT_PKD Flyer</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("admission")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <a href="/" className="nav-lk">
              International Admission
            </a>
            {activeDropdown === "admission" && (
              <div className="dropdown-menu">
                <Link to="/applications">Sponsored Applications for Masters and PhD programs</Link>
                <Link to="/sii">Study in India (SII)</Link>
                <Link to="/asean">Association of Southeast Asian Nations (ASEAN)</Link>
                <Link to="/iccr">Indian Council for Cultural Relations (ICCR)</Link>
                <Link to="/embassy">Embassy</Link>
              </div>
            )}
          </div>
          <div
  className="dropdown"
  onMouseEnter={() => handleDropdown("mobility")}
  onMouseLeave={() => handleDropdown(null)}
>
  <a href="/" className="nav-lk">
    International Mobility
  </a>
  {activeDropdown === "mobility" && (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <Link to="/">
          International Students <i className="fas fa-arrow-right"></i>
        </Link>
        <div className="dropdown-submenu">
          <Link to="/semexchange">Semester Exchange</Link>
          <Link to="/researchwork">Research Work/Thesis</Link>
          <Link to="/projectwork">Project Work/Field Work</Link>
          <Link to="/researchinternship">Research Internship</Link>
        </div>
      </div>

      <div className="dropdown-item">
        <Link to="/">
          International Faculty <i className="fas fa-arrow-right"></i>
        </Link>
        <div className="dropdown-submenu">
          <Link to="/sparc">SPARC</Link>
          <Link to="/vajra">VAJRA</Link>
          <Link to="/gian">GIAN</Link>
        </div>
      </div>

      <div className="dropdown-item">
        <Link to="/">
          IIT PKD Students <i className="fas fa-arrow-right"></i>
        </Link>
        <div className="dropdown-submenu">
          <Link to="/scholarships">Scholarships</Link>
          <Link to="/exchangeprograms">Exchange Programs</Link>
          <Link to="/researchprograms">Research Programs</Link>
          <Link to="/opportunitiesabroad">
            Opportunities Abroad for Students
          </Link>
        </div>
      </div>

      <div className="dropdown-item">
        <Link to="/faculty">IIT PKD Faculty</Link>
      </div>
    </div>
  )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("mous")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="/MoUs" className="nav-lk">
              MOU Partners
            </Link>
            {activeDropdown === "mous" && (
              <div className="dropdown-menu">
              <Link to="/MoUs#partners">Our  Partners and Programs</Link>
              <Link to="/MoUs#doctoral">Joint Doctoral Programs</Link>
              <Link to="/MoUs#supervision">Joint Supervison Programs </Link>
              <Link to="/MoUs#consortium">Consortium Agreements (University Network)</Link>              

              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("visa")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <a href="/" className="nav-lk">
              Visa and Immigration
            </a>
            {activeDropdown === "visa" && (
              <div className="dropdown-menu">
                <Link to="/VISAtypes">VISA Types</Link>
                <Link to="/VISAprovision">VISA Provisions/Policies</Link>
                <Link to="/VISAextensions">VISA Extensions</Link>
              </div>
            )}
          </div>
          <a href="/contact" className="nav-lk">Contact us</a>
        </div>
        
 
        </div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> International Relations IIT PALAKKAD </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/life">Life @ IITPKD</Link>
          <Link to="/students"> Our Foreign students </Link>
          <a href="https://iitpkd.ac.in/" target="blank">IIT PKD main</a>
          <Link to="/"> Visit Template </Link>
          <Link to="/"> Downloads </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      </nav>
    </>
  );
};

export default Navbar;

