import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navigation() {
  let location = useLocation().pathname;
  const [main, setMain] = useState(false);

  const handleClick = () => {};
  return (
    <nav className="col container">
      <ul className="row">
        <li className="col list ">
          {" "}
          <Link
            id="home"
            onClick={handleClick}
            to="/Home"
            className={location === "/Home" ? "target" : "anchor"}
          >
            About Me()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link
            id="project"
            onClick={handleClick}
            className={location === "/project" ? "target" : "anchor"}
            to="/project"
          >
            Portfolio()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link
            id="contact"
            onClick={handleClick}
            className={location === "/contact" ? "target" : "anchor"}
            to="/contact"
          >
            Contact Me()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link
            id="resume"
            onClick={handleClick}
            className={location === "/resume" ? "target" : "anchor"}
            to="/resume"
          >
            Resume()
          </Link>
        </li>
      </ul>
    </nav>
  );
}
