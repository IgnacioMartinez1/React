import { Link } from "react-router";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import logo from "../../../assets/WhatsApp Image 2024-10-06 at 15.30.02_preview_rev_1.png";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="cont-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="list">
          <li>
            <Link className="links" to="/category/Indie">
              Indies
            </Link>
          </li>
          <li>
            <Link className="links" to="/category/AAA">
              AAA
            </Link>
          </li>
          <li>
            <Link className="links" to="/contacto">
              Como Contactarnos
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};
