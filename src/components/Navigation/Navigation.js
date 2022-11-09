import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  let location = useLocation().pathname;

  return (
    <nav className="col container">
      <ul className="row">
        <li className="col list ">
          {" "}
          <Link
            id="home"
            to="/Home"
            className={location === "/Home" ? "target" : "anchor"}
          >
            aboutMe()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link
            id="project"
            className={location === "/project" ? "target" : "anchor"}
            to="/project"
          >
            portfolio()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link
            id="contact"
            className={location === "/contact" ? "target" : "anchor"}
            to="/contact"
          >
            contactMe()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link
            id="resume"
            className={location === "/resume" ? "target" : "anchor"}
            to="/resume"
          >
            resume()
          </Link>
        </li>
      </ul>
    </nav>
  );
}
