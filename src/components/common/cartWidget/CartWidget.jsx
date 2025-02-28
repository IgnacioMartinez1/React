import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <FaCartShopping className="cart-icon" />
        {total > 0 && <div className="cart-count">{total}</div>}
      </Link>
    </div>
  );
};
