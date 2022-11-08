import "./Resume.css";
import pdf from "../../images/Micheale_Abay_Resume.pdf";
export default function Resume() {
  return (
    <div>
      <div className="list ">
        <div>
          {" "}
          <ul className="item">
            <h3>Skillset</h3>
            <li>Javascript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>NoSql-MySQL</li>
            <li>Sql-MongoDB</li>
            <li>GraphQl</li>
            <li>Heroku</li>
          </ul>
        </div>

        <ul className="item">
          <h3>Projects</h3>
          <li>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeTigray/ConnectKid"
            >
              Connect Kid
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TateFoster/pour-loser-game"
            >
              Pour Loser
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeTigray/employee_tracker_app"
            >
              Employee Tracker
            </a>{" "}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeTigray/weather-dashboard"
            >
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
