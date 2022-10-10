import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="col container">
      <ul className="row">
        <li className="col list">
          {" "}
          <a className="anchor" href="google.com">
            About Me()
          </a>
        </li>
        <li className="col list">
          {" "}
          <a className="anchor" href="google.com">
            Portfolio()
          </a>
        </li>
        <li className="col list">
          {" "}
          <a className="anchor" href="google.com">
            Contact Me()
          </a>
        </li>
        <li className="col list">
          {" "}
          <a className="anchor" href="google.com">
            Resume()
          </a>
        </li>
      </ul>
    </nav>
  );
}
