import "./Project.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import pourLoser from "../../images/pour-loser.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import workDayScheduler from "../../images/work-day-scheduler.png";

const projects = [
  {
    image: pourLoser,
    title: "Pour Loser",
    alt: "First project",
    link: "https://github.com/TateFoster/pour-loser-game",
    description:
      "A web trivia game based on old jeopardy questions. You're presented with a random cocktail recipe if you lose 😉.",
  },
  {
    image: weatherDashboard,
    title: "Weather Dashboard",
    alt: "Second project",
    link: "https://github.com/MikeTigray/weather-dashboard",
    description:
      "An application to provide users with instant weather data on any city around the globe.",
  },
  {
    image: workDayScheduler,
    title: "Work Day Scheduler",
    alt: "Third project",
    link: "https://github.com/MikeTigray/work-day-scheduler",
    description: "A Javascript scheduler application to plan out your day.",
  },
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
                <a href={project.link} className="project-title">
                  👉🏼 {project.title}
                </a>
                <p className="project-description ">{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
