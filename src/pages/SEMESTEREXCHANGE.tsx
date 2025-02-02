import './common.css'
import './table.css' 
import './SEMESTEREXCHANGE.css'
import YouTube from 'react-youtube';

function SEMESTEREXCHANGE() {
    const opts = {
        height: '500',
        width: '900',
        playerVars: {
          autoplay: 0,
        },
      };

    return (
        <div className='page'>
            <div className="subpage">
                <h1>Semester Exchange</h1>
                

            <div className="ytvideo">
                <div className="ytvideo-card">
                    <div className="video-thumbnail">
                        <YouTube videoId="2edpSKJbuao" opts={opts} />
                    </div>
                    <div className="video-info">
                        <h4 className="video-title">Student Exchange Program </h4>
                        <p className="video-stats"> Q & A SESSION </p>
                    </div>
                </div>
            </div>

                <div className="table-container">
                    <table className="info-table">
                        <thead>
                            <tr>
                                <th>SI. NO.</th>
                                <th>CATEGORY</th>
                                <th>CONTENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>ABOUT THE PROGRAM</td>
                                <td>
                                    <p>Foreign nationals registered for a degree in a recognized Institute/University who are officially sponsored by that Institute/University to carry out Course work at IITPKD for a period not exceeding two semesters (1 year) can be accepted as exchange students under the MoU or non-MOU category.</p>
                                    <p>The admission of foreign nationals under the MoU will be made in accordance with the terms and conditions spelt out in the MoU agreed to between IITPKD and the partner University/Institution concerned. Students are required to bear costs related to living expenses, boarding, lodging and travel. Accommodation is provided in hostels on payment basis (approx. Rs.27,000/- per semester). Students arriving under the MoU will not be charged tuition fees.</p>
                                    <p>For the admission of foreign nationals under the non-MOU category, students are requested to pay the corresponding tuition fee per semester as per the rules and regulations of IITPKD.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>ELIGIBILITY</td>
                                <td>
                                    <p>2.1 The student must be registered for a UG/PG program in a recognized foreign Institute/University.</p>
                                    <p>2.2 The student should be nominated/recommended by the recognized university for the course work, for both the MOU and non-MOU category.</p>
                                    <p>2.3 Students are expected to have a good knowledge of English.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>APPLICATION PROCEDURE</td>
                                <td>
                                    <p>3.1 Students are requested to fill in the Application form and email the necessary documents.</p>
                                    <p>3.2 Documents to be submitted</p>
                                    <ul>
                                        <li>3.2.1 Photo (less than 50 kb)</li>
                                        <li>3.2.2 Official Passport with a minimum validity of 6 months</li>
                                        <li>3.2.3 Curriculum vitae</li>
                                        <li>3.2.4 University transcripts</li>
                                        <li>3.2.5 Nomination letter from the home institute mentioning the department the student would like to apply to.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>APPLICATION DEADLINE</td>
                                <td>
                                    <p>4.1 Fall Semester (July – November): 15th May (every year)</p>
                                    <p>4.2 Spring Semester (January – April): 15th November (every year)</p>
                                </td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>FAQ'S</td>
                                <td>
                                    <p><strong>5.1 What type of visa should I apply for?</strong><br />
                                    All students opting for course work should apply for only STUDENT visa.</p>
                                    
                                    <p><strong>5.2 Can I do my course work exchange in my first year of UG/PG?</strong><br />
                                    Foreign students (UG) who want to apply for course work exchange are expected to have completed at least 3-4 semesters at their home institution. PG students are expected to have completed at least one semester at their home institution.</p>
                                    
                                    <p><strong>5.3 Can I take courses across different departments?</strong><br />
                                    Yes, students can register for courses from other departments as well.</p>
                                    
                                    <p><strong>5.4 Is there a minimum attendance requirement for exchange students?</strong><br />
                                    Yes, students are requested to have a minimum of 85% attendance</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>             
                <h2>APPLICATIONS & GENERAL QUERIES</h2>
                <p>Name : Ms Nibedita Dey<br/>
                    Executive, International Relations<br/>
                    D3 Block, Sahyadri Campus<br/>
                    E-mail: ir_office@iitpkd.ac.in, inbound@iitpkd.ac.in<br/>
                    Landline: +91 4923226533, +91-4912 09 2111<br/>
                    Mob: +91 7595911769<br/><br/>

                    Name: Ms. Kavitha G R <br/>
                    Designation: Manager, International Relations<br/>
                    Email: iar@iitpkd.ac.in<br/>
                    Contact: +91 9444536574</p><br/>
            </div>
            
        </div>
    )
}

export default SEMESTEREXCHANGE