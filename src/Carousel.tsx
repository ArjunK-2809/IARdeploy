import Carousel from 'react-bootstrap/Carousel';
import image1 from './assets/i1_0.jpg'; 
import image2 from './assets/slide2.jpg'; 
import image3 from './assets/slide3.jpg'; 
import image4 from './assets/slide4.jpg'; 
import image5 from './assets/slide5.jpg'; 
import image6 from './assets/slide6.jpg'; 
import image7 from './assets/slide7.jpg'; 
import image8 from './assets/slide8.jpg'; 
import image9 from './assets/slide9.jpg'; 
import image10 from './assets/slide10.jpg'; 
import image11 from './assets/slide11.jpg'; 

import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import director from "./assets/director.jpg";
import fa from './assets/Dinesh Setti (1)-resized.jpg'
import dean from "./assets/dean_tncanand.jpg";

function ImageSlider() {

    const content = [
        {
          heading: "About IIT Palakkad",
          text: "Having begun with just 120 students in July 2015, IIT Palakkad has since grown into an establishment which is about a thousand students strong       ",
          buttonLabel: "Learn More",
          left: "1%",
          link: "about-iit-palakkad"
        },
        {
          heading: "Vision",
          text: "To create knowledge; to communicate knowledge; and to apply knowledge for the benefit of society.",
          buttonLabel: "Our Mission",
          left: "33%",
          link: "vision"
    
        },
        {
          heading: "Director's Desk",
          text: "A very warm welcome to IIT Palakkad. It is my pleasure to introduce you to this institute which has grown tremendously since its inception in 2015...",
          buttonLabel: "Read More",
          left: "65%",
          link: "director"
    
        },
      ];
    
      const message = [
        {
          heading: "DIRECTOR'S MESSAGE",
          name_text: "Prof. A. Seshadri Sekhar",
          role: "Professor & Director",
          image: director,
          text: "Educational Institutions of repute have always been venues of mutual interactions for scholars from across the borders. The newness that emerges and ideas facilitated, when bright minds from different cultures meet have had a significant impact on human civilization. The international students and scholars have a unique immersion experience in a different cultural setting and benefit from the exposure to diversity. Though IIT Palakkad is a young Institution that started functioning in 2015, we have already set our goals and strategic approach to pursue partnerships with international institutions which will benefit both the student and faculty communities. We are keen to work with universities, research organizations, and industries that are willing to initiate bilateral partnerships and joint programs which leads to research collaboration and mobility programs. We are committed to strengthening our international linkages and work towards reaching our goals to internationalise the institute.",
        },
        {
          heading: "DEAN'S MESSAGE",
          name_text: "Dr. Anand TNC",
          role: "Associate Professor and Dean Academics",
          image: dean,
          text: "Welcome to the Office of International Relations at IIT Palakkad. This office oversees and coordinates the international activities on campus, like hosting international delegations, students and researchers, initiating international research collaborations and formalising partnerships. We engage with embassies, consulates, and government agencies like the Indian Council for Cultural Relations (ICCR) and Educational Consultants India Limited (EdCIL) to initiate educational and cultural connections and provide opportunities for foreign students to pursue their studies at IIT Palakkad. We are very glad to welcome and host foreign students and faculty at IIT Palakkad. We also explore, collate, create and coordinate opportunities for our own students to travel abroad to partner universities and benefit from the exposure to different academic, research, and cultural environments.",
        },
        {
          heading: "FACULTY ADVISOR'S MESSAGE",
          name_text: "Dr. Dinesh Setti",
          role: "Faculty in charge, International and Alumni-relations",
          image: fa,
          text: "Heartfelt congratulations. This moment of graduation is a result of years of hard work and dedication. You have acquired knowledge and grown as a strong individual with confidence, ready to make a significant impact on the world. Yourjourney at IIT Palakkad has been filled with challenges, successes, and unforgettable memories. Each experience has shaped you into the person you are today. As you step into the next chapter of your lives, remember that you are now part of a global network of alumni who share a common bond with IITs. This network is a powerful resource, and I encourage you to stay connected, support one another, and give back to the community that has nurtured your growth. We are confident you will continue excelling and contributing meaningfully to society. As you pursue your dreams and aspirations, you always have a home here, and we are eager to hear about your achievements, which will make us proud. Congratulations once again, Class of 2024! Go forward with courage, curiosity, and conviction.",
        },
      ]
    
      const contentmap = content.map((item) => (
        <div className="layer">
          <h2 style={{color:'aliceblue'}}>{item.heading}</h2>
          <h3 className="text" style={{color:'aliceblue'}}> {item.text} </h3>
          <hr/>
          <a href={`https://iitpkd.ac.in/${item.link}`} target="_blank" rel="noopener noreferrer">
            <button className="button">{item.buttonLabel}</button>
          </a>
        </div>
      ));
    
      const messagemap = message.map((item) => (
        <div className="aboutusphoto">
          <div>
            <div>
              <img src={item.image} alt="Director" width={300} />
            </div>
            <div className="namerole">
              {item.name_text}
              <br />
              {item.role}
            </div>
          </div>
          <div className="dir_common">
            <div className="decorative-line"></div>
            <div className="home_heading">{item.heading}</div>
            <div className="decorative-line"></div>
            <div className="home_text">{item.text}</div>
          </div>
        </div>
      ));
        
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image6} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image7} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image8} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image9} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image10} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image11} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      <div className="container">
      <div className="video-container">
        
        <div className="about_container">{contentmap}</div>
      </div>

      <div className="marqueescroll">
        <div className="latest">Latest News</div>
        <Marquee play direction="left" className="marquee">
          || Research Admissions 2024. For more details, please login to ▶️
          <Link to = "https://resap.iitpkd.ac.in/" className="admission"> resap.iitpkd.ac.in.</Link> || PG Admission 2024. For more details, please
          login to ▶️ <Link to="https://pgadmit.iitpkd.ac.in/" className="admission" > pgadmit.iitpkd.ac.in.</Link> 
        </Marquee>
      </div>
      
      <div className="aboutus">{messagemap}</div>
    </div>
    </div>
  );
}

export default ImageSlider;
