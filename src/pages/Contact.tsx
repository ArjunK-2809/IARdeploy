// import React from 'react';
import './contact.css'


const ContactPage = () => {
  return (
    <div>
    <div className="contact-page">
      <h1>APPLICATIONS & GENERAL QUERIES</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src="https://ir.iitpkd.ac.in/sites/default/files/inline-images/Dinesh%20Setti%20%281%29-resized.jpg" alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>Dr. Dinesh Setti</h3>
            <p className="title">Assistant Professor</p>
            <p>Mechanical Engineering</p>
            <p>Faculty-in-charge, International and Alumni Relations</p>
            <p className="email">
              <i className="fas fa-envelope"></i> fc_iar@iitkpd.ac.in
            </p>
          </div>
        </div>
        <div className="contact-card">
          <div className="card-image">
            <img src=" https://ir.iitpkd.ac.in/sites/default/files/inline-images/kavitha-photo-resized_0.jpg" alt="Ms. Kavitha G R" />
          </div>
          <div className="card-content">
            <h3>Ms. Kavitha G R</h3>
            <p className="title">Manager, International Relations</p>
            <p className="email">
              <i className="fas fa-envelope"></i> iar@iitkpd.ac.in
            </p>
            <p className="phone">
              <i className="fas fa-phone"></i> +91 9444536574
            </p>
          </div>
          </div>
          
        <div className="contact-card">
          <div className="card-image">
            <img src=" https://ir.iitpkd.ac.in/sites/default/files/inline-images/nibe-resized.jpg" alt="Ms. Nibedita Dey" />
          </div>
          <div className="card-content">
            <h3>Ms. Nibedita Dey</h3>
            <p className="title">Executive, International Relations</p>
            <p>D3 Block, Sahyadri Campus</p>
            <p className="phone">
              <i className="fas fa-phone"></i> +91 4923226533
            </p>
            <p className="mobile">
              <i className="fas fa-mobile-alt"></i> +91 7595911769
            </p>
            <p className="email">
              <i className="fas fa-envelope"></i> ar_office@iitkpd.ac.in
            </p>
          </div>
          </div>
          

      </div>
      </div>
      </div>
  );
};

export default ContactPage;