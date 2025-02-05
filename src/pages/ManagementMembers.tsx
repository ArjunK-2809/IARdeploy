import "./ManagementMembers.css"

import Harshitha from "../assets/club/Harshitha.jpg"
import Keerthana from "../assets/club/keerthana.jpg"
import Liya from "../assets/club/Liya.jpg"
import Vikranth from "../assets/club/Vikranth.jpg"


const ManagementMembers = () => {
  return (
    <div>
    
    <div className="contact-page">
    <h1>Management Team</h1>
    <div className="contact-cards">
      <div className="contact-card">
        <div className="card-image">
          <img src={Harshitha} alt="" />
        </div>
        <div className="card-content">
          <h3>Harshitha</h3>
          
        </div>
        </div>
        <div className="contact-card">
        <div className="card-image">
          <img src={Keerthana} alt="" />
        </div>
        <div className="card-content">
          <h3>Keerthana</h3>
       
        </div>
        </div> 
        
      </div>
    
    </div>
    
    <div className="contact-page">
    <div className="contact-cards">
      <div className="contact-card">
        <div className="card-image">
          <img src={Liya} alt="" />
        </div>
        <div className="card-content">
          <h3>Liya</h3>
          
        </div>
        </div>
        <div className="contact-card">
        <div className="card-image">
          <img src={Vikranth} alt="" />
        </div>
        <div className="card-content">
          <h3>Vikranth</h3>
       
        </div>
        </div> 
        
      </div>
    
    </div>
    
    
    </div>
  )
}

export default ManagementMembers