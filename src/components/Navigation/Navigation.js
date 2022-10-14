import "./Navigation.css";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="col container">
      <ul className="row">
        <li className="col list ">
          {" "}
          <Link to="/Home" className="anchor">
            About Me()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link className="anchor" to="/project">
            Portfolio()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link className="anchor" to="/contact">
            Contact Me()
          </Link>
        </li>
        <li className="col list">
          {" "}
          <Link className="anchor" to="google.com">
            Resume()
          </Link>
        </li>
      </ul>
    </nav>
  );
}
