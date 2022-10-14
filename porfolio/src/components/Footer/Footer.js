import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <a className="anchors" href="https://github.com/MikeTigray">
          <FaGithubSquare />
        </a>
        <a className="anchors" href="https://twitter.com/MikeFromTigray">
          <FaTwitter />
        </a>
        <a className="anchors" href="https://linkedin.com/in/mikeabay23">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
