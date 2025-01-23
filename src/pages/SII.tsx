import './common.css'
import './SII.css'
import testvideo from '../assets/video.mp4'
import { useRef, useState,useEffect } from "react";

function SII(){
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

    return (
        <div className='page'>
        <div className="subpage">
        <h1> Study in India (SII) </h1>

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
        <div className="table-container" >
        <table className="centered-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>CATEGORY</th>
                        <th>CONTENT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> ABOUT THE PROGRAM </td>
                        <td style={{textAlign:"left"}}> 
                            <p> The Study in India is a flagship project of the Government of India, launched in April 2018. While India is a popular destination for its multicultural society, the whopping number of intakes since its launch has allowed the program to further its global identity in the realm of international education. </p>
                            <p> With India ranked as the third-largest higher education system, home to 45,000 colleges, and 950 universities, Study in India was put together to encourage the global student community to experience quality academic learning from premier NAAC and NIRF accredited institutions in India. 
                            The Study in India program receives applications from –SAARC countries, Africa, South East Asia, Central Asia, and the Middle-East.</p>
                            <p>In an extensive higher education system, the Study in India interface is a prime intermediary for students to explore, connect, and apply to various top-ranked institutions in the country. Indian institutes provide technical expertise across a diverse range of courses, from STEM to non-STEM courses, and also include programs in niche disciplines. </p>
                            <p> Website: <a href="https://www.studyinindia.gov.in/home" target="blank">https://www.studyinindia.gov.in/home</a></p>
                             </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> ELIGIBILITY </td>
                        <td style={{textAlign:"left"}}>  <p>2.1 The eligibility criterion and qualification are as per IIT Palakkad rules and regulations.</p>
                    <p> 2.2 The medium of instruction across all courses would be English. The candidates applying for the courses at IIT Palakkad are supposed to have a functional knowledge of English, which implies that they should have the ability to read, write, understand and speak the language.</p>
                    </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td> APPLICATION PROCEDURE </td>
                        <td style={{textAlign:"left"}}> <p><a href="https://www.studyinindia.gov.in/admission/registrations "> https://www.studyinindia.gov.in/admission/registrations </a> </p></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>FUNDING DETAILS </td>
                        <td style={{textAlign:"left"}}> <p>The selected applicant has to pay fees as per IIT Palakkad fee structure</p>

                         </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>APPLICATION DEADLINE</td>
                        <td style={{textAlign:"left"}}> Please visit the <a href="https://studyinindia.gov.in/" target="blank">SII website</a> </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td> FAQ'S</td>
                        <td style={{textAlign:"left"}}> <a href="https://www.studyinindia.gov.in/faqs" target="blank">https://www.studyinindia.gov.in/faqs</a> </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td> E-VISA </td>
                        <td style={{textAlign:"left"}}> <p>The Ministry of Home Affairs has introduced an e-Student visa facility for foreign students who are eligible for S-1 and S-3 student visas and are also registered on the SII portal. The MHA has also introduced an e-Student X Visa facility for the dependents of those coming under the aforesaid e-Student visas.</p>

                        <p>Applicants may refer to <a href="https://drive.google.com/file/d/1KLQ7eoqtWfQz1XiB8RilNkERHH-e8lXY/view" target="blank0">DO letter No. 13-23/2018 - ICC dated 17th October, 2024 from Joint Secretary (International Cooperation Cell) - Ministry of Education </a></p> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        </div>
    )
}
export default SII