import Carousel from 'react-bootstrap/Carousel';
import image12 from './assets/slide12.jpg';
import image13 from './assets/slide13.jpg';
import image14 from './assets/slide14.jpg';
import image15 from './assets/slide15.jpg';
import './Students.css'; // Import scoped CSS file

function Students() {
  return (
    <div className="students-carousel"> {/* Unique class for scoping */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image12} alt="First slide" />
          <Carousel.Caption>
            <h5>Etana</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image13} alt="Second slide" />
          <Carousel.Caption>
            <h5>Tatenda</h5>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image14} alt="Third slide" />
          <Carousel.Caption>
            <h5>Ropa</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image15} alt="Fourth slide" />
          <Carousel.Caption>
            <h5>Sameul</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Students;
