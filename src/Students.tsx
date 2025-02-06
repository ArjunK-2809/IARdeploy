// Import images
import image13 from './assets/slide13.jpg';
import image14 from './assets/slide14.jpg';
import image15 from './assets/slide15.jpg';
import image12 from './assets/slide12.jpg';
import image16 from './assets/slide16.jpg';
import image17 from './assets/slide17.jpg';
import './Students.css'; // Import scoped CSS file

function Students() {

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
    </div>
  );
}

export default Students;