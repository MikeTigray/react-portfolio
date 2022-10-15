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
          </ul>
        </div>

        <div className="item">Projects</div>
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
