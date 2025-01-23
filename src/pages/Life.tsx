import './common.css'
import acad from '../assets/Priority1_Saraswati Block-1.jpg';
import nila from '../assets/image.png';
import h1 from '../assets/HostelSahyadri_0.jpg'
import h2 from '../assets/HostelSahyadri2.jpg'
import hostelRules from '../files/iitpkd-hostel-rules-2018.pdf'

function Life(){
    return (
    <div className='page'>
        <div className="subpage">
            <h1> Life at IIT PALAKKAD </h1><hr/>
            <h3> About Palakkad and Kerala </h3><hr/>
            <p>Palakkad in Kerala, where we are located, is known for its rich traditions, great historical events, and personalities connected with it, and its sylvan surroundings, especially the Silent Valley rain forests and the famed palmyra trees.
        Palakkad is known as the rice bowl of Kerala. Celebrated as a major granary of Kerala, Palakkad is the gateway to the state from the North in the form of the nearly 40-kilometre break in the Western Ghats, called the Palakkad Gap. Palakkad is located on the northern bank of the Bharathappuzha River
        The Kerala state is flanked by the Arabian Sea in the west and the towering Western Ghats in the East and networked by 44 interconnected rivers, Kerala is blessed with a unique set of geographical features that have made it one of the most sought after tourist destinations in Asia. </p>
            <hr/><h3>About Campus</h3><hr/>

        <p>We currently function from two campuses: Sahayadri Campus and Nila Campus, located adjacent to each other.  The permanent campus of IIT Palakkad is swiftly being developed on a picturesque 500-acre plot at the foot of the Western Ghats. It is situated 14.1 kilometers from the 
            Palakkad Railway Junction and approximately 60 kilometers from the Coimbatore International Airport.</p>
            <div className="centered-img" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <img className="image" src={acad} alt='Academic Block, Sahyadri Campus' width="1450" height="545" />
            </div>
                <h2 > Academic Block, Sahyadri Campus </h2>
            <div className="centered-img" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <img className="image" src={nila} alt='Nila Campus' width="1050" height="545" />
            </div>
                <h2 > Nila Campus</h2>

                <hr/><h3> Hostel life </h3><hr/>
            <p>Our fully residential campus offers dedicated hostels for both girls and boys, creating a secure, comfortable, vibrant, and exceptional living experience. In total, the campus houses six hostels: four in the tranquil Nila Campus and two in the serene Sahyadri Campus. Students are provided with double/triple sharing accommodation in Nila Campus, while rooms at Sahyadri Campus are either single or triple occupancy rooms.
            Our hostels are equipped with well-appointed rooms, water heaters, RO-based drinking water systems, heavy-duty washing machines, and both WiFi and LAN network connections, ensuring convenience and connectivity. Additionally, a spacious dining hall, a well-equipped recreational area, an indoor games area, and a fitness center are readily available for leisure and physical activities. Each room is equipped with either WiFi or LAN connectivity, offering seamless online access. Additionally, common rooms in every hostel provide a space for relaxation, equipped with a television, newspapers, and a selection of magazines chosen by the student body.
            </p>

            <div className="centered-img" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <img className="image" src={h1} alt='Hostel' width="1050" height="545" />
            </div>
            <br/>
            <div className="centered-img" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <img className="image" src={h2} alt='Hostel' width="1050" height="545" />
            </div>
            <p>To promote students' overall well-being, amenities such as an in-house facility for football, volleyball, basketball, and table tennis are provided. Professional coaches are on hand to guide students in athletics, football, volleyball, and cricket. Badminton enthusiasts can pursue their interests at the 4GB Badminton Academy in Palakkad. To accommodate visitors, guest rooms are available for Institute faculty, staff, and students' families, ensuring a warm welcome.
            </p>
            <h2 style={{textAlign:"center",textDecoration:'None'}}><a href={hostelRules} target='blank'><i className ="fas fa-arrow-right"></i> Hostel Rules</a> </h2>
        </div>
    </div>  

    )
}
export default Life