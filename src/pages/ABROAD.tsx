import './common.css';
import './ABROAD.css';  

function OpportunitiesPage() {
  return (
    <div className="page">
      <div className="subpage content-wrapper">
        <h1>Opportunities Abroad for students</h1>
        
        <div className="breadcrumb">
          <a href="/">Home</a> /
        </div>

        <h2>Exchange Program/Internships - Information and Deadlines</h2>
        
        <table className="opportunities-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>University Name</th>
              <th>Duration</th>
              <th>Nomination Deadline</th>
              <th>Application Deadline</th>
              <th>No. Of Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Poland 🇵🇱</td>
              <td className="university-name"><a href="https://eng.pw.edu.pl/"  className="university-link">Warsaw University of Technology, Poland</a></td>
              <td>6 months (Full-time) / can be extended further based on performance</td>
              <td>5th September 2024</td>
              <td>5th September 2024</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Japan 🇯🇵</td>
              <td className="university-name"><a href="https://www.shibaura-it.ac.jp/en/study/exchange_programs/sandwich.html"  className="university-link">The Shibaura Institute of Technology, Japan</a></td>
              <td>April 2024-July 2024</td>
              <td>20th September 2023</td>
              <td>30th September 2023</td>
              <td>2</td>
            </tr>
            <tr>
              <td>USA 🇺🇸</td>
              <td>The Ohio State University</td>
              <td>May 2024-July 2024</td>
              <td>1st October 2023</td>
              <td>5th October 2023</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Taiwan 🇹🇼</td>
              <td>Chung Gung University</td>
              <td>Sept 2022- June 2023</td>
              <td>July 18th, 2022</td>
              <td>July 29th, 2022</td>
              <td>5</td>
            </tr>
            <tr>
              <td>USA 🇺🇸</td>
              <td>RIYA, Ohio State University - RIYA scholarship applications from 3rd Year Mech. Engineering Students</td>
              <td>4 January 2023 to 4 June 2023</td>
              <td>Sept 26th 2022</td>
              <td>Oct 5th, 2022</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Singapore 🇸🇬</td>
              <td>
                <a href="https://www.ntu.edu.sg/about-us/global/india-connect-ntu" className="university-link">
                  NTU - India Connect NTU
                </a>
              </td>
              <td>4 Jan 2023 – 4 June 2023</td>
              <td>Sept 26th 2022</td>
              <td>Sept 30th, 2022</td>
              <td>5</td>
            </tr>
            <tr>
              <td>France 🇫🇷</td>
              <td>
                <a href="https://www.inde.campusfrance.org/charpak-lab-scholarship" className="university-link">
                  Charpak Lab Scholarship
                </a>
              </td>
              <td>May 2023- July 2023</td>
              <td>1st February 2023</td>
              <td>Monday, 13 February 2023</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Germany 🇩🇪</td>
              <td>
                <a href="https://www.daad.de/en/study-and-research-in-germany/scholarships/" className="university-link">
                  DAAD Scholarship
                </a>
              </td>
              <td>September -March 2023</td>
              <td>5th April 2023</td>
              <td>10th April 2023</td>
              <td>-</td><br/>
            </tr>
            <br/><br/>
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default OpportunitiesPage;