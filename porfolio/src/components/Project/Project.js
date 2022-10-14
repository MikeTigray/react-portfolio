import "./Project.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import pourLoser from "../../images/pour-loser.png";
import weatherDashboard from "../../images/weather-dashboard.png";
const projects = [
  { image: pourLoser, title: "Pour Loser", alt: "First slide" },
  { image: weatherDashboard, title: "Weather Dashboard", alt: "Second slide" },
];
export default function Project() {
  return (
    <div className="project">
      <Carousel className="">
        {projects.map((project) => {
          return (
            <Carousel.Item>
              <div className="picture-container">
                <img
                  className="d-block w-100"
                  src={project.image}
                  alt={project.alt}
                />
              </div>
              <Carousel.Caption>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-title ">
                  An application that shows and forecasts weather of cities
                  globally.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
