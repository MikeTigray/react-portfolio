import "./Project.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import quiz from "../../images/quiz-project.png";
export default function Project() {
  return (
    <div>
      <Carousel className="project">
        <Carousel.Item>
          <img className="d-block w-100" src={quiz} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
