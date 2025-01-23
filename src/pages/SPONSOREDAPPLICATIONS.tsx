import './common.css'
import './sponsoredapplications.css'
import form from '../files/application_form1.pdf'
import MTech from '../files/Fee Structure for MTech Aug-Dec 2024 Semester (1).pdf'
import MSc from '../files/Fee Structure for MSc Aug-Dec 2024 Semester (1).pdf'
import MS from '../files/MS_Fees_2024-25.pdf'
import PhD from '../files/PhD_Fees_2024-25.pdf'

function SAMPP(){
    return (
        <div className='page'>
        <div className="subpage">
            <h1>Sponsored Applications for Masters and PhD programs</h1>
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
                        <td> 
                            <p> International students who want to pursue a full time 
                                Masters or PhD program can go through <a href="https://iitpkd.ac.in" target="blank">IIT Palakkad departments</a> and <a href="https://iitpkd.ac.in/programs" target="blank">programs</a> offered and apply 
                                through Office of International Relations </p>
                             </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> ELIGIBILITY </td>
                        <td style={{textAlign:"left"}}>  <p> For Masters by Technology (MTech): Bachelor’s degree in relevant area </p>
                    <p> For Masters by Science (MSc): Bachelor’s degree in relevant area </p>
                    <p> For Masters by Research (MS): Bachelor’s degree in relevant area</p>
                    <p> For Doctoral program (PhD): Master’s degree in relevant area</p>

                    <p> The medium of instruction across all courses would be English. </p>

                    <p> <b>M.Sc_M.Tech:</b> Foreign nationals who got a Bachelor’s degree in Engineering /Technology and a valid GRE score are eligible to apply. Foreign nationals with degrees from Indian universities will be treated on par with Indian nationals for admission purposes. 
                    Please go through <a href="https://drive.google.com/file/d/1Zn5_Zsl8ohZGGvOml4i8JG33Mr9eP0hi/view" target="blank">M.Tech</a>/<a href="https://drive.google.com/file/d/1h-WKuvzq-UQ1r9ZxvOhHH0yiSDS4DMHi/view" target="blank">M.Sc_</a>Regulations for more information.The candidates applying for the courses at IIT Palakkad are supposed to have a functional knowledge of English, which implies that they should have the ability to read, write, understand, and speak the 
                    language and have good academic credentials. However, the selection will be done based on the performance on the interview.</p>

                    <p> <b>MS_PhD: Foreign</b> nationals can only register as full-time scholars. Foreign nationals with degrees from Indian universities will be treated on par with Indian nationals for admission purposes. Please go through <a href="https://drive.google.com/file/d/1UPcOp3fZg85uSe3so90xcYJXnt-Sjo2y/view" target="blank">MS_PhD Regulations</a> for more information. 
                    Foreign nationals with foreign degrees must meet the minimum educational requirements as given in <a href="https://drive.google.com/file/d/1UPcOp3fZg85uSe3so90xcYJXnt-Sjo2y/view" target="blank">MS_PhD Regulations</a>(R.2 Section). The candidates applying for the courses at IIT Palakkad are supposed to have a functional knowledge of English, which implies that 
                    they should have the ability to read, write, understand, and speak the language and have good academic credentials. However, the selection will be done based on the performance on the interview.</p>

                    <p> Candidates may apply with funding from external agencies or industries under the sponsored application category. A student in this category has to be sponsored by a recognized R&D organization, academic institution, or industry to do research in the Institute on a full-time basis. Candidates having funding support from an external agency, government or industry only can apply in this category. </p> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td> DOCUMENTS REQUIRED </td>
                        <td style={{textAlign:"left"}}> <ul><li>UG/PG Grade cards</li>
                                <li>Degree Certificate</li>
                                <li>Statement of Purpose</li>
                                <li>Two Recommendation Letters</li>
                                <li>GRE Score  & TOEFL/IELTS Score (For Foreign nationals with Foreign University degrees)</li>
                                <li>Valid GATE Score (For Foreign nationals with degrees from Indian Universities)</li>
                                <li>Passport copy</li>
                                </ul>
 </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>APPLICATION PROCEDURE </td>
                        <td style={{textAlign:"left"}}> <p>4.1 Interested students can download the application form, fill in the details, and submit the application to the International Relations office along with the required documents.</p>

                        <p>4.2 Shortlisted candidates will be called for an interview by the respective department.</p>

                        <p>4.3 Admission into the program is subject to the recommendations by the selection committee’s own selection process.</p>
                        <p> <a href={form}> Click here for the IITPKD application form </a></p>
                         </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td> FUNDING DETAILS </td>
                        <td style={{textAlign:"left"}}> Candidates may apply with funding from external agencies or industries under the Direct application category. A student in this category has to be sponsored by a recognized R&D organization, academic institution, or industry to do research in the Institute on a full-time basis. Candidates having funding support from an external agency, government or industry only can apply in this category.  </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td> APPLICATION DEADLINE </td>
                        <td style={{textAlign:"left"}}> <p>6.1 For Masters:
                            Applications open: 1st March to 31st April (every year)
                            Commencement of the program: Last week of July (every year)</p>
                            <br/>

                            <p>6.2 For PhD:
                            Applications open:
                            1st  Jan to 31st April for July intake (every year)
                            1st  August to 30th   September for January intake (every year)
                            *Dates are subject to change</p> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr/>
        <h1>APPLICATIONS AND GENERAL QUERIES </h1>
        <div className="column">
        <div className="column1">
            <ul className="ul">
            <li>Name: Ms. Nibedita Dey</li>
            <li>Executive, International Relations</li>
            <li>Dr. APJ Abdul Kalam Block,</li>
            <li>First Floor (Right Wing),</li>
            <li>Sahyadri Campus</li>
            <li>E-mail: ir_office@iitpkd.ac.in</li>
            <li>Landline: +91-4912 09 2111/  +91-4923 226 533</li>
            <li>Mob: +91 7595911769</li>
            </ul>
        </div>
        <div className="column2">
            <ul className="ul">
            <li>Name: Ms. Kavitha G R </li>
            <li>Designation: Manager, International Relations</li>
            <li>Email: iar@iitpkd.ac.in</li>
            <li>Contact: +91 9444536574</li>
            </ul>
        </div>
        <div className="column3">
            <ul className="ul">
            <li>Name: Dr. Dinesh Setti</li>
            <li>Assistant Professor</li>
            <li>Mechanical Engineering</li>
            <li>Faculty-in-charge, International and Alumni Relations</li>
            <li>Email: fc_iar@iitpkd.ac.in</li>
            </ul>
        </div>
        </div>
        <hr/>
        <div className="links">
            <h3> FEE STRUCTURES </h3>
            <ul>
                <li><a href={MTech}>Fee Structure for MTech Aug-Dec Semester 2024-25</a></li>
                <li><a href={MSc}>Fee Structure for MSc Aug-Dec Semester 2024-25</a></li>
                <li><a href={MS}>Fee Structure for MS Aug-Dec Semester 2024-25</a></li>
                <li><a href={PhD}>Fee Structure for PhD Aug-Dec Semester 2024-25</a></li>
                
            </ul>
        </div>
        </div>
        </div>
    )
}
export default SAMPP