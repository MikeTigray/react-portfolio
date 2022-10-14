import "./About.css";

import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
export default function About() {
  return (
    <>
      <div className="wavy">
        <span>Hey there</span>
      </div>
      <h4 className="paragraph">
        I am name, an ordinary full stack web developer who is fighting to free
        his people from oppression..
      </h4>
      <h5 className="freetigray">#FreeTigray</h5>

      <div className="tech-container">
        <p className="tech-item">
          <SiMongodb />
        </p>
        <p className="tech-item">
          <SiJavascript />
        </p>
        <p className="tech-item">
          <SiMysql />
        </p>
        <p className="tech-item">
          <FaNodeJs />
        </p>
        <p className="tech-item">
          <SiExpress />
        </p>
        <p className="tech-item">
          <FaReact />
        </p>
        <p className="tech-item">
          <FaCss3Alt />
        </p>
        <p className="tech-item">
          <SiHeroku />
        </p>
        <p className="tech-item">
          <SiHtml5 />
        </p>
      </div>
    </>
  );
}
