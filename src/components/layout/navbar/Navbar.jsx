import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import logo from "../../../assets/WhatsApp Image 2024-10-06 at 15.30.02_preview_rev_1.png";
export const Navbar = () => {
  return (
    <div className="nav">
      <div className="cont-logo">
        <img src={logo} alt="logowuju" />
      </div>
      <div>
        <ul className="list">
          <li>Postres dulces</li>
          <li>Comida Salada</li>
          <li>Como Contactarnos</li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};
