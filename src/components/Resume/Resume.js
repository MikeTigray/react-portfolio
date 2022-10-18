import "./Resume.css";
import pdf from "../../images/resume.pdf";
export default function Resume() {
  return (
    <div>
      <div className="list ">
        <div>
          {" "}
          <ul className="item">
            Skills:
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>NoSql</li>
            <li>Sql</li>
            <li>GraphQl</li>
            <li>Heroku</li>
          </ul>
        </div>

        <div className="item"></div>
        <ul className="item">
          Projects:
          <li>
            {" "}
            <a href="https://github.com/MikeTigray/ConnectKid">
              Connect Kid
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://github.com/TateFoster/pour-loser-game">
              Pour Loser
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://github.com/MikeTigray/employee_tracker_app">
              Employee Tracker
            </a>{" "}
          </li>
          <li>
            <a href="https://github.com/MikeTigray/weather-dashboard">
              Weather Dashboard
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="container">
        <h6 className="download">
          <a href={pdf} download="resume">
            Download Resume
          </a>
        </h6>
      </div>
    </div>
  );
}
