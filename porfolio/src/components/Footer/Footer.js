import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <p>
          <FaGithubSquare />
        </p>
        <p>
          <FaTwitter />
        </p>
        <p>
          <FaLinkedin />
        </p>
      </div>
    </div>
  );
}
