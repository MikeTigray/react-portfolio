import "./Resume.css";
import pdf from "../../images/Micheale_Abay_Resume.pdf";
export default function Resume() {
  return (
    <div>
      <div className="resume-list ">
        <div>
          {" "}
          <ul className="item">
            <h3>Skillset</h3>
            <li>Javascript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>REST API</li>
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
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeTigray/Readme-file-generator"
            >
              ReadMe file generator
            </a>{" "}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeTigray/social-networking-app-api"
            >
              Social networking app
            </a>{" "}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeTigray/random-password-generator"
            >
              Random password generator
            </a>{" "}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeTigray/team-profile-generator"
            >
              Team profiles generator
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
