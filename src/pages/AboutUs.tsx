import './common.css'
import Srujana from "../assets/club/srujana jasmin.jpeg"
import likitha from "../assets/club/likitha.jpeg"
import Harika from "../assets/club/harika.jpeg"
import Vaibhav from "../assets/club/Vaibhav.jpeg"
import { Link } from 'react-router-dom';

function AboutUs(){
    return (
        <div className='page'>
            <div className="subpage">
                <hr/>
            <h1> About Us</h1>
                    <hr/><br/>
                    
            <p>Welcome to the Office of International Relations at IIT Palakkad. This office oversees and coordinates the international activities on campus, like hosting international delegations, students and researchers, 
                initiating international research collaborations and formalising partnerships. We engage with embassies, consulates, and government agencies like the Indian Council for Cultural Relations (ICCR)
                and Educational Consultants India Limited (EdCIL) to initiate educational and cultural connections and provide opportunities for foreign students to pursue their studies at IIT Palakkad. We are 
                very glad to welcome and host foreign students and faculty at IIT Palakkad. We also explore, collate, create and coordinate opportunities for our own students to travel abroad to partner universities 
                and benefit from the exposure to different academic, research, and cultural environments</p>
            <p> Internationalisation is an inherent aspect of the Indian Institutes and the Office of International Relations at IIT Palakkad is committed to achieving its goals through a focused approach, supported 
                by two verticals, “International Collaborations and International Academic Programs”.
                We look forward to welcoming the international community to our midst, in the spirit of mutually beneficial partnerships. To broaden the experience -- both yours and ours -- of academic and cultural life,
                to be better equipped to participate in multicultural, globalised workspaces; and to contribute meaningfully to a dynamic, more integrated world.

                The departments and centers of IIT Palakkad are responsible for teaching, research, and industrial consultancy. With our excellent faculty, students who excel both in academics and in extra-curricular activities,
                 dedicated staff members, and state-of-the-art research facilities, the first decade of our existence is proving to be an exciting phase. Going forward, we expect to have</p>
            <ul>
            <li>International student admissions to full time taught and research programs</li>
            <li>Semester abroad student exchanges with partner institutes research internships, immersion programs, study tour, project work.</li>
            <li>Twinning arrangements to collaboratively design and offer programs, and jointly award degrees</li>
            <li>Course-specific tie-ups and blended teaching-learning</li>
            <li>Visiting faculty exchanges</li>
            <li>Joint R&D on projects of relevance to either/both/ all concerned countries to offer just an indicative list.</li>

            </ul>

            <div className="contact-page">
      <h1>Student head</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={Srujana} alt="" />
          </div>
          <div className="card-content">
            <h3>Srujana Jasmine</h3>
            <p className="title">Student head</p>
           
            
          </div>
        </div>
    

          

      </div>
      </div>
      <div className="contact-page">
      <h1>Core Team</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={likitha} alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>Likitha</h3>
            <p className="title">International Relations Lead</p>
            
          </div>
          </div>

          <div className="contact-card">
          <div className="card-image">
            <img src={Harika} alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>   Satya Harika</h3>
            <p className="title">Technical Lead</p>
            
          </div>
        </div> <div className="contact-card">
          <div className="card-image">
            <img src={Vaibhav} alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>Vaibhav Mittapally</h3>
            <p className="title">Management Lead</p>
          
          </div>
        </div>
        </div>
        
        
        
      </div>
      <div className='club'>
          
          
          <div className="members">
              <div className="techmembers">
                  <Link to="/TechClubMembers" >
                      <p className="tech">Meet The Technical Team</p>
                  </Link>
                  
              </div>
              <div className="techmembers">
                  <Link to="/ManagementClubMembers" >
                      <p className="tech">Meet The Management Team</p>
                  </Link>
                  
              </div>
          </div>
      </div>
      
            </div>
        </div>
     )
}

export default AboutUs