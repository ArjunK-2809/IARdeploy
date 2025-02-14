// Import images
import image13 from './assets/slide13.jpg';
import image14 from './assets/slide14.jpg';
import image15 from './assets/slide15.jpg';
import image12 from './assets/slide12.jpg';
import image16 from './assets/slide16.jpg';
import image17 from './assets/slide17.jpg';
import image18 from './assets/slide18.jpg';
import './Students.css'; 
import { useRef, useState,useEffect } from "react";
import testvideo from './assets/video.mp4'



function Students() {

  const videoRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
     
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
  
    useEffect(() => {
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.addEventListener('mozfullscreenchange', handleFullscreenChange);
      document.addEventListener('MSFullscreenChange', handleFullscreenChange);
  
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
        document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      };
    }, []);

  const message = [
    {
      heading: "Tatenda Darlington Nhika",
      country: "Zimbabwe",
      branch: "Electrical engineering",
      program: "MTech in Power electronics and power systems",
      image: image13,
    },
    {
      heading: "Ropafadzo Siziba ",
      country: "Zimbabwe",
      branch: "Data Science",
      program: "MTech in Data Science",
      image: image14,
    },
    {
      heading: "Samuel Faindani",
      country: "Zimbabwe",
      branch: "Computer Science and engineering",
      program: "Mtech in Computer Science and Mathematics",
      image: image15,
    },
    {
      heading: "Etana",
      country: "Zimbabwe",
      branch: "",
      program: "",
      image: image12,
    },
    {
      heading: "Kritagya Koirala",
      country: "Nepal",
      branch: "Civil engineering",
      program: "B Tech in Civil Engineering",
      image: image16,
    },
    {
      heading: "Dikshant Bikram Thapa",
      country: "Nepal",
      branch: "Computer Science and engineering",
      program: "Btech CSE",
      image: image17,
    },
    {
      heading: "Sushan Adhikari",
      country: "Nepal",
      branch: "Computer Science and engineering",
      program: "Btech CSE",
      image: image18,
    },
    
  ];

  const messagemap = [];
  for (let i = 0; i < message.length; i += 2) {
    messagemap.push(
      <div className="aboutus_row">
        {message.slice(i, i + 2).map((item, index) => (
          <div className="aboutusphoto_container" key={index}>
            <div className="image_container">
              <img src={item.image} alt="Profile" width={300} />
            </div>
            <div className="text-container">
              <div className="dir_common">
                <div className="decorative-line"></div>
                <div className="home_heading">{item.heading}</div>
                <div className="decorative-line"></div>
                <div className="country_text">
                  <span className="label">Country: </span>
                  <span className="value">{item.country}</span>
                </div>
                <div className="branch_text">
                  <span className="label">Branch: </span>
                  <span className="value">{item.branch}</span>
                </div>
                <div className="program_text">
                  <span className="label">Program: </span>
                  <span className="value">{item.program}</span>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="aboutus">{messagemap}</div>

      <div className="video">
          <div className="video-card">
      <div className="video-thumbnail">
        <video ref={videoRef} width="300" height="180" controls>
          <source src={testvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <h4 className="video-title"> Queen University </h4>
        <p className="video-stats"> Germany </p>
      </div>
      {isFullscreen && <button className="exit-fullscreen-btn" onClick={() => document.exitFullscreen()}>Exit Fullscreen</button>}
    </div>
    </div>

    </div>
  );
}

export default Students;