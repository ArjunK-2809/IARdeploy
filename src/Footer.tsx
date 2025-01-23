import './Footer.css';
import FAQ from './files/faqs..pdf';

function Footer() {
  return (
    <div>
      <div className="footer">       
        <div className="column">
          <ul>
            <li><a href={FAQ} className="link" target="_blank" rel="noopener noreferrer">FAQs</a></li>
            <li><a href="https://cse.iitpkd.ac.in/location/" className="link" target="_blank" rel="noopener noreferrer">Campus Map</a></li>
            <li><a href="https://iitpkd.ac.in/faculty-list" className="link" target="_blank" rel="noopener noreferrer">IITPKD Faculty Research Profile</a></li>
            <li><a href="https://www.quora.com/What-is-your-review-of-Indian-Institute-of-Technology-Palakkad-IIT-PKD" className="link" target="_blank" rel="noopener noreferrer">Feedback</a></li>
            <li><a href="https://iitpkd.ac.in/student-affairs-council" className="link" target="_blank" rel="noopener noreferrer">Students Council</a></li>
            <li><a href="https://iitpkd.ac.in/hostels" className="link" target="_blank" rel="noopener noreferrer">Campus Facilities</a></li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li><a href="https://iitpkd.ac.in/guest-house-hamsanandi" className="link" target="_blank" rel="noopener noreferrer">Guest House/Hotel Partners</a></li>
            <li><a href="https://iitpkd.ac.in/gallery" className="link" target="_blank" rel="noopener noreferrer">Gallery</a></li>
            <li><a href="https://iitpkd.ac.in/student-clubs" className="link" target="_blank" rel="noopener noreferrer">Activities</a></li>
            <li><a href="https://www.facebook.com/IITPLKD" className="link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/international-relations-iit-palakkad/posts/?feedView=all" className="link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com/PalakkadIIT" className="link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.youtube.com/c/IITPalakkad_Official" className="link" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
        <div className="column">
          <a href="https://www.google.com/maps/place/Indian+Institute+Of+Technology%E2%80%93Palakkad+(IIT%E2%80%93Palakkad)/@10.816366,76.728925,3422m/data=!3m1!1e3!4m6!3m5!1s0x3ba869e43f0f473f:0x1a53e6dc39a95498!8m2!3d10.8048389!4d76.7279662!16s%2Fm%2F012zv40t?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" className="link" target="_blank" rel="noopener noreferrer">
            Address:<br />
            Indian Institute of Technology Palakkad,<br />
            Dr. APJ Abdul Kalam Block,<br />
            First Floor (Right Wing),<br />
            Sahyadri Campus,<br />
            Kanjikode West, Palakkad - 678 623,<br />
            Kerala.
          </a>
        </div>
      </div>
      <br/>
      <p style={{ textAlign: "center" }}>Copyright &copy; 2024. All rights Reserved.</p>
    </div>
  );
}

export default Footer;
