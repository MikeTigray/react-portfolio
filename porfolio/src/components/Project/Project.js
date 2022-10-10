import "./Project.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import pourLoser from "../../images/pour-loser.png";
import weatherDashboard from "../../images/weather-dashboard.png";
export default function Project() {
  return (
    <div className="project">
      <Carousel className="">
        <Carousel.Item>
          <div className="picture-container">
            <img
              className="d-block w-100"
              src={weatherDashboard}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="project-title">Weather Dashboard</h3>
            <p className="project-title ">
              An application that shows and forecasts weather of cities
              globally.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="picture-container">
            <img className="d-block w-100" src={pourLoser} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3 className="project-title">Weather Dashboard</h3>
            <p className="project-title ">
              An application that shows and forecasts weather of cities
              globally.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
