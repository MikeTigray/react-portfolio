import "./Header.css";
import NavigationBar from "../Navigation/Navigation";
export default function Header() {
  return (
    <div className="container-header">
      <div className="row">
        <h2 className="col">Micheale Abay</h2>
        <NavigationBar />
      </div>
    </div>
  );
}
