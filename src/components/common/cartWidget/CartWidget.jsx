import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./cartWidget.css";
export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <FaShoppingCart />
      </Link>
    </div>
  );
};
