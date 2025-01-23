import './common.css'
import './Visa.css'
function VISAprovision(){
    return (
        <div className='page'>
        <div className="subpage">
        <hr></hr>
        <h1 > VISA PROVISION </h1>
        <hr></hr>

        <table className="visa-table">
        <thead>
            <tr>
                <th>SL. NO.</th>
                <th>TYPE OF VISA</th>
                <th>PERIOD FOR WHICH GRANTED</th>
                <th>ENTRY SINGLE (S) MULTIPLE (M) DOUBLE (D)</th>
                <th>DOCUMENTS REQUIRED WITH APPLICATION</th>
                <th>EXTENDABLE WHILE IN INDIA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Business Visa</td>
                <td>5 years</td>
                <td>M</td>
                <td>Documents to prove bonafide purpose (Company letter etc.)</td>
                <td>YES</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Employment Visa</td>
                <td>1 year/ period of contract</td>
                <td>M</td>
                <td>Proof of employment (appointment document), terms and conditions</td>
                <td>YES</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Student Visa/ Research Visa</td>
                <td>Period of course/ 5 years</td>
                <td>M</td>
                <td>Proof of admission in Indian Institution</td>
                <td>YES</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Intern</td>
                <td>Duration of the Internship or One year, whichever is less</td>
                <td>S/D/M</td>
                <td>Letter from the Indian company/educational institution/NGO concerned sponsoring the foreign national for the internship programme clearly indicating the period of internship.</td>
                <td>Non-extendable</td>
            </tr>
        </tbody>
    </table>
    <br></br>
        </div>
        </div>
    )
}
export default  VISAprovision