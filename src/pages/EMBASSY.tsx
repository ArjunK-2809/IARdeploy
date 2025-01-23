import form from '../files/application_form1.pdf'
import './common.css'

function EMBASSY(){
    return (
        <div className='page'>
        <div className="subpage">
        <h1> EMBASSY </h1>
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
                            <p>International students who want to pursue a full time Masters or PhD program can apply through their respective Embassies for International Relations at IIT Palakkad.  </p>
                             </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> ELIGIBILITY </td>
                        <td style={{textAlign:"left"}}>  
                            <p>2.1    As per IIT Palakkad rules and regulations. </p>
                            <p>2.2 The medium of instruction across all courses would be English. The candidates applying for the courses at IIT Palakkad are supposed to have a functional knowledge of English,
                                 which implies that they should have the ability to read, write, understand and speak the language.</p>
                    </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td> APPLICATION PROCEDURE </td>
                        <td style={{textAlign:"left"}}> 
                            <p>As per your Embassy guidelines. </p>
                            <p><a href={form} target="blank"> Click here for the IITPKD application form </a></p>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>FUNDING DETAILS </td>
                        <td style={{textAlign:"left"}}> 
                            <p> As per your Embassy guidelines. </p>
                         </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>APPLICATION DEADLINE</td>
                        <td style={{textAlign:"left"}}> 
                            <p>As per your Embassy guidelines. </p>
                            </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td> FAQ'S</td>
                        <td style={{textAlign:"left"}}> 
                            <p>6.1 Will I get an additional scholarship from IIT Palakkad apart from what I receive from my Embassy? </p>
                            <p>- No additional scholarships will be given to Embassy sponsored students. </p>
                            <p>6.2 What if a certain program is not sponsored by the Embassy?</p>
                            <p>- In case the student is not sponsored by the Embassy, deserving students can apply directly to IIT Palakkad.</p>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        </div>
        </div>

    )
}
export default EMBASSY