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
  // const [currentTime, setCurrentTime] = useState(new Date());
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // setCurrentTime(new Date());
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
      <div className="d-flex flex-row w-100">
        <div className=" w-10">
          <Link
            className="navbar-brand"
            to="/"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt="IAR Logo"
            />
            
          </Link>
        </div>
        <div
          className={`navbar-links ${
            isMobileMenuOpenPrimary ? "active" : ""
            } w-90`}
            onClick={() => setIsMobileMenuOpenPrimary(false)} // Close on click
            >

        <div className="primary">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/life">Life @ IITPKD</Link>
          <Link to="/students"> International students testimonials </Link>
          <a href="https://iitpkd.ac.in/" target="blank">IIT PKD main</a>
        </div>

        
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
          
        <div className="secondary">
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("visits")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <a href="#" className="nav-lk">
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
            <Link to="#" className="nav-lk">
              Downloads
            </Link>
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
            <Link to="#" className="nav-lk">
              International Admission
            </Link>
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
  <a href="#" className="nav-lk">
    International Mobility
  </a>
  {activeDropdown === "mobility" && (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <Link to="#">
          International Students &nbsp; <span className="arrow text-end">--›</span>
        </Link>
        <div className="dropdown-submenu">
          <Link to="/semexchange">Semester Exchange</Link>
          <Link to="/researchwork">Research Work/Thesis</Link>
          <Link to="/projectwork">Project Work/Field Work</Link>
          <Link to="/researchinternship">Research Internship</Link>
        </div>
      </div>

      <div className="dropdown-item">
        <Link to="#">
          International Faculty &nbsp;<div className="arrow text-end">--›</div>
        </Link>
        <div className="dropdown-submenu">
          <Link to="/sparc">SPARC</Link>
          <Link to="/vajra">VAJRA</Link>
          <Link to="/gian">GIAN</Link>
        </div>
      </div>

      <div className="dropdown-item">
        <Link to="#">
          IIT PKD Students &nbsp;<div className="arrow text-end">--›</div>
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
            <a href="#" className="nav-lk">
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
          <Link to="/contact" className="nav-lk">Contact us</Link>
        </div>
        
 
        </div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> International Relations IIT PALAKKAD </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="custom-navbar">
          <Link to="/"  onClick={handleClose} >HOME</Link>
      <Link to="/about" onClick={handleClose} >ABOUT US</Link>
      <Link to="/life" onClick={handleClose} >LIFE @ IITPKD</Link>
      <Link to="/students" onClick={handleClose} > INTERNATIONAL STUDETNS TESTIMONIALS</Link>
      <a href="https://iitpkd.ac.in/" target="_blank" rel="noopener noreferrer"> IIT PKD MAIN </a>
      <Link to="/" onClick={handleClose} >Visit Template</Link>
      
            <h1> DOWNLOADS </h1>
            <Link target="_blank" to="https://drive.google.com/file/d/1RUlAOd51KJPSR_uIU0GAcdLI-yba61Fn/view">IIT PKD PPT </Link>
            <a target="_blank" href="https://drive.google.com/file/d/1v2t5ba3AaKej8jR6ACvaBczIUzs-5tT7/view"> MoU Template </a>
            <Link target="_blank" to={FactSheet}>Factsheet</Link>
            <a target="_blank" href="https://drive.google.com/file/d/1PjjlqNi9IIXaZodSfBf54mMGJOpgh34Y/view"> International Student Guide</a>
            <a target="_blank" href={Flyer}>IIT_PKD Flyer</a>

            <h1> INTERNATIOANAL ADMISSION</h1>
            <Link to="/applications" onClick={handleClose} >Sponsored Applications for Masters and PhD programs</Link>
            <Link to="/sii" onClick={handleClose} >Study in India (SII)</Link>
            <Link to="/asean" onClick={handleClose} >Association of Southeast Asian Nations (ASEAN)</Link>
            <Link to="/iccr" onClick={handleClose} >Indian Council for Cultural Relations (ICCR)</Link>
            <Link to="/embassy" onClick={handleClose} >Embassy</Link>

            <h1> INTERNATIONAL MOBILITY </h1>

            <h4> INTERNATIONAL STUDENTS </h4>
            <Link to="/semexchange" onClick={handleClose} >Semester Exchange</Link>
            <Link to="/researchwork" onClick={handleClose} >Research Work/Thesis</Link>
            <Link to="/projectwork" onClick={handleClose} >Project Work/Field Work</Link>
            <Link to="/researchinternship" onClick={handleClose} >Research Internship</Link>
          
            <h4> INTERNATIONAL FACULTY </h4>
            <Link to="/sparc" onClick={handleClose} >SPARC</Link>
            <Link to="/vajra" onClick={handleClose} >VAJRA</Link>
            <Link to="/gian" onClick={handleClose} >GIAN</Link>
        
            <h4> IITPKD STUDENTS </h4>
            <Link to="/scholarships" onClick={handleClose} >Scholarships</Link>
            <Link to="/exchangeprograms" onClick={handleClose} >Exchange Programs</Link>
            <Link to="/researchprograms" onClick={handleClose} >Research Programs</Link>
            <Link to="/opportunitiesabroad" onClick={handleClose} > Opportunities Abroad for Students </Link>
          
            <h4> <Link to="/faculty">IIT PKD FACULTY</Link> </h4>

            <h1> MoUs</h1>
      <Link to="/MoUs#partners" onClick={handleClose} >Our  Partners and Programs</Link>
      <Link to="/MoUs#doctoral" onClick={handleClose} >Joint Doctoral Programs</Link>
      <Link to="/MoUs#supervision" onClick={handleClose} >Joint Supervison Programs </Link>
      <Link to="/MoUs#consortium" onClick={handleClose} >Consortium Agreements (University Network)</Link>  

            <h1> VISA </h1>
      <Link to="/VISAtypes" onClick={handleClose} >VISA Types</Link>
      <Link to="/VISAprovision" onClick={handleClose} >VISA Provisions/Policies</Link>
      <Link to="/VISAextensions" onClick={handleClose} >VISA Extensions</Link>    

      <Link to="/contact" onClick={handleClose} >CONTACT US</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      </nav>
    </>
  );
};

export default Navbar;

