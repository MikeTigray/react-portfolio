import "./Project.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import pourLoser from "../../images/pour-loser.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import workDayScheduler from "../../images/work-day-scheduler.png";
import connectKid from "../../images/connectKid.png";
import employeeTracker from "../../images/employee-tracker-sql.png";
import social from "../../images/social.png";
const projects = [
  {
    image: connectKid,
    title: "Connect Kid",
    alt: "Fourth project",
    link: "https://github.com/MikeTigray/ConnectKid",
    description:
      "An application that single parents can utilize in order to connect with other parents' and children within their community",
  },

  {
    image: pourLoser,
    title: "Pour Loser",
    alt: "First project",
    link: "https://github.com/TateFoster/pour-loser-game",
    description:
      "A node based app that allows companies to track employees. Uses a SQL database and perform all CRUD operations.",
  },
  {
    image: employeeTracker,
    title: "Employee Tracker",
    alt: "Fifth project",
    link: "https://github.com/MikeTigray/employee_tracker_app",
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
  {
    image: social,
    title: "Social networking app",
    alt: "Sixth project",
    link: "https://github.com/MikeTigray/social-networking-app-api",
    description:
      "A REST-full API that allows friends to share thoughts & reactions.",
  },
];
export default function Project() {
  return (
    <div className="project">
      <Carousel className="carousel">
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
                  🖇 {project.title}
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
